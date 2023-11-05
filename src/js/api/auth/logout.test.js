import "jest-localstorage-mock";
import { logout } from "./logout";

describe("logout", () => {
  it("it checks if it clears browser storage on logout", () => {
    logout();
    const token = JSON.parse(localStorage.getItem("token"));
    expect(token).toBeNull();
  });
});
