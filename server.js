const express = require('express')
const app = express()
const wait = time => new Promise((resolve) => setTimeout(resolve, time))

app.get('/wait/:duration', async (req, res) => {
    const { duration } = req.params
    console.log(`Received a request to wait for ${duration}ms`)
    await wait(parseInt(duration))
    console.log(`Sending response (after ${duration}ms)`)

    res.send(`Ok ! Has wait for ${duration} ms`)
})

app.listen(3000, () => console.log('Listenning on port 3000'))
