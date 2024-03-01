import { Plus } from "lucide-react";
import "./styles.scss"
import { TaskItem } from "../TaskItem";

export function MainTasks() {
  return (
    <main className="mainTasks-container">
      <header>
        <h1>Todas as tarefas</h1>
        <button>
          <Plus size={16} color="#52525b" />
        </button>
      </header>

      <ul>
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            <TaskItem key={i} taskNumber={i} />
          )
        })}

        <p>Adicionar</p>
      </ul>


    </main>
  );
}


