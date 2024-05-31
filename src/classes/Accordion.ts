import words from "../words";
import { Flap } from "./Flap";

export class Accordion extends Flap {
  getName = () => words.AccordionName;
}