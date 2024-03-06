import { AsidePage } from "@/components/AsidePage";
import { Outlet } from "react-router-dom";
import "./default.scss"

export function DefaultLayout() {
  return (
    <div className="default">
      <AsidePage/>
      <Outlet />
    </div>
  )
}  
