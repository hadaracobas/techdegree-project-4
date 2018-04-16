function filterImg() {
  //restore the user search
  var input = document.getElementById('searchbox');
  var filter = input.value.toUpperCase();

  //restore all the image data
  var imageData = document.querySelectorAll('a[data-title]');

  // Loop through the image data and filter
  for(i = 0; i < imageData.length; i++) {
    if(imageData[i].getAttribute('data-title').toUpperCase().includes(filter)) {
      imageData[i].style.display = "";
    } else {
      imageData[i].style.display = "none";
    }
  }


}
