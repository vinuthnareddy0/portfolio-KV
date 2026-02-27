/* game.js — Tic Tac Toe with unbeatable minimax AI */

let state  = Array(9).fill(null);
let over   = false;
let scores = { X: 0, O: 0, D: 0 };

const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6],             // diagonals
];

/* ---- helpers ---- */

function checkWin(b, p) {
  return lines.find(([a, c, d]) => b[a] === p && b[c] === p && b[d] === p) || null;
}

function minimax(b, isMax, depth) {
  if (checkWin(b, 'O')) return 10 - depth;
  if (checkWin(b, 'X')) return depth - 10;
  if (b.every(Boolean)) return 0;

  let best = isMax ? -Infinity : Infinity;
  b.forEach((v, i) => {
    if (!v) {
      b[i] = isMax ? 'O' : 'X';
      const val = minimax(b, !isMax, depth + 1);
      b[i] = null;
      best = isMax ? Math.max(best, val) : Math.min(best, val);
    }
  });
  return best;
}

function bestMove() {
  let best = -Infinity, idx = -1;
  state.forEach((v, i) => {
    if (!v) {
      state[i] = 'O';
      const val = minimax(state, false, 0);
      state[i] = null;
      if (val > best) { best = val; idx = i; }
    }
  });
  return idx;
}

/* ---- DOM ---- */

function render(winLine) {
  document.querySelectorAll('.ttt-cell').forEach((c, i) => {
    c.textContent   = state[i] || '';
    c.className     = 'ttt-cell';
    if (state[i])             c.classList.add(state[i].toLowerCase(), 'taken');
    if (winLine?.includes(i)) c.classList.add('win-cell');
  });
  document.getElementById('scoreX').textContent = scores.X;
  document.getElementById('scoreO').textContent = scores.O;
  document.getElementById('scoreD').textContent = scores.D;
}

function setStatus(s) {
  document.getElementById('status').textContent = s;
}

/* ---- game logic ---- */

function handleClick(i) {
  if (over || state[i]) return;

  state[i] = 'X';
  const wl = checkWin(state, 'X');
  render(wl);

  if (wl)               { scores.X++; render(wl); setStatus('You win.');         over = true; return; }
  if (state.every(Boolean)) { scores.D++; render();   setStatus('Draw.');              over = true; return; }

  setStatus('Bot thinking...');

  setTimeout(() => {
    const bi  = bestMove();
    state[bi] = 'O';
    const wl2 = checkWin(state, 'O');
    render(wl2);

    if (wl2)               { scores.O++; render(wl2); setStatus('Bot wins. Try again.'); over = true; return; }
    if (state.every(Boolean)) { scores.D++; render();   setStatus('Draw.');                   over = true; return; }

    setStatus('Your turn');
  }, 400);
}

function resetGame() {
  state = Array(9).fill(null);
  over  = false;
  render();
  setStatus('Your turn');
}

/* ---- init ---- */

document.querySelectorAll('.ttt-cell').forEach(c => {
  c.addEventListener('click', () => handleClick(+c.dataset.i));
});
