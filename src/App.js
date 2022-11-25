import { RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./page/Shared/Footer/Footer";
import router from "./Routes/Routes";

function App() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
      <div className="bg-base-200">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
