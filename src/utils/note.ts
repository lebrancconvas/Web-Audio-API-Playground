import { CONFIG } from "../config";
export function note(ctx: AudioContext, freq: number, wait: number) {
  // Synth Components Setting.
  let osc = ctx.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.value = freq;
  let gain = ctx.createGain();
  gain.gain.value = CONFIG.volume / 100;

  // Synth Pipeline.
  osc.connect(gain);
  gain.connect(ctx.destination);

  // Sound Control.
  osc.start(ctx.currentTime + wait);
  osc.stop(ctx.currentTime + wait + CONFIG.duration);
};

export function midiToFreq(n: number, octave: number) {
  return 440 * Math.pow(2, (((n + (octave * 12)) - 69) / 12));
};
