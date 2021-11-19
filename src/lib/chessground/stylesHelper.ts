interface Params {
	boardUrl?: string;
	piecesFolderUrl?: string;
	pieceFileExt?: string;
}

export default function (node: HTMLElement, params: Params) {
	setURLVars(node, params);

	return {
		update(newParams) {
			setURLVars(node, newParams);
		}
	};
}

function setURLVars(
	node: HTMLElement,
	{ boardUrl, piecesFolderUrl, pieceFileExt = 'svg' }: Params
) {
	let pieceNames = ['wK', 'wQ', 'wR', 'wB', 'wN', 'wP', 'bK', 'bQ', 'bR', 'bB', 'bN', 'bP'];

	if (boardUrl) {
		node.style.setProperty('--cg-url-board', `url(${boardUrl})`);
	}

	if (piecesFolderUrl) {
		for (let pieceName of pieceNames) {
			node.style.setProperty(
				`--cg-url-${pieceName}`,
				`url(${piecesFolderUrl}/${pieceName}.${pieceFileExt})`
			);
		}
	}
}
