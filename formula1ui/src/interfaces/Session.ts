import { Race } from "./Race";
import { SessionType } from "./SessionType";

export interface Session {
    id: number;
    sessionType: SessionType;
    race: Race;
}
