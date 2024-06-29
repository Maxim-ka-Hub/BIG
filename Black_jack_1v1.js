document.addEventListener('DOMContentLoaded', function () {
    const status = document.getElementById('status');
    const dealButton = document.getElementById('deal-button');
    const hitButton_1 = document.getElementById('first_player-hit_button');
    const hitButton_2 = document.getElementById('second_player-hit_button');
    const standButton_1 = document.getElementById('first_player-stand_button');
    const standButton_2 = document.getElementById('second_player-stand_button');
    const first_playerHand = document.getElementById('first_player-hand');
    const second_playerHand = document.getElementById('second_player-hand');
    const betInput = document.getElementById('bet');
    let Time_dep = document.getElementById('time_dep');
    let win_sound = document.getElementById('win-sound');
    let card_Deal_Sound = document.getElementById('card-Deal-Sound');

    

    let deck = [];
    let first_playerHandValue = 0;
    let second_playerHandValue = 0;
    let first_playerCards = [];
    let second_playerCards = [];
    let first_playerbank = 100;
    let second_playerbank = 100;
    let gameActive = false;

    let check_stop_first_player = false;                                                                                                   
    let check_stop_second_player = false; 

    dealButton.addEventListener('click', deal);
    hitButton_1.addEventListener('click', first_hit);
    hitButton_2.addEventListener('click', second_hit);
    standButton_1.addEventListener('click', first_stand);
    standButton_2.addEventListener('click', second_stand);
    

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
        
        if (isNaN(bet) || bet <= 0 || bet > first_playerbank && bet > second_playerbank) {
            updateStatus('Невірна ставка! Введіть ставку від 1 до вашого банку.');
            return;
        }

        check_stop_second_player = false;
        check_stop_first_player = false;        

        first_playerbank -= bet;
        second_playerbank -= bet;   
        updateBank();

        Time_dep.value = betInput.value * 2;
        document.getElementById('time_dep').textContent = Time_dep.value;
        
        
        createDeck();
        shuffleDeck();
        first_playerHand.innerHTML = '';
        second_playerHand.innerHTML = '';
        first_playerHandValue = 0;
        second_playerHandValue = 0;
        first_playerCards = [];
        second_playerCards = [];
        second_playerCard(first_playerHand);
        second_playerCard(second_playerHand);
        second_playerCard(first_playerHand);
        second_playerCard(second_playerHand);
        updateStatus('Гравці обирають послідовність вибору самостійно. Оберіть "Взяти" або "Зупинитися".');
        gameActive = true;
        // dealButton.style.display = 'none';
        // hitButton.style.display = 'inline-block'; // Показати кнопку "Взяти"
        // standButton.style.display = 'inline-block'; // Показати кнопку "Зупинитися"
    }

    function second_playerCard(hand) {
        const card = deck.pop();
        const cardImage = document.createElement('img');
        cardImage.src = `${card.value}${card.suit}.png`;
        hand.appendChild(cardImage);
        if (hand === first_playerHand) {
            first_playerCards.push(card);
            update_first_PlayerHandValue();
            card_Deal_Sound.play();
        } else {
            second_playerCards.push(card);
            update_second_PlayerHandValue();
            card_Deal_Sound.play();
        }
    }

    function update_first_PlayerHandValue() {
        first_playerHandValue = calculateHandValue(first_playerCards);
        document.getElementById('first_player-points-value').textContent = first_playerHandValue;
    }

    function update_second_PlayerHandValue() {
        second_playerHandValue = calculateHandValue(second_playerCards);
        document.getElementById('second_player-points-value').textContent = second_playerHandValue;
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

    function first_hit() {
        if (check_stop_first_player == true) {
            return
        }
        else{
            if (!gameActive) return;
            second_playerCard(first_playerHand);
            if (first_playerHandValue > 21) {
                updateStatus('Перебор 1! 2 переміг. Натисніть "Роздати", щоб зіграти ще раз.');
                gameActive = false;
                second_playerbank += 2 * parseInt(betInput.value);
                updateBank()
                // dealButton.style.display = 'inline-block'; // Показати кнопку "Роздати"
                // hitButton.style.display = 'none';
                // standButton.style.display = 'none';
            }
        }
    }


    function second_hit() {
        if (check_stop_second_player == true) {
            return
        }
        else{
            if (!gameActive) return;
            second_playerCard(second_playerHand);
            if (second_playerHandValue > 21) {
                updateStatus('Перебор 2! 1 переміг. Натисніть "Роздати", щоб зіграти ще раз.');
                gameActive = false;
                first_playerbank += 2 * parseInt(betInput.value);
                updateBank()
                // dealButton.style.display = 'inline-block'; // Показати кнопку "Роздати"
                // hitButton.style.display = 'none';
                // standButton.style.display = 'none';
            }
        }
    }


    function first_stand() {
        if (!gameActive) return;
        check_stop_first_player = true;
        stop_func();
        if (check_stop_second_player == false) {
            updateStatus('Гравець 1 зупинився! Гравець 2 Оберіть "Взяти" або "Зупинитися"');
        }
        // gameActive = false;
        // dealButton.style.display = 'inline-block'; // Показати кнопку "Роздати"
        // hitButton.style.display = 'none';
        // standButton.style.display = 'none';
    }

    function second_stand() {
        if (!gameActive) return;
        check_stop_second_player = true;
        stop_func();
        if (check_stop_first_player == false) {
            updateStatus('Гравець 2 зупинився! Гравець 1 Оберіть "Взяти" або "Зупинитися"');
        }
        // gameActive = false;
        // dealButton.style.display = 'inline-block'; // Показати кнопку "Роздати"
        // hitButton.style.display = 'none';
        // standButton.style.display = 'none';
    }


    function stop_func() {
        if (check_stop_first_player == false || check_stop_second_player == false) return;
        else {
            if (first_playerHandValue > 21 || first_playerHandValue < second_playerHandValue && second_playerHandValue <= 21) {
                updateStatus(`Переміг Гравець 2 з рахунком ${second_playerHandValue} : ${first_playerHandValue}! Натисніть "Роздати", щоб зіграти ще раз.`);
                second_playerHandValue += 2 * parseInt(betInput.value);
                win_sound.play();
                gameActive = false;
                

            } else if (second_playerHandValue > 21 || second_playerHandValue < first_playerHandValue && first_playerHandValue <= 21) {
                updateStatus(`Переміг Гравець 1 з рахунком ${first_playerHandValue} : ${second_playerHandValue}! Натисніть "Роздати", щоб зіграти ще раз.`);
                first_playerHandValue += 2 * parseInt(betInput.value);
                win_sound.play();
                gameActive = false;

            } else if (second_playerHandValue === first_playerHandValue) {
                updateStatus('Нічия! Натисніть "Роздати", щоб зіграти ще раз.');
                first_playerbank += parseInt(betInput.value);
                second_playerbank += parseInt(betInput.value);
                gameActive = false;

            } else {
                updateStatus('Я хз як вас розсудити');
            }
            updateBank();
        }
    }
    

    function updateBank() {
        document.getElementById('first_player-bank-value').textContent = first_playerbank;
        document.getElementById('second_player-bank-value').textContent = second_playerbank;
    }

    function updateStatus(message) {
        status.textContent = message;
    }
});