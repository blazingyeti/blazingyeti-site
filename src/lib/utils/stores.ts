import { browser } from "$app/environment";
import { writable } from "svelte/store";

let initialValue = "light";
if (browser) {
  const darkCheck = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (darkCheck) {
    initialValue = "dark";
    document.documentElement.classList.add('dark')
  }
}

const theme = writable<string>(initialValue);

theme.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("theme", value);
  }
});

export default theme;
