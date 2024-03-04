import { AsidePage } from "@/components/AsidePage";
import { MainTasks } from "../../components/MainTasks";
import "./styles.scss"

export function Home() {
  return (
    <div className="home-container">
      <AsidePage />
      <MainTasks />
    </div>

  );
}

