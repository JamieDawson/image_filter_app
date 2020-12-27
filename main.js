const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

//TODO Filters

//Upload file
uploadFile.addEventListener('change', (e) => {
	const file = document.getElementById('upload-file').files[0];

	// Init FileReader
	const reader = new FileReader();

	if (file) {
		//set file name
		fileName = file.name;
		//Read data as URL
		reader.readAsDataURL(file);
	}

	//add image to canvas
	reader.addEventListener(
		'load',
		() => {
			//Create image
			img = new Image();
			//Set src
			img.src = reader.result;
			//on image load, add to canvas
			img.onload = function () {
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0, img.width, img.height);
				canvas.removeAttribute('data-camon-id');
			};
		},
		false
	);
});
