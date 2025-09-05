export const fonts = ['inter', 'manrope', 'archivo', 'system'] as const
export type Font = (typeof fonts)[number]

export const fontClasses = {
  inter: 'font-inter',
  manrope: 'font-manrope',
  archivo: 'font-archivo',
  system: 'font-sans'
} as const
