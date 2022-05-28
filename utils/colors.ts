// utils > colors

export const colors: { [key: string]: string } = Object.freeze({
  black: '#000',
  white: '#fff',

  gray900: '#071219',
  gray800: '#202a30',
  gray700: '#394147',
  gray600: '#525a5e',
  gray500: '#6a7175',
  gray400: '#83898c',
  gray300: '#9ca0a3',
  gray200: '#b5b8ba',
  gray100: '#cdd0d1',
  gray50: '#e7e8e8',

  primary: '#a83d3d',
  primary900: '#973734',
  primary800: '#a83d3d',
  primary700: '#b64243',
  primary600: '#c84a4a',
  primary500: '#d7524d',
  primary400: '#d35e61',
  primary300: '#cb797d',
  primary200: '#db9da0',
  primary100: '#f2ced4',
  primary50: '#f9ecee',

  link: '#004ac2',
  linkLighten: '#5c9bb8',
})

export const validateColor = (val: string): boolean => {
  const isHex: boolean = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(val)
  const isRgba: boolean =
    /^rgba\(((\d|[1-9]\d|1\d{1,2}|2[0-4]\d|25[0-5]),){3}([0-1]|0*\.\d+)\)$/i.test(
      val.replace(/ /g, '')
    )
  const isColorsName: boolean = val in colors
  return isHex || isRgba || isColorsName
}

export const convertNameToHex = (val: string): string => {
  return val in colors ? colors[val] : val
}

export const convertHexToRgba = (val: string): string => {
  const isHex: boolean = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(val)
  if (isHex) {
    const r = val.length === 7 ? val.slice(1, 3) : val.slice(1, 2).repeat(2)
    const g = val.length === 7 ? val.slice(3, 5) : val.slice(2, 3).repeat(2)
    const b = val.length === 7 ? val.slice(5, 7) : val.slice(3, 4).repeat(2)
    return (
      'rgba(' +
      parseInt(r, 16) +
      ', ' +
      parseInt(g, 16) +
      ', ' +
      parseInt(b, 16) +
      ', 1)'
    )
  } else {
    return val
  }
}

export const getContrastColor = (val: string): string => {
  if (!val.startsWith('rgb')) {
    val = convertHexToRgba(convertNameToHex(val))
  }
  const arr: number[] = [...val.matchAll(/[0-9]+/g)].map((item) => +item[0])
  return (arr[0] * 299 + arr[1] * 587 + arr[2] * 114) / 1000 < 128
    ? colors.white
    : colors.gray700
}
