import { writable } from "svelte/store";

export const isNotif = writable(false);
export const notifMessage = writable("");
