import { writable } from 'svelte/store';
import type { Profiling } from "@prisma/client";

export let visitorProfil = writable({ id: -1, sexe: 5, age: 5, csp: 5, balle: 0, raquette: 0, aquatique: 0, ecolo: 0 } as Profiling);