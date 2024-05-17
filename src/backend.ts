import PocketBase from 'pocketbase'

import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase


// Copier ici les fonctions developpées en R214 | Système d'information
export async function allMaisons() {
  const records = await pb.collection('maison').getFullList()
  return records
}

export async function oneID(id) {
  const records = await pb.collection('maison').getFullList(`${id}`)
  return records
}

export async function allMaisonsFavori() {
  const records = await pb.collection('maison').getFullList({
    filter: 'favori=true'
  })
  return records
}

export async function allMaisonsSorted() {
  const records = await pb.collection('maison').getFullList({
    sort: 'prix'
  })
  return records
}

export async function bySurface(s) {
  const maisonSurface = await pb.collection('maison').getFullList({
    filter: `surface > ${s}`
  })
  return maisonSurface
}

export async function surfaceORprice(surface, prix) {
  const records = await pb.collection('maison').getFullList({
    filter: `surface > ${surface} || prix < ${prix}`
  })
  return records
}

export async function oneID_agent(id) {
  const records = await pb.collection('agent').getOne(id)
  return records
}