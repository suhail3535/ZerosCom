import React from "react";

const Header = () => {
    return (
        <div>
            <section id="header">
                <a>
                    <img

                        src="https://png.pngtree.com/png-vector/20220809/ourmid/pngtree-vector-circle-template-featuring-a-handwritten-logo-with-initials-mk-vector-png-image_48001548.jpg"
                        alt="Logo"

                    />
                </a>
                <div>
                    <ul id="navbar">
                        <li>
                            <a  className="active">
                                Home
                            </a>
                        </li>
                        <li>
                            <a>Shop</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                        <li>
                            <a id="lg-bag">
                                <i className="fal fa-shopping-bag"></i>
                            </a>
                            <span className="quantity">0</span>
                            <i className="far fa-times">🛒</i>

                        </li>
                    
                    </ul>
                </div>
                <div id="mobile">

                        <i className="fal fa-shopping-bag">🛒</i>
                        <span className="quantity">0</span>

                    {/* <i id="bar" className="fas fa-outdent">🛒</i> */}
                </div>
            </section>
        </div>
    );
};

export default Header;