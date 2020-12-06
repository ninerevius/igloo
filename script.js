// Bron: https://www.youtube.com/watch?v=E6J2fosujWQ
//Dit had ik om af te kijken ^
let btnnacht = document.querySelector('#nacht');
let btndag = document.querySelector('#dag');

btnnacht.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('IMG/Nacht-100.jpg')"
});

btndag.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('IMG/Dag-100.jpg')"
});

var DeWortel = document.querySelector('#OranjeWortel');
var DeVis = document.querySelector('#DooieVis');
var IGNeutraal = document.querySelector('#IGB');
var Violin = document.querySelector('#Viool');
var Mp3Viool = document.querySelector('#VioolMuziek');
var Schelden = document.querySelector('#Vloeken');
var Mp3RotHond = document.querySelector('#RotHond');

function vies( ) {
    IGNeutraal.src = 'IMG/IGhatewortel.png';
}

function normaal () {
    IGNeutraal.src = 'IMG/IGblank.png';
}

function love () {
    IGNeutraal.src = 'IMG/IGlovevis.png';
}

function blij () {
    IGNeutraal.src = 'IMG/hover.png';
}

function Vioolspelen(  ) {
    Mp3Viool.play();
    Mp3Viool.volume = 0.6;
    IGNeutraal.src = 'IMG/sad.png';
}

function boos () {
    IGNeutraal.src = 'IMG/mad.png';
    Mp3RotHond.play();
    Mp3RotHond.volume = 0.6;
}

// Bron: https://www.youtube.com/watch?v=1xEfqgElMsY hiermee heb ik de mouseenter & mouseleave mee verwerkt.
// https://www.youtube.com/watch?v=s9wW2PpJsmQ de link voor het proberen om hem te laten in een Loop () te laten gaan.

DeWortel.addEventListener('dragend', vies) 
IGNeutraal.addEventListener('click', normaal) 
DeVis.addEventListener('dragend', love)
IGNeutraal.addEventListener('mouseenter', blij)
IGNeutraal.addEventListener('mouseleave', normaal)
Violin.addEventListener ('click', Vioolspelen)
Schelden.addEventListener('click', boos) 
