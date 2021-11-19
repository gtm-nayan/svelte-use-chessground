<script lang="ts">
	import Chessground from '$lib/index';
	import '$lib/cgstyles/chessground.css';
	import type { Config } from '$lib/chessground/config.js';

	let config: Config = {
		orientation: 'white',
		events: {
			init: console.log
		}
	};
</script>

<div use:Chessground={config} class="blue merida"/>

<style>
	.blue {
		--cg-url-board: url("/images/board/blue.svg");
	}

	.merida {
		--cg-url-wK: url("/images/pieces/merida/wK.svg");
		--cg-url-wQ: url("/images/pieces/merida/wQ.svg");
		--cg-url-wR: url("/images/pieces/merida/wR.svg");
		--cg-url-wB: url("/images/pieces/merida/wB.svg");
		--cg-url-wN: url("/images/pieces/merida/wN.svg");
		--cg-url-wP: url("/images/pieces/merida/wP.svg");
		--cg-url-bK: url("/images/pieces/merida/bK.svg");
		--cg-url-bQ: url("/images/pieces/merida/bQ.svg");
		--cg-url-bR: url("/images/pieces/merida/bR.svg");
		--cg-url-bB: url("/images/pieces/merida/bB.svg");
		--cg-url-bN: url("/images/pieces/merida/bN.svg");
		--cg-url-bP: url("/images/pieces/merida/bP.svg");
	}
</style>
