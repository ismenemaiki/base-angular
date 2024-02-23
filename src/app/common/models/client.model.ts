export class Client {
    name: string;
    address: string;
    phoneNumber: number;
    lastUpdate: string;

    static register(payload) {
        const item = new Client();
        Object.assign(item, payload);
        return item;
    }
}
