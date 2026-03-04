export interface Armor {
  id: number
  name: string
  defenseLow: number
  defenseHigh: number
  reqStr: number
  reqLvl: number
  qLvl: number
  tClass: number
  sockets: number
  weight: 'light' | 'medium' | 'heavy'
  class: 'normal' | 'exceptional' | 'elite'
  image: string
  player: boolean
  merc: boolean
  eth: boolean
}
