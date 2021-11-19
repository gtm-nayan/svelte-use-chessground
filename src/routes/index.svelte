<script lang="ts">
	import { Chessground, cgStylesHelper } from '$lib/index';
	import '$lib/cgstyles/chessground.css';
	import type { Config } from '$lib/chessground/config.js';

	let config: Config = {
		orientation: 'white',
		events: {
			init: console.log
		}
	};
</script>

<div
	use:Chessground={config}
	class="blue"
	use:cgStylesHelper={{ piecesFolderUrl: '/images/pieces/merida', boardUrl: '/images/board/blue.svg' }}
/>
