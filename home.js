const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const payload = new FormData(form)

    console.log([...payload])

    fetch('https://testapi.io/api/Andrius/resource/Register', {
        method: "POST",
        body: payload
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})

home.addEventListener('click', function() {
    window.location="index.html"
})

