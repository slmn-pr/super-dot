import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
}

export interface Product {
  id: string
  title: string
  description: string
  icon: LucideIcon
  color?: string
}

export interface WhyCard {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export interface EcosystemNode {
  id: string
  label: string
  icon: LucideIcon
  angle?: number
}
