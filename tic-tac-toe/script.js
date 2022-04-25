'use strict'

const block = document.querySelectorAll('.game__item');
let calc = 0;
let xSum = [];
let oSum = [];
const winComb = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8],
	[0, 3, 6], [1, 4, 7], [2, 5, 8],
	[0, 4, 8], [2, 4, 6],
];

for (let i = 0; i < block.length; i++) {
	block[i].onclick = function () {
		if (block[i].textContent === 'X' || block[i].textContent === '0') '';
		else if (calc % 2 === 0) {
			block[i].textContent = 'X';
			xSum.push(i);
			resX();
			calc++;
		}
		else if (calc % 2 === 1) {
			block[i].textContent = '0';
			oSum.push(i);
			resO();
			calc++;
		}
		if (calc === 9) start(0);
	}
}

function resX() {
	let res = false;
	winComb.forEach(winAll => {
		if (xSum.includes(winAll[0]) && xSum.includes(winAll[1]) && xSum.includes(winAll[2])) res = true;
	})
	if (res === true) {
		gameResult('X');
	};
}

function resO() {
	let res = false;
	winComb.forEach(winAll => {
		if (oSum.includes(winAll[0]) && oSum.includes(winAll[1]) && oSum.includes(winAll[2])) res = true;
	})
	if (res === true) {
		gameResult('0');
	};
}

function gameResult(winner) {
	if (winner === 'X') {
		document.querySelector('#wx').textContent = +document.querySelector('#wx').textContent + 1;
		winAnimation('winnerone');
	}
	else if (winner === '0') {
		document.querySelector('#wo').textContent = +document.querySelector('#wo').textContent + 1;
		winAnimation('winnertwo');
	}
	start(-1);
}

function winAnimation(winner) {
		document.querySelector('body').classList.add(winner);
		document.querySelector('body').classList.add(winner);
	setTimeout(rem, 500);
	function rem() {
		document.querySelector('body').classList.remove(winner);
	}
}

function start(n) {
	calc = n;
	xSum = [];
	oSum = [];
	for (let i = 0; i < block.length; i++) {
		block[i].textContent = '';
	}
}

