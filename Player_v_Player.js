let currentPlayer = "X";
        let board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];

        function placeMark(row, col) {
            if (board[row][col] === "") {
                board[row][col] = currentPlayer;
                document.getElementById("board").children[row].children[col].innerText = currentPlayer;
                
                if (checkWin()) {
                    alert(currentPlayer + " wins!");
                    resetBoard();
                } else if (checkDraw()) {
                    alert("It's a draw!");
                    resetBoard();
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                    document.getElementById("turn").innerText = "Player " + (currentPlayer === "X" ? "1" : "2") + "'s Turn";
                }
            }
        }

        function checkWin() {
            // Check rows, columns, and diagonals
            for (let i = 0; i < 3; i++) {
                if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== "") {
                    return true; // Row win
                }
                if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== "") {
                    return true; // Column win
                }
            }
            if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] ||
                board[0][2] === board[1][1] && board[1][1] === board[2][0]) && board[1][1] !== "") {
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
            document.getElementById("turn").innerText = "Player 1's Turn";
        }