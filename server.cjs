const express = require("express");
const { join } = require("path");
const cors  = require("cors");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
// const {
//   userJoin,
//   getCurrentUser,
//   leaveChat,
//   getRoomUsers,
// } = require("./utils/user");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    method: "*",
  }
});

const chat = io.of("/chat");
const video = io.of("/video");
const post = io.of('/post');


app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("./"));

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("call", { roomId: req.params.room });
});

app.get("/reject/", (req, res) => {
  res.render("reject", {});
});

video.on("connection", (socket) => {
  socket.on("join-room", async (roomId, userId, username) => {
    const room = await io.sockets.adapter.rooms.get(roomId);

    // Check if the room already has two users
    if (room && room.size >= 2) {
      socket.emit("roomFull", "This room is already full.");
      return;
    }

    // Join the room
    socket.join(roomId);

    // Notify other users in the room about the new connection
    socket.broadcast.to(roomId).emit("user-connected", userId, username);

    // Handle disconnection
    socket.on("disconnect", () => {
      socket.leave(roomId);
      socket.broadcast.to(roomId).emit("user-disconnected", userId);
    });
  });
});

chat.on("connection", (socket) => {
  socket.on("joinChat", (roomId, userInfo) => {
    const room = io.sockets.adapter.rooms.get(roomId);

    // Check if the room already has two users
    if (room && room.size >= 2) {
      socket.emit("roomFull", "This chat room is already full.");
      return;
    }

    // Join the room
    socket.join(roomId);
    chat.to(roomId).emit("userJoined", userInfo);

    socket.on("sendMessage", async (roomId, message) => {
      chat.to(roomId).emit("receiveMessage", message);
      const [userId1, userId2] = roomId.split("-");

      try {
        await fetch("https://serene-lbyk.onrender.com/api/v1/chat/store", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderId: userInfo.id, // Assuming userInfo contains the senderId
            receiverId: userId2, // This assumes the second user in the roomId string is the receiver
            message,
            roomId,
          }),
        });
      } catch (error) {
        console.error("Error saving message:", error);
      }
    });

    socket.on("disconnect", () => {
      socket.leave(roomId);
      chat.to(roomId).emit("user-disconnected", userInfo);
    });
  });
});


post.on('connection', (socket) => {
  socket.on('new-post', async ({communityId, userId, message}) => {
    console.log("Socket is connected!")
      try {
          const resp = await fetch('https://serene-lbyk.onrender.com/api/v1/community/message', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  communityId, userId, message
              }),
          });

          if (resp.ok) {
            const data = await resp.json();
            post.emit('receive-post', data.data);
            post.broadcast.emit('receive-post', data.data);
          } else {
            socket.emit('error', 'Failed to save the post'); 
          }
        } catch (error) {
          console.error('Error saving message:', error);
          socket.emit('error', 'Error saving the post'); 
        }
  });

  socket.on('disconnect', () => {
      console.log('user disconnected');
  });
});


server.listen(3000, () => {
  console.log("Server running on port 3000");
});
