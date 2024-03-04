import { AlertOctagon, CheckSquare, Home, LogOut } from "lucide-react";
import "./styles.scss"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function AsidePage() {
  return (
    <aside className="aside-container">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <p className="flex flex-col items-center">Samuel
          <span>Vítor</span>
        </p>

      </div>
      <div>
        <ul>
          <li>
            <Home size={20} />
            All tasks
          </li>
          <li>
            <CheckSquare size={20} />
            Completed tasks
          </li>
          <li>
            <AlertOctagon size={20} />
            Incompleted tasks</li>
        </ul>
      </div>
      <div>
        <LogOut size={20}/>
        Sign out
      </div>
    </aside>
  );
}

