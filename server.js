const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())

const states = {
    "tennessee": {
        "capital": "Nashville",
        "abbreviation": "TN",
        "cap population": 669000
    },
    "texas": {
        "capital": "Austin",
        "abbreviation": "TX",
        "cap population": 954000
    },
    "unknown":{
        "capital": "unknown",
        "abbreviation": "unknown",
        "cap population": 0
    }
}
app.get("/", (request, response)=>{
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (request, response)=>{
    const stateName = request.params.name.toLowerCase()
    
    if(states[stateName]){
        response.json(states[stateName])
    }else{
        response.json(states["unknown"])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})