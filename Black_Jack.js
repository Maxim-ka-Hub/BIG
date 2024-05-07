document.addEventListener('DOMContentLoaded', function () {
    const status = document.getElementById('status');
    const dealButton = document.getElementById('deal-button');
    const hitButton = document.getElementById('hit-button');
    const standButton = document.getElementById('stand-button');
    const playerHand = document.getElementById('player-hand');
    const dealerHand = document.getElementById('dealer-hand');
    const betInput = document.getElementById('bet');
    let Time_dep = document.getElementById('time_dep');
    let background_music = document.getElementById('background-music');
    let win_sound = document.getElementById('win-sound');
    let card_Deal_Sound = document.getElementById('card-Deal-Sound');

    

    let deck = [];
    let playerHandValue = 0;
    let dealerHandValue = 0;
    let playerCards = [];
    let dealerCards = [];
    let bank = 100;
    let gameActive = false;



    function playBackgroundMusic() {
        background_music.play();
        document.removeEventListener('click', playBackgroundMusic);
    }
    document.addEventListener('click', playBackgroundMusic);


    dealButton.addEventListener('click', deal);
    hitButton.addEventListener('click', hit);
    standButton.addEventListener('click', stand);
    

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

    function deal() {
        if (gameActive) return;
        const bet = parseInt(betInput.value);
        if (isNaN(bet) || bet <= 0 || bet > bank) {
            updateStatus('Невірна ставка! Введіть ставку від 1 до вашого банку.');
            return;
        }


        
        bank -= bet;
        updateBank();

        Time_dep.value = betInput.value * 2;
        document.getElementById('time_dep').textContent = Time_dep.value;
        
        
        createDeck();
        shuffleDeck();
        playerHand.innerHTML = '';
        dealerHand.innerHTML = '';
        playerHandValue = 0;
        dealerHandValue = 0;
        playerCards = [];
        dealerCards = [];
        dealCard(playerHand);
        dealCard(dealerHand);
        dealCard(playerHand);
        dealCard(dealerHand);
        updateStatus('Хід Гравця. Оберіть "Взяти" або "Зупинитися".');
        gameActive = true;
        dealButton.style.display = 'none';
        hitButton.style.display = 'inline-block'; // Показати кнопку "Взяти"
        standButton.style.display = 'inline-block'; // Показати кнопку "Зупинитися"
    }

    function dealCard(hand) {
        const card = deck.pop();
        const cardImage = document.createElement('img');
        cardImage.src = `${card.value}${card.suit}.png`;
        hand.appendChild(cardImage);
        if (hand === playerHand) {
            playerCards.push(card);
            updatePlayerHandValue();
            card_Deal_Sound.play();
        } else {
            dealerCards.push(card);
            updateDealerHandValue();
            card_Deal_Sound.play();
        }
    }

    function updatePlayerHandValue() {
        playerHandValue = calculateHandValue(playerCards);
        document.getElementById('player-points-value').textContent = playerHandValue;
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

    function hit() {
        if (!gameActive) return;
        dealCard(playerHand);
        if (playerHandValue > 21) {
            updateStatus('Перебор! Дилер переміг. Натисніть "Роздати", щоб зіграти ще раз.');
            gameActive = false;
            dealButton.style.display = 'inline-block'; // Показати кнопку "Роздати"
            hitButton.style.display = 'none';
            standButton.style.display = 'none';
        }
    }

    function stand() {
        if (!gameActive) return;
        while (dealerHandValue < 19) {
            dealCard(dealerHand);
        }
        if (dealerHandValue > 21 || dealerHandValue < playerHandValue && playerHandValue <= 21) {
            updateStatus('Гравець переміг! Натисніть "Роздати", щоб зіграти ще раз.');
            bank += 2 * parseInt(betInput.value);
            win_sound.play();
        } else if (dealerHandValue === playerHandValue) {
            updateStatus('Нічия! Натисніть "Роздати", щоб зіграти ще раз.');
            bank += parseInt(betInput.value);
        } else {
            updateStatus('Дилер переміг. Натисніть "Роздати", щоб зіграти ще раз.');
        }
        updateBank();
        gameActive = false;
        dealButton.style.display = 'inline-block'; // Показати кнопку "Роздати"
        hitButton.style.display = 'none';
        standButton.style.display = 'none';
    }

    function updateBank() {
        document.getElementById('bank-value').textContent = bank;
    }

    function updateStatus(message) {
        status.textContent = message;
    }
});