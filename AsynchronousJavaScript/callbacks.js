function download(url, downloaded) {
    console.log(`Downloading from ${url}`)
    setTimeout(()=>{
        let savedFile = url.split('/').pop()
        console.log(`Downloaded and saved as ${savedFile}`)
        downloaded(savedFile)
    },2000)
}

function compress(file, format, compressed) {
    console.log(`Compressing ${file}`)
    setTimeout(()=>{
        let archive = file.split('.')[0]+'.'+format
        console.log(`Compressed and saved as ${archive}`)
        compressed(archive)
    },2000)
}

function upload(server, file, uploaded) {
    console.log(`Uploading ${file} to ${server}`)
    setTimeout(()=>{
        let remotePath = `${server}/${file}`
        console.log(`Uploaded to ${remotePath}`)
        uploaded(remotePath)
    },2000)
}

download("http://somesite.com/path/image.jpg", (file) => {
    compress(file, 'zip', (archive) => {
        upload('http://file.com', archive, () => {})
    })
})

