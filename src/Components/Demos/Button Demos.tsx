import { Button } from "../Button";

export default function ButtonDemo() {
	const style: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		maxWidth: "400px"
	}

	return (
		<div style={style}>
			<Button variant="default">Button</Button>
			<br />
			<Button variant="default" href="#">Linked Button</Button>
			<br />
			<Button variant="default" disabled>
				Disabled
			</Button>
			<br />
			<Button variant="default" loading>
				...loading
			</Button>
			<br />
			<Button variant="outlined">Outlined</Button>
			<br />
			<Button variant="danger">Danger</Button>
			<br />
			<Button variant="secondary">Secondary</Button>
			<br />
			<Button variant="default" size="icon" icon="⚙️"></Button>
			<br />
			<Button variant="default" size="mixed" icon="⚙️">
				With Icon
			</Button>
		</div>
	);
}
