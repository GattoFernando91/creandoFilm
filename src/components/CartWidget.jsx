import { NavLink } from "react-router-dom";
import IconCart from "../assets/img/IconCart.png"

export const CartWidget = () => {
    return (
            <NavLink to="/Cart"><img src={IconCart} alt="" className="iconCart" />4</NavLink>
    )
};