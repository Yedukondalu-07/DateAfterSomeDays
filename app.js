const addDays = require('date-fns/addDays')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const todaysDate = new Date()
  const result = addDays(
    todaysDate.getDate(),
    todaysDate.getMonth(),
    todaysDate.getFullYear(),
    100,
  )

  return res.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`,
  )
})

module.exports = app
