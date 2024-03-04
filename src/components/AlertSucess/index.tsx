import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertSucess() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Tarefa criada com sucesso</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}