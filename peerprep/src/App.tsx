// App.tsx
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import QuestionList from "./pages/QuestionList";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Editor from "./pages/Editor";
import Match from "./pages/Matching/Match";
import Collaboration_Service from "./pages/Collaboration/Collaboration_Service";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<Forgot />} />
        <Route path="/question" element={<QuestionList />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editor/:matchId" element={<Editor />} />

        <Route path="/match" element={<Match />} />
        <Route path="/collaboration/:roomId" element={<Collaboration_Service />} />

      </Routes>
    </Router>
  );
};

export default App;
