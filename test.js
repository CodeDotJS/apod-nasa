import test from 'ava';
import m from './';

test('regular', async t => {
	const data = await m();

	t.is(data.title, 'The Summer Triangle over the Great Wall');
	t.is(data.image, 'https://apod.nasa.gov/apod/image/1707/GreatWallMilkyWay_Yu_1686.jpg');
});

test('specific', async t => {
	const data = await m.date('000101');

	t.is(data.day, '2000 January 1');
	t.is(data.title, 'The Millennium that Defines Universe');
	t.is(data.image, 'https://apod.nasa.gov/apod/image/0001/flammarion_halfcolor.gif');
});
