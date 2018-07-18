export class HealthScore {
	// Required Fields
	public ID: string;
	public CompanyID: string
	public QuarterStart: Date;
	public QuarterEnd: Date;

	// Nullable Fields
	public HealthScore?: number;

	// CashAndCashEquivalents DIVIDED BY TotalExpenses
	public PrimaryReserveRatio?: number;
	// CashAndCashEquivalents DIVIDED BY LongTermDebt
	public ViabilityRatio?: number;
	// DeltaNetAssets DIVIDED BY CurrentQuarterNetAssets
	public ReturnOnNetAssetsRatio?: number;
	 // NetIncome DIVIDED BY NetSales
	public NetOperatingRevenueRatio?: number;

	public CashAndCashEquivalents?: number;
	public TotalExpenses?: number;
	public LongTermDebt?: number;
	public DeltaNetAssets?: number;
	public CurrentQuarterNetAssets?: number;
	public NetIncome?: number;
	public NetSales?: number;

	// ** GENERIC TX DATA
	public CreatedAt: Date;
	public CreatedBy: string;
	public UpdatedAt: Date;
	public UpdatedBy: string;
	public Archived: boolean;
	public ArchivedAt?: Date;
	public ArchivedBy?: string;

}
