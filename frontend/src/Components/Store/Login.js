import { writable } from "svelte/store";

export const isLoginClick = writable(false);

export const isSignUpClick = writable(false);

export const isRegistered = writable(false);

export const isLogIn = writable(false);

export const user = writable({});