export default (text: string) =>
  text.charAt(0).toUpperCase() + text.replace('-', ' ').slice(1)
