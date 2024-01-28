const express = require("express")
const cors = require("cors")
const db = require("./db")

const app = express()


let corsOptions = {
    origin: ['http://localhost:3000/']
}

app.use(cors(corsOptions))

app.get("/test", cors(corsOptions), async(req, res) =>{
    db.insert("api", "this is from the api");
    res.send("Wow!")
})

app.get("/notes", cors(corsOptions), async(req, res) => {
    rows = db.getAll()
    console.log("From JS")
    console.log(rows)
    res.send("Worked!")
})

app.get("/", (req, res) => {
    res.send("Hello, World!")
})

app.listen(5000, () => console.log("Running on port 5000"))