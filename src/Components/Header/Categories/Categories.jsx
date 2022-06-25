import h from "../header.module.css";
import {NavLink} from "react-router-dom";


const Categories = () => {
    return (
        <div className={h.categories}>
            <div className={h.navLinks}>
                <NavLink className={nav => nav.isActive ? h.active : h.item}
                         to={"/Women"}>Women</NavLink>
            </div>

            <div className={h.navLinks}>
                <NavLink className={nav => nav.isActive ? h.active : h.item}
                         to={"/Men"}>Men</NavLink>
            </div>

            <div className={h.navLinks}>
                <NavLink className={nav => nav.isActive ? h.active : h.item}
                         to={"/KIDS"}>KIDS</NavLink>
            </div>
        </div>
    )
}

export default Categories