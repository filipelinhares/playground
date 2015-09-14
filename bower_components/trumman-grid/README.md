# Trumman Grid
> Responsive and fraction based grid system.

[![Parker Status](https://img.shields.io/badge/Parker CSS-%E2%9C%93-green.svg)](STATUS.md) [![Parker Status](https://img.shields.io/npm/v/trumman-grid.svg)](https://www.npmjs.com/package/trumman-grid)

## Install
**npm** `npm install --save trumman-grid`  
**Bower** `bower install --save trumman-grid`

## Usage

1. Install with one of [those](#install) commands
2. Load the trumman-grid css file into your html.
3. Example

```html
<div class="container">
  <div class="columns">
    <div class="column -md-1-3"></div>
    <div class="column -md-1-3"></div>
    <div class="column -md-1-3"></div>
  </div>
</div>
```

- Add a `.container` to encapsulate everything and provide ample horizontal gutter space.
- Create your outer row to clear the floated columns with `<div class="row">`.
- Add your columns with individual `<div class="column">`s.
- Add your fractional width classes to set the width of the columns (e.g., `-sm-1-2`).

## API

#### Container
- `.container`

#### Row
- `.row`
- `.-noGutter`

#### Column
- `.column`,
- `.columns`

##### Table
- `.-table`
- `.-middle`
- `.-bottom`

##### Sizes
- `.[prefix]-1-3`
- `.[prefix]-2-3`
- `.[prefix]-1-4`
- `.[prefix]-1-2`
- `.[prefix]-3-4`
- `.[prefix]-1-5`
- `.[prefix]-4-5`
- `.[prefix]-2-5`
- `.[prefix]-3-5`
- `.[prefix]-fill`

#### Responsive
| Prefix         | Sizes   | Container size |
|----------------|---------|----------------|
|`-xs[sizes]`    | <768px  | auto           |
|`-sm[sizes]`    | >768px  | 750px          |
|`-md[sizes]`    | >992px  | 970px          |
|`-lg[sizes]`    | >1200px | 1170px         |
> Use ***[sizes]*** from above eg: `-xs-1-3`.


## Build
#### Commands
```bash
$ npm run set-up
$ npm run compile
$ npm run test
```

## Thanks
Inspired by [Primer][primer] and [Bootstrap][twbs]

## License
[MIT](LICENSE.md) © Filipe Linhares

[primer]: http://primercss.io
[twbs]: http://getbootstrap.com
