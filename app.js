window.addEventListener('load', function () {

    let socket = io();
  
    socket.on('connect', function () {
        console.log("Connected");
    });


    let chatBox = document.getElementById('chat-box-msgs');

    socket.on('msg', function (data) {
        console.log("Message arrived!");
        if (data.id === 1) {
            
            let receivedMsg = data.name + ": " + data.msg;
            let msgEl = document.createElement('p');
            msgEl.innerHTML = receivedMsg;

            
            chatBox.appendChild(msgEl);
           
            chatBox.scrollTop = chatBox.scrollHeight;
        }
        console.log(data);
    });

    
    let nameInput = document.getElementById('name-input')
    let msgInput = document.getElementById('msg-input');
    let sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        let curName = nameInput.value;
        let curMsg = msgInput.value;
        let msgObj = { "name": curName, "msg": curMsg, "id": 1 };
 
        
        socket.emit('msg', msgObj);
    });

    let commentBox = document.getElementById('comment-box-msg');
    
    socket.on('msg', function (data) {
        console.log("Message arrived!");
        if (data.id === 2){
            let enteredMsg = data.name + ": " + data.msg;
            let writeEl = document.createElement('p');
            writeEl.innerHTML = enteredMsg;

            commentBox.appendChild(writeEl);
    
            commentBox.scrollTop = commentBox.scrollHeight;

        }
        console.log(data);
    });
    
    let glassInput = document.getElementById('glass-input')
    let writeInput = document.getElementById('write-input');
    let enterButton = document.getElementById('enter-button');

    enterButton.addEventListener('click', function () {
        let userName = glassInput.value;
        let userMsg = writeInput.value;
        let userObj = { "name": userName, "msg": userMsg, "id": 2 };
 
        socket.emit('msg', userObj);

    });
    let wordBox = document.getElementById('comment-box-three');
    
    socket.on('msg', function (data) {
        console.log("Message arrived!");
        if (data.id === 3){
            let returnedMsg = data.name + ": " + data.msg;
            let writtenEl = document.createElement('p');
            writtenEl.innerHTML = returnedMsg;
    
            wordBox.appendChild(writtenEl);
        
            wordBox.scrollTop = wordBox.scrollHeight;
        }
        console.log(data);
    });
    
    let identityInput = document.getElementById('identity-input')
    let stateInput = document.getElementById('state-input');
    let returnButton = document.getElementById('return-button');

    returnButton.addEventListener('click', function () {
        let personName = identityInput.value;
        let personMsg = stateInput.value;
        let personObj = { "name": personName, "msg": personMsg, "id": 3 };
 
        socket.emit('msg', personObj);

    });
    let fourthBox = document.getElementById('comment-box-four');
    
    socket.on('msg', function (data) {
        console.log("Message arrived!");
        if (data.id === 4){
            let newMsg = data.name + ": " + data.msg;
            let wordsEl = document.createElement('p');
            wordsEl.innerHTML = newMsg;
    
            fourthBox.appendChild(wordsEl);
        
            fourthBox.scrollTop = fourthBox.scrollHeight;
        }
        console.log(data);
    });
    
    let namesInput = document.getElementById('names-input')
    let messagesInput = document.getElementById('messages-input');
    let somethingButton = document.getElementById('something-button');

    somethingButton.addEventListener('click', function () {
        let newName = namesInput.value;
        let newMsg = messagesInput.value;
        let newObj = { "name": newName, "msg": newMsg, "id": 4 };
 
        socket.emit('msg', newObj);

    });
});