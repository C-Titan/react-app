import NavBar from "../Base/NavigaitonBar";
import Dropdown from "../Base/Dropdown";
import { Button } from "../Base/Button";

function MenuDropdown() {
	return (
		<NavBar.Item>
			<Dropdown.Trigger title="Home">
				<ul>
					<Button>Item 1 - The frenh</Button>
					<Button>Item 2</Button>
					<Button>Item 3 - MEMEMEME</Button>
					<Button>Item 4 - dfivujfd</Button>
					<Button>Item 5</Button>
				</ul>
			</Dropdown.Trigger>
		</NavBar.Item>
	);
}

export function NavBarDemo() {
	return (
		<>
			<NavBar>
				<NavBar.List>
					<MenuDropdown />

					<NavBar.Item>ButtonLink</NavBar.Item>

					<MenuDropdown />

					<NavBar.ItemLink href="">
						<NavBar.Item>Button Link</NavBar.Item>
					</NavBar.ItemLink>

					<NavBar.Item title="Cheese"></NavBar.Item>
				</NavBar.List>
			</NavBar>
		</>
	);
}
