import h from "../header.module.css";
import $ from "../../img/$.svg";
import vector from "../../img/Vector.svg";
import cart from "../../img/Empty Cart.svg";


const HeadCarts = () => {
    return (
        <div className={h.carts}>
            <div className={h.navCart}>
                <img src={$} alt=""/>
            </div>
            <div className={h.navCart}>
                <img src={vector} alt=""/>
            </div>
            <div className={h.navCart}>
                <img src={cart} alt=""/>
            </div>
        </div>

    )
}

export default HeadCarts