import "jest-localstorage-mock";
import { login } from "./login";

describe("login", () => {
  it("fetches and stores a token in browser storage", async () => {
    await login("jnrcnal616@noroff.no", "jean@*05");
    const profileSTorage = JSON.parse(localStorage.getItem('profile'));
    const profileEmail = profileSTorage.email;
    expect(profileEmail).toEqual("jnrcnal616@noroff.no");
  });
});
