// models/user.ts

export interface User {
	id: number;
	email: string;
	name: Name;
	status?: status;
}

export type status = 'Happy' | 'Sad';

export interface Name {
	first: string;
	last?: string;
}

export interface UserCreationRequest {
	email: string;
	name: Name;
}
