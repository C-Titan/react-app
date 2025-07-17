
function Main() {
    return(
        
        <main className="hero flex-column"> {/* Hero Section */}
            <div className="heading align-center"> {/* Heading */}
                <h1>The easiest way to manage your tasks</h1>

                <p>Give your greatest asset the tools to connect, engage and communicate with your admins.</p>
            </div>
        
            <div id="user-buttons">
                <a href="/Pages/sign-in/Sing-In.html">
                    <button className="get-started">▶ <span>Try It Out</span></button>
                </a>
                <button className="learn-more no-bg-button">▶ <span>Learn More</span></button>
            </div>

            {/* <div id="showcase-video">
                <figure className="media-container">
                    <iframe width="1366" height="655" src="https://www.youtube.com/embed/rf-efIZI_Dg" title="Playing Snake with water" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </figure>
            </div> */}

            <div id="partners">
                <ul className="flex-row">
                     {/* <li><a href="index.html">Replace link to company site
                        <figure className="media-container">
                            <img src="/Images/company 01.png" alt="Partner Logo">
                        </figure>
                    </a></li> */}
                </ul>
            </div>
        </main>
    );
}

export default Main