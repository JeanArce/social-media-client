import "jest-localstorage-mock";
import { login } from "./login";

describe("login", () => {
  it("fetches and stores a token in browser storage", async () => {
    await login("jnrcnal616@noroff.no", "jean@*05");
    const token = JSON.parse(localStorage.getItem("token"));
    expect(token).not.toBeNull();
  });
});

