export class IncomeStatement {
	// Required Fields
	public ID: string;
	public CompanyID: string
	public QuarterStart: Date;
	public QuarterEnd: Date;


	// ** GENERIC TX DATA
	public CreatedAt: Date;
	public CreatedBy: string;
	public UpdatedAt: Date;
	public UpdatedBy: string;
	public Archived: boolean;
	public ArchivedAt?: Date;
	public ArchivedBy?: string;

}
