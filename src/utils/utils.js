export function SnakeCaseToFirstLettersCase(str) {
  return (
    str.charAt(0).toUpperCase() + str.split('_').join(' ').slice(1)
  ).replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}
