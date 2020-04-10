const axios = require('axios')

const logResponse = res => {
    console.log(`Received : ${res.data}`)
}

(async function run() {
    console.time('end of all promises')
    const listOfPromises = [
        axios.get('http://localhost:3000/wait/2000').then(logResponse),
        axios.get('http://localhost:3000/wait/200').then(logResponse),
        axios.get('http://localhost:3000/wait/20').then(logResponse),
        axios.get('http://localhost:3000/wait/4000').then(logResponse),
        axios.get('http://localhost:3000/wait/1000').then(logResponse),
        axios.get('http://localhost:3000/wait/2500').then(logResponse),
        axios.get('http://localhost:3000/wait/5000').then(logResponse),
        axios.get('http://localhost:3000/wait/3000').then(logResponse),
    ]
    
    await Promise.all(listOfPromises)
    
    console.timeEnd('end of all promises')
})()