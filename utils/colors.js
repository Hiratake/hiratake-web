export const colors = Object.freeze({
  primary: '#a83d3d',
  'primary-900': '#973734',
  'primary-800': '#a83d3d',
  'primary-700': '#b64243',
  'primary-600': '#c84a4a',
  'primary-500': '#d7524d',
  'primary-400': '#d35e61',
  'primary-300': '#cb797d',
  'primary-200': '#db9da0',
  'primary-100': '#f2ced4',
  'primary-50': '#f9ecee',

  black: '#000',
  white: '#fff',
  'gray-900': '#071219',
  'gray-800': '#202a30',
  'gray-700': '#394147',
  'gray-600': '#525a5e',
  'gray-500': '#6a7175',
  'gray-400': '#83898c',
  'gray-300': '#9ca0a3',
  'gray-200': '#b5b8ba',
  'gray-100': '#cdd0d1',
  'gray-50': '#e7e8e8',
})

export const validateColor = (val) => {
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(val)) {
    return true
  }
  else if (
    /^rgba\(((\d|[1-9]\d|1\d{1,2}|2[0-4]\d|25[0-5]),){3}([0-1]|0*\.\d+)\)$/i
      .test(val.replace(/ /g, ''))
  ) {
    return true
  }
  else if (val in colors) {
    return true
  }
  else {
    return false
  }
}

export const convertNameToHex = (val) => {
  return val in colors ? colors[val] : val
}

export const convertHEXtoRGBA = (val) => {
  const r = val.length === 7 ? val.slice(1, 3) : val.slice(1, 2).repeat(2)
  const g = val.length === 7 ? val.slice(3, 5) : val.slice(2, 3).repeat(2)
  const b = val.length === 7 ? val.slice(5, 7) : val.slice(3, 4).repeat(2)
  return 'rgba(' +
    parseInt(r, 16) + ', ' +
    parseInt(g, 16) + ', ' +
    parseInt(b, 16) + ', 1)'
}

export const getContrastColor = (val) => {
  if (val.startsWith('#')) {
    val = convertHEXtoRGBA(val)
  }
  const arr = [...val.matchAll(/[0-9]+/g)]
  return (((arr[0] * 299) + (arr[1] * 587) + (arr[2] * 114)) / 1000) < 128
    ? colors.white
    : colors['gray-700']
}
