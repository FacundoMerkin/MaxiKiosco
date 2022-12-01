import CartWidget from "./CartWidget"
import React from "react"

export const NavBar = () => {
    return(
        <nav class="nav">
        <a href="index.html" aria-label="Home">MaxiKiosco</a>
        <ul>
            <li><button aria-label="Combos">Combos</button>
            </li>
            <li><button
                    aria-label="Bebidas">Bebidas</button></li>
            <li>
                <button  aria-label="toggle light/dark mode">Comida</button>
            </li>
            <li>
                <a className="nav__link" href="#" >
                    <CartWidget />
                </a>
            </li>
        </ul>
    </nav>
    )
}

export default NavBar

