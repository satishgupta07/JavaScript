function download(url, downloaded) {
    console.log(`Downloading from ${url}`)
    if(!url.startsWith('http')) {
        return downloaded(new Error('URL must starts with http'))
    }
    setTimeout(()=>{
        let savedFile = url.split('/').pop()
        console.log(`Downloaded and saved as ${savedFile}`)
        downloaded(null, savedFile)
    },2000)
}

function compress(file, format, compressed) {
    console.log(`Compressing ${file}`)
    if(['zip', 'gzip', '7z'].indexOf(format) === -1) {
        return compressed(new Error('We only support zip, gzip and 7z'))
    }
    setTimeout(()=>{
        let archive = file.split('.')[0]+'.'+format
        console.log(`Compressed and saved as ${archive}`)
        compressed(null, archive)
    },2000)
}

function upload(server, file, uploaded) {
    console.log(`Uploading ${file} to ${server}`)
    if(!server.startsWith('ftp://')) {
        return uploaded(new Error('We can only upload to FTP servers'))
    }
    setTimeout(()=>{
        let remotePath = `${server}/${file}`
        console.log(`Uploaded to ${remotePath}`)
        uploaded(null, remotePath)
    },2000)
}

download("http://somesite.com/path/image.jpg", (err, file) => {
    if(err) throw err
    compress(file, 'gzip', (err, archive) => {
        if(err) {
            console.warn(err)
            archive = file
        }
        upload('ftp://file.com', archive, (err) => {
            if(err) throw err
        })
    })
})

