import { Circuit } from "./Circuit";
import { GrandPrix } from "./GrandPrix";

export interface Race {
    id: string;
    seasonYear: number;
    round: number;
    grandPrix: GrandPrix;
    circuit: Circuit;
}
