import { Route, HashRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Header from "./components/header/header"

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}