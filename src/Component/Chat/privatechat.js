// Import the chat from the server
const socket = io('/chat');

// Getting all the 
const chatForm = document.getElementById('chatForm');
const chatSpace = document.getElementById('chat-space');
const otherUser = document.getElementById('other-user');
const profpic = document.getElementById('prof-pic');
const profileSection = document.getElementById('profile-section');
let activeSection = document.querySelector('active');
const callIcon = document.getElementById('call-icon');

// I used this to help run a test code please ignore it
const logoutButton = document.getElementById('logout');

// Get User info stored in the local storage
const storedUserData = JSON.parse(localStorage.getItem('userData'));
let userInfo;
let type;
let userId;
let username;
let authToken = null;
let roomId = null;
let avatar;

// This function gets the current time in a format and 
function getCurrentTime() {
    return new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}

// This gets the data stored in the localstorage and assigns them to a variable that will be used!
if (storedUserData) {
    authToken = storedUserData.authToken;
    username = storedUserData.username;
    type = storedUserData.type;
    userId = storedUserData.userId;

    userInfo = {
        id: userId,
        username
    };
}

// Handle incoming messages
socket.on('receiveMessage', (message, time, avatar) => {
    const formattedTime = extractTime(time);
    addRecipientMessage(message, formattedTime, username, avatar);
});

// Handle user joining notification
socket.on('userJoined', (userInfo) => {
    toggleStatus(true);
});

// Handle message delivery notification -please ignore this code
socket.on('messageDelivered', (messageId) => {
    updateMessageStatus(messageId, 'delivered');
});

// Handle message read notification - also ignore this code
socket.on('messageRead', (messageId) => {
    updateMessageStatus(messageId, 'read');
});


// This handles when a user disconnect/goes offline
socket.on('user-disconnected', () => {
    toggleStatus(false);
});

// This form is the form for the chat message
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = e.target.elements.msg.value;

    if (message !== '') {
        const messageId = generateMessageId();
        socket.emit('sendMessage', roomId, message, messageId);
        const time = getCurrentTime();

        addMessage(message, messageId, time);
        e.target.elements.msg.value = '';
    }
});

// Function to update the status of a message - you can ignore this
/*function updateMessageStatus(messageId, status) {
    const messageElement = document.getElementById(messageId);
    if(status === 'delivered'){
        messageElement.src = "../images/svgs/singletick.svg"
    }else{
        messageElement.src = "../images/svgs/doubletick.svg"   
    }
    
}*/

// Function to generate a unique ID for each message - this was used as a test code please ignore
function generateMessageId() {
    return `msg_${Date.now()}`;
}

// This function adds a message that is recieved on the reciever's end
function addRecipientMessage(msg, time, username, avatar) {
    const message = `<div class="flex items-start space-x-2 p-2 rounded-lg w-64 mt-1 text-xs">
                        <img src="${avatar}" alt="" class="h-8 w-8 rounded-full">
                        <div class="flex flex-col bg-[#272727] rounded-lg p-1 min-w-48">
                            <div class="flex items-center m-1">
                                <span class="text-white font-semibold">${username}</span>
                            </div>
                            <div class="text-gray-300 mt-1 ml-1 mr-1">${msg}</div>
                            <div class="text-gray-500 flex justify-end text-[0.65rem] mt-[-0.2rem]">${time}</div>
                        </div>
                    </div>`;
    
    chatSpace.innerHTML += message;
    chatSpace.scrollTop = chatSpace.scrollHeight;
}

// This function adds a message that is sent on the senders end
function addMessage(msg, messageId, time, status = '') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('flex', 'justify-end', 'mb-2', 'mr-2', 'text-xs');
    messageElement.id = messageId;

    const messageContent = `
        <div class="relative bg-yellow-300 text-black px-2 p-1 rounded-lg min-w-44 max-w-52">
            <div class="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-t-yellow-300 border-l-[15px] border-l-transparent"></div>
            <div class="flex items-center">
                <span>${msg}</span>
            </div>
            <div class="flex justify-end items-center text-gray-600">
                <span class="text-[0.65rem]">${time}</span>
                <img src="../images/svgs/singletick.svg" alt="" class="w-5 h-5" message=${messageId}>
            </div>
        </div>
    `;

    messageElement.innerHTML = messageContent;
    chatSpace.appendChild(messageElement);
    chatSpace.scrollTop = chatSpace.scrollHeight;
}

// Please ignore this block of code
function toggleStatus(status) {
    const onlinestatus = document.getElementById('onlinestatus');
    onlinestatus.textContent = status ? "online" : "offline";
}

// Please ignore - this is a login form for testing
/* const loginForm = document.getElementById('loginForm');*/

