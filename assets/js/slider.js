async function getData() {
    let data = await fetch('./backend.json')
    return data.json()
}


async function showSlider() {
    
    let slider = document.querySelector('.bxslider')
    let data = await getData()

    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    for (i = 0; i < 3; i++) {  
        slider.innerHTML += `
            <li><img src='./images/${data[i].image}'></li>
        `
    }
          
}

showSlider()