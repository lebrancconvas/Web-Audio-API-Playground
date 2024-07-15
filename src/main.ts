import { note, midiToFreq } from './utils/note';
import { pianoRoll } from './utils/pianoRoll';

let play = document.querySelector('#play');
let pause = document.querySelector('#pause');

let ctx = new AudioContext();
let osc = ctx.createOscillator();
osc.connect(ctx.destination);

const bpm = 180;

const notes = [
  pianoRoll['C'],
  pianoRoll['D'],
  pianoRoll['G'],
  pianoRoll['F#'],
  pianoRoll['F#'],
  pianoRoll['G'],
  pianoRoll['D'],
  pianoRoll['C#']
];

// Control
play?.addEventListener('click', () => {
  let beat = 60 / bpm;

  for(let i = 0; i < notes.length; i++) {
    note(ctx, midiToFreq(notes[i]), beat * i, 0.1);
  }
});

// pause?.addEventListener('click', () => {
//   osc.stop();
// });
