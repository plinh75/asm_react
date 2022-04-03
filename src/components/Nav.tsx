import React from 'react'
import Logo from './Logo'
import {Link} from 'react-router-dom'

type Props = {}

const Nav = (props: Props) => {
    return (
        <nav className="flex justify-between items-center">
            <Logo />
            <ul className="flex items-center uppercase">
                <li className="py-5 px-4">
                    <Link to="/" className="text-[#334d5e] transition duration-300 hover:text-[#b4073a] no-underline">Trang chủ</Link>
                </li>
                <li className="py-5 px-4">
                    <Link to="/product" className="text-[#334d5e] transition duration-300 hover:text-[#b4073a] no-underline">Son môi</Link>
                </li>
                <li className="py-5 px-4">
                    <Link to="/about" className="text-[#334d5e] transition duration-300 hover:text-[#b4073a] no-underline">
                        Tuyển đại lý, cộng tác viên
                    </Link>
                </li>
                <li className="py-5 px-4">
                    <Link to="/contact" className="text-[#334d5e] transition duration-300 hover:text-[#b4073a] no-underline">Liên hệ</Link>
                </li>
            </ul>
            <a className="text-black text-3xl relative pt-[6px] pr-[6px]">
                <i className="fa-solid fa-cart-shopping" />
                <span className="absolute top-0 right-0 text-white text-base bg-pink-400 rounded-[50%] w-5 h-5 text-center hover:text-[#b4073a]">0</span>
            </a>
        </nav>

    )
}

export default Nav