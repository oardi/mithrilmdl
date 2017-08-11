# Material Design Lite Components for MithrilJs

## Documentation
[http://mithril-mdl.muchadev.com](http://mithril-mdl.muchadev.com)

## JsFiddle Examples
* Standalone + Hyperscript - [https://jsfiddle.net/oardi/ue9ouymq/](https://jsfiddle.net/oardi/ue9ouymq/)
* Babel + JSX - [https://jsfiddle.net/oardi/qb7sq6yz/](https://jsfiddle.net/oardi/qb7sq6yz/)


## Include Fonts
Include Google Material Design Icons from Google CDN: <br/>
`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`


## Installation
### Github
`npm install https://github.com/oardi/mithrilmdl --save`

### Standalone
Download the library from this repository and include the script into your HTML.


## Usage
### Webpack
Import the single Object "Mdl" from "mithrilmdl": <br/>
`import { Mdl } from 'mithrilmdl'`

### Standalone
Create an index.html and add the scripts "mihtriljs" and "mithrilmdl" and create a const from "mithrilmdl". <br/>
```js
const { Mdl } = window.mithrilmdl;

<script src="libs/mithril.js"></script>
<script src="libs/mithrilmdl.js"></script>
```

### Using a component
For instance using the Mdl.Button component: <br/>
Code JSX: <br/>
```js
<Mdl.Button raised colored title="I am a button" />
```
<br/>

Code ES5: <br/>
```js
m(Mdl.Button, { raised:true, colored:true, title:"I am a button" })
```
