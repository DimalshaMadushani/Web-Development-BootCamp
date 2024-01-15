// js file
const searchButton = document.querySelector('#searchButton')
const form = document.querySelector('#form')
const container = document.querySelector("#container")
const row = document.querySelector("#pasan");

form.addEventListener('keyup',async function (e) {
    console.log(e);
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
        //json objects
        console.log(res.data);
        // console.log(res.data[0].show.summary);
        displayImages(res.data)
          // form.elements.query.value = '';
    
    }catch(e){
        
        document.getElementById("pasan").innerHTML += `<h3 class="text-danger mt-5 text-center display:none">Not Found</h3>`
    
         
    }
    
})

function displayImages(results) {

    for(let result of results){
        const img = document.createElement('img');
        if(!result.show.image){
            img.src = "https://school.cistercian.org/wp-content/uploads/connections-images/breianna-bairrington/no-image-available.jpg";
        } else {
            img.src = result.show.image.medium;
        }

        let rating = getRating(result);
        let duration = getDuration(result);
        // let i = results.indexOf(result);
        // let summary = getSummary(result,i);
        let summary = getSummary(result);

        document.getElementById("pasan").innerHTML += `
       
                <div class=" col-12 col-sm-6 col-lg-3 mt-3">
                <div class = "card-container ">
                <div class="card card-front p-4 ps-5 pe-5 ">
                    <h4 class="text-capitalize text-center">${result.show.name}</h4>
                    <img src="${img.src}" width="100%" height="250px" class="mx-auto d-block img-fluid mb-5"/>
                    <p class="text-right">Rating: ${rating}</p>
                    <p class="text-right">Duration: ${duration}</p>
                </div>

                <div class="card card-back p-4 ps-5 pe-5 ">
                    <h4 class="text-capitalize text-center text-danger fw-bolder mb-2">SYNOPSIS</h4>
                    <span id="summary" class=" summary text-start ">${summary}</span>
                    <button id="readMore" class="btn btn-success mt-2" display:>Continue reading</button>
                    
                </div>
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

const getRating = (data) => {
    if(data.show.rating.average) {
        return data.show.rating.average;
    } else {
        return "Not Available";
    }
}

const getDuration = (data) => {
    if(data.show.genres[2]) {
        return data.show.genres[2];
    } else {
        return "Not Available";
    }
}

// // get summary and make the button visible or invisible
// const getSummary = (data,index) => {
//     if(data.show.summary) {
//         return data.show.summary;
//     } else {
//         const readMore = document.getElementById(`readMore${index}`);
//         console.log(readMore,data.show.name);
//         readMore.style.display = "none";
//         return "Not Available";
//     }
// }

// get summary and make the button visible or invisible
const getSummary = (data) => {
    if(data.show.summary) {
        return data.show.summary;
    } else {
        const readMore = document.getElementById("readMore");
        //console.log(readMore,data.show.name);
        //readMore.style.display = "none";
        return "Not Available";
    }
}

// const getSummary = (data) => {
//     if (data.show.summary) {
//         return data.show.summary;
//     } else {
//         try {
//             const readMore = document.getElementById("read");
//             if (readMore) {
//                 console.log("Hiding element for", data.show.name);
//                 readMore.style.visibility = "hidden";
//             } else {
//                 console.error("Element with ID 'read' not found.");
//             }
//         } catch (error) {
//             console.error("Error in getSummary:", error);
//         }
//         return "Not Available";
//     }
// }
