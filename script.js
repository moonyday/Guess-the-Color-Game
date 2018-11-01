var winner = document.querySelector('h2');
var header = document.querySelector('header');
var message = document.querySelector('h1');
var again = document.querySelector('.again');


function init (){

	var a = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);
	var c = Math.floor(Math.random()* 256);




	winner.textContent = 'rgb(' + a + ','+ " " + b + ','+ " " + c + ')';

	var squares = document.querySelectorAll('.square');

	for (var i=0; i<squares.length; i++){
		squares[i].style.background = 'rgb(' + Math.floor(Math.random()* 256) + ','+ Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) + ')';
	}

	var x = Math.floor(Math.random()* squares.length);

	squares[x].style.background = winner.textContent;



	for (var i=0; i<squares.length; i++){
		squares[i].addEventListener('click', function(){
			if (this.style.background === winner.textContent){
				header.style.background = winner.textContent;
				message.textContent = "Congrats! You won!"
				again.textContent = "Play again?"
				for (var i=0; i< squares.length; i++){
					squares[i].style.background = winner.textContent;
				}
			} else {
				message.textContent = "Oops, try again!"
				this.style.background = '#0f2027';
			}

		})
	}
}

init();

again.addEventListener('click', function(){
	init();
	this.textContent = "New Colors";
	message.textContent = "guess the color!";
	header.style.background = "#2C5364";
});

