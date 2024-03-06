import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"
import "./styles.scss"
import axios from "axios";
import { useAlert } from "react-alert";
import { useEffect, useState } from "react";

interface taskItemProps {
  title: string;
  isCompleted: boolean;
  _v: number;
  _id: string;
  getTasksApi: () => void;
}

export function TaskItem({ title, isCompleted, _id, getTasksApi }: taskItemProps) {

  const alert = useAlert()

  const [isChecked, setIschecked] = useState<boolean>(true)

  useEffect(() => {
    setIschecked(isCompleted)
  }, [isCompleted])

  const handleTaskDeletion = async () => {
    try {
      await axios.delete(`https://taskmanager-1a3i.onrender.com/tasks/${_id}`);
      getTasksApi()
      alert.success("Tarefa deletada!")
    } catch (error) {
      alert.error("Algo deu errado :/ ")
    }
  };

  const handleTaskCompletionChange = async (e) => {
    try {
      await axios.patch(`https://taskmanager-1a3i.onrender.com/tasks/${_id}`, {
        isCompleted: !isChecked,
      });
      getTasksApi();
      alert.success("A tarefa foi modificado com sucesso");
    } catch (error) {
      alert.error("Error ");
    }
  };

  return (
    <li className={isCompleted ? "completedTask taskItem-container" : "notCompletedTask taskItem-container"}>
      <h2>{title}</h2>

      <footer >
        <Checkbox

          checked={isChecked}
          onClick={(e) => handleTaskCompletionChange(e)}
        />

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

        <button onClick={handleTaskDeletion} className="hover:brightness-75">
          <Trash2 size={18} color="#ef4444" />
        </button>

      </footer>
    </li>
  );
}

