import "./HomePage.css";

import AllOverlay from "../Parts/Overlay/Overlay";
import Header from "../Parts/Header/Header";
import { MediaContainer } from "@/Components/MediaContainer";
import { useEffect, useRef, useState } from "react";


interface IDictionary {
    [key: string]: string;
}


interface DescriptorProps {
    companionImagePath?: string;
    title: string;
    description: string;
    inverted?: true;
    list?: IDictionary;
    children?: React.ReactNode;
}
const Descriptor = ({
    companionImagePath,
    title,
    description,
    inverted,
    list = {},
}: DescriptorProps) => {
    const className = inverted ? "" : " align-right";
    const ulList = (
        <ul>
            {Object.keys(list).map((key) => (
                <li key={key}>
                    <a href={list[key]}>
                        <p>{key}</p>
                    </a>
                </li>
            ))}
        </ul>
    );

    const companionImage =
            <MediaContainer.Image 
                alt="Logo"
                mediaSource={companionImagePath}
                width="90%"
                maxWidth ="350px"
                maxHeight="350px"
                aspectRatio="1"
            />
    const content = 
            <div className={"support-text" + className}>
                <h2>{title}</h2>
                <p>{description}</p>

                {list ? ulList : null}

                <a href="/Pages/sign-in/Sing-In.html" >
                    <button className="get-started">▶ <span>Try It Out</span></button>
                </a>
            </div>
    
    return (
        <section id="description-card" className="card">
            {inverted ? (<>
                {content}
                {companionImage}
            </>) : (<>
                {companionImage}
                {content}
            </>)}
        </section>
    )
}


interface ReviewCardProps {
    profilePicPath?: string;
    profiltPicAlt?: string;
    username: string;
    jobTitle?: string;
    review: string;
}
const ReviewCard = ({
    profilePicPath = "https://thispersondoesnotexist.com/",
    profiltPicAlt = "P",
    username = "John Doe",
    jobTitle,
    review = "..."
}: ReviewCardProps) => {
    return (
        <li className="card flex-column align-center">
            <div className="card-bg flex-column align-center" />
            <MediaContainer.Image
                className="profile-pic"
                mediaSource={profilePicPath}
                alt={profiltPicAlt}
            />
            <div className="card-text">
                <h3>"</h3>
                <p>{review}</p>
                <p>
                    <b>{username}</b>
                    {jobTitle? ", " + jobTitle : ""}
                </p>
            </div>
        </li>
    );
}

interface ReviewSectionProps {
    children?: React.ReactNode
}
const ReviewSection: React.FC<ReviewSectionProps> = ({
    children
}) => {
    const scrollAreaRef = useRef<HTMLUListElement | null>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    useEffect(() => {
        const scroll = scrollAreaRef.current;
        if (!scroll) return;

        const update = () => {
            setAtStart(scroll.scrollLeft === 0);
            setAtEnd(scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth);
        };

        scroll.addEventListener("scroll", update);
        update();

        return () => scroll.removeEventListener("scroll", update);
    }, []);
    
    const scrollLeft = () => {
        if (scrollAreaRef.current) scrollAreaRef.current.scrollLeft -= 500;
        // console.log("left");
    }
    const scrollRight = () => {
        if (scrollAreaRef.current) scrollAreaRef.current.scrollLeft += 500;
        // console.log("right");
    }

    return (
        <>
            <div>
                <ul 
                    ref={scrollAreaRef}
                    id="review-card-area" 
                    className="scrollable-h hide-scrollbar"
                >
                    {children}
                </ul>
            </div>
            <div id="scroll-buttons">
                <button id="scroll-buttons-left" onClick={scrollLeft} disabled={atStart}>◀</button>
                <button id="scroll-buttons-right" onClick={scrollRight} disabled={atEnd}>▶</button>

                {/* <button id="scroll-buttons-left" onClick={scrollLeft}>◀</button>
                <button id="scroll-buttons-right" onClick={scrollRight}>▶</button> */}

            </div>
        </>
    );
}


