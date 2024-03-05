import { Plus } from "lucide-react";
import "./styles.scss"
import ModalforAddNewTask from "../ModalforAddNewTask";

interface AddTaskiInterface {
  getTasksApi: () => void;
}

export function AddTask({ getTasksApi }: AddTaskiInterface) {
  return (
    <ModalforAddNewTask
      getTasksApi={getTasksApi}
      children={
        <li className="addTask-container">
          <Plus />
          <span>Adicionar nova tarefa</span>
        </li>
      } />
  );
}
