'use strict';

const got = require('got');
const cheerio = require('cheerio');

const linkSplitter = data => {
	return data.split('<a href="image')[1].split('"')[0];
};

const apodNasa = () => {
	const url = 'https://apod.nasa.gov/';

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		const link = linkSplitter(res.body);
		return {
			title: $('center').eq(1).text().split('\n')[1].trim(),
			image: `https://apod.nasa.gov/apod/image${link}`
		};
	}).catch(error => {
		if (error) {
			error.message = 'Content is unavailable or is in unsupported format!';
		}

		return error.message;
	});
};

const apod = module.exports = () => apodNasa(); // eslint-disable-line no-multi-assign

apod.date = space => {
	const url = `https://apod.nasa.gov/apod/ap${space}.html`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		const link = linkSplitter(res.body);
		return {
			day: $('title').text().split('-')[0].split(': ')[1].trim(),
			title: $('title').text().split('-')[1].trim(),
			image: `https://apod.nasa.gov/apod/image${link}`
		};
	}).catch(error => {
		if (error) {
			error.message = 'Content is unavailable';
		}

		return error.message;
	});
};
