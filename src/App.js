import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import LocalStorage from "./components/LocalStorage";

import AddData from "./components/jsonServerData/AddData";
import List from "./components/jsonServerData/List";
import ManageProduct from "./components/products/ManageProduct";
import ManagePost from "./components/posts/ManagePost";
import AddProduct from "./components/products/AddProduct";
import AddRowDelete from "./components/AddRowDelete";
import PageNotFound from "./components/common/PageNotFound";
import ViewProducts from "./components/products/ViewProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/localStorage" element={<LocalStorage />} />
          {/* <Route path="/posts" element={<ManagePost />} /> */}
          <Route path="/productList" element={<ManageProduct />} />
          <Route path="/addrowdelete" element={<AddRowDelete />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/productList/:id" element={<ViewProducts />} />
          <Route path="/apiCall" element={<AddData />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
