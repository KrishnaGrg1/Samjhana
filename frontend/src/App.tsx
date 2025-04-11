import { BrowserRouter, Route, Routes } from "react-router"
import { DashBoard } from "./pages/dashboard"
import SignIn from "./pages/SignIn"
import Signup from "./pages/SignUp"


function App() {

  return (
    //<DashBoard />

    //<Signup />
    
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
