export interface IWaitForOptions {
    timeout?: number;
    interval?: number;
}
export async function waitFor(checkFn: () => boolean | Promise<boolean>, options: IWaitForOptions = {}) {
    const timeout = options.timeout || 5000;
    const interval = options.interval || 100;
    const startTime = + new Date();
    do {
        if ((await checkFn())) {
            return;
        }
        await new Promise((resolve) => setTimeout(resolve(), interval));
    } while (startTime > (+new Date()) - timeout);
    throw new Error("Timeout expired after " + timeout + "ms");
}
export default waitFor;
