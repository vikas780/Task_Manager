const express = require('express')
const router = express.Router()
const {
  getAllTasks,
  creatTasks,
  getTasks,
  updateTasks,
  deleteTasks,
} = require('../contoller/tasks')

router.route('/').get(getAllTasks).post(creatTasks)
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks)

module.exports = router
