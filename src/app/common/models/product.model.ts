export class Product {
    id: number;
    productName: string;
    quantity: number;
    costPrice: number;
    salePrice: number;
    minStock: number;
    maxStock: number;
    provider: string;
    observation: string;

    static register(payload) {
        const item = new Product();
        Object.assign(item, payload);
        return item;
    }
}
