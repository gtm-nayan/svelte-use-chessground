function validMovesAsDests(chessObj) {
	const dests = new Map();
	const moves = chessObj.moves({ verbose: true });

	for (const validMove of moves) {
		const entry = dests.get(validMove.from);
		if (entry) {
			entry.push(validMove.to);
		} else {
			dests.set(validMove.from, [validMove.to]);
		}
	}

	return dests;
}

function randomMove(chessObj) {
	const moves = chessObj.moves();
	return moves[Math.floor(Math.random() * moves.length)];
}

export { validMovesAsDests, randomMove };
