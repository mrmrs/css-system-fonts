# css-system-fonts 1.0.1

CSS module for utilizing system fonts

#### Stats

443 | 1 | 1
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev system-fonts
```

#### With Git

```
git clone https://github.com/mrmrs/css-system-fonts
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-system-fonts";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-system-fonts">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

  SYSTEM FONTS

*/
.system-sans-serif { font-family: -apple-system, BlinkMacSystemFont, /* MacOS and iOS */
               'avenir next', avenir, /* MacOS and iOS */
               'Segoe UI', /* Windows */
               'lucida grande', /* Older MacOS */
               'helvetica neue', helvetica, /* Older MacOS */
               'Fira Sans', /* Firefox OS */
               roboto, noto, /* Google stuff */
               'Droid Sans', /* Old Google stuff */
               cantarell, oxygen, ubuntu, /* Linux stuff */
               'franklin gothic medium', 'century gothic', /* Windows stuff */
               sans-serif; /* Everything else */ }
/*
  References:

  https://webkit.org/blog/3709/using-the-system-font-in-web-content/
  https://en.wikipedia.org/wiki/Avenir_(typeface)
  https://www.google.com/design/spec/style/typography.html#typography-typeface

*/
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

MIT

