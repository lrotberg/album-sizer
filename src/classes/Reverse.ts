import { ReverseName } from "../words.json";
import { Flap } from "./Flap";

export class Reverse extends Flap {
  getName = () => ReverseName;
}