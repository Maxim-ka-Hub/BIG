document.addEventListener('DOMContentLoaded', function () {
    const betSlider = document.getElementById('betSlider');
    const betAmount = document.getElementById('betAmount');

    betSlider.addEventListener('input', function () {
        betAmount.textContent = betSlider.value;
    });


    const betSlider_2 = document.getElementById('betSlider_2');
    const betAmount_2 = document.getElementById('betAmount_2');

    betSlider_2.addEventListener('input', function () {
        betAmount_2.textContent = betSlider_2.value;
    });


    const status = document.getElementById('status');

    const fold_first = document.getElementById('first_player-fold_button');
    const check_first = document.getElementById('first_player-check_button');
    const bet_first = document.getElementById('first_player-bet_button');

    const fold_second = document.getElementById('second_player-fold_button');
    const check_second = document.getElementById('second_player-check_button');
    const bet_second = document.getElementById('second_player-bet_button');


    const first_playerHand = document.getElementById('first_player-hand');
    const second_playerHand = document.getElementById('second_player-hand');

    const dealer_flop_cardsHAND = document.getElementById('dealer_flop_cards');
    const dealer_tern_cardsHAND = document.getElementById('dealer_tern_cards');
    const dealer_river_cardsHAND = document.getElementById('dealer_river_cards');

    let deck = [];
    let first_playerHandValue = 0;
    let second_playerHandValue = 0;
    let first_playerCards = [];
    let second_playerCards = [];
    let dealer_flop_cards = [];
    let dealer_tern_cards = [];
    let dealer_river_cards = [];
    


    let table_bank = 10;
    update_bank();

    const bet_minimum = document.getElementById('bet_minimum');
    const bet_half = document.getElementById('bet_half');
    const bet_bank = document.getElementById('bet_bank');
    const bet_max = document.getElementById('bet_max');
    const bet_click = document.getElementById('first_player-bet_button');
    const bet_click_2 = document.getElementById('second_player-bet_button');
    

    const bet_minimum_2 = document.getElementById('bet_minimum_2');
    const bet_half_2 = document.getElementById('bet_half_2');
    const bet_bank_2 = document.getElementById('bet_bank_2');
    const bet_max_2 = document.getElementById('bet_max_2');


    
    const first_player_bank_value = 100;
    const second_player_bank_value = 100;
    update_player_bet_value();



    bet_minimum.addEventListener('click', count_bet_minimum);
    bet_half.addEventListener('click', count_half_bet);
    bet_bank.addEventListener('click', count_bank_bet);
    bet_max.addEventListener('click', all_in);
    bet_first.addEventListener('click', bet);
    
    
    
    bet_minimum_2.addEventListener('click', count_bet_minimum_2);
    bet_half_2.addEventListener('click', count_half_bet_2);
    bet_bank_2.addEventListener('click', count_bank_bet_2);
    bet_max_2.addEventListener('click', all_in_2);
    // Bet_click_2.addEventListener('click', Bet_2);
    
    
    bet_click.addEventListener('click', bet);
    bet_click_2.addEventListener('click', bet_2);


    const deal_click = document.getElementById('deal-button');
    deal_click.addEventListener('click', deal);


    let check_first_player_bet = false;
    let check_second_player_bet = false;

    let check_first_player_bet_tern = false;
    let check_second_player_bet_tern = false;

    let check_first_player_bet_river = false;
    let check_second_player_bet_river = false;

    let flop_game_active = false;
    let tern_game_active = false;

    

    let min_bet = 2;
    function count_bet_minimum() {
        betAmount.textContent = min_bet;
        update_Amount();
    }   
    function count_bet_minimum_2() {
        betAmount_2.textContent = min_bet;
        update_Amount();
    } 

    let half = first_player_bank_value / 2;
    let half_2 = second_player_bank_value / 2;
    function count_half_bet() {
        betAmount.textContent = half;
        update_Amount();
    }
    function count_half_bet_2() {
        betAmount_2.textContent = half_2;
        update_Amount();
    }
    

    function count_bank_bet() {
        betAmount.textContent = table_bank;
        update_Amount();    
    }
    function count_bank_bet_2() {
        betAmount_2.textContent = table_bank;
        update_Amount();
    }


    let all_bank = first_player_bank_value;
    let all_bank_2 = second_player_bank_value;
    function all_in() {
        betAmount.textContent = all_bank;
        update_Amount();
    }
    function all_in_2() {
        betAmount_2.textContent = all_bank_2;
        update_Amount();
    }

    let check_tern_bet = 0;
    function bet() {
        if (parseFloat(betAmount.textContent) <= 0) return;
        else{
            table_bank += parseFloat(betAmount.textContent);
            betAmount.textContent = 0;
            update_bank();
            update_Amount();
            check_first_player_bet = true;
            check_tern_bet+=1;
            River()
            Tern();
            Flop();
            
        }
    }

    function bet_2() {
        if (parseFloat(betAmount_2.textContent) <= 0) return;
        else{
            table_bank += parseFloat(betAmount_2.textContent);
            betAmount_2.textContent = 0;
            update_bank();
            update_Amount();
            check_second_player_bet = true;
            check_tern_bet+=1;
            River()
            Tern();
            Flop();
            
        }
    }

    
    function update_bank() {
        document.getElementById('bank').textContent = table_bank;
    }

    function update_Amount() {
        document.getElementById('betAmount').textContent = betAmount.textContent;
        document.getElementById('betAmount_2').textContent = betAmount_2.textContent;
    }


    function update_player_bet_value() {
        document.getElementById('first_player-bank-value').textContent = first_player_bank_value;
        document.getElementById('second_player-bank-value').textContent = second_player_bank_value;
    }





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
        // let gameActive = false;
        // if (gameActive) return;
        
        

        // check_fold_first_player = false;
        // check_fold_second_player = false;

        createDeck();
        shuffleDeck();

        first_playerHand.innerHTML = '';
        second_playerHand.innerHTML = '';
        dealer_flop_cardsHAND.innerHTML = '';
        dealer_tern_cardsHAND.innerHTML = '';
        dealer_river_cardsHAND.innerHTML = '';
        first_playerHandValue = 0;
        second_playerHandValue = 0;
        first_playerCards = [];
        second_playerCards = [];
        // dealer_flop_cards = [];
        player_deal_card(first_playerHand);
        player_deal_card(second_playerHand);
        player_deal_card(first_playerHand);
        player_deal_card(second_playerHand);
        updateStatus('Гравці обирають послідовність вибору самостійно. Оберіть "Взяти" або "Зупинитися".');
        gameActive = true;
    }


    function player_deal_card(hand) {
        const card = deck.pop();
        const cardImage = document.createElement('img');
        cardImage.src = `${card.value}${card.suit}.png`;
        hand.appendChild(cardImage);
        
        if (hand === first_playerHand) {
            first_playerCards.push(card);
            // update_first_PlayerHandValue();
            // card_Deal_Sound.play();
        } else {
            second_playerCards.push(card);
            // update_second_PlayerHandValue();
            // card_Deal_Sound.play();
        }

        if (hand === dealer_flop_cardsHAND) {
            dealer_flop_cards.push(card);
        } else if (hand === dealer_tern_cardsHAND) {
            dealer_tern_cards.push(card);
        } else if (hand === dealer_river_cardsHAND) {
            dealer_river_cards.push(card);
        }
    }


    function Flop(){
        if (check_first_player_bet === true && check_second_player_bet === true && flop_game_active == false){
            player_deal_card(dealer_flop_cardsHAND);
            player_deal_card(dealer_flop_cardsHAND);
            player_deal_card(dealer_flop_cardsHAND);
            flop_game_active = true;
            check_first_player_bet_tern = true;
            check_second_player_bet_tern = true;
        }
    }
    let check_tern = false;
    function Tern() {
        if (check_first_player_bet_tern == true && check_second_player_bet_tern == true && flop_game_active == true && check_tern == false && check_tern_bet === 4) {
            player_deal_card(dealer_tern_cardsHAND);
            check_first_player_bet_river = true;
            check_second_player_bet_river = true;
            check_tern = true;
            tern_game_active = true;
        }
    }
    let check_river = false;
    function River() {
        // alert('hi')
        if (check_first_player_bet_river == true && check_second_player_bet_river == true && tern_game_active == true && check_river == false && check_tern_bet === 6) {
            player_deal_card(dealer_river_cardsHAND);
            
            // check_first_player_bet_tern = true;
            // check_second_player_bet_tern = true;
            check_river = true;
        }
    }


});