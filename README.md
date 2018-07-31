TIC TAC TOE

To run the Tic Tac Toe app, open the index.html file in your browser. 

To create this game I recognized that I would need to have a different click event for each player; if player X clicked on a square the square would be marked X, if player O clicked on a square the square would be marked O. 

In order to separate the players, I declared a boolean "playerX" which would be true when player X was in play and be false when player O was in play. 

The next challenge was recognizing when a player had won. By adding an attribute when a player marked a square I would be able to track each square. After a play, I would check to see if the possible lines of that square could declare a winner. A line includes the square and the other two squares that create a line, which could be horizontal, vertical, or diagonal.  

Clearing the board required removing the marks and attributes from each square. 
