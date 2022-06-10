const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())

const states = {
    "alabama": {
        "capital": "Montgomery",
        "abbreviation": "AL",
        "cap population": 198000
    },
    "alaska": {
        "capital": "Juneau",
        "abbreviation": "AK",
        "cap population": 32000
    },
    "arizona": {
        "capital": "Phoenix",
        "abbreviation": "AZ",
        "cap population": 1660000
    },
    "arkansas": {
        "capital": "Little Rock",
        "abbreviation": "AR",
        "cap population": 197000
    },
    "california": {
        "capital": "Sacramento",
        "abbreviation": "CA",
        "cap population": 508000
    },
    "colorado": {
        "capital": "Denver",
        "abbreviation": "CO",
        "cap population": 716000
    },
    "connecticut": {
        "capital": "Hartford",
        "abbreviation": "CT",
        "cap population": 122000
    },
    "delaware": {
        "capital": "Dover",
        "abbreviation": "DE",
        "cap population": 38000
    },
    "florida": {
        "capital": "Tallahassee",
        "abbreviation": "FL",
        "cap population": 193000
    },
    "georgia": {
        "capital": "Atlanta",
        "abbreviation": "GA",
        "cap population": 498000
    },
    "hawaii": {
        "capital": "Honolulu",
        "abbreviation": "HI",
        "cap population": 347000
    },
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

/*"": {
        "capital": "",
        "abbreviation": "",
        "cap population": 0
    },*/