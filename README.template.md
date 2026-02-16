# {{PKG_NAME}}

{{PKG_DESC}}

## Filesize

| File | Size |
|------|------|
| `dist/{{MOD}}.css` | {{SIZE_RAW}} bytes |
| `dist/{{MOD}}.min.css` | {{SIZE_MIN}} bytes ({{SIZE_GZIP}} Gzipped) |

## Install

```sh
npm install {{PKG_NAME}}
```

## Usage

### Import

```css
@import "{{PKG_NAME}}";
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/{{PKG_NAME}}/dist/{{MOD}}.min.css">
```

### Direct

```html
<link rel="stylesheet" href="path/to/{{PKG_NAME}}/dist/{{MOD}}.min.css">
```

## Classes

| Class   | Value                    |
|---------|--------------------------|
{{CLASS_TABLE}}

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.{{EXAMPLE_CLASS}}-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/{{MOD}}.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/{{MOD}}.css` — formatted
- `dist/{{MOD}}.min.css` — minified

## License

MIT
