export const fonts = ['inter', 'manrope', 'system'] as const
export type Font = (typeof fonts)[number]

export const fontClasses = {
  inter: 'font-inter',
  manrope: 'font-manrope',
  system: 'font-sans'
} as const