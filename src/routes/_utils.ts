import type { Key } from '$lib/chessground/types';

function validMovesAsDests(chessObj) {
	let dests = new Map();
	let moves: Move[] = chessObj.moves({ verbose: true });

	for (let validMove of moves) {
		let entry = dests.get(validMove.from);
		if (entry) {
			entry.push(validMove.to);
		} else {
			dests.set(validMove.from, [validMove.to]);
		}
	}

	return dests;
}

function randomMove(chessObj) {
	let moves = chessObj.moves();
	return moves[Math.floor(Math.random() * moves.length)];
}

interface Move {
	color: 'w' | 'b';
	from: Key;
	to: Key;
	flags: Flag;
}

type Flag = 'n' | 'b' | 'p' | 'k' | 'q' | 'e' | 'c' | 'pc';

export { validMovesAsDests, randomMove };
