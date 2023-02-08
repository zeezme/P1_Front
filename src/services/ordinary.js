export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export const decideTextColors = (props) => {
  if (props) {
    return 'text-light'
  }
  if (props === 'light') {
    return 'text-light'
  }
  if (props === 'dark') {
    return 'text-dark'
  }
}
