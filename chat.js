function myMessage(){
    event.preventDefault() //so wont refresh
    const inputMessage = document.getElementById("message").value;
    document.getElementById("messageOutput").textContent = inputMessage;
}