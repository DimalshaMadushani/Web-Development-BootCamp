const searchButton = document.querySelector('#searchButton')
const form = document.querySelector('#form')

form.addEventListener('submit',async function (e) {
    e.preventDefault();
    //remove all the images from the page after submiiting new search
    removeImages()
    const searchTerm = form.elements.query.value
    //you can use the config which is from axios to apply the query
    const config = {params:{q:searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
    console.log(res.data[0].show.image.medium)
    
    displayImages(res.data)
    //reset the search bar
   // form.elements.query.value.reset(); not working
  // form.elements.query.value = '';
    
})

function displayImages(pics) {

    for(let pic of pics){
        if(pic.show.image){
            const img = document.createElement('img');
            img.src = pic.show.image.medium;
            document.body.append(img)
        }
        
    }
    console.log(document.body.img)
   
 }


const removeImages = () => {
  
        const imgTags = document.querySelectorAll('img'); 
        for(let i=0;i<imgTags.length;i++) {
            document.body.removeChild(imgTags[i]) ;
            }
            
    
}