// utils > sizes

export const breakpoints = (type: 'sm' | 'md' | 'lg' | 'xl'): string => {
  const obj = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  }
  const isValidType: boolean = type in obj
  return isValidType ? `@media screen and (min-width: ${obj[type]}px)` : ''
}
