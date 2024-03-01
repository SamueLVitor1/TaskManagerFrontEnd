import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ReactNode } from "react";

interface ModalforAddNewTaskProps {
  children: ReactNode
}

function ModalforAddNewTask({ children }: ModalforAddNewTaskProps) {
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
        <form className="gap-4 py-4">
          <Input required type="text" placeholder="Tarefa" className="max-w-xs h-10 text-2xl py-6 " />
        </form>
        <DialogFooter className="flex gap-8">
          <button
            className="bg-zinc-600 px-3 rounded hover:brightness-75 hover:scale-105 transition-all">
            Cancelar
          </button>
          <button className="border border-zinc-500 px-3 rounded hover:scale-105 transition-all" type="submit">Adicionar</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalforAddNewTask;