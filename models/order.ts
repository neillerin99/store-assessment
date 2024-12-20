import { Item } from "@/models/item";

export interface Order {
    id: number,
    status: string,
    paymentMethod: string,
    recruiterId: number,
    divisionId: number,
    companyId: number,
    validated: boolean,
    created: string,
    completed: string | null,
    items?: Array<Item>
}