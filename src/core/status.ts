import { User } from './user';

export interface Status {
    date: string;
    user: User;
    description: string;
    accomplished: boolean;
    blockers: string;
}