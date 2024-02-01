import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className=" header">
            <div className="header-container flex space-between">

                <div className="left">
                    <Link to={"/"}>
                      <img src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg" alt="movix-logo" />
                    </Link>
                </div>

                <div className="right">
                    <ul className="flex item-center gap">
                        <li><Link to={"/explore/movie"}>Movies</Link></li>
                        <li><Link to={"/explore/show"}>Show</Link></li>
                        <li><IoSearchOutline /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header