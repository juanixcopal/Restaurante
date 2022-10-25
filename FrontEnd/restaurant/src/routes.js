import Menu from "./views/staff/Menu.js"
import Order from "./views/staff/order.js"
import { MdRestaurantMenu} from "react-icons/md";
import {GiShoppingCart} from "react-icons/gi";

var routes = [
    {
        path: "/menu",
        name: "Menu",
        component: Menu,
        icon: <MdRestaurantMenu/>,
        layout: "/user"
    },
    {
        path: "/order",
        name: "Order",
        component: Order,
        icon: <GiShoppingCart/>,
        layout: "/user"
    }
];

export default routes;