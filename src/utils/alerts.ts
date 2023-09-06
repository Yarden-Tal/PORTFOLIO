class Alerts {
    static success(fromName: string): string {
        const thanksMsg: string = `Thanks, ${fromName}! I will get back to you as soon as possible.`;
        return thanksMsg;
    }
    static error(): string {
        const errMsg = "Something went wrong. Please try again.";
        return errMsg;
    }
}

export default Alerts;
