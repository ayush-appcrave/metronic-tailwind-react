import { Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { MainPage, SecondPage } from "app/pages";

const AppRouting = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route element={<MasterLayout />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/seconday" element={<SecondPage />} />
      </Route> */}
    </Routes>
  </BrowserRouter>
);

export { AppRouting };
