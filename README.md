# system-fonts

Functional CSS for system-fonts

## Filesize

| File | Size |
|------|------|
| `dist/system-fonts.css` | 279 bytes |
| `dist/system-fonts.min.css` | 253 bytes (192 Gzipped) |

## Install

```sh
npm install system-fonts
```

## Usage

### Import

```css
@import "system-fonts";
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/system-fonts/dist/system-fonts.min.css">
```

### Direct

```html
<link rel="stylesheet" href="path/to/system-fonts/dist/system-fonts.min.css">
```

## Classes

| Class   | Value                    |
|---------|--------------------------|
| `.system-sans-serif` | `font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, Segoe UI, lucida grande, helvetica neue, helvetica, Fira Sans, roboto, noto, Droid Sans, cantarell, oxygen, ubuntu, franklin gothic medium, century gothic, Liberation Sans, sans-serif;` |

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.system-sans-serif-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/system-fonts.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/system-fonts.css` — formatted
- `dist/system-fonts.min.css` — minified

## License

MIT
