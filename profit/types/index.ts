export interface OrderInfo {
    begin: string;
    end: string;
    orderName: string;
    customer?: string;
    customerContact?: string;
    profit?: number;
    costs?: number;
}