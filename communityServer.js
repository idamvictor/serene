/* 
    For the server.js file you should add this code as it is
*/
const post = io.of('/post');

post.on('connection', (socket) => {
    socket.on('new-post', async (communityId, userId, message) => {
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

            if(resp.ok){
                const data = await resp.json();

                socket.emit('receive-post', data.data);
            }
        } catch (error) {
            console.error('Error saving message:', error);
        }
        
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});