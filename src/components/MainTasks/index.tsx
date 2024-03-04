import { Plus } from "lucide-react";
import "./styles.scss"
import { TaskItem } from "../TaskItem";
import { AddTask } from "../AddTask";
import ModalforAddNewTask from "../ModalforAddNewTask";
import axios from "axios";
import { useEffect, useState } from "react";

interface TaskInterface {
  description: string;
  isCompleted: boolean;
  __v: number;
  _id: string;
}

export function MainTasks() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  const getTasksApi = async () => {
    try {
      const { data } = await axios.get("https://taskmanager-1a3i.onrender.com/tasks")
      setTasks(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTasksApi()
  }, []);

  return (
    <main className="mainTasks-container">
      <header>
        <h1>Todas as tarefas</h1>
        <ModalforAddNewTask children={
          <button>
            <Plus size={16} color="#52525b" />
          </button>
        } />
      </header>

      <ul>
        {tasks?.map((task, i) => {
          return (
            <TaskItem key={i} taskNumber={i} />
          )
        })}

        <AddTask />
      </ul>


    </main>
  );
}


