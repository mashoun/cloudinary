var imagePreview = document.getElementById('imagePreview')
var fileUpload = document.getElementById('fileUpload')

// POST request
var api = 'https://api.cloudinary.com/v1_1/dyns8nl3i/image/upload'

// edit from the setting ( upload presets )
var preset = ''

fileUpload.addEventListener('change', e => {
    // console.log(e)
    var file = e.target.files[0]
    var formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', preset)
    console.log(file)

    axios({
        url: api,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(e => {
        console.log(e)
        imagePreview.src = e.data.url
    })
})