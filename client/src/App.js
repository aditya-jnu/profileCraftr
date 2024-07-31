import { Route, Routes } from "react-router";
import Homepg from "./pages/Homepg";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import ProfilePg from "./pages/ProfilePg";

export default function App() {
  
  return (
    <div className="font-lato">
      <Routes>
        <Route path="/" element={<Homepg/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/:userID" element={<Admin/>}/>
        <Route path="/portfolio/:userEmail" element={<ProfilePg/>}/>
      </Routes>
    </div>
  );
}
