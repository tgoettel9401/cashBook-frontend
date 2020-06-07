export interface CashBookEntry {
    id: number;
    position: number;
    incomeExpensePosition: string;
    title: string;
    income: number;
    expense: number;
    receiverSender: string;
    valueDate: Date;
}
