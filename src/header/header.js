import iconoFB from "../img/icono/facebook.png";

function Header() {
    return (
        <header className="">
            <nav id="nav">
                <div className="centrarLista">
                    <ul className="lHorizontal">
                        <li>
                            <a target="_blank" href=" ">
                                <img
                                    src={iconoFB}
                                    className="redSocial__icono"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="formulario.html">Consultanos</a>
                        </li>
                        <li>
                            <a href="noticias.html">Clases</a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://goo.gl/maps/GfZu62v7VuNQDin69"
                            >
                                Ubicacion
                            </a>
                        </li>
                        <li>
                            <a href="index.html">Productos</a>
                            <ul>
                                <li>
                                    <a href="#idPaletas">Paletas</a>
                                </li>
                                <li>
                                    <a href="#idPelotas">Pelotas</a>
                                </li>
                                <li>
                                    <a href="#idAccesorios">Accesorios</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="index.html">Redes Sociales</a>
                            <ul>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.facebook.com/augusto.albarracin.1/"
                                    >
                                        Facebook
                                    </a>
                                    <img
                                        src={iconoFB}
                                        className="redSocial__icono"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://wa.me/3513045701"
                                    >
                                        WhatsApp
                                    </a>
                                    <img
                                        src={iconoFB}
                                        className="redSocial__icono"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/augustoaalb/"
                                    >
                                        Instagram
                                    </a>
                                    <img
                                        src={iconoFB}
                                        className="redSocial__icono"
                                        alt=""
                                    />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <span className="material-icons carrito">shopping_cart</span>
        </header>
    );
}
export default Header;
