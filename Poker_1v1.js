document.addEventListener('DOMContentLoaded', function () {
    let betSlider = document.getElementById('betSlider');
    let betAmount = document.getElementById('betAmount');

    betSlider.addEventListener('input', function () {
        betAmount.textContent = betSlider.value;
    });


    let betSlider_2 = document.getElementById('betSlider_2');
    let betAmount_2 = document.getElementById('betAmount_2');

    betSlider_2.addEventListener('input', function () {
        betAmount_2.textContent = betSlider_2.value;
    });


    const status_first_player = document.getElementById('status_first_player');
    const status_second_player = document.getElementById('status_second_player');

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


    const index_cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    


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


    
    let first_player_bank_value = 100;
    let second_player_bank_value = 100;
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
    
    
    
    bet_click.addEventListener('click', bet);
    bet_click_2.addEventListener('click', bet_2);


    const deal_click = document.getElementById('deal-button');
    deal_click.addEventListener('click', deal);

    fold_first.addEventListener('click', function() { fold('first'); });
    fold_second.addEventListener('click', function() { fold('second'); });
    check_first.addEventListener('click', function() { check('first'); });
    check_second.addEventListener('click', function() { check('second'); });

    


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
        first_player_bank_value-=half;
        update_Amount();
    }
    function count_half_bet_2() {
        betAmount_2.textContent = half_2;
        second_player_bank_value-=half_2;
        update_Amount();
    }
    

    function count_bank_bet() {
        betAmount.textContent = table_bank;
        first_player_bank_value-=table_bank;
        update_Amount();    
    }
    function count_bank_bet_2() {
        betAmount_2.textContent = table_bank;
        second_player_bank_value-=table_bank;
        update_Amount();
    }


    let all_bank = first_player_bank_value;
    let all_bank_2 = second_player_bank_value;
    function all_in() {
        betAmount.textContent = all_bank;
        first_player_bank_value-=all_bank;
        update_Amount();
    }
    function all_in_2() {
        betAmount_2.textContent = all_bank_2;
        second_player_bank_value-=all_bank_2;
        update_Amount();
    }

    let check_tern_bet = 0;
    function bet() {
        if (parseFloat(betAmount.textContent) <= 0) return;
        else{
            if (first_player_bank_value - parseFloat(betAmount.textContent) < 0) {
                status_first_player.innerHTML = 'Недостатньо коштів';
            }
            else{
                first_player_bank_value-=parseFloat(betAmount.textContent);
                update_player_bet_value();

                table_bank += parseFloat(betAmount.textContent);
                betAmount.textContent = 0;
                update_bank();
                update_Amount();
                check_first_player_bet = true;
                check_tern_bet+=1;
            }
        }
    }

    function bet_2() {
        if (parseFloat(betAmount_2.textContent) <= 0) return;
        else{
            if (second_player_bank_value - parseFloat(betAmount_2.textContent) < 0) {
                status_second_player.innerHTML = 'Недостатньо коштів';
            }
            else{
                second_player_bank_value-=parseFloat(betAmount_2.textContent);
                update_player_bet_value();
                
                table_bank += parseFloat(betAmount_2.textContent);
                betAmount_2.textContent = 0;
                update_bank();
                update_Amount();
                check_second_player_bet = true;
                check_tern_bet+=1;
                
                River();
                Tern();
                Flop();
                if (check_tern_bet==8){
                    determineWinner()
                    allert('hi2')
                }

                
            }
        }
    }


    function fold(player) {
        if (player === 'first') {
            status_first_player.innerHTML = 'Фолд';
            status_second_player.innerHTML = 'Перемога другого гравця';
        } else {
            status_second_player.innerHTML = 'Фолд';
            status_first_player.innerHTML = 'Перемога першого гравця';
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
        player_deal_card(first_playerHand);
        player_deal_card(second_playerHand);
        player_deal_card(first_playerHand);
        player_deal_card(second_playerHand);
        combinations();
        combinations_2();
        // updateStatus('Гравці обирають послідовність вибору самостійно. Оберіть "Взяти" або "Зупинитися".');
        
        gameActive = true;
        
    }


    function player_deal_card(hand) {
        const card = deck.pop();
        const cardImage = document.createElement('img');
        cardImage.src = `${card.value}${card.suit}.png`;
        
        hand.appendChild(cardImage);
            
        if (hand === first_playerHand) {
            first_playerCards.push(card);
            first_cards_list_value.push(`${card.value}`);
            first_cards_list_suit.push(`${card.suit}`);
        } else if (hand === second_playerHand){
            second_playerCards.push(card);
            second_cards_list_value.push(`${card.value}`);
            second_cards_list_suit.push(`${card.suit}`);
    
        } else if (hand === dealer_flop_cardsHAND) {
            dealer_flop_cards.push(card);
            first_cards_list_value.push(`${card.value}`);
            first_cards_list_suit.push(`${card.suit}`);
            second_cards_list_value.push(`${card.value}`);
            second_cards_list_suit.push(`${card.suit}`);
                
        } else if (hand === dealer_tern_cardsHAND) {
            dealer_tern_cards.push(card);
            first_cards_list_value.push(`${card.value}`);
            first_cards_list_suit.push(`${card.suit}`);
            second_cards_list_value.push(`${card.value}`);
            second_cards_list_suit.push(`${card.suit}`);
    
        } else if (hand === dealer_river_cardsHAND) {
            dealer_river_cards.push(card);
            first_cards_list_value.push(`${card.value}`);
            first_cards_list_suit.push(`${card.suit}`);
            second_cards_list_value.push(`${card.value}`);
            second_cards_list_suit.push(`${card.suit}`);
        }
    }

    let first_cards_list_value = [];
    let first_cards_list_suit = [];
    let second_cards_list_value = [];
    let second_cards_list_suit = [];


    function Flop(){
        if (check_first_player_bet === true && check_second_player_bet === true && flop_game_active == false){
            player_deal_card(dealer_flop_cardsHAND);
            player_deal_card(dealer_flop_cardsHAND);
            player_deal_card(dealer_flop_cardsHAND);
            flop_game_active = true;
            check_first_player_bet_tern = true;
            check_second_player_bet_tern = true;
        }
        
        combinations();
        combinations_2();
        // updateStatus('Гравці обирають послідовність вибору самостійно. Оберіть "Взяти" або "Зупинитися".');
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
        combinations();
        combinations_2();
        // updateStatus('Гравці обирають послідовність вибору самостійно. Оберіть "Взяти" або "Зупинитися".');
    }

    let check_river = false;
    function River() {
        if (check_first_player_bet_river == true && check_second_player_bet_river == true && tern_game_active == true && check_river == false && check_tern_bet === 6) {
            player_deal_card(dealer_river_cardsHAND);
            check_river = true;
        }
        combinations();
        combinations_2();
    }


    // Функція для перетворення значень карт в числа
    function getCardValue(card) {
        if (card === '2') return 2;
        if (card === '3') return 3;
        if (card === '4') return 4;
        if (card === '5') return 5;
        if (card === '6') return 6;
        if (card === '7') return 7;
        if (card === '8') return 8;
        if (card === '9') return 9;
        if (card === '10') return 10;
        if (card === 'J') return 11;
        if (card === 'Q') return 12;
        if (card === 'K') return 13;
        if (card === 'A') return 14;
        return 0;
    }

    // Функція для визначення старшої карти
    function getHighCard(cards) {
        let maxCard = cards[0];
        for (let card of cards) {
            if (getCardValue(card) > getCardValue(maxCard)) {
                maxCard = card;
            }
        }
        return maxCard;
    }

    function isSequential(cards) {
        let values = cards.map(getCardValue).sort((a, b) => a - b);
        for (let i = 0; i < values.length - 1; i++) {
            if (values[i] + 1 !== values[i + 1]) {
                return false;
            }
        }
        return true;
    }
    
    var pairs = [];
    function combinations() {
        let counts_first_player = {};
        let counts_value_first_player = {};
        let suits = first_cards_list_suit;
        let values = first_cards_list_value.map(getCardValue).sort((a, b) => a - b);
    
        for (let suit of suits) {
            if (counts_first_player[suit]) {
                counts_first_player[suit]++;
            } else {
                counts_first_player[suit] = 1;
            }
        }
    
        for (let value of first_cards_list_value) {
            if (counts_value_first_player[value]) {
                counts_value_first_player[value]++;
            } else {
                counts_value_first_player[value] = 1;
            }
        }
    
        for (let suit in counts_first_player) {
            if (counts_first_player[suit] === 5) {
                if (isSequential(first_cards_list_value.filter((_, i) => first_cards_list_suit[i] === suit))) {
                    if (values.includes(10) && values.includes(11) && values.includes(12) && values.includes(13) && values.includes(14)) {
                        document.getElementById('status_first_player').innerHTML = `Роял-флеш ${suit}`;
                    } else {
                        document.getElementById('status_first_player').innerHTML = `Флеш-стріт ${suit}`;
                    }
                    return;
                } else {
                    document.getElementById('status_first_player').innerHTML = `Флеш ${suit}`;
                    return;
                }
            }
        }
    
        if (isSequential(first_cards_list_value) && flop_game_active == true) {
            document.getElementById('status_first_player').innerHTML = `Стріт`;
            return;
        }
    
        for (let value in counts_value_first_player) {
            if (counts_value_first_player[value] === 4) {
                document.getElementById('status_first_player').innerHTML = `Каре ${value}`;
                return;
            } else if (counts_value_first_player[value] === 3) {
                for (let value_1 in counts_value_first_player) {
                    if (counts_value_first_player[value_1] === 2 && value_1 !== value) {
                        document.getElementById('status_first_player').innerHTML = ` Фулл хаус (3) ${value} (2) ${value_1}`;
                        return;
                    }
                }
                document.getElementById('status_first_player').innerHTML = `Трійка ${value}`;
                return;
            } else if (counts_value_first_player[value] === 2) {
                pairs = [];
                for (let value in counts_value_first_player) {
                    if (counts_value_first_player[value] === 2) {
                        pairs.push(value);
                    }
                }

                if (pairs.length >= 2) {
                    pairs.sort((a, b) => index_cards.indexOf(b) - index_cards.indexOf(a));
                    document.getElementById('status_first_player').innerHTML = `Пара ${pairs[0]} та пара ${pairs[1]}`;
                    return;
                }

                if (pairs.length === 1) {
                    document.getElementById('status_first_player').innerHTML = `Пара ${pairs[0]}`;
                    return;
                }
            }
        }
    
        const highCard = getHighCard(first_cards_list_value);
        document.getElementById('status_first_player').innerHTML = `Старша карта: ${highCard}`;
    }
    
    var pairs_2 = [];

    function combinations_2() {
        let counts_second_player = {};
        let counts_value_second_player = {};
        let suits_2 = second_cards_list_suit;
        let values_2 = second_cards_list_value.map(getCardValue).sort((a, b) => a - b);
    
        for (let suit_2 of suits_2) {
            if (counts_second_player[suit_2]) {
                counts_second_player[suit_2]++;
            } else {
                counts_second_player[suit_2] = 1;
            }
        }
    
        for (let value_2 of second_cards_list_value) {
            if (counts_value_second_player[value_2]) {
                counts_value_second_player[value_2]++;
            } else {
                counts_value_second_player[value_2] = 1;
            }
        }
    
        for (let suit_2 in counts_second_player) {
            if (counts_second_player[suit_2] === 5) {
                if (isSequential(second_cards_list_value.filter((_, i) => second_cards_list_suit[i] === suit_2))) {
                    if (values_2.includes(10) && values_2.includes(11) && values_2.includes(12) && values_2.includes(13) && values_2.includes(14)) {
                        document.getElementById('status_second_player').innerHTML = `Роял-флеш ${suit_2}`;
                    } else {
                        document.getElementById('status_second_player').innerHTML = `Флеш-стріт ${suit_2}`;
                    }
                    return;
                } else {
                    document.getElementById('status_second_player').innerHTML = `Флеш ${suit_2}`;
                    return;
                }
            }
        }
    
        if (isSequential(second_cards_list_value) && flop_game_active == true) {
            document.getElementById('status_second_player').innerHTML = `Стріт`;
            return;
        }
    
        for (let value_2 in counts_value_second_player) {
            if (counts_value_second_player[value_2] === 4) {
                document.getElementById('status_second_player').innerHTML = `Каре ${value_2}`;
                return;
            } else if (counts_value_second_player[value_2] === 3) {
                for (let value_11 in counts_value_second_player) {
                    if (counts_value_second_player[value_11] === 2 && value_11 !== value_2) {
                        document.getElementById('status_second_player').innerHTML = ` Фулл хаус (3) ${value_2} (2) ${value_11}`;
                        return;
                    }
                }
                document.getElementById('status_second_player').innerHTML = `Трійка ${value_2}`;
                return;
            } else if (counts_value_second_player[value_2] === 2) {
                pairs_2 = [];
                for (let value in counts_value_second_player) {
                    if (counts_value_second_player[value] === 2) {
                        pairs_2.push(value);
                    }
                }

                if (pairs_2.length >= 2) {
                    pairs_2.sort((a, b) => index_cards.indexOf(b) - index_cards.indexOf(a));
                    document.getElementById('status_second_player').innerHTML = `Пара ${pairs_2[0]} та пара ${pairs_2[1]}`;
                    return;
                }

                if (pairs_2.length === 1) {
                    document.getElementById('status_second_player').innerHTML = `Пара ${pairs_2[0]}`;
                    return;
                }
                
            }
        }
    
        const highCard_2 = getHighCard(second_cards_list_value);
        document.getElementById('status_second_player').innerHTML = `Старша карта: ${highCard_2}`;
    }

    function check(player) {
        if (player === 'first') {
            check_first_player_bet = true;
        } else {
            check_second_player_bet = true;
        }
    
        if (check_first_player_bet && check_second_player_bet) {
            if (!flop_game_active) {
                check_tern_bet = 2;
                Flop();
            } else if (!tern_game_active) {
                check_tern_bet = 4;
                Tern();
                
            } else if (!check_river) {
                check_tern_bet = 6;
                River();
            } else if (check_tern_bet = 6){
                // Визначення переможця після ріверу
                combinations();
                combinations_2();
                determineWinner();
            }
            // Скидаємо стани чеків для наступного раунду
            check_first_player_bet = false;
            check_second_player_bet = false;
        }
    }
    // function determineWinner() {
    //     const firstPlayerStatus = document.getElementById('status_first_player').innerHTML;
    //     const secondPlayerStatus = document.getElementById('status_second_player').innerHTML;

    //     const handRanks = {
    //         'Роял-флеш': 10,
    //         'Флеш-стріт': 9,
    //         'Каре': 8,
    //         'Фулл хаус': 7,
    //         'Флеш': 6,
    //         'Стріт': 5,
    //         'Трійка': 4,
    //         'Пара': 3,
    //         'Старша карта': 1
    //     };

    //     let firstPlayerRank = 0;
    //     let secondPlayerRank = 0;

    //     // 
    //     for (let rank in handRanks) {
    //         if (firstPlayerStatus.includes(rank)) {
    //             firstPlayerRank = handRanks[rank];
    //         }
    //         if (secondPlayerStatus.includes(rank)) {
    //             secondPlayerRank = handRanks[rank];
    //         }
    //     }

    //     //
    //     if (firstPlayerRank > secondPlayerRank) {
    //         alert('Перемога першого гравця');
    //     } else if (secondPlayerRank > firstPlayerRank) {
    //         alert('Перемога другого гравця');
    //     } else {
    //         if (getCardValue(pairs[0]) > getCardValue(pairs_2[0])) {
    //             alert('Перемога першого гравця');
    //             alert('hi')
    //         }
    //         else if (getCardValue(pairs_2[0]) > getCardValue(pairs[0])) {
    //             alert('Перемога другого гравця');
    //             alert('hi')
    //         }
    //         else{
    //             alert('Нічия');
    //         } 
    //     }
    // }


    function getCardValue1(card) {
        const values = {
            '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
            'J': 11, 'Q': 12, 'K': 13, 'A': 14
        };
        return values[card];
    }
    
    function determineWinner() {
        const firstPlayerStatus = document.getElementById('status_first_player').innerHTML;
        const secondPlayerStatus = document.getElementById('status_second_player').innerHTML;
    
        const handRanks = {
            'Роял-флеш': 10,
            'Флеш-стріт': 9,
            'Каре': 8,
            'Фулл хаус': 7,
            'Флеш': 6,
            'Стріт': 5,
            'Трійка': 4,
            'Пара': 3,
            'Старша карта': 1
        };
    
        let firstPlayerRank = 0;
        let secondPlayerRank = 0;
        
        for (let rank in handRanks) {
            if (firstPlayerStatus.includes(rank)) {
                firstPlayerRank = handRanks[rank];
            }
            if (secondPlayerStatus.includes(rank)) {
                secondPlayerRank = handRanks[rank];
            }
        }
    
        // Визначаємо переможця
        if (firstPlayerRank > secondPlayerRank) {
            alert('Переможець: Перший гравець');
        } else if (firstPlayerRank < secondPlayerRank) {
            alert('Переможець: Другий гравець');
        } else {
            // Якщо комбінації однакові, порівнюємо карти
            if (firstPlayerRank === 3) { // Пара
                const firstPlayerPairValue = getCardValue1(firstPlayerStatus.match(/2|3|4|5|6|7|8|9|10|J|Q|K|A/)[0]);
                const secondPlayerPairValue = getCardValue1(secondPlayerStatus.match(/2|3|4|5|6|7|8|9|10|J|Q|K|A/)[0]);
    
                if (firstPlayerPairValue > secondPlayerPairValue) {
                    alert('Переможець: Перший гравець');
                } else if (firstPlayerPairValue < secondPlayerPairValue) {
                    alert('Переможець: Другий гравець');
                } else {
                    alert('Нічия!');
                }
            } else {
                alert('Нічия!');
            }
        }
    }
    
    
});