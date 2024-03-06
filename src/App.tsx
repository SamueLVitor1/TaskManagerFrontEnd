import { BrowserRouter } from "react-router-dom"
import "./app.scss"
import { Router } from "./Router"

export function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

