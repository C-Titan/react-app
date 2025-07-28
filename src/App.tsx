
import './index.css';
import "./GlobalVariables.css";

import { ThemeToggleButton } from "./Components/Objects/ThemeToggleButton";
import ColorPaletteShowcase from "./Pages/ColorPalette";
//


function App() {
	return (
		<>
			<ThemeToggleButton />
			<ColorPaletteShowcase/>
		</>
	);
}

export default App;

