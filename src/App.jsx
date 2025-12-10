import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

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