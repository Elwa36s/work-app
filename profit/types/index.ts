export interface OrderInfo {
    id: string | number;
    begin: string;
    end: string;
    order_name: string;
    customer?: string;
    customer_contact?: string;
    profit?: number;
    costs?: number;
}

export type DayOrders = OrderInfo[];