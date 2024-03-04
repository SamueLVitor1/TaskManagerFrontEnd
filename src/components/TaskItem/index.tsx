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

        <button>
          <Trash2 size={18} color="#ef4444" />
        </button>

      </footer>
    </li>
  );
}

