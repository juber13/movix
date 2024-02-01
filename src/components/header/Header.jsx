import { IoSearchOutline } from "react-icons/io5";

import './index.css'

const Header = () => {
    return (
        <div className=" header">
            <div className="header-container flex space-between">

                <div className="left">
                    <img src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg" alt="movix-logo" />
                </div>

                <div className="right">
                    <ul className="flex item-center gap">
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Tv Shows</a></li>
                        <li><a href="#"><IoSearchOutline /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header