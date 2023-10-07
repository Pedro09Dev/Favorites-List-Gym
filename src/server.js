const express = require("express")
const cors = require("cors")
const router = require("./routes")
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.get("/", (req, res) => {
  res.json("up")
})

app.listen(3333, () => {
  console.log("Server up in 3333")
})
