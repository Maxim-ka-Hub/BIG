let currentPlayer = "X";
        let board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];

        function playerTurn(row, col) {
            if (board[row][col] === "") {
                board[row][col] = currentPlayer;
                document.getElementById("board").children[row].children[col].innerText = currentPlayer;
                
                if (checkWin(currentPlayer)) {
                    alert("You win!");
                    resetBoard();
                } else if (checkDraw()) {
                    alert("It's a draw!");
                    resetBoard();
                } else {
                    currentPlayer = "O"; // Bot's turn
                    document.getElementById("turn").innerText = "Bot's Turn (O)";
                    botTurn();
                }
            }
        }

        function botTurn() {
            // Check for possible wins for bot
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === "") {
                        board[i][j] = "O";
                        if (checkWin("O")) {
                            document.getElementById("board").children[i].children[j].innerText = "O";
                            alert("Bot wins!");
                            resetBoard();
                            return;
                        }
                        board[i][j] = "";
                    }
                }
            }
            // Check for possible wins for player and block
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === "") {
                        board[i][j] = "X";
                        if (checkWin("X")) {
                            board[i][j] = "O";
                            document.getElementById("board").children[i].children[j].innerText = "O";
                            currentPlayer = "X"; // Player's turn
                            document.getElementById("turn").innerText = "Your Turn (X)";
                            return;
                        }
                        board[i][j] = "";
                    }
                }
            }
            // Choose a random empty cell if no immediate wins or blocks are available
            let availableCells = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === "") {
                        availableCells.push([i, j]);
                    }
                }
            }
            let randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
            let [row, col] = randomCell;
            board[row][col] = "O";
            document.getElementById("board").children[row].children[col].innerText = "O";
            currentPlayer = "X"; // Player's turn
            document.getElementById("turn").innerText = "Your Turn (X)";
        }

        function checkWin(player) {
            // Check rows, columns, and diagonals
            for (let i = 0; i < 3; i++) {
                if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
                    return true; // Row win
                }
                if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
                    return true; // Column win
                }
            }
            if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
                (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
                return true; // Diagonal win
            }
            return false;
        }

        function checkDraw() {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === "") {
                        return false; // Board not full
                    }
                }
            }
            return true; // Board full and no winner
        }

        function resetBoard() {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    board[i][j] = "";
                    document.getElementById("board").children[i].children[j].innerText = "";
                }
            }
            currentPlayer = "X";
            document.getElementById("turn").innerText = "Your Turn (X)";
        }