function  addUser () 
    {
    player1_name = documentgetElementById("player1_name").value;
    player2_name = documentgetElementById("player2_name").value;
}
    
localStorage.setItem("player1_name",player1_name);
localStorage.setItem("player2_name",player2_name);