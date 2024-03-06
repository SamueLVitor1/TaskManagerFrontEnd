import "./styles.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { TaskCompletedItem } from "@/components/TaskCompletedItem";
import { AlertTriangle } from "lucide-react";

interface TaskInterface {
  description: string;
  isCompleted: boolean;
  _v: number;
  _id: string;
}

export function PageTasksCompleted() {

  const [tasksCompleted, setTasksCompleted] = useState<TaskInterface[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getTasksCompleted = async () => {
    try {
      const { data } = await axios.get("https://taskmanager-1a3i.onrender.com/tasks");
      console.log(data);

      const newList = data.filter((task: TaskInterface) => {
        return task.isCompleted === true;
      });

      setTasksCompleted(newList);

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    getTasksCompleted()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (


    <div className="container-PageTasksCompleted">
      {isLoading ? (
        "Carregando"
      ) : (
        tasksCompleted.length === 0 ? (
          <p className="flex justify-center items-center gap-2">
            Nenhuma tarefa concluída
            <AlertTriangle size={16} color="#ef4444" />
          </p>
        ) : (
          tasksCompleted.map((task, i) => (
            <TaskCompletedItem description={task.description} key={i} />
          ))
        )
      )}
    </div>
  )
}