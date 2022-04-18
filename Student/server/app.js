const express=require('express')
const cors=require('cors')
const app = express()
const port=2000

app.use(cors())
app.use(express.json())


require('../server/database/connect')
const userRoutes=require('./apiRoutes/userRoutes')

app.use('/',userRoutes)

app.listen(port,()=>{
    console.log(`listening on port :${port}`)
})