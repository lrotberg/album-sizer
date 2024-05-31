import words from "../words";
import { Flap } from "./Flap";

export class Reverse extends Flap {
  getName = () => words.ReverseName;
}