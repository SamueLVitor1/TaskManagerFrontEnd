import { TaskCompletedItem } from "@/components/TaskCompletedItem"
import "./styles.scss"
import { useEffect, useState } from "react"
import axios from "axios"

export function PageTasksCompleted() {

  const [tasksCompleted, setTasksCompleted] = useState([])

  const getTasksCompleted = async () => {
    try {
      const { data } = await axios.get("https://taskmanager-1a3i.onrender.com/tasks")
      console.log(data)
      const taskList = data.filter((item: { taskCompleted: boolean }) => {
        return item.taskCompleted = true
      })
      setTasksCompleted(taskList)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTasksCompleted()
  }, [])

  return (
    <div className="container-PageTasksCompleted">
      {tasksCompleted?.map((task, i) => {
        return (
          <TaskCompletedItem description={task.description} key={i} />
        )
      })}
    </div>
  )
}