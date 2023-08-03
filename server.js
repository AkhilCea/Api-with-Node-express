const express = require('express')
const cors = require('cors')
const app = express()
var coroptions = {
    origin: 'https://localhost:8080'
}

app.use(cors(coroptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routers
const router = require('./routes/userRouter.js')
app.use('/api/user',router)
const router = require('./routes/courseRouter.js')
app.use('/api/course',router)
const router = require('./routes/subscriptionsRouter.js')
app.use('/api/subscriptions',router)

//testing api
app.get('/', (req, res) => {
    res.json({message: 'hello' })
})

const PORT = process.env.PORT || 8080


app.listen(PORT, () => {
    console.log("server is running on port ${PORT}")
})

