'use client'
import { atom, useAtom } from 'jotai'

const valueAtom = atom('hello')
export default function Home() {
  const [value,] = useAtom(valueAtom)
  return (
    <div>{value}</div>
  )
}
