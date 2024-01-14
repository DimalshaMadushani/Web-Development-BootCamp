// js file
const searchButton = document.querySelector('#searchButton')
const form = document.querySelector('#form')
const container = document.querySelector("#container")
const row = document.querySelector("#pasan");

form.addEventListener('submit',async function (e) {
    e.preventDefault();
    //remove all the images from the page after submiiting new search
    clearResults();
    
    const searchTerm = form.elements.query.value
    //you can use the config which is from axios to apply the query
    const config = {params:{q:searchTerm}}
    
    try{    
        const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
        // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
        console.log(res.data[0].show.image.medium)
        console.log(res.data[0].show.name)
        
        displayImages(res.data)
          // form.elements.query.value = '';
    
    }catch(e){
        
        document.getElementById("pasan").innerHTML += `<h3 class="text-danger mt-5 text-center display:none">Not Found</h3>`
    
         
    }
    
})

function displayImages(pics) {

    for(let pic of pics){
        const img = document.createElement('img');
        if(!pic.show.image){
            img.src = "https://school.cistercian.org/wp-content/uploads/connections-images/breianna-bairrington/no-image-available.jpg";
        } else {
            img.src = pic.show.image.medium;
        }
        document.getElementById("pasan").innerHTML += `
        
                <div class="col-12 col-sm-6 col-lg-3 mt-3">
                <div class="card p-4 ps-5 pe-5">
                    <h4 class="text-capitalize text-center">${pic.show.name}</h4>
                    <img src="${img.src}" width="100%" height="250px" class="mx-auto d-block img-fluid"/>
                    <button class="btn btn-info">more</button>
                </div>
                </div>
            `
       
    }
 //   console.log(document.body.img)
   
 }


const clearResults = () => {
  
        // const imgTags = document.querySelectorAll('img'); 
        // for(let i=0;i<imgTags.length;i++) {
        //     document.body.removeChild(imgTags[i]) ;
        // }

        const resultsContainer = document.querySelector("#pasan");
        resultsContainer.remove();
        const newContainer = document.createElement("div");
        newContainer.id = "pasan";
        newContainer.classList.add('row',  'mt-3')
        container.append(newContainer);
}

