<script lang="ts">
	import { Chessground, cgStylesHelper } from '$lib/index';
	import '$lib/cgstyles/chessground.css';
	import { Chess } from 'chess.js';
	import { randomMove, validMovesAsDests } from './_utils';
	import type { Config, Api } from '$lib/index';

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
		}
	};

	function handleMove(from, to, metadata) {
		chess.move(`${from}${to}`, { sloppy: true });

		setTimeout(() => {
			let move = chess.move(randomMove(chess), { verbose: true });
			cgApi.move(move.from, move.to);
			cgApi.state.turnColor = 'white';
			cgApi.state.movable.dests = validMovesAsDests(chess);
			cgApi.playPremove();
		}, 3000);
	}

	function init(api: Api) {
		api.state.movable.dests = validMovesAsDests(chess);
		cgApi = api;
		console.log(cgApi);
	}
</script>

<div
	use:Chessground={{ config, initializer: init }}
	class="blue"
	use:cgStylesHelper={{
		piecesFolderUrl: '/images/pieces/merida',
		boardUrl: '/images/board/blue.svg'
	}}
	style="height: 640px; width: 640px;"
/>

<style>
	:global(.cg-wrap coords.files) {
		bottom: 0;
		text-align: right;
	}

	:global(.cg-wrap coords) {
		font-weight: bold;
	}

	div {
		--cg-ccw: #dee3e6;
		--cg-ccb: #8ca2ad;
	}
</style>
