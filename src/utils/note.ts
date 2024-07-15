export function note(ctx: AudioContext, freq: number, wait: number, duration: number) {
  // Synth Components Setting.
  let osc = ctx.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.value = freq;
  let gain = ctx.createGain();
  gain.gain.value = 0.5;

  // Synth Pipeline.
  osc.connect(gain);
  gain.connect(ctx.destination);

  // Sound Control.
  osc.start(ctx.currentTime + wait);
  osc.stop(ctx.currentTime + wait + duration);
};

export function midiToFreq(n: number) {
  return 440 * Math.pow(2, (n - 69) / 12);
}
