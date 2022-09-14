const express = require("express")
const app = express()
const cors = require("cors")
require("colors")
require('dotenv').config();

require('./Config/Database')

const initSocket = require('./Services/Socket')

const UsersRoutes = require('./Routes/UsersRoutes')

const url = process.env.APP_URL
const port = process.env.APP_PORT


app.use(express())
app.use(express.json())
app.use(cors())

app.use(UsersRoutes)

const server = app.listen(port, url, () => {
    console.log(`Server is running on port ${port}`.blue)
})

initSocket(server)