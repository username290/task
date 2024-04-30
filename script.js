function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    var userMessage = '<p><strong>You:</strong> ' + userInput + '</p>';
    var botMessage = '<p><strong>EmployEase Bot:</strong> This is a sample response.</p>'; // Replace with actual chatbot response
  
    chatBox.innerHTML += userMessage;
    chatBox.innerHTML += botMessage;
  }
  