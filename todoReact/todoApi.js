const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const {createTask, readTask, updateTask, destroyTask, activeTasks, completedTasks, checkAll, clearCompleted} = require('./dbTasks')
// const filePath = process.argv[2]
const app = express()
app.use(express.static('views'))
// app.use(bodyParser());
app.use(bodyParser.json({
  extended: true
}))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.get('/read', function (req, res) {
  const readTasks = readTask()
  // return readTask();
  // console.log(readTasks)
  readTasks.then((tasks) => { res.json(tasks[0]) })
  .catch(() => { res.sendStatus(500) })
})
app.post('/write/:message', function (req, res) {
  const taskMessage = req.params.message
  const createTasks = createTask(taskMessage)
  createTasks.then((task) => {
    res.send(task[0].id.toString())
  })
  .catch(() => { res.sendStatus(500) })
})
app.put('/update/:id', function (req, res) {
  const id = req.params.id
  const description = req.body.description
  const status = req.body.status
  console.log('update log in server api')
  const updateInfo = updateTask(id, description, status)
  updateInfo.then(() => { res.send('Updated the information') })
  .catch(() => { res.sendStatus(500) })
})
app.delete('/destroy/:id', function (req, res) {
  const id = req.params.id
  const deleteTask = destroyTask(id)
  deleteTask.then(() => { res.send('Deleted the information') })
  .catch(() => { res.sendStatus(500) })
})
app.delete('/destroyCompleted', function (req, res) {
  const clearComplete = clearCompleted()
  clearComplete.then(() => { res.send('Deleted the information') })
  .catch((error) => {
    console.log(error)
    res.sendStatus(500)
  })
  // res.status(200).send({data: 'worked'})
})
app.get('/active', function (req, res) {
  const active = activeTasks()
  active.then((data) => { return res.send(data[0]) })
  .catch(() => { res.sendStatus(500) })
})
app.get('/completed', function (req, res) {
  const completed = completedTasks()
  completed.then((data) => res.send(data))
  .catch(() => { res.sendStatus(500) })
})
app.put('/checkAll', function (req, res) {
  const statusCheck = req.body.status
  console.log(statusCheck)
  const check = checkAll(statusCheck)
  check.then((data) => res.send(data))
  .catch(() => { res.sendStatus(500) })
})
app.listen(3427)
