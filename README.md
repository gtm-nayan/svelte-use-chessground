A fork of @ornicar/chessground with some slight changes that allows it to be used with svelte through `use:`

## Usage

```html
<script>
	import Chessground from 'svelte-use-chessground';

	import 'svelte-use-chessground/cgstyles/chessground.css';
	import 'svelte-use-chessground/cgstyles/theme.css'; //Or include the styles in any other way

	let cgApi;
	let config = {
		events: {
			init: (api) => (cgApi = api)
		}
	};
</script>

<div class="blue merida">
	<div use:Chessground="{config}" />
</div>
```

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
