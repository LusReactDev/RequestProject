async function getNews() {
    let data = await fetch('./backend.json')
    return data.json()
}

async function showAll() {
    let data = await getNews()

    let cats = new Set()

    for (i = 0; i < 6; i++) {
        cats.add(data[i].category)

        allNewsSection.innerHTML += `
            <div class="single_left_coloum"> 
                <img src="images/${data[i].image}" alt="" />
                <h3>${data[i].title}</h3>
                <p>${data[i].body}</p>
                <a class="readMore" href="data.html#${data[i].id}">Read more</a>
            </div>
        `
    };

    cats = Array.from(cats)

    cats.forEach(cat => {
        nav.innerHTML += `
            <li><a href="#" onclick='sortByCat("${cat}")'>${cat}</a></li>
        `
    })
}

async function searchCat(input) { 

    let data = await getNews()

    allNewsSection.innerHTML = ''

    data.forEach(post => {

        if (post.title.toLowerCase().includes(input.value.toLowerCase())) {

            allNewsSection.innerHTML += `
                <div class="single_left_coloum"> 
                    <img src="images/${post.image}" alt="" />
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <a class="readMore" href="#">read more</a>
                </div>
            `
        }
    })

}

async function sortByCat(value) {

    let data = await getNews()

    allNewsSection.innerHTML = ''

    data.forEach(post => {
        if (value == post.category) {
            allNewsSection.innerHTML += `
                <div class="single_left_coloum"> 
                    <img src="images/${post.image}" alt="" />
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <a class="readMore" href="#">read more</a>
                </div>
            `
        }
    })

}

async function sortByDate() {
    let data = await getNews()
    latestPosts.innerHTML = ''

    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    for (i = 0; i < 3; i++)
        latestPosts.innerHTML += `
        
    <div class="single_left_coloum"> 
         <img src="images/${data[i].image}" alt="" />
         <h3>${data[i].title}</h3>
         <p>${data[i].body}</p>
         <p>Post date:${data[i].date}</p>
         <a class="readMore" href="data.html#${data[i].id}">Read more</a>
    </div>
      
    `
}
sortByDate()

showAll()





