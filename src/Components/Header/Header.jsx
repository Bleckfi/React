import h from "./header.module.css"
import logo from "../img/logo.svg"
import HeadCarts from "./headCarts/headCarts";
import Categories from "./Categories/Categories";

const Header = () => {
    return (
        <div className={h.header}>
            <Categories/>

            <div className="logo">
                <img src={logo} alt="dsd"/>
            </div>

            <HeadCarts/>
        </div>
    )
}

export default Header