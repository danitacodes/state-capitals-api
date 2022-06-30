const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())

let states = [
    {
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
    "idaho": {
        "capital": "Boise",
        "abbreviation": "ID",
        "cap population": 228000
    },
    "illinois": {
        "capital": "Springfield",
        "abbreviation": "IL",
        "cap population": 114000
    },
    "indiana": {
        "capital": "Indianapolis",
        "abbreviation": "IN",
        "cap population": 867000
    },
    "iowa": {
        "capital": "Des Moines",
        "abbreviation": "IA",
        "cap population": 216000
    },
    "kansas": {
        "capital": "Topeka",
        "abbreviation": "KS",
        "cap population": 125000
    },
    "kentucky": {
        "capital": "Frankfort",
        "abbreviation": "KY",
        "cap population": 27000
    },
    "louisiana": {
        "capital": "Baton Rouge",
        "abbreviation": "LA",
        "cap population": 221000
    },
    "maine": {
        "capital": "Augusta",
        "abbreviation": "ME",
        "cap population": 18000
    },
    "maryland": {
        "capital": "Annapolis",
        "abbreviation": "MD",
        "cap population": 39000
    },
    "massachusetts": {
        "capital": "Boston",
        "abbreviation": "MA",
        "cap population": 694000
    },
    "michigan": {
        "capital": "Lansing",
        "abbreviation": "MI",
        "cap population": 118000
    },
    "minnesota": {
        "capital": "Saint Paul",
        "abbreviation": "MN",
        "cap population": 307000
    },
    "mississippi": {
        "capital": "Jackson",
        "abbreviation": "MS",
        "cap population": 164000
    },
    "missouri": {
        "capital": "Jefferson City",
        "abbreviation": "MO",
        "cap population": 42000
    },
    "montana": {
        "capital": "Helena",
        "abbreviation": "MT",
        "cap population": 32000
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
]

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