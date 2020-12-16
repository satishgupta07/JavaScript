// function fakeDownload(done) {
//     setTimeout(function () {
//         let downloadedData = "Some data we ripped of the interwebs"
//         done(downloadedData)
//     }, 1000)
// }

// fakeDownload(function (data) {
//     console.log("We downloaded a file, which had this data -->")
//     console.log(data)
// })



function fakeDownloadPromise (correct) {
    return new Promise(function (reslove, reject) {
        setTimeout(function () {
            let downloadedData = "Some data from the net"
            console.info("Downloading has completed")
            if(correct) {
                reslove(downloadedData)
            } else {
                reject(new Error("Could not download file"))
            }
            reslove(downloadedData)
        }, 1000)
    })
}

// fakeDownloadPromise(true).then(function (data) {
//     console.log("The data that we downloaded is -->")
//     console.log(data)
// }).catch(function (err) {
//     console.log(err)
// })

let downloaded = fakeDownloadPromise(true);
downloaded.catch(function (err) {
    console.log(err)
})

setTimeout(function () {
    downloaded.then(function (data) {
        console.log("The data that was downloaded is this -->")
        console.log(data)
    })
},3000)