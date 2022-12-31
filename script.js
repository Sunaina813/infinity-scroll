/*url of unsplash api get it through locations in schema (Api Dcumentation )
const url="https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY";
Add application in Developer's account to get access key
 i have created a infite-scroll application for this project 
 my access key is -
 RaGIOwBrg7ZOCC1eSL1iXff997QypIjiHQU_IUJKWcY*/

const url =
  "https://api.unsplash.com/photos/?client_id=RaGIOwBrg7ZOCC1eSL1iXff997QypIjiHQU_IUJKWcY&count=10";
let photoArray = []; // decalaring array of photos
//getting container of image
const imageContainer = document.getElementById("image-container");

//fetching photos from unspalsh api through async function of javascript
async function getPhotos() {
  try {
    const response = await fetch(url); // passing url to fetch function its response is called promise in JS
    photoArray = await response.json();
    console.log(photoArray); // output is array of [10 images] of unsplash api
     displayPhotos();

} catch (error) {
    console.log(error);
  }
}

/* now displaying images on the website through JS
using foreach loop to read arrray coming through api  */

function displayPhotos() {
  photoArray.forEach((photos) => {
    // create img elemnt
    const img = document.createElement("img");
    img.setAttribute("src", photos.urls.regular);

    // setting image on parent element (container) 
    imageContainer.appendChild(img);


  });
}
 /* If we want to load more images from api ,when the user scrolls and reach the end of the window we 
 will call the function again for loading more  images  */

window.addEventListener("scroll",function scroll(){
    if(window.scrollY >=document.body.offsetHeight-2000){
        getPhotos();
        console.log("more images loaded");
    }
})

getPhotos(); // calling the function display 
              //function is called inside getphotos()





