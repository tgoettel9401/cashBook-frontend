export interface CashBook {
  id: number;
  name: string;
  accountNumber: string;
  initialWealth: number;
  calculatedInitialWealth: number;
  finalWealth: number;
  calculatedFinalWealth: number;
  result: number;
  calculatedResult: number;
}
