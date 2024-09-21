import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Divider,
  Button,
} from '@nextui-org/react'
import PropTypes from 'prop-types'

export default function Products({ product }) {
  return (
    <>
      <Card>
        <CardHeader className="flex justify-center flex-col pt-2">
          <h3 className="font-bold mt-3 text-lg">{product.brand}</h3>
          <h4 className="text-center">{product.name} -</h4>
          <h4 className="text-center">{product.model}</h4>
        </CardHeader>
        <Image
          removeWrapper
          src={product.image}
          className="object-cover"
          alt={product.name}
        ></Image>
        <Divider></Divider>
        <CardFooter className="flex flex-col">
          {product.discount_price ? (
            <>
              <h3 className="text-2xl font-bold">${product.discount_price}</h3>
              <p className="line-through ml-3 text-md">
                ${product.original_price}
              </p>
            </>
          ) : (
            <h3 className="text-2xl font-bold">${product.discount_price}</h3>
          )}
          <Button className="color-secondary mt-3" size="md">
            View More
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

Products.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    discount_price: PropTypes.string,
    expiration_offer: PropTypes.string,
    time_zone: PropTypes.string,
    currency: PropTypes.string.isRequired,
  }).isRequired,
}
