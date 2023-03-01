let id = location.hash.slice(1)
const url = './backend.json'


fetch(url)
    .then(dataJSON => dataJSON.json())
    .then(dataObject => {

        main.innerHTML = `
        <div class="single_left_coloum"> 

             <img src="./images/${dataObject[id-1].image}" alt="" />
             <h3>${dataObject[id-1].title}</h3>
             <p>${dataObject[id-1].body}</p>
             
        </div>
                `
    })

    .catch(() => {
        alert('data not found')
    })



    /*** The second method ***/

    // fetch(url)
    // .then(dataJSON => dataJSON.json())
    // .then(dataObject => {
    //     dataObject.forEach(post => {
    //         if(post.id == id){
    //             section.innerHTML = `
    //                 <img src="./images/${post.image}" alt="#">
    //                 <div>
    //                     <h4>${post.title}</h4>
    //                     <p>${post.body}</p>
    //                 </div>
    //             `
    //         }
    //     });
    // })

