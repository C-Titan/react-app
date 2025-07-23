
import Accordion from "../Base/Accordion";

export default function AccordionDemo() {
    return (
        <Accordion.List>
            <Accordion.Element title="Item 1">
                <ul>
                    <li>Bebebe</li>
                    <li>Bebebe</li>
                </ul>
            </Accordion.Element>
            <Accordion.Element title="Item 2">
                <ul>
                    <li>Bebebe</li>
                    <li>Bebebe</li>
                </ul>
            </Accordion.Element>
            <Accordion.Element title="Item 3">
                <ul>
                    <li>Bebebe</li>
                    <li>Bebebe</li>
                </ul>
            </Accordion.Element>
        </Accordion.List>
    );
}
