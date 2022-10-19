import { BrowserRouter, Route, Routes } from "react-router-dom";
import Context from "../src/context/store";
import Main from "./pages/Main";
import Appointment from "./pages/Appointment";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const Router = () => {
  return (
    <Context>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/appointment/:id" element={<Appointment />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Context>
  );
};

export default Router;
