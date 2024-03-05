import { Plus } from "lucide-react";
import "./styles.scss"
import { TaskItem } from "../TaskItem";
import { AddTask } from "../AddTask";
import ModalforAddNewTask from "../ModalforAddNewTask";
import axios from "axios";
import { useEffect, useState } from "react";
import { LoadComponent } from "../LoadComponent";

interface TaskInterface {
  description: string;
  isCompleted: boolean;
  _v: number;
  _id: string;
}

export function MainTasks() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const getTasksApi = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks")
      setTasks(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    setTimeout(() => {
      getTasksApi()
    }, 3000);
  }, []);

  return (
    <main className="mainTasks-container">
      <header>
        <h1>Todas as tarefas</h1>
        <ModalforAddNewTask
          getTasksApi={getTasksApi}
          children={
            <button>
              <Plus size={16} color="#52525b" />
            </button>
          } />
      </header>

      {isLoading ? (
        <LoadComponent />
      ) : (
        <ul>
          {tasks?.map((task, i) => (
            <TaskItem
              key={i}
              isCompleted={task.isCompleted}
              _v={task._v}
              _id={task._id}
              title={task.description}
              getTasksApi={getTasksApi}
            />
          ))}
          <AddTask getTasksApi={getTasksApi} />
        </ul>
      )}
    </main>
  );
}


