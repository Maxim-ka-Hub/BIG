document.addEventListener('DOMContentLoaded', function () {
    const status = document.getElementById('status');
    const dealButtonP1 = document.getElementById('deal-button-p1');
    const hitButtonP1 = document.getElementById('hit-button-p1');
    const standButtonP1 = document.getElementById('stand-button-p1');
    const dealButtonP2 = document.getElementById('deal-button-p2');
    const hitButtonP2 = document.getElementById('hit-button-p2');
    const standButtonP2 = document.getElementById('stand-button-p2');
    const player1Hand = document.getElementById('player1-hand');
    const player2Hand = document.getElementById('player2-hand');
    const dealerHand = document.getElementById('dealer-hand');
    const betInput = document.getElementById('bet');
    
    const backgroundMusic = document.getElementById('background-music');
	backgroundMusic.volume = 0.1; // Встановлення гучності фонової музики на половину (50%)
    const winSound = document.getElementById('win-sound');
    const loseSound = document.getElementById('lose-sound');
    const tieSound = document.getElementById('tie-sound');
	const cardDealSound = document.getElementById('card-Deal-Sound');
	
    
    let deck = [];
    let player1HandValue = 0;
    let player2HandValue = 0;
    let dealerHandValue = 0;
    let player1Cards = [];
    let player2Cards = [];
    let dealerCards = [];
    let bank = 100;
    let gameActiveP1 = false;
    let gameActiveP2 = false;
	
	//  Включення фонової музики після завантаження файлу або після першого кліку
    function playBackgroundMusic() {
        backgroundMusic.play();
        document.removeEventListener('click', playBackgroundMusic);
    }
    document.addEventListener('click', playBackgroundMusic);

    dealButtonP1.addEventListener('click', dealPlayer1);
    hitButtonP1.addEventListener('click', hitPlayer1);
    standButtonP1.addEventListener('click', standPlayer1);
    dealButtonP2.addEventListener('click', dealPlayer2);
    hitButtonP2.addEventListener('click', hitPlayer2);
    standButtonP2.addEventListener('click', standPlayer2);

    function createDeck() {
        const suits = ['♥️', '♦️', '♣️', '♠️'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        deck = [];
        for (let suit of suits) {
            for (let value of values) {
                deck.push({ value: value, suit: suit });
            }
        }
    }

    function shuffleDeck() {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }

    function dealPlayer1() {
        if (gameActiveP1) return;
        const bet = parseInt(betInput.value);
        if (isNaN(bet) || bet <= 0 || bet > bank) {
            updateStatus('Невірна ставка! Гравець 1, введіть ставку від 1 до вашого банку.');
            return;
        }
        
        bank -= bet;
        updateBank();
        
        createDeck();
        shuffleDeck();
        player1Hand.innerHTML = '';
        player2Hand.innerHTML = '';
        dealerHand.innerHTML = '';
        player1HandValue = 0;
        player2HandValue = 0;
        dealerHandValue = 0;
        player1Cards = [];
        player2Cards = [];
        dealerCards = [];
        dealCard(player1Hand);
        dealCard(player2Hand);
        dealCard(dealerHand);
        dealCard(player1Hand);
        dealCard(player2Hand);
        dealCard(dealerHand);
        updateStatus('Хід Гравця 1. Оберіть "Взяти" або "Зупинитися".');
        gameActiveP1 = true;
        dealButtonP1.style.display = 'none';
        hitButtonP1.style.display = 'inline-block';
        standButtonP1.style.display = 'inline-block';
    }

    function dealPlayer2() {
        if (gameActiveP2) return;
        const bet = parseInt(betInput.value);
        if (isNaN(bet) || bet <= 0 || bet > bank) {
            updateStatus('Невірна ставка! Гравець 2, введіть ставку від 1 до вашого банку.');
            return;
        }
        
        bank -= bet;
        updateBank();
        
        dealCard(player2Hand);
        dealCard(player2Hand);
        updateStatus('Хід Гравця 2. Оберіть "Взяти" або "Зупинитися".');
        gameActiveP2 = true;
        dealButtonP2.style.display = 'none';
        hitButtonP2.style.display = 'inline-block';
        standButtonP2.style.display = 'inline-block';
    }

    function dealCard(hand) {
        const card = deck.pop();
        const cardImage = document.createElement('img');
        cardImage.src = `${card.value}${card.suit}.png`;
        hand.appendChild(cardImage);
        if (hand === player1Hand) {
            player1Cards.push(card);
            updatePlayer1HandValue();
			cardDealSound.play();
        } else if (hand === player2Hand) {
            player2Cards.push(card);
            updatePlayer2HandValue();
			cardDealSound.play();
        } else {
            dealerCards.push(card);
            updateDealerHandValue();
			cardDealSound.play();
        }
    }

    function updatePlayer1HandValue() {
        player1HandValue = calculateHandValue(player1Cards);
        document.getElementById('player1-points-value').textContent = player1HandValue;
    }

    function updatePlayer2HandValue() {
        player2HandValue = calculateHandValue(player2Cards);
        document.getElementById('player2-points-value').textContent = player2HandValue;
    }

    function updateDealerHandValue() {
        dealerHandValue = calculateHandValue(dealerCards);
        document.getElementById('dealer-points-value').textContent = dealerHandValue;
    }

    function calculateHandValue(cards) {
        let value = 0;
        let hasAce = false;
        for (let card of cards) {
            if (card.value === 'A') {
                hasAce = true;
            }
            if (card.value === 'J' || card.value === 'Q' || card.value === 'K') {
                value += 10;
            } else if (card.value !== 'A') {
                value += parseInt(card.value);
            }
        }
        if (hasAce && value + 11 <= 21) {
            value += 11;
        } else {
            value += cards.filter(card => card.value === 'A').length;
        }
        return value;
    }

    function hitPlayer1() {
        if (!gameActiveP1) return;
        dealCard(player1Hand);
        if (player1HandValue > 21) {
            updateStatus('Перебор! Гравець 1, ви програли. Натисніть "Роздати", щоб зіграти ще раз.');
            gameActiveP1 = false;
            dealButtonP1.style.display = 'inline-block';
            hitButtonP1.style.display = 'none';
            standButtonP1.style.display = 'none';
            loseSound.play();
        }
    }

    function standPlayer1() {
        if (!gameActiveP1) return;
        updateStatus('Хід Гравця 2. Оберіть "Взяти" або "Зупинитися".');
        gameActiveP1 = false;
        gameActiveP2 = true;
        dealButtonP1.style.display = 'none';
        hitButtonP1.style.display = 'none';
        standButtonP1.style.display = 'none';
        dealButtonP2.style.display = 'none';
        hitButtonP2.style.display = 'inline-block';
        standButtonP2.style.display = 'inline-block';
    }

    function hitPlayer2() {
        if (!gameActiveP2) return;
        dealCard(player2Hand);
        if (player2HandValue > 21) {
            updateStatus('Перебор! Гравець 2, ви програли. Натисніть "Роздати", щоб зіграти ще раз.');
            gameActiveP2 = false;
            dealButtonP2.style.display = 'inline-block';
            hitButtonP2.style.display = 'none';
            standButtonP2.style.display = 'none';
            loseSound.play();
        }
    }

    function standPlayer2() {
        if (!gameActiveP2) return;
        while (dealerHandValue < 19) {
            dealCard(dealerHand);
        }
        if (dealerHandValue > 21 || dealerHandValue < player2HandValue && player2HandValue <= 21) {
            updateStatus('Гравець 2 переміг! Натисніть "Роздати", щоб зіграти ще раз.');
            bank += 2 * parseInt(betInput.value);
            winSound.play();
        } else if (dealerHandValue === player2HandValue) {
            updateStatus('Нічия! Натисніть "Роздати", щоб зіграти ще раз.');
            bank += parseInt(betInput.value);
            tieSound.play();
        } else {
            updateStatus('Дилер переміг. Натисніть "Роздати", щоб зіграти ще раз.');
            loseSound.play();
        }
        updateBank();
        gameActiveP2 = false;
        dealButtonP2.style.display = 'inline-block';
        hitButtonP2.style.display = 'none';
        standButtonP2.style.display = 'none';
    }

    function updateBank() {
        document.getElementById('bank-value').textContent = bank;
    }

    function updateStatus(message) {
        status.textContent = message;
    }
})