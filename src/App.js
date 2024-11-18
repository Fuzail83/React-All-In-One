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
import Toggling from "./components/Toggling";
import MultipleImagesUpload from "./components/MultipleImagesUpload";
import Tabing from "./components/Tabing";
import WithoutJSX from "./components/WithoutJSX";
import Slider from "./components/Slider";
import CrankWheelComponent from "./components/Crankwheel";
import ContactUs from "./components/ContactUs";
import DraggableModal from "./components/DraggableModal";

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
          <Route path="toggle" element={<Toggling />} />
          <Route
            path="mulitpleImagesUpload"
            element={<MultipleImagesUpload />}
          />
          <Route path="tabing/:tabName" element={<Tabing />} />
          <Route path="/withoutjsx" element={<WithoutJSX />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/crankwheel" element={<CrankWheelComponent />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/draggable" element={<DraggableModal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
