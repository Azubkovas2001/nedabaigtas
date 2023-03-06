const burger = document.getElementById("burger")
const sideNav = document.querySelector(".side-nav")
const links = document.querySelectorAll(".link")

burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    sideNav.classList.toggle("translate")
})

window.addEventListener("resize", function(){
    if(window.innerWidth> 768){
        burger.classList.remove("rotate")
        sideNav.classList.remove("translate")
    }
})

for(let link of links){
    link.addEventListener("click", function(){
        for(var x of links){
            x.classList.remove("selected")
        }
        this.classList.add("selected")
    })
}
//============================>
//nauji html atidaryti
let button = document.getElementById('hi')
button.addEventListener('click', function(){
    window.location= "posts.html"
})

let read = document.getElementById('read')
read.addEventListener('click', function(){
    window.location="read.html"
})
//======================>
//nauji postai
const addPostForm = document.getElementById('add-post')
const postsContainer = document.getElementById('posts')

const API_ENDPOINTS = {
    get: '	https://testapi.io/api/Andrius/resource/newPosts',
}

const getData = (url) =>{
    return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}


const postTemplate = (postData) => {
    return `
        <div id=${postData.id}>
        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="">
        <h3>${postData.title}</h3>
        <h6>${postData.content}</h6>
        <p>0 comments</p>
        </div>
        `
}
const handleAddPost = async (e) => {
    e.preventDefault()
    const formData = new FormTata(e.target)     
    const newPost = await postData(API_ENDPOINTS.post, formData)
    postsContainer.innerHTML += postTemplate(newPost)

    
}
window.onload = async () => {
    const posts = await getData(API_ENDPOINTS.get)
    posts.data.forEach(post => {
        postsContainer.innerHTML += postTemplate(post)
    })
}
//=======================>
//registracijos forma


const newTab = document.getElementById('newTab')
newTab.addEventListener('click', function(){
     window.location="register.html"
})