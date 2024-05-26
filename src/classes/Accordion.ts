import { AccordionName } from "../words.json";
import { Flap } from "./Flap";

export class Accordion extends Flap {
  getName = () => AccordionName;
}