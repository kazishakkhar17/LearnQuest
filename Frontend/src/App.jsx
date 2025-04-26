import { useAuth } from "./context/AuthProvider";
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Admission from './AdmissionInfo/Admission';
import Guideline from './GuidelineInfo/Guideline';
import AdminsBoard from './AdminsExamBoard/AdminsBoard';  // Import the AdminExamBoard component
import { Toaster } from 'react-hot-toast';
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log("authUser:", authUser);

  if (authUser === undefined) {
    return <div>Loading...</div>; // optional
  }

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/AdmissionUpdate" element={<Admission />} />
          <Route path="/GuidelineUpdate" element={<Guideline />} />
          <Route 
            path="/AdminExamBoard" 
            element={authUser?.role === "admin" ? <AdminsBoard /> : <Navigate to="/" />
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
