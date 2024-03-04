import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"
import "./styles.scss"

interface taskItemProps {
  title: string;
  isCompleted: boolean;
  _v: number;
  _id: string;
}

export function TaskItem({ title, isCompleted }: taskItemProps) {

  console.log(isCompleted)

  return (
    <li className="taskItem-container">
      <h2>{title}</h2>

      <footer>
        <p className={isCompleted ? "completedTask" : "notCompletedTask"}>
          {isCompleted ? "Completa" : "Não Completa"}
        </p>

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