/* Please ignore these blocks of code
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const walletid = e.target.elements.walletid.value;
    const email = e.target.elements.email.value;
    if(walletid){
        fetchAuthToken(walletid);
    }else{
        logProfIn(email)
    }
    
});

async function fetchAuthToken(walletid) {
    try {
        const response = await fetch('https://serene-lbyk.onrender.com/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ walletid })
        });

        if (response.ok) {
            const data = await response.json();
            
            const loginsection = document.getElementById('loginsection');
            const chatsection = document.getElementById('chatsection');
            loginsection.classList.add('hidden');
            chatsection.classList.remove('hidden');

            const userData = {
                authToken: data.token,
                username: data.data.username,
                type: data.data.type,
                userId: data.data._id,
                avatar: data.data.avatar
            };
            
            localStorage.setItem('userData', JSON.stringify(userData));

            getOtherUsers();
        } else {
            console.error('Failed to fetch token:', response.statusText);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
}

async function logProfIn(email){
    try{
        const response = await fetch('https://serene-lbyk.onrender.com/api/v1/professional/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        if(response.ok){
            const data = await response.json({});

            const loginsection = document.getElementById('loginsection');
            const chatsection = document.getElementById('chatsection');
            loginsection.classList.add('hidden');
            chatsection.classList.remove('hidden');

            const userData = {
                authToken: data.token,
                username: data.data.name,
                type: data.data.type,
                userId: data.data._id,
                avatar: data.data.image
            };
            
            console.log(userData)
            localStorage.setItem('userData', JSON.stringify(userData));

            getOtherUsers();
        }

    } catch (error) {
        console.error('Error during fetch:', error);
    }
}*/


/* This function gets all the users that can be chatted with - 
that is for Therapist it gets all users and for users it gets all therapist
The function is supposed to automatically run when users get to the page */
async function getOtherUsers() {
    let endpoint;
    if(type === 'patient'){
        endpoint = 'professional'
    }else{
        endpoint = 'user'
    }
    const response = await fetch(`https://serene-lbyk.onrender.com/api/v1/${endpoint}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    });

    if (response.ok) {
        const data = await response.json();
        const users = data.data;

        users.forEach(user => {
            if (type !== user.type && userId !== user._id) {
                const userlist = document.getElementById('userlist');
                let avat
                if(user.avatar){
                    avat = `../images/fre/${user.avatar}`
                }else{
                    avat = user.image
                }
                userlist.innerHTML += `<div class="flex mx-4 py-1 mt-1 rounded-lg px-2" id="user-${user._id}" onclick="chatUser('${user._id}', '${user.username || user.name}', '${avat}', 'user-${user._id}')">
                                        <img src="${avat}" alt="" class="h-10 w-10 rounded-full">
                                        <div class="ml-3 flex items-center">
                                            <div class="text-white font-bold text-md">${user.username || user.name}</div>
                                        </div>
                                    </div>`;
            }else{
                document.getElementById('headerimg').src = `../images/fre/${user.avatar}`;
            }
        });
    }

    
}

getOtherUsers();

// This function helps the user chat with a specific person
async function chatUser(userid2, username, avatar, divId) {
    const response = await fetch('https://serene-lbyk.onrender.com/api/v1/chat/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId1: userId,
            userId2: userid2
        })
    });

    if (response.ok) {
        const data = await response.json();

        roomId = data.data._id;

        // Clear previous chat messages
        chatSpace.innerHTML = '';
        chatForm.classList.remove('hidden');

        // Fetch and display messages from the selected chat room
        loadChatMessages(roomId, username, avatar);

        // Join the newly selected chat room
        socket.emit('joinChat', roomId, userInfo);
    }
    const activeSection = document.querySelector('.active');
    if (activeSection) {
        activeSection.classList.remove('active');
    }
    document.getElementById(divId).classList.add('active');
}

// This function loads all the messages that has already been sent between the two users chatting
async function loadChatMessages(roomId, username, avatar) {
    try {
        const response = await fetch(`https://serene-lbyk.onrender.com/api/v1/chat/message/${roomId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            const messages = data.data;
            otherUser.textContent = username;
            profpic.src = avatar;
            profileSection.classList.remove('hidden');
            profpic.classList.remove('hidden');

            if (messages.length) {
                messages.forEach(message => {
                    const time = extractTime(message.time);
                    if (message.senderId === userId) {
                        addMessage(message.message, message._id, time);
                    } else {
                        addRecipientMessage(message.message, time, username, avatar);
                    }
                });
            }
        }
    } catch (error) {
        console.error('Error loading chat messages:', error);
    }
}


// This function formats time to a human readable function
function extractTime(timeString) {
    const parts = timeString.split(',');
    const timePart = parts[1].trim();
    const timeSections = timePart.split(' ');
    const time = `${timeSections[0]} ${timeSections[1]}`;
    return time;
}

/*
logoutButton.addEventListener('click', () => {
    localStorage.clear();
    loginsection.classList.remove('hidden');
    chatsection.classList.add('hidden');
});
*/