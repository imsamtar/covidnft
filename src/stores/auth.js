import Store from "./Store";

export const isLoggedIn = new Store(
  localStorage.getItem("isLoggedIn") === "true"
);

isLoggedIn.subscribe((loginState) => {
  localStorage.setItem("isLoggedIn", loginState);
});

export function init() {
  console.log("init function was called");
}

export function login() {
  setTimeout(() => {
    isLoggedIn.set(true);
  }, 1000);
}

export function logout() {
  setTimeout(() => {
    isLoggedIn.set(false);
  }, 100);
}
