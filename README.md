An adaptation of https://github.com/ornicar/chessground with some slight changes that allows it to be used with svelte through `use:`

## Usage

```html
<script>
	import { Chessground, cgStylesHelper } from 'svelte-use-chessground';
	import 'svelte-use-chessground/cgstyles/chessground.css';

	let cgApi;
	let config = {
		orientation: 'white',
		events: {
			init: (api) => (cgApi = api)
		}
	};
</script>

<div
	use:Chessground="{config}"
	use:cgStylesHelper="{{ piecesFolderUrl: '/images/pieces/merida', boardUrl: '/images/board/blue.svg' }}"
/>
<!-- You can also set the css variables for the URLs manually. See src/lib/cgstyles/chessground.css for the available ones.-->
```
Demo here: https://svelte-use-chessground.netlify.app

## Developing

Once you've created a project and installed dependencies with `pnpm install`.

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Packaging

```bash
pnpm run package
```
