//camera
$(document).on("click","#camera",function(){
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: camera.destinationType.FILE_URI,
  });

  function onSuccess(imageURI) {
    var image = document.getElementById('image');
    image.src = imageURI;
  }

  function onFail(message) {
    navigator.notification.alert('Failed because: ' + message);
  }
});



