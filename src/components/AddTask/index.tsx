import { Plus } from "lucide-react";
import "./styles.scss"
import ModalforAddNewTask from "../ModalforAddNewTask";

export function AddTask() {
  return (
    <ModalforAddNewTask
      children={
        <li className="addTask-container">
          <Plus />
          <span>Adicionar nova tarefa</span>
        </li>
      } />
  );
}
