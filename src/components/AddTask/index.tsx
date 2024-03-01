import { Plus } from "lucide-react"
import "./styles.scss"

export function AddTask() {
  return (
    <li className="addTask-container">
      <Plus />
      <span>Adicionar nova tarefa</span>
    </li>
  );
}

