export function snakeCaseToFirstLettersCase(str) {
  return (
    str.charAt(0).toUpperCase() + str.split('_').join(' ').slice(1)
  ).replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}

export function shuffleArray(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

/* Cargar solamente los productos de la marca */
export const loadProducts = async (brand) => {
  let productData

  switch (brand) {
    case 'fender':
      productData = await import(
        '../data_testing/products/fender.products.json'
      )
      break
    case 'gibson':
      productData = await import(
        '../data_testing/products/gibson.products.json'
      )
      break
    case 'ibanez':
      productData = await import(
        '../data_testing/products/ibanez.products.json'
      )
      break
    case 'jackson':
      productData = await import(
        '../data_testing/products/jackson.products.json'
      )
      break
    case 'esp':
      productData = await import('../data_testing/products/esp.products.json')
      break
    case 'ltd':
      productData = await import('../data_testing/products/ltd.products.json')
      break
    case 'eko':
      productData = await import('../data_testing/products/eko.products.json')
      break
    case 'takamine':
      productData = await import(
        '../data_testing/products/takamine.products.json'
      )
      break
    case 'yamaha':
      productData = await import(
        '../data_testing/products/yamaha.products.json'
      )
      break
    default:
      productData = []
      break
  }
  return productData.default
}
