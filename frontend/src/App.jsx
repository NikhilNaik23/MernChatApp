import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./contexts/AuthContext";
function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
