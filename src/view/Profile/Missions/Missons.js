import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Missions.css'
import { RiCheckboxBlankCircleLine, RiCheckLine } from 'react-icons/ri'
import { IoMdAdd, IoMdAddCircle, IoIosFlag } from 'react-icons/io'
import { FaEllipsisH } from 'react-icons/fa'
import CreateMission from './CreateMission'

export default function Missons({ tasks, setTasks }) {
  const [isCreateNewTask, setIsCreateNewTask] = useState(false)
  const [isEditTask, setIsEditTask] = useState(false)

  const showEditTask = () => {
    if (isCreateNewTask) setIsCreateNewTask(false)
    setIsEditTask(true)
  }

  const showCreateTask = () => {
    if (isEditTask) setIsEditTask(false)
    setIsCreateNewTask(true)
  }

  const editTask = (value, id) => {
    const tasksEdit = tasks.map((taskItem) =>
      taskItem.id === id ? value : taskItem,
    )
    setTasks(tasksEdit)
  }

  return (
    <div className="missions">
      <h4>Mục tiêu tháng 9</h4>
      <div className="list-missions">
        {tasks?.map((tasksItem, index) => {
          return !isEditTask ? (
            <div className="list-missions__task" key={index}>
              <div
                className={
                  tasksItem.isDone ? 'task-item done-task' : 'task-item'
                }
              >
                {!tasksItem.isDone ? (
                  <RiCheckboxBlankCircleLine
                    className="checkbox-not-tick"
                    onClick={() => {
                      tasksItem.isDone = true
                      setTasks([...tasks])
                    }}
                  />
                ) : (
                  <RiCheckLine
                    className="checkbox-tick"
                    onClick={() => {
                      tasksItem.isDone = false
                      setTasks([...tasks])
                    }}
                  />
                )}
                {tasksItem.name}
              </div>
              <FaEllipsisH onClick={showEditTask} />
            </div>
          ) : (
            <CreateMission
              tasksItem={tasksItem}
              setTasks={setTasks}
              setIsEditTask={setIsEditTask}
              isEditTask={isEditTask}
              isCreateNewTask={isCreateNewTask}
              setIsCreateNewTask={setIsCreateNewTask}
              editTask={editTask}
            />
          )
        })}
      </div>
      {!isCreateNewTask ? (
        <div className="add-new-task" onClick={showCreateTask}>
          <IoMdAdd className="add-new-task__hover" />
          Add task
        </div>
      ) : (
        <CreateMission
          setTasks={setTasks}
          setIsCreateNewTask={setIsCreateNewTask}
          setIsEditTask={setIsEditTask}
          isEditTask={isEditTask}
          isCreateNewTask={isCreateNewTask}
        />
      )}
    </div>
  )
}