export default function HomePage() {
    return (
        <>
            <AllOverlay/>

            <Header />

           {/* <!-- BODY --> */}
            <main>
                <div className="main-body">

                    <section className="hero flex-column">{/* <!--  Hero Section --> */}
                        <div className="heading align-center">{/* <!--  Heading --> */}
                            <h1>The easiest way to manage your tasks</h1>

                            <p>Give your greatest asset the tools to connect, engage and communicate with your admins.</p>
                        </div>
                    
                        <div id="user-buttons">
                            <a href="/Pages/sign-in/Sing-In.html">
                                <button className="get-started">▶ <span>Try It Out</span></button>
                            </a>
                            <button className="learn-more no-bg-button">▶ <span>Learn More</span></button>
                        </div>

                        <MediaContainer.Iframe
                            id="showcase-video"
                            title="Promo Video"
                            mediaSource="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            width="80%"
                            aspectRatio="5/3"
                        />

                        <div id="partners">
                            <ul className="flex-row">
                                <li><MediaContainer.Image
                                    href="index.html"
                                    mediaSource="src/assets/Images/Partner Logos/company 01.png"
                                    alt="Partner Logo"
                                    borderRadius="var(--border-radius-min)"
                                    width="7rem"
                                    aspect-rat="3/1"
                                /></li>
                                <li><MediaContainer.Image
                                    href="index.html"
                                    mediaSource="src/assets/Images/Partner Logos/company 02.png"
                                    alt="Partner Logo"
                                    borderRadius="var(--border-radius-min)"
                                    width="7rem"
                                    aspect-rat="3/1"
                                /></li>
                                <li><MediaContainer.Image
                                    href="index.html"
                                    mediaSource="src/assets/Images/Partner Logos/company 03.png"
                                    alt="Partner Logo"
                                    borderRadius="var(--border-radius-min)"
                                    width="7rem"
                                    aspect-rat="3/1"
                                /></li>
                                <li><MediaContainer.Image
                                    href="index.html"
                                    mediaSource="src/assets/Images/Partner Logos/company 04.png"
                                    alt="Partner Logo"
                                    borderRadius="var(--border-radius-min)"
                                    width="7rem"
                                    aspect-rat="3/1"
                                /></li>
                                <li><MediaContainer.Image
                                    href="index.html"
                                    mediaSource="src/assets/Images/Partner Logos/company 05.png"
                                    alt="Partner Logo"
                                    borderRadius="var(--border-radius-min)"
                                    width="7rem"
                                    aspect-rat="3/1"
                                /></li>
                            </ul>
                        </div>
                    </section>

                    <div className="descriptors flex-column">
                        <Descriptor
                            // companionImagePath="src/assets/generic-company-logo.png"
                            title = "Drive Engagement with a Purpose"
                            description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt dolores quisquam reprehenderit tenetur nam, rerum voluptatum quis voluptas itaque natus ab suscipit facilis quae repudiandae officiis incidunt commodi, necessitatibus cumque."
                            list={{
                                "Some sample text about sample topic. ▷": "/Misc/coming-soon.html",
                                "Some other sample text about sample topic. ▷": "/Misc/coming-soon.html",
                                "Some more sample text about sample topic. ▷": "/Misc/coming-soon.html"
                            }}
                        />
                        
                        <Descriptor
                            // companionImagePath="src/assets/generic-company-logo.png"
                            title = "Drive Engagement with a Purpose"
                            description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt dolores quisquam reprehenderit tenetur nam, rerum voluptatum quis voluptas itaque natus ab suscipit facilis quae repudiandae officiis incidunt commodi, necessitatibus cumque."
                            inverted
                            list={{
                                "Some sample text about sample topic. ▷": "/Misc/coming-soon.html",
                                "Some other sample text about sample topic. ▷": "/Misc/coming-soon.html",
                                "Some more sample text about sample topic. ▷": "/Misc/coming-soon.html"
                            }}
                        />
                    </div>

                    <div className="reviews flex-column">
                        <section className="heading">
                            <h2>Trusted by the fastest growing startups and companies</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eius eaque necessitatibus amet adipisci facere, dolore eveniet.</p>
                        </section>

                        <ReviewSection>
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem eius expedita nostrum assumenda sunt voluptatem asperiores eveniet quam blanditiis accusamus, consequuntur minima fugiat in excepturi aliquid."
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="This was the bestest mpst estest more of the elfkgjskmesckd."
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="This was the bestest mpst estest more of the elfkgjskmesckdm wmcwsdkmcx sldkm wslkdm cxvldjxfkmc velkdfmnb;uiasjgkvnc lisjdkc."
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="This was the bestest mpst estest more of the elfkgjskmesckd."
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="This was the bestest mpst estest more of the elfkgjskmesckd."
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="This was the bestest mpst estest more of the elfkgjskmesckd."
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="This was the bestest mpst estest more of the elfkgjskmesckd."
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="This was the bestest mpst estest more of the elfkgjskmesckd."
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                review="This wsm wedk pwoelsdfk,oc3poerklfmd oiekrj mgvikr mdvke mdfoivk as the bestest mpst estest more of the elfkgjskmesckd."
                                jobTitle="Mechanic"
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="This was the bestest mpst estest more of the elfkgjskmesckd."
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="This was the bestest mpst estest more of the elfkgjskmesckd."
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="This was the bestest mpst estsefdoi k23pwoek fpwoe dlmpworsld mvekrds vmest more of the elfkgjskmesckd."
                            />
                            <ReviewCard
                                // profilePicPath="/Images/pfp.png"
                                profiltPicAlt="P"
                                username="Guy White"
                                jobTitle="Mechanic"
                                review="This was the bestest mpst estest more of the elfkgjskmew soedklfw poesdlk fpwosledk fcpowse lfdpo xcsckd."
                            />
                        </ReviewSection>
                    </div>

                    <div className="want-to-learn-more">
                        <section className="heading">
                            <h2>Want to learn more about us?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, maiores. Consectetur temporibus ipsum doloremque, odit, ratione, similique natus dolorum molestias blanditiis tenetur dolor.</p>
                        </section>
                        
                        <a href="/Pages/sign-in/Sing-In.html">
                            <button className="get-started">▶ <span>Try It Out</span></button>
                        </a>
                        
                        <br/>
                    </div>

                </div>
            </main>


           {/* <!-- FOOTER --> */}
            <footer>
                {/* <!--  Legal Jargons --> */}
                <div id="footer-links">
                    <div>{/* <!--  Logo --> */}
                        <a href="index.html">
                            <img src="/Images/generic-company-logo.png" alt="Company Logo" width="150" height="45"/>
                        </a>
                    </div>
                    
                    <div id="links-container">
                        <div className="link-list">{/* <!--  Solutions --> */}
                            <p>Solutions</p>
                            <ul>
                                <li><a href="/Misc/coming-soon.html">Intern Manager</a></li>
                                <li><a href="/Misc/coming-soon.html">Project Manager</a></li>
                            </ul>
                        </div>
                        <div className="link-list">{/* <!--  Products --> */}
                            <p>Products</p>
                            <ul>
                                <li><a href="/Misc/coming-soon.html">Product 1</a></li>
                                <li><a href="/Misc/coming-soon.html">Product 2</a></li>
                            </ul>
                        </div>
                        <div className="link-list">{/* <!--  Company --> */}
                            <p>Company</p>
                            <ul>
                                <li><a href="/Misc/coming-soon.html">Parent Company</a></li>
                                <li><a href="/Misc/coming-soon.html">Sibling Companies</a></li>
                            </ul>
                        </div>
                        <div className="link-list">{/* <!--  Support --> */}
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
                                <figure className="media-container placeholder-container">
                                        {/* style={{width: "2rem"; height: "1rem"; border-radius: 0;}}> */}
                                    {/*  <img src="icons/flag-en.png" alt="Flag" width="20" height="20"> */}
                                </figure>
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
                            <p>David Agudosi &copy; Intern Manager 2025</p>
                        </div>
                    </div>

                    <div id="socials">
                        <button className="no-bg-button">{/* <!--  Facebook --> */}
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </button>
                        <button className="no-bg-button">{/* <!--  Twitter --> */}
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </footer>
        </>
    );
}