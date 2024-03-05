import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"
import "./styles.scss"
import axios from "axios";

interface taskItemProps {
  title: string;
  isCompleted: boolean;
  _v: number;
  _id: string;
  getTasksApi: () => void;
}

export function TaskItem({ title, isCompleted, _id, getTasksApi }: taskItemProps) {

  console.log(isCompleted)

  const handleTaskDeletion = async () => {
    try {
      await axios.delete(`https://taskmanager-1a3i.onrender.com/tasks/${_id}`);
      getTasksApi()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className={isCompleted ? "completedTask taskItem-container" : "notCompletedTask taskItem-container"}>
      <h2>{title}</h2>

      <footer >
        <Checkbox />

        <p className="flex items-center gap-[6px] text-xl">
          {isCompleted ?
            <>
              Concluída             </>
            :
            <>
              Pendente
            </>
          }
        </p>

        <button onClick={handleTaskDeletion}>
          <Trash2 size={18} color="#ef4444" />
        </button>

      </footer>
    </li>
  );
}

