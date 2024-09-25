import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Divider,
  Button,
} from '@nextui-org/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Products({ product }) {
  return (
    <>
      {product.in_stock && (
        <article>
          <Card shadow="sm">
            <CardHeader className="flex flex-col pt-2">
              {product.new_arrival && (
                <div className="new-arrival-badge self-start">New Arrival</div>
              )}
              {product.best_seller && (
                <div className="best-seller-badge self-start">Best Seller</div>
              )}
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
                  <h3 className="text-2xl font-bold">
                    ${product.discount_price}
                  </h3>
                  <p className="line-through ml-3 text-md">
                    ${product.original_price}
                  </p>
                </>
              ) : (
                <h3 className="text-2xl font-bold">
                  ${product.original_price}
                </h3>
              )}
              <Link
                to={`/product/${product.type.toLowerCase()}/${product.brand.toLowerCase()}/${product.slug}`}
              >
                <Button className="color-secondary mt-3" size="md">
                  View More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </article>
      )}
    </>
  )
}

Products.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
    stock: PropTypes.number.isRequired,
    in_stock: PropTypes.bool.isRequired,
    new_arrival: PropTypes.bool.isRequired,
    best_seller: PropTypes.bool.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}
