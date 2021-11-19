<script lang="ts">
	import Chessground from '$lib/index';
	import '$lib/cgstyles/theme.css';
	import '$lib/cgstyles/chessground.css';
	import type { Config } from '$lib/chessground/config.js';

	let config: Config = {
		orientation: 'white',
		events: {
			init: console.log
		}
	};
</script>

<div use:Chessground={config}/>

<style>
	div {
		--cg-board-url: url("/images/board/blue.svg");
	}
</style>
