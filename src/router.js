
import {
  createBrowserRouter,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: '/about',
    element: <div>About Us</div>
  },
  {
    path: '/profile',
    element: <div>profile</div>
  }
]);

export default router;