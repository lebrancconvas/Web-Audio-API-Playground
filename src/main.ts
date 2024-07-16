import { note, midiToFreq } from './utils/note';
import { pianoRoll } from './utils/pianoRoll';
import { notes } from './play';
import { CONFIG } from './config';

let play = document.querySelector('#play');
let pause = document.querySelector('#pause');

let ctx = new AudioContext();
let osc = ctx.createOscillator();
osc.connect(ctx.destination);

const bpm = CONFIG.bpm;

// Control
play?.addEventListener('click', () => {
  let beat = 60 / bpm;

  for(let i = 0; i < notes.length; i++) {
    note(ctx, midiToFreq(pianoRoll[notes[i].note], notes[i].octave), beat * i);
  }
});

pause?.addEventListener('click', () => {
  osc.stop();
});
