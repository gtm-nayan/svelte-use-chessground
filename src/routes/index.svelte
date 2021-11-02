<script lang="ts">
	export const ssr = false;
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

<div class="blue merida">
	<div use:Chessground={config} />
</div>
