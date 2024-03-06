import { Check } from "lucide-react";
import "./styles.scss"

interface TaskCompletedItemProps {
  description: string
}


export function TaskCompletedItem({ description: title }: TaskCompletedItemProps) {



  return (
    <li className="container-task">
      {title}

      <footer className="w-full flex justify-end">
        <Check size={18} color="#16a34a" />
      </footer>
    </li>
  );
}

