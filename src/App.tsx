
import "./GlobalVariables.css";
// import './index.css';

import Dashboard from "./Pages/Dashboard/Dashboard";
// import LandingPage from "./Pages/Landing/LandingPage";
// import Login from "./Pages/Log In/LogInPage";
// import SignUp from "./Pages/Sign Up/SignUpPage";

import { ThemeToggleButton } from "./Components/Objects/ThemeToggleButton";
// import Header from "./Pages/Parts/Header/Header";

// import AccordionDemo from "./Components/Demos/AccordionDemo";
//


function App() {
	return (
		<>
			{/* <AccordionDemo/> */}
			{/* <Header/> */}
			<ThemeToggleButton/>
			<Dashboard/>
			{/* <LandingPage/> */}
			{/* <SignUp/> */}
		 	{/* <Login/> */}
		</>
	);
}

export default App;
