import React, { useState } from 'react'
import { FcOvertime } from 'react-icons/fc'
import ReactTooltip from 'react-tooltip'
import { GiAlarmClock } from 'react-icons/gi'
import { BiTargetLock } from 'react-icons/bi'
import { Modal, Button } from 'react-bootstrap'

export default function CreateMission({
  tasksItem,
  setTasks,
  setIsEditTask,
  isEditTask,
  isCreateNewTask,
  setIsCreateNewTask,
  editTask,
}) {
  const [showAddPoint, setShowAddPoint] = useState(false)
  const [task, setTask] = useState({
    assignedUser: {
      id: null,
      avatar: '',
      displayName: '',
    },
    name: '',
    isDone: false,
    point: {
      id: null,
      score: null,
      description: '',
    },
    status: 0,
    createdTime: '',
  })

  const [taskEdit, setTaskEdit] = useState(tasksItem)

  const onAddTask = (e) => {
    setTask({ ...task, name: e.target.value })
  }

  const onEditTask = (e) => {
    editTask(e.tar)
  }

  const addTask = () => {
    setTask({
      ...task,
      createdAt: new Date(),
    })

    // addNewTask(task)
    setTask({
      assignedUser: {
        id: null,
        avatar: '',
        displayName: '',
      },
      name: '',
      isDone: false,
      point: {
        id: null,
        score: null,
        description: '',
      },
      status: 0,
      createdTime: '',
    })
    setIsCreateNewTask(false)
  }

  const editTaskItem = () => {}

  return (
    <>
      <div className="is-create-task">
        <input
          type="text"
          className="is-create-task__text"
          placeholder="e.g.Get up at 11"
          value={isCreateNewTask ? task.name : taskEdit.name}
          onChange={isCreateNewTask ? onAddTask : onEditTask}
        />
        <div className="is-create-task__options">
          <button className="is-create-task__time">
            <FcOvertime />
            Today
          </button>
          <div className="is-create-task__else">
            <div>
              <a
                type="button"
                data-tip={isCreateNewTask ? 'Add more task' : 'Edit more task'}
                onClick={() => setShowAddPoint(true)}
              >
                <BiTargetLock />
                <ReactTooltip />
              </a>
              <Modal
                show={showAddPoint}
                onHide={() => setShowAddPoint(false)}
                centered
              >
                <Modal.Header>
                  <Modal.Title className="bold-title">
                    {isCreateNewTask ? 'Add More Task' : 'Edit More Task'}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="add-new-point">
                    <div className="form-group form-add-point">
                      <label htmlFor="score">Score</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id="score"
                        placeholder="e.g.10"
                        value={
                          isCreateNewTask
                            ? task.point.score
                            : taskEdit.point.score
                        }
                      />
                    </div>
                    <div className="form-group form-add-point">
                      <label htmlFor="descriptionPoint">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="descriptionPoint"
                        placeholder="e.g.Mục tiêu bình thường"
                        value={
                          isCreateNewTask
                            ? task.point.description
                            : taskEdit.point.description
                        }
                      />
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => setShowAddPoint(false)}
                    className="bold-title"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => setShowAddPoint(false)}
                    className="bold-title"
                  >
                    {isCreateNewTask ? 'Add' : 'Save'}
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <GiAlarmClock />
          </div>
        </div>
      </div>
      <div className="btn-add-task">
        <button
          className="add-new-task__btn"
          disabled={!!!task}
          onClick={isCreateNewTask ? addTask : editTaskItem}
        >
          {isCreateNewTask ? 'Add task' : 'Save changes'}
        </button>
        <a
          className="add-new-task__cancel"
          onClick={() => {
            if (isCreateNewTask) setIsCreateNewTask(false)
            else setIsEditTask(false)
          }}
        >
          Cancel
        </a>
      </div>
      {isEditTask ? <div className="edit-task-line"></div> : <div></div>}
    </>
  )
}
