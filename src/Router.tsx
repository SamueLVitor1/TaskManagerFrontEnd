import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { PageTasksCompleted } from "./pages/PageTasksCompleted";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/taskCompleted" element={<PageTasksCompleted />}></Route>
      </Route>
    </Routes>
  )
}