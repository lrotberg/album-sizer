import words from "../words";
import { Flap } from "./Flap";

export class Door extends Flap {
  getName = () => words.DoorName;
}