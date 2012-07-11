function init() {
	document.addEventListener("deviceready", deviceready, true);
}

function iloveandroid() { return true; }
function deviceready() {

    
	onCamSuccess = function(imageData) {
		var image = $("#camImg")[0];
		console.log(imageData);
   		image.src = imageData;
	};

	onCamError = function(e) {
		$("#status").html("An error with the camera. Sorry.<br/>" + e);
	};

	$("#newPicLink").click(function(e) {
		navigator.camera.getPicture(onCamSuccess,onCamError, 
				{sourceType:Camera.PictureSourceType.CAMERA, 
		         destinationType:Camera.DestinationType.FILE_URI,
				quality:50, targetWidth: 200, targetHeight:200});
		e.preventDefault();
	});

	$("#existingPicLink").click(function(e) {
		navigator.camera.getPicture(onCamSuccess,onCamError, 
				{sourceType:Camera.PictureSourceType.PHOTOLIBRARY, 
                 destinationType:Camera.DestinationType.FILE_URI,
				quality:50, targetWidth: 200, targetHeight: 200});
		e.preventDefault();
	});
}