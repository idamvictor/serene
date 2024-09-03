// This code is to establish a connection use it as it is
const socket = io('/post');

// I don't know how you handle this in React but what I am trying to do here get data from the form
const postInput = document.getElementById('postInput');
const postButton = document.getElementById('postButton');
const postList = document.getElementById('postList');


// Handle the post button click
postButton.addEventListener('click', () => {
    const postContent = postInput.value.trim();
    
    /* 
        You are to assign the values of communityId and userId
        I just hard coded this value so I can use it to test
    */
    const communityId = "66cd8e05b221a9e79a1c9fd1";
    const userId = "66c88d3d8b7bedafd1e53272"

    // This condition checks if the user actually entered a value so we don't post empty strings
    if (postContent) {
        // This section of the code is to be kept exactly as it is. It is sending the data to the server
        socket.emit('new-post', communityId, userId, postContent);

        // This code empties input field as soon as the post is sent
        postInput.value = '';
    }
});

/*
    This session listens for new posts from the server
    The first line is to be kept
    The `postData` variable contains the data that will be returned if the post was successfully sent
*/
socket.on('receive-post', (postData) => {
    // This session renders the data that is returned so that it can be viewed in realtime so you modify the code as required
    const postItem = document.createElement('li');
    postItem.textContent = postData.message;
    postList.appendChild(postItem);
});
