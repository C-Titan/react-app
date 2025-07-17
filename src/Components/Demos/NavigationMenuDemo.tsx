
import NavMenu from "../NavigationMenu";
import Dropdown from "../Dropdown";
import { Button } from "../Button";

function MenuDropdown() {
	return (
		<NavMenu.Item>
			<Dropdown.Trigger title="Home">
				<ul>
					<Button>Item 1 - The frenh</Button>
					<Button>Item 2</Button>
					<Button>Item 3 - MEMEMEME</Button>
					<Button>Item 4 - dfivujfd</Button>
					<Button>Item 5</Button>
				</ul>
			</Dropdown.Trigger>
		</NavMenu.Item>
	);
}

export function NavMenuDemo() {
	return (
		<>
			<NavMenu>
				<NavMenu.List>
					<MenuDropdown/>

					<NavMenu.Item>ButtonLink</NavMenu.Item>
					
					<MenuDropdown/>

					<NavMenu.ItemLink href=""><NavMenu.Item>Button Link</NavMenu.Item></NavMenu.ItemLink>

					<NavMenu.Item title="Cheese"></NavMenu.Item>
				</NavMenu.List>
			</NavMenu>
		</>
	);
}
