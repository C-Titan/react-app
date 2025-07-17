
function Footer() {
    return(
        
        <footer>
            <hr/>
            {/* Legal Jargons */}
            <div id="footer-links">
                <div> {/* Logo */}
                    <a href="index.html">
                        {/* <img src="/Images/generic-company-logo.png" alt="Company Logo" width="150" height="45"> */}
                    </a>
                </div>
                
                <div id="links-container">
                    <div className="link-list"> {/* Solutions */}
                        <p>Solutions</p>
                        <ul>
                            <li><a href="/Misc/coming-soon.html">Intern Manager</a></li>
                            <li><a href="/Misc/coming-soon.html">Project Manager</a></li>
                        </ul>
                    </div>
                    <div className="link-list"> {/* Products */}
                        <p>Products</p>
                        <ul>
                            <li><a href="/Misc/coming-soon.html">Product 1</a></li>
                            <li><a href="/Misc/coming-soon.html">Product 2</a></li>
                        </ul>
                    </div>
                    <div className="link-list"> {/* Company */}
                        <p>Company</p>
                        <ul>
                            <li><a href="/Misc/coming-soon.html">Parent Company</a></li>
                            <li><a href="/Misc/coming-soon.html">Sibling Companies</a></li>
                        </ul>
                    </div>
                    <div className="link-list"> {/* Support */}
                        <p>Support</p>
                        <ul>
                            <li><a href="/Misc/coming-soon.html">Contact Us</a></li>
                            <li><a href="/Misc/coming-soon.html">Partner With Us</a></li>
                            <li><a href="/Misc/coming-soon.html">Legal</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div id="other">

                <div id="lang-copywrite">
                    <div className="dropdown">
                        <button className="no-bg-button flex-row">
                            {/* <figure className="media-container placeholder-container" style="width: 2rem; height: 1rem; border-radius: 0;"
                                <img src="icons/flag-en.png" alt="Flag" width="20" height="20">
                            </figure> */}
                            <span className="lang-label">English</span> ▾
                        </button>
                        <ul id="language-dropdown" className="dropdown-content footer-bg scrollable-v">
                            <li><a href="index.html">English</a></li>
                            <li><a href="index.html">French</a></li>
                            <li><a href="index.html">Arabic</a></li>
                            <li><a href="index.html">Manderin</a></li>
                        </ul>
                    </div>

                    
                    <div id="copywrite">
                        <p>{new Date().getFullYear()} David Agudosi &copy; Intern Manager 2025</p>
                    </div>
                </div>

                <div id="socials">
                    <button className="no-bg-button"> {/* Facebook */}
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                    </button>
                    <button className="no-bg-button"> {/* Twitter */}
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer

