import { writable } from 'svelte/store'

export const user = writable({
    username:'',
})

export const postID = writable(null)
export const pages = writable('Login')