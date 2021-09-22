import { writable } from "svelte/store"

export const alert = writable({
  text:"",
  isActive: false,
  color:"",
})
