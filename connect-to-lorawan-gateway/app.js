#!/usr/bin/env node
var net = require('net');
var fs = require('fs');

var client = net.connect({host: '192.168.1.110', port: 6004}, function () {
	// client.write(bytes);
});

client.on('data',function (data) {
	console.log(data.toString());
});

client.on('end', function () {
    console.log('> connection closed.');
});

client.on('error', function (err) {
    console.log('> connection closed with err:', err.code);
});























function convertToBlackAndWhiteMatrixImage(image, options) {
	// convert image to matrix of pixels:
	var rows = [];

	for (var y = 0; y < image.height; y++) {
		var cols = [];
		for (var x = 0; x < image.width; x++) {
			var pos = x + image.width*y;


			pos = pos * image.channels;

			var pixel = 1; // white = 1, black = 0

			// console.log(image.data[pos], image.data[pos+1], image.data[pos+2], image.data[pos+3]);

			var threshold = options.blackwhiteThreshold;

			// 1 channel : grayscale
			// 2 channels: grayscale + alpha
			// 3 channels: RGB
			// 4 channels: RGBA
			switch(image.channels) {
				case 1:
				if(image.data[pos] < threshold) pixel = 0;
				break;

				case 2:
				var gray = image.data[pos] *  image.data[pos+1]/255;
				if(gray < threshold) pixel = 0;
				break;

				case 3:
				var gray = 0.21*image.data[pos] + 0.72*image.data[pos+1] + 0.07*image.data[pos+2];
				if(gray < threshold) pixel = 0;
				break;

				case 4:
				var gray = (0.21*image.data[pos] + 0.72*image.data[pos+1] + 0.07*image.data[pos+2]) * image.data[pos+3]/255;
				if(gray < threshold) pixel = 0;
				break;
			}

			cols.push(pixel);
		}
		rows.push(cols);
	}

	var matrixImage = {
		height: image.height,
		width: image.width,
		data: rows
	};

	return matrixImage;
}