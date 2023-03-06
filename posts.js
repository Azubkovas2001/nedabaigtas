



//nauji postai
const addPostForm = document.getElementById('add-post')
const postsContainer = document.getElementById('posts')

const API_ENDPOINTS = {
    post: '	https://testapi.io/api/Andrius/resource/newPosts',
    get: '	https://testapi.io/api/Andrius/resource/newPosts',
}

const getData = (url) =>{
    return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}

const postData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
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
    const formData = new FormData(e.target)     
    const newPost = await postData(API_ENDPOINTS.post, formData)
    postsContainer.innerHTML += postTemplate(newPost)

    
}
addPostForm.addEventListener('submit', handleAddPost)

window.onload = async () => {
    const posts = await getData(API_ENDPOINTS.get)
    posts.data.forEach(post => {
        postsContainer.innerHTML += postTemplate(post)
    })
}
//=======================>
let home = document.getElementById('home')
home.addEventListener('click', function() {
    window.location="index.html"
})