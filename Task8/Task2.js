console.log(startGame(7, 3));
console.log(startGame(11, 19));
console.log(startGame(1, 300));
console.log(startGame(14, 2));
console.log(startGame(100, 1));

function startGame(n, step) {
    let players = Array.from({length: n}, (_, i) => i + 1)
    let playerCount = 0;
    let circleCount = 0;
    while (players.length != 1) {
        while (playerCount < players.length) {
            if (circleCount != step - 1) {
                playerCount++;
                circleCount++;
            } else {
                players.splice(playerCount, 1);
                circleCount = 0;
                if (players.length == 1) {
                    break;
                }
            }
        }
        playerCount = 0;
    }
    return players[0];
}