
export default class Random {
    constructor() {}

    static Rname(): string {
        const small: string = "abcdefghijklmnopqrstuvwxyz";
        const cap: string = small.toUpperCase();
        let ran: string = "";

        for (let i = 0; i < 8; i++) {
            if (i === 0) {
                ran += cap.charAt(Math.floor(Math.random() * cap.length));
            } else {
                ran += small.charAt(Math.floor(Math.random() * small.length));
            }
        }

        return ran;
    }

   static Rnum(): string {
        const num: string = "0123456789";
        let ran: string = "";

        for (let i = 0; i < 8; i++) {
            ran += num.charAt(Math.floor(Math.random() * num.length));
        }

        return "91" + ran;
    }

  static Email(): string {
        const email: string = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let ran: string = "";

        for (let i = 0; i < 10; i++) {
            ran += email.charAt(Math.floor(Math.random() * email.length));
        }

        return ran + "@gmail.com";
    }
}