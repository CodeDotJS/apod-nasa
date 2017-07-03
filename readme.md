<h1 align="center">
<img src="https://raw.githubusercontent.com/rishigiridotcom/rishigiri.com/71200156248c8ba2babbf387b0c0bd67e184ee17/github/apod-nasa.png">
<img src="https://travis-ci.org/CodeDotJS/apod-nasa.svg?branch=master">
<img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg">
</h1>

## Install
```
$ npm install --save apod-nasa
```
## Usage
- __`For current date`__
```js
const apod = require('apod-nasa');

apod().then(data => {
  console.log(data);
	/*
	  {
	    title: 'The Summer Triangle over the Great Wall',
	    image: 'https://apod.nasa.gov/apod/image/1707/GreatWallMilkyWay_Yu_1686.jpg'
	  }
	*/
});
```
- __`For specific date`__
```js
apod.date('951010').then(data => {
	console.log(data);
	/*
	{
		day: 'October 10, 1995',
		title: 'Dione\'s Lagrange Moon Helene',
		image: 'https://apod.nasa.gov/apod/image/helene_vg2.gif'
	}
	*/
});
```

#### __`Date`__

In `apod.date()` the following format is only supported format -

- __`yy/mm/dd`__

__`Example : `__

- For `16th of March, 1998`  `:` __`980316`__
- For `1st January, 2000` `:`  __`000101`__

__NOTE :__

__[`APOD-NASA`](https://apod.nasa.gov/apod/)__ started to post pictures since __`June 16, 1995`__ , so the least date will be  __`950616`__ and max will be the __`current date`__

## API

- __`apod()`__

- __`apod.date('date')`__

__`date`__
`Type :` __`string`__

`Format :` __`yy/mm/dd`__

## Related

- __[`apod`](https://github.com/CodeDotJS/apod)__ `: Astronomy Picture of the Day form command line done right!`

## License

MIT &copy; [Rishi Giri](http://codedotjs.github.io)
