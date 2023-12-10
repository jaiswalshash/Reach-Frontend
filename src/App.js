import { React } from "react";
import Navbar from "./components/Navbar";
import BookMatcher from "./pages/BookMatcher";
import "./app.css";

function App() {
  return (
    <div id="main-app" className="bg-gray-50 dark:bg-gradient-to-tr from-purple-400 via-black to-teal-700 min-h-screen flex flex-col items-center justify-center px-20">
      <Navbar />
      <BookMatcher/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
