import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

// mongodb cloud atlas
// dGSKbi0rEAO1s4xJ cluster pass

const CONNECTION_URL = `mongodb+srv://c4chris124:dGSKbi0rEAO1s4xJ@cluster0.2pgboab.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
// mongoose.set('useFindAndModify', false) seems is deprecated 