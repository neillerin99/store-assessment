export interface Item {
    id: number,
    siteId: number,
    productId: number,
    currency: string,
    paymentMethod: string,
    retailCost: number,
    accountDiscount: number,
    couponDiscount: number,
    netCost: number,
}