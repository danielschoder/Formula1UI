import { Race } from "./Race";
import { SessionType } from "./SessionType";

export interface Session {
    id: string;
    sessionType: SessionType;
    race: Race;
}
