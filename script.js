//Get a dog photo from the dog.ceo api and place the photo in the DOM

document.querySelector("button").addEventListener('click',fetching)
function fetching(){
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.message)
      document.querySelector('img').src = data.message
    })
  
    
}
const select = document.querySelector('.breeds')

fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message; //Turn the message into an object
        const breedsArray = Object.keys(breedsObject) //Turn the object into an array 
        for (let i=0; i < breedsArray.length; i++) {
            const option = document.createElement('option') //<option></option>
            option.value = breedsArray[i] //<option value='breed'>
            option.innerText = breedsArray[i]//<option value='breed'>breed</option>
            select.appendChild(option)  //adds current <option> tag to the select box list of options
        }
      

    })
    select.addEventListener('change', event => {
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
        getDoggoImg(url)
    })
    const img = document.querySelector('.dog-img')
   const getDoggoImg = url => {
        fetch(url) //going to the API url above
            .then(res => {
                return res.json();//get JSON message back

            })
            .then(data => {
                img.src = data.message //extract message from JSON and attach to img tag as new source
                document.querySelector('.righth2').innerText=select.value
            })
    }
