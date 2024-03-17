import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Form from "./pages/Form";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="onas" element={<About />} />
          <Route path="epoukaz" element={<Form />} />
          <Route path="produkty" element={<Products />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
