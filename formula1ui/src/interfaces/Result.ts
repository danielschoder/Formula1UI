import { Constructor } from "./Constructor";
import { Driver } from "./Driver";

export interface Result {
    id: string;
    position: string;
    points: number;
    sessionId: string;
    driver: Driver;
    constructor: Constructor;
}
