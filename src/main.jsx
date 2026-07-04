import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';

import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </HelmetProvider>
);