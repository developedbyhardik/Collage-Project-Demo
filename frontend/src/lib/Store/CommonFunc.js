import { isLoginClick,isSignUpClick } from './Login.js';

export function toggleLogIn() {
	isLoginClick.update((value) => (value = !value));
}

export function toggleSignUp() {
	isSignUpClick.update((value) => (value = !value));
}
