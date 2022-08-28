// write your code here
// Our first function is fetching all the ramens: Our fetch
// From there we renderRamenImages onto the remen menu
// If ramen menu is clicked we render the details of the ramen

document.addEventListener("DOMContentLoaded", () => {
  fetch('http://localhost:3000/ramens')
  .then(r => r.json())
  .then(ramens => ramens.forEach(ramen => renderRamenImage(ramen)))
})

// Console.log use it to find out more information about your data
//This helps figure out if you made mistake, what are the names of the keys, and what you should expect

//Found the item that we wanted to append our Images to
const ramenMenu = document.getElementById('ramen-menu')
const ramenDetails = document.getElementById('ramen-detail')

/**
* 3. We need to display our data onto the page via Ramen Details
*/



renderRamenImage = (ramen) => {
 //Created an Image tag to append 
 const ramenImg = document.createElement("img")
 //Added the source of the Image
 ramenImg.setAttribute('src', `${ramen.image}`)
 //Added an eventListener to the Image, and created a fn for when the ramen is clicked
 //Pass the ramen obj to the fn
 ramenImg.addEventListener('click', (e) => renderRamenDetails(ramen))
 //We appended the Image
 ramenMenu.append(ramenImg)
}


renderRamenDetails = (ramen) => {
  const detailImage = ramenDetails.querySelector(".detail-image")
  const ramenName = ramenDetails.querySelector(".name")
  const ramenRestaurant = ramenDetails.querySelector(".restaurant")

  detailImage.setAttribute('src', `${ramen.image}`)
  detailImage.setAttribute('alt', `${ramen.name}`)

  //This doesnt currently work, why?
  
  // ramenName.textContent(`${ramen.name}`)
  // ramenRestaurant.textContent(`${ramen.restaurant}`)
}

//