A wrapper around https://github.com/ornicar/chessground that allows it to be used with svelte through `use:`

## Usage
The package has two named exports, `Chessground` and `cgStylesHelper` along with css files to change how the board looks.

If you decide to use the stylesheets provided by the package, the chessboard will be 100% width and height of the parent. The following css variables are available for basic customisation.

|       Variable       |                                       Purpose                                       | Type                                                                        |
|:--------------------:|:-----------------------------------------------------------------------------------:|-----------------------------------------------------------------------------|
|    --cg-url-board    | Sets the image to use as the board.                                                 | \<url>                                                                       |
| --cg-url-[pieceName] | Sets the image to use as the representation for each piece.  pieceName is one of `['wK', 'wQ', 'wR', 'wB', 'wN', 'wP', 'bK', 'bQ', 'bR', 'bB', 'bN', 'bP']` | \<url>                                                                       |
|       --cg-ccw       | Color of white coords                                                               | \<color>                                                                     |
|       --cg-ccb       | Color of black coords                                                               | \<color>                                                                     |
|        --cg-cs       | Coords text shadow.                                                                 | [Text shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow) |

The first two can be set manually or you can use the cgStylesHelper action to set them.

```html
<script>
	import { Chessground, cgStylesHelper } from 'svelte-use-chessground';
	import 'svelte-use-chessground/cgstyles/chessground.css';

	let cgApi;
	let config = {};

	function initizalizer(api){
		cgApi = api; 
		//A named function might not be necessary but I've encountered infinite loops while using an inline initializer function.
	}
</script>

<div
	use:Chessground="{{config, initializer}}"
	use:cgStylesHelper="{{ piecesFolderUrl: '/images/pieces/merida', boardUrl: '/images/board/blue.svg' }}"
/>
```


### SvelteKit
When using with svelte-kit, adding chessground to `vite.ssr.noExternal` might be a good idea.

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
