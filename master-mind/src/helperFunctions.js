export function Validate(fas, gue) {
  const fasit = fas.slice();
  const guess = gue.slice();
  //answer = [riktig farge riktig plass, riktig farge feil plass, feil plass og farge]
  const answer = Array(3).fill(0);
  var i;
  for (i = 0; i < fasit.length; i++) {
    if (guess[i] === fasit[i]) {
      answer[0] = answer[0] + 1;
      fasit[i] = null;
      guess[i] = null;
    }
  }
  for (i = 0; i < fasit.length; i++) {
    if (guess[i] && fasit.includes(guess[i])) {
      answer[1] = answer[1] + 1;
      const idx = fasit.indexOf(guess[i]);
      fasit[idx] = null;
    }
  }
  answer[2] = 4 - answer[0] - answer[1];
  return answer;
}

export function ValidateTo(fas, gue) {}
