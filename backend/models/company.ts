import { HealthScore } from './healthScore';
import { FinancialRatioData } from './financialRatioData'
import { BalanceSheet } from './balanceSheet'
import { IncomeStatement } from './incomeStatement'
import { CashFlowStatement } from './cashFlowStatement'
import { User } from './user'

export class Company {
	// Required Fields
	public ID: string;
	public CompanyID: string;
	public Name: string;
	// List<User>
	public READ_ONLY?: User[];
	public READ_WRITE: User[];

	// Nullable Fields
	public Location?: string;
	public Description?: string;
	public MainSector?: string;
	public SubSector?: string;
	public Logo?: Blob;

	// Current Health Score
	public HealthScore?: number;

	public HealthScoreData?: HealthScore[];
	public FinancialRatioData?: FinancialRatioData[];
	public BalanceSheetData?: BalanceSheet[];
	public IncomeStatementData?: IncomeStatement[];
	public CashFlowStatementData?: CashFlowStatement[];

	// ** GENERIC TX DATA
	public CreatedAt: Date;
	public CreatedBy: string;
	public UpdatedAt: Date;
	public UpdatedBy: string;
	public Archived: boolean;
	public ArchivedAt?: Date;
	public ArchivedBy?: string;

}
