import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"
import "./styles.scss"

export function TaskItem() {
  return (
    <li className="taskItem-container">
      <h2>Title</h2>

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

