const { Fretboard } = require('@moonwave99/fretboard.js');

const fretboard = new Fretboard({
  el: '#fretboard',
  fretColor: 'blue',
  dotFill: 'red',
  fretCount: 24
});

// this would render an open C chord
fretboard.setDots([
  {
    string: 6,
    fret: 0,
  },
  {
    string: 6,
    fret: 12,
  },
  {
    string: 6,
    fret: 24,
  },
  {
    string: 5,
    fret: 7,
  },
  {
    string: 5,
    fret: 19,
  },
  {
    string: 4,
    fret: 2,
  },
  {
    string: 4,
    fret: 14,
  },
  {
    string: 3,
    fret: 9,
  },
  {
    string: 3,
    fret: 21,
  },
  {
    string: 2,
    fret: 5,
  },
  {
    string: 2,
    fret: 17,
  },
  {
    string: 1,
    fret: 0,
  },
  {
    string: 1,
    fret: 12,
  },
  {
    string: 1,
    fret: 24,
  },
]);

fretboard.render();
