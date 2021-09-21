import { writable } from 'svelte/store';

export const isLoginClick = writable(false);

export const isSignUpClick = writable(false);

export const isRegistered = writable({ registered: false, data: {} });

export const isLogIn = writable({ login: false, data: {} });

