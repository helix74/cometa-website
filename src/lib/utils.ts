import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import React from 'react'

/**
 * Combine classes avec clsx et tailwind-merge pour éviter les conflits
 * @param inputs - Classes à combiner
 * @returns String des classes combinées
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Types utilitaires pour les composants
 */
export type ComponentProps<T extends keyof React.JSX.IntrinsicElements> = 
  React.JSX.IntrinsicElements[T]

/**
 * Utilitaire pour délayer l'exécution
 * @param ms - Délai en millisecondes
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Formater un numéro de téléphone tunisien
 * @param phone - Numéro de téléphone
 */
export function formatTunisianPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('216')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`
  }
  if (cleaned.length === 8) {
    return `+216 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`
  }
  return phone
}

/**
 * Valider un email
 * @param email - Email à valider
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
} 