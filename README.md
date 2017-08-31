# Material Design Lite Components for MithrilJs

## Documentation
[http://mithril-mdl.muchadev.com](http://mithril-mdl.muchadev.com)

## JsFiddle Examples
* Standalone + Hyperscript - [https://jsfiddle.net/oardi/ue9ouymq/](https://jsfiddle.net/oardi/ue9ouymq/)
* Babel + JSX - [https://jsfiddle.net/oardi/qb7sq6yz/](https://jsfiddle.net/oardi/qb7sq6yz/)
* Babel + JSX Drawer - [https://jsfiddle.net/oardi/o8ag2hy9/](https://jsfiddle.net/oardi/o8ag2hy9/)


## Include Fonts
Include Google Material Design Icons from Google CDN: <br/>
```css
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```


## Installation

### NPM
```js
npm install mithrilmdl --save
```

### Github
```js 
npm install https://github.com/oardi/mithrilmdl --save
```

### Standalone
Use the bundle inside "dist" from this repository and include the script into your HTML.


## Usage

### Standalone
Create an index.html and add the scripts "mihtriljs" and "mithrilmdl" and create a const from "mithrilmdl". <br/>

```html
<script src="libs/mithril.js"></script>
<script src="libs/mithrilmdl.js"></script>
<script>
    const { Button } = window.mithrilmdl;
</script>
```


### Webpack + Babel + JSX

Steps:

#### Create ".babelrc"
```js
{
    "presets": ["es2015"],
    "plugins": [
        "transform-async-to-generator",
        ["transform-react-jsx", {
            "pragma": "m"
        }]
    ]
}
```

#### Create a minimal "webpack.config.js"
```js
const webpack = require('webpack');
const path = require('path');

require("babel-core/register");
require("babel-polyfill");//es5 polyfills

module.exports = {
    entry: ['babel-polyfill', './src/app/app.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=assets/[name].[ext]' },
        ]
    }
}
```

#### Import the components needed from "mithrilmdl"
```js
import { Button } from 'mithrilmdl'
```

or as a single object
```js
import * as Mdl from 'mithrilmdl'
```


### Using a component
For instance using the Mdl.Button component: <br/>
Code JSX: <br/>

```js
<Button raised colored title="I am a button" />
```
<br/>

Code ES5: <br/>
```js
m(Button, { raised:true, colored:true, title:"I am a button" })
```
