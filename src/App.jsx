import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ThemeProvider } from "./context/ThemeContext";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;