import { waitFor } from ".";

it("when resolved success before timeout", async () => {
    await waitFor(async () => true);
});
it("when rejected if waitFn rejected", async () => {
    expect(await waitFor(async () => Promise.reject("err1")).catch((err) => {
        return err;
    })).toBe("err1");
});
it("when rejected after timeout", async () => {
    expect(await waitFor(() => false, { timeout: 100 }).catch((err) => err)).toEqual(
        new Error("Timeout expired after 100ms"),
    );
});
