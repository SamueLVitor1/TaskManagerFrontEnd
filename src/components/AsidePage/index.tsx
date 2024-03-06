import { AlertOctagon, CheckSquare, Home, LogOut } from "lucide-react";
import "./styles.scss"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom";


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
          <Link to="/" >
            <li>
              <Home size={20} />
              All tasks
            </li>
          </Link>

          <Link to={"/taskCompleted"}>
            <li>
              <CheckSquare size={20} />
              Completed tasks
            </li>
          </Link>

          <li>
            <AlertOctagon size={20} />
            Incompleted tasks</li>
        </ul>
      </div>
      <div>
        <LogOut size={20} />
        Sign out
      </div>
    </aside>
  );
}

