# css-system-fonts 1.0.0

CSS module for utilizing system fonts

#### Stats

562 | 14 | 13
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-system-fonts
```

#### With Git

```
git clone https://github.com/tachyons-css/css-system-fonts
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

  BASE

*/
html, body { font-family: -apple-system, avenir, 'avenir next', roboto, 'helvetica neue', helvetica, ubuntu, arial, sans-serif; }
/*
 
  https://webkit.org/blog/3709/using-the-system-font-in-web-content/

  "Going beyond the system font, iOS has dynamic type behavior, which can provide
  an additional level of fit and finish to your content. These text styles
  identify more than simply a particular font family; instead, they represent an
  entire style, including size and weight. These styles are therefore
  characterized by values given to the more-general font CSS property."

  Below are single purpose classes for using adaptive type on the web for ios devices.

*/
.ios-body { font-family: -apple-system-body; }
.ios-headline { font-family: -apple-system-headline; }
.ios-subheadline { font-family: -apple-system-subheadline; }
.ios-caption1 { font-family: -apple-system-caption1; }
.ios-caption2 { font-family: -apple-system-caption2; }
.ios-footnote { font-family: -apple-system-footnote; }
.ios-short-body { font-family: -apple-system-short-body; }
.ios-short-headline { font-family: -apple-system-short-headline; }
.ios-short-subheadline { font-family: -apple-system-short-subheadline; }
.ios-short-caption { font-family: -apple-system-short-caption1; }
.ios-short-footnote { font-family: -apple-system-short-footnote; }
.ios-tall-body { font-family: -apple-system-tall-body; }
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

