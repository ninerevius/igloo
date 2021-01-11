// Bron: https://www.youtube.com/watch?v=E6J2fosujWQ
//Dit stukje javascript is voor de knoppen op de pagina die de omgeving kunnen beïnvloeden. 
let btnnacht = document.querySelector('#nacht');
let btndag = document.querySelector('#dag');
let btnavond = document.querySelector('#avond');
let btnvakantie = document.querySelector('#Vakantie');

//Op basis van de feedback heb ik .style veranderd naar classlist.add, hierdoor heb ik
// classlist.remove moeten toevoegen om ervoor te zorgen dat de andere knoppen niet in de 
// weg zitten van de actie die ik wil uitvoeren. 
btnnacht.addEventListener('click', () => {
    document.body.classList.add('nacht');
    document.body.classList.remove ('dag');
    document.body.classList.remove ('avond');
    document.body.classList.remove ('vakantie');

});

btndag.addEventListener('click', () => {
    document.body.classList.add('dag');
    document.body.classList.remove ('nacht');
    document.body.classList.remove ('avond');
    document.body.classList.remove ('vakantie');
});

btnavond.addEventListener('click', () => {
    document.body.classList.add('avond'); 
    document.body.classList.remove ('dag');
    document.body.classList.remove ('nacht');
    document.body.classList.remove ('vakantie');
});

btnvakantie.addEventListener('click', () => {
    document.body.classList.add('vakantie'); 
    document.body.classList.remove ('dag');
    document.body.classList.remove ('avond');
    document.body.classList.remove ('nacht');
});

//Dit zijn de knoppen die Igloo van humeur laten veranderen. 
//Aller eerst wordt de html vertaald naar een variabel in de javascript. 
// Het declareren van de DOM objecten
var DeWortel = document.querySelector('#OranjeWortel');
var DeVis = document.querySelector('#DooieVis');
var IGNeutraal = document.querySelector('#IGB');
var Violin = document.querySelector('#Viool');
var Mp3Viool = document.querySelector('#VioolMuziek');
var Schelden = document.querySelector('#Vloeken');
var Mp3RotHond = document.querySelector('#RotHond');
var Mp3vakantie = document.querySelector('#Happytunes');


// Met behulp van deze functies wordt vastgelegd welke afbeelding wordt ingezet bij welke functie. 
// om zo Igloo's humeur te bepalen.
function vies() {
    IGNeutraal.src = 'IMG/IGhatewortel.png';
}

function normaal() {
    IGNeutraal.src = 'IMG/IGblank.png';
}

function love() {
    IGNeutraal.src = 'IMG/IGlovevis.png';
}

function blij() {
    IGNeutraal.src = 'IMG/hover.png';
}

function blink() {
    IGNeutraal.src = 'IMG/eyesclosed.png';
}

function boos() {
    IGNeutraal.src = 'IMG/mad.png';
    Mp3RotHond.play();
    Mp3RotHond.volume = 0.6;
}

function sleep() {
    IGNeutraal.src = 'IMG/zzz.png';
}

// Bij deze functie zit een audio gekoppeld, wanneer deze wordt aangeroepen zal deze beginnen met afspelen.
function Vioolspelen() {
    Mp3Viool.play();
    Mp3Viool.volume = 0.6;
    IGNeutraal.src = 'IMG/sad.png';
}

function chill() {
    IGNeutraal.src = 'IMG/ChilleIgloo.png';
    Mp3vakantie.play();
    Mp3vakantie.volume = 0.4;
}

// Bron: https://www.youtube.com/watch?v=1xEfqgElMsY hiermee heb ik de mouseenter & mouseleave mee verwerkt.
// https://www.youtube.com/watch?v=s9wW2PpJsmQ de link voor het proberen om hem te laten in een Loop () te laten gaan.

//Hierin wordt vastgesteld met welk event de functie wordt opgeroepen.
// Oftewel, de funcite wordt gekoppeld aan een event. 
DeWortel.addEventListener('dragend', vies)
IGNeutraal.addEventListener('click', normaal)
DeVis.addEventListener('dragend', love)
IGNeutraal.addEventListener('mouseenter', blink)
IGNeutraal.addEventListener('mouseleave', normaal)
Violin.addEventListener('click', Vioolspelen)
Schelden.addEventListener('click', boos)
btnnacht.addEventListener('click', sleep)
btnvakantie.addEventListener('click', chill)
IGNeutraal.addEventListener('dblclick', blij)
IGNeutraal.addEventListener('click', blij)


// Formulier om kennis te maken met Igloo
// Het vaststellen van de kennismaking. 
console.log('Voorstellen aan Igloo. ');

// Variabelen aanmaken om DOM te manipuleren
var form = document.querySelector('#wiebenjijform');
var antwoordElement = document.querySelector('#wiebenjijantwoord');

// Functie aanmaken voor de kennismaking
function Kennismaking( event ) {
	event.preventDefault();
	console.log('stel jezelf voor');

// Variabelen aanmaken om te manipuleren in de DOM
	var voornaam = form.elements['voornaam'].value ;  
	var achternaam = form.elements['achternaam'].value;
	var dayrate = Number(form.elements['dayrate'].value) ;
	var verbetering = dayrate + 5 ;

    var antwoordTekst = 'Hey daar ' + voornaam  +' ' + achternaam +'.'; 
	antwoordTekst += ' Nou een ' + verbetering ;

// Met behulp van de if, else statements kan men bepalen om op andere manieren te reageren.
// Wanneer de value lager ligt dan 5 zal Igloo reageren met de 'if' statement.
// Wanneer de value hoger ligt dan 5 zal hij met de 'else' satement reageren. 
	if ( dayrate <= 5 ) {
		antwoordTekst += ' Klinkt toch veel beter?'; 
	} else {
		antwoordTekst += ' is wat ik mijn dag vandaag geef!'; 
	}

	antwoordElement.textContent = antwoordTekst ;
}

// De functie houdt in dat de tekst 'Hey wie ben jij?' zal verschijnen wanneer de resetKennis wordt opgeroepen.
function resetIgloo() {
	antwoordElement.textContent = 'Hey wie ben jij?' ;
}

// Wanneer er op reset of submit wordt gedrukt zal de bijhorende functie worden aangeroepen. 
form.addEventListener('submit', Kennismaking);
form.addEventListener('reset', resetIgloo);

//Bron: https://www.youtube.com/watch?v=_ARGxz_cU_o
//Met de interval wordt bepaald hoe vaak een sneeuwvlok valt.
setInterval(maakSneeuwvlok, 80);

// In de function wordt de sneeuwvlok naar de DOM gehaald.
// De sneeuwvlok wordt aangewezen binnen het scherm te vallen (window.innerWidth).
// De sneeuwvlok valt op verschillende tijden, tussen de 3 en 5 seconden kan er een vlok 'random' vallen.
// Opacity van de sneeuwvlok varrieert 'random'.
// De grootte van de sneeuwvlokken is 20 x 20 px.
// Hiermee wordt er een knooppunt toegevoegd van het laatste child element. 
// Met setTimeout wordt behaald hoe snel de sneeuwvlokken verdwijnen van het scherm
function maakSneeuwvlok() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 5 + 's';
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 20 + 20 + 'px';
	
	document.body.appendChild(snow_flake);
	
	setTimeout(() => {
		snow_flake.remove();
    }, 3000)
}


