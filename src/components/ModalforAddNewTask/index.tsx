import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import axios from "axios";
import { ReactNode, useState } from "react";
import { AlertSucess } from "../AlertSucess";

interface ModalforAddNewTaskProps {
  children: ReactNode
}

function ModalforAddNewTask({ children }: ModalforAddNewTaskProps) {

  const [nameTask, setNameTask] = useState<string>("")

  async function handleCrateNewTask(event) {
    if (nameTask.length === 0) {
      return alert("Insira nome da tarefa")
    }
    event.preventDefault();

    try {
      await axios.post("https://taskmanager-1a3i.onrender.com/tasks", {
        description: nameTask,
        isCompleted: false
      });
      <AlertSucess />
    } catch (error) {
      console.error("Erro ao criar a tarefa:", error);
    }

    setNameTask("")
  }

  return (
    <Dialog >
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-zinc-300 bg-zinc-950">
        <DialogHeader>
          <DialogTitle className="text-4xl ">
            Digite a nova tarefa:
          </DialogTitle>
        </DialogHeader>

        <form className="gap-4 py-4" id="meuFormulario">
          <Input
            required
            type="text"
            value={nameTask}
            placeholder="Digite a tarefa"
            className="max-w-xs h-10 text-2xl py-6 "
            onChange={(e) => setNameTask(e.target.value)}
          />
          <DialogFooter className="flex gap-8 mt-10">
            <button
              type="submit"
              className=" border border-zinc-500 px-3 rounded hover:scale-105 transition-all"
            >
              Cancelar
            </button>

            <button
              className="bg-zinc-600 px-3 rounded hover:brightness-75 hover:scale-105 transition-all"
              type="submit"
              onClick={(e) => handleCrateNewTask(e)}
            >
              Adicionar
            </button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  );
}

export default ModalforAddNewTask;