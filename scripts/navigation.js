const myHeading = document.querySelector('h1');
myHeading.textContent = 'Not Minecraft';

//Make sure we're in a good place to actually be executing this.
//This will give us the ending of links we travel to.
let islocaloronline = location.protocol == "https:" ? '' : '.html'

//Okay, so pseudocode time. 

//We have a multidimensional array of titles and where it goes.