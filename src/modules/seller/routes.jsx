import Upload from "./pages/Upload";
import AddProduct from "./pages/addproduct";
import UpdateProduct from "./pages/UpdateProduct";

import ViewOrders from "./pages/viewOrders.jsx";
import ViewProducts from "./pages/viewProducts";
import ViewUser from "./pages/ViewUser";

export const sellerRoutes = [
  {
    path: "/admin/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/admin/updateproduct/:product_id",
    element: <UpdateProduct />,
  },
  {
    path: "/admin/viewUsers",
    element: <ViewUser />,
  },
  {
    path: "/admin/viewProducts",
    element: <ViewProducts/>,
  },
  {
    path:"/admin/upload",
    element:<Upload/>,
    
   
  },

  {
    path:"/admin/viewOrders",
    element:<ViewOrders/>
  }
];
