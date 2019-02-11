import test from 'ava';
import m from '.';

test('regular', async t => {
	const data = await m();

	t.is(data.title, 'New Data: Ultima Thule Surprisingly Flat');
	t.is(data.image, 'https://apod.nasa.gov/apod/image/1902/MU69Flatter_NewHorizons_1920.jpg');
});

test('specific', async t => {
	const data = await m.date('000101');

	t.is(data.day, '2000 January 1');
	t.is(data.title, 'The Millennium that Defines Universe');
	t.is(data.image, 'https://apod.nasa.gov/apod/image/0001/flammarion_halfcolor.gif');
});
