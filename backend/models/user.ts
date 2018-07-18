import { Company } from "./company";

export class User {
	public ID: string;
	public Email: string;
	public Type: UserType;
	// List<Company>
	public READ_ONLY?: Company[];
	public READ_WRITE?: Company[];

	// ** USER TX DATA
	public CreatedAt: Date;
	public LastLogin: Date;
	public LoginCount: number;
	public Archived: boolean;
	public ArchivedAt?: Date;

}

enum UserType {
	"Pro",
	"Basic"
}
