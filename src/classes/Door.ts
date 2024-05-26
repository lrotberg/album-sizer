import { DoorName } from "../words.json";
import { Flap } from "./Flap";

export class Door extends Flap {
  getName = () => DoorName;
}