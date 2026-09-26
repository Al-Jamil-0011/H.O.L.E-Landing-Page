import { ThemeProvider } from "./context/ThemeContext";
import { Landing } from "./pages/Landing";

export function App() {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
}