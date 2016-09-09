$(document).ready(function() {

	var quotes = [
		{ 'author': 'Ralph Waldo Emerson',
			'quote': '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."'
		},
		{ 'author': 'Seneca',
			'quote': '"One of the most beautiful qualities of true friendship is to understand and to be understood."'
		},
		{ 'author': 'Albert Einstein',
			'quote': '"The important thing is not to stop questioning. Curiosity has its own reason for existing."'
		},
		{ 'author': 'Edsger Dijkstra',
			'quote': '"Simplicity is prerequisite for reliability."'
		},
		{ 'author': 'Charles M. Schulz',
			'quote': '“All you need is love. But a little chocolate now and then doesn\'t hurt.”'
		},
		{ 'author': 'Dr. Seuss',
			'quote': '“Today you are You, that is truer than true. There is no one alive who is Youer than You.”'
		},
		{ 'author': 'Abraham Lincoln',
			'quote': '“Folks are usually about as happy as they make their minds up to be.”'
		},
		{ 'author': 'Walter M. Miller Jr.',
			'quote': '“You don’t have a soul, Doctor. You are a soul. You have a body, temporarily.” '
		},
		{ 'author': 'J.K. Rowling',
			'quote': '“To the well-organized mind, death is but the next great adventure.” '
		},
		{ 'author': 'Nicholas Sparks',
			'quote': '“Love is like the wind, you can\'t see it but you can feel it.” '
		},
		{ 'author': 'Theodore Roosevelt',
			'quote': '“Do what you can, with what you have, where you are.” '
		},
		{ 'author': 'George Bernard Shaw',
			'quote': '“Life isn\'t about finding yourself. Life is about creating yourself.”'
		},
		{ 'author': 'Winston S. Churchill',
			'quote': '“Success is not final, failure is not fatal: it is the courage to continue that counts.” '
		},
		{ 'author': 'Amy Tan',
			'quote': '“If you can\'t change your fate, change your attitude.” '
		},																		
		{ 'author': 'Mahatma Gandhi',
			'quote': '"Live as if you were to die tomorrow. Learn as if you were to live forever."'
		},
		{ 'author': 'Oscar Wilde',
			'quote': '"To live is the rarest thing in the world. Most people exist, that is all."'
		},
		{ 'author': 'Martin Luther King Jr.',
			'quote': '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."'
		},
		{ 'author': 'Michel de Montaigne',
			'quote': '“The most certain sign of wisdom is cheerfulness.” '
		},
		{ 'author': 'Albert Einstein',
			'quote': '“Logic will get you from A to Z; imagination will get you everywhere.”'
		},
		{ 'author': 'Thomas Edison',
			'quote': '"I have not failed. I\'ve just found 10,000 ways that won\'t work."'
		},
		{ 'author': 'William Shakespear',
			'quote': '"Love all, trust a few, do wrong to none."'
		},
		{ 'author': 'Ralpha Waldo Emerson',
			'quote': '"For every minute you are angry you lose sixty seconds of happiness."'
		},
		{ 'author': 'Anais Nin',
			'quote': '"We don\'t see things as they are, we see them as we are."'
		},
		{ 'author': 'Scott Westerfeld',
			'quote': '“The human heart is a strange vessel. Love and hatred can exist side by side.” '
		},
		{ 'author': 'Andy Li',
			'quote': '"Never be untrue to your inner being; the emotional waves of your spiritual force will always tell signs, feel the truth.."'
		}																										
	];

	var random = Math.floor(Math.random() * 20);
	// $('.quote').html(quotes[random].quote);
	// $('.author p').html(quotes[random].author);

	// Default quotation on page load:
	$('.quote').html(quotes[2].quote);
	$('.author p').html(quotes[2].author);


	var memArray = [];
	memArray.push(2);

	var reposition = function(quote) {
		// Align the spacing between the <hr/> elements and the quote
		// to aesthetically position the arrow buttons left and right.
		if (quote.length <= 63) {
			$('.quote').css(
				{ 
					'padding-top': '20px',
					'padding-bottom': '50px'
				}
			);
		} else {
			$('.quote').css(
				{ 
					'padding-top': '5px',
					'padding-bottom': '5px'
				}
			);
		}
	};
	reposition(quotes[random].quote);

	var leftClicks = 0;
	$('.left-arrow-button').on('click', function() {
		if (memArray.length === 1) {
			return;
		} else {
			leftClicks++;
			$('.quote').html(quotes[memArray[memArray.length-1 - leftClicks]].quote);
			$('.author-name').html(quotes[memArray[memArray.length-1 - leftClicks]].author);
			reposition(quotes[memArray[memArray.length-1 - leftClicks]].quote);			
		}
	});	

	$('.right-arrow-button').on('click', function() {

		// Replace quotations from memArray before using new random quotes.
		if (leftClicks > 0) {
			leftClicks--;	
			$('.quote').html(quotes[memArray[memArray.length-1 - leftClicks]].quote);
			$('.author-name').html(quotes[memArray[memArray.length-1 - leftClicks]].author);
			reposition(quotes[memArray[memArray.length-1 - leftClicks]].quote);
			return;			
		}

		while (random === memArray[memArray.length - 1]) {
			random = Math.floor(Math.random() * 20);
		}
		$('.quote').html(quotes[random].quote);
		$('.author-name').html(quotes[random].author);
		reposition(quotes[random].quote);
		memArray.push(random);
		random = Math.floor(Math.random() * 20);		
	});



	// Shift arrows left and right on mouseover.
	$('.right-arrow-button').on('mouseover', function() {
		$(this).css({'padding-left': '42px'});
	}).
	on('mouseleave', function() {
		$(this).css({'padding-left': '39px'});
	});

	$('.left-arrow-button').on('mouseover', function() {
		$(this).css({'padding-left': '50px'});
	}).
	on('mouseleave', function() {
		$(this).css({'padding-left': '53px'});
	});

	// Change background image on mouseover light bulb icon.
	var backgroundCounter = 0;
	var horizontal;
	var vertical = -280;
	$('#light-bulb-image').on('mouseover', function() {
		
		var backgroundImage;
		var lightBulbImage;

		if (backgroundCounter === 0) {
			backgroundImage = 'url("./images/milky-way-night.jpg")';
			lightBulbImage = "./images/night-light-bulb.gif";
			$('.quotation').css({'color': 'white'});
			$('.author').css({'color': 'white'});
			$('body').css({'background-position': '-500px -280px'});
			horizontal = -500;
			vertical = -148;
			backgroundCounter = 1;
		} else {
			backgroundImage = 'url("./images/green-grass-sky-bg.jpg")';
			lightBulbImage = "./images/light-bulb.gif";
			$('.quotation').css({'color': 'black'});
			$('.author').css({'color': 'white'});
			$('body').css({'background-position': '-250px -280px'});
			horizontal = 0;
			vertical = -280;		
			backgroundCounter = 0;
		}
		
		$('body').css({'background-image': backgroundImage});
		$('#light-bulb-image').attr('src', lightBulbImage);
	});

	var backgroundPan = function() {
		if (backgroundCounter === 0) {
			if (vertical === -140) {
				return;
			} else {
				$('body').css({'background-position': horizontal-- + 'px ' + vertical++ + 'px'});
			}
		} else {
			if (vertical === 0) {
				return;
			} else {
				$('body').css({'background-position': horizontal++ + 'px ' + vertical++ + 'px'});
			}
		}
	};
  
	setInterval(backgroundPan, 60);
});