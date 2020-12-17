function download(url) {
    return new Promise((resolve, reject) => {
        console.log(`Downloading from ${url}`)
        if(!url.startsWith('http')) {
            return reject(new Error('URL must starts with http'))
        }
        setTimeout(()=>{
            let savedFile = url.split('/').pop()
            console.log(`Downloaded and saved as ${savedFile}`)
            resolve(savedFile)
        },2000)
    })
}

function compress(file, format) {
    return new Promise((resolve, reject) => {
        console.log(`Compressing ${file}`)
        if(['zip', 'gzip', '7z'].indexOf(format) === -1) {
            return reject(new Error('We only support zip, gzip and 7z'))
        }
        setTimeout(()=>{
            let archive = file.split('.')[0]+'.'+format
            console.log(`Compressed and saved as ${archive}`)
            resolve(archive)
        },2000)
    })
}

function upload(server, file) {
    return new Promise((resolve, reject) => {
        console.log(`Uploading ${file} to ${server}`)
        if(!server.startsWith('ftp://')) {
            return reject(new Error('We can only upload to FTP servers'))
        }
        setTimeout(()=>{
            let remotePath = `${server}/${file}`
            console.log(`Uploaded to ${remotePath}`)
            resolve(remotePath)
        },2000)
    })
}

// download("http://somesite.com/path/image.jpg")
//     .then((file) => {
//         compress(file, 'zip')
//             .then((archive) => {
//                 upload('ftp://files.com',archive)
//             })
//     })

download("http://somesite.com/path/image.jpg")
    .then((file) => compress(file, 'zip'))
    .then((archive) => upload('ftp://files.com',archive))
    .catch((err) => console.log(err))