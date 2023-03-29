import express from "express"
import bp from "body-parser"
import morgan from "morgan"

const app = express()

app.use(bp.urlencoded({extended: true}))    // parses the query string
app.use(bp.json())    // parse the json body
app.use(morgan("dev"))

const db = []

app.post("/todo", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text
  }

  db.push(newTodo)
  res.json(newTodo)
})

app.get("/todo", (req, res) => {
  res.json(db)
})

app.get("/todo/:id", (req, res) => {
  const todo = db.find(t => {
    return t.id === +req.params.id
  })
  res.json({data: todo})
})

app.listen(8000, () => {
  console.log(`Server on http://localhost:8000`)
})