import { ThemeToggleButton } from "@/Components/Objects/ThemeToggleButton";
import { BackToTopButton } from "../../../Components/Objects/BackToTopButton";
import { TopBanner } from "../../../Components/Objects/TopBanner";

export default function AllOverlay() {
	return (
		<>
			<TopBanner>
                <p>This site uses cookies to enhance your experience.</p>
                <a href="/Misc/coming-soon.html">Learn more.</a>
			</TopBanner>

			<BackToTopButton />

			<ThemeToggleButton />
		</>
	);
}
