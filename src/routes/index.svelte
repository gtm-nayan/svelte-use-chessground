<script lang="ts">
	import { Chessground, cgStylesHelper } from '$lib/index';
	import '$lib/cgstyles/chessground.css';
	import type { Config } from '$lib/chessground/config.js';
	import { Chess } from 'chess.js';
	import { randomMove, validMovesAsDests } from './_utils';
	import type { Api } from '$lib/chessground/api';
	import type { Key, MoveMetadata } from '$lib/chessground/types';

	let chess = Chess();

	let cgApi: Api;
	let config: Config = {
		orientation: 'white',
		movable: {
			color: 'white',
			free: false,
			events: {
				after: handleMove
			}
		},
		events: {
			init: (api) => {
				cgApi = api;
				cgApi.state.movable.dests = validMovesAsDests(chess);
			}
		}
	};

	function handleMove(from: Key, to: Key, metadata: MoveMetadata) {
		chess.move(`${from}${to}`, { sloppy: true });

		setTimeout(() => {
			let move = chess.move(randomMove(chess), { verbose: true });
			cgApi.move(move.from, move.to);
			cgApi.state.turnColor = 'white';
			cgApi.state.movable.dests = validMovesAsDests(chess);
			cgApi.playPremove();
		}, 3000);
	}
</script>

<div
	use:Chessground={config}
	class="blue"
	use:cgStylesHelper={{
		piecesFolderUrl: '/images/pieces/merida',
		boardUrl: '/images/board/blue.svg'
	}}
	style="height: 640px; width: 640px;"
/>
