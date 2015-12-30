var $board = document.getElementById("game-board");
var cards = ['A','B','C','D','E','F','G','H','I','J','K','L'];
	cards = cards.concat(cards);
var cardsValues = [];
var selectedCards = [];
var cardsFlipped;
var output;

var cardsShuffle = function(cards){
    var i = cards.length
    var j;
    var temp;

    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = cards[j];
        cards[j] = cards[i];
        cards[i] = temp;
    }

    return cards;
}

var onclickCard = function(){
	var $cards = document.querySelectorAll(".card");

	for (var i = 0, len = $cards.length; i < len; i++) {
	    $cards[i].addEventListener('click', function(event) {
	        toFlipUp(this, this.getAttribute('data-value'));
	    });
	}
}

var createCards = function(cards){
	for(var i = 0; i < cards.length; i++){
		output += '<div class="card" id="card-'+i+'" data-value="'+cards[i]+'"></div>';
	}

	$board.innerHTML = output;
	onclickCard();
}

var initBoard = function(){
	cardsFlipped = 0;
	output = '';
	cards = cardsShuffle(cards);

	createCards(cards);
}

var pairMade = function(){
	cardsFlipped += 2;

	cardsValues = [];
	selectedCards = [];
	if(cardsFlipped == cards.length){
		alert("O jogo acabou!!");
		$board.innerHTML = "";
		initBoard();
	}
}

var styleFlipDown = function(card){
	card.style.background = '#000';
    card.innerHTML = "";
}

var toFlipDown = function(){
    var card1 = document.getElementById(selectedCards[0]);
    var card2 = document.getElementById(selectedCards[1]);

    styleFlipDown(card1);
    styleFlipDown(card2);

    cardsValues = [];
    selectedCards = [];
}

var toFlipUp = function(card, value){
	if(card.innerHTML == "" && cardsValues.length < 2){
		card.style.background = '#fff';
		card.innerHTML = value;
		
		if(cardsValues.length < 2){
			cardsValues.push(value);
			selectedCards.push(card.id);
		} else if(cardsValues.length == 2){
			if(cardsValues[0] == cardsValues[1]){
				pairMade();
			} else {
				setTimeout(toFlipDown, 800);
			}
		}
	}
}

initBoard();