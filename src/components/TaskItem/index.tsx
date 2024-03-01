import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"
import "./styles.scss"

interface taskItemProps {
  taskNumber: number;
}

export function TaskItem({ taskNumber }: taskItemProps) {
  return (
    <li className="taskItem-container">
      <h2>Tarefa {taskNumber}</h2>

      <footer>
        <p className="completedTask">Completa</p>

        <div>
          <Checkbox />
          <button>
            <Trash2 size={18} color="#ef4444" />
          </button>
        </div>
      </footer>
    </li>
  );
}

