import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import Context from "../src/context/store";
import Main from "./pages/Main";
import Appointment from "./pages/Appointment";
import Complete from "./pages/Complete";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const Router = () => {
  return (
    <Context>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/complete/:id" element={<Complete />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Context>
  );
};

export default Router;
