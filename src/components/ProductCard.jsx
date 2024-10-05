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
              <div className="h-8">
                {product.new_arrival && (
                  <div className="new-arrival-badge self-start">
                    New Arrival
                  </div>
                )}
                {product.best_seller && (
                  <div className="best-seller-badge self-start">
                    Best Seller
                  </div>
                )}
              </div>

              <div className="max-h-32 text-center">
                <h3 className="font-bold mt-3 text-lg">{product.brand}</h3>
                <h4 className="text-center text-sm md:text-md">
                  {product.name} -
                </h4>
                <h4 className="text-center text-sm md:text-md">
                  {product.specification}
                </h4>
              </div>
            </CardHeader>
            <Image
              removeWrapper
              src={product.image}
              className="object-cover"
              alt={product.name}
              isZoomed
            ></Image>
            <CardFooter className="flex flex-col">
              <Divider></Divider>

              <div className="h-32 flex flex-col justify-between gap-0">
                {product.on_sale ? (
                  <>
                    <h3 className="text-2xl font-bold mt-2">
                      ${product.discount_price}
                    </h3>
                    <p className="line-through ml-3 text-md mt-2">
                      ${product.original_price}
                    </p>
                  </>
                ) : (
                  <h3 className="text-2xl font-bold mt-2">
                    ${product.original_price}
                  </h3>
                )}
                <Link
                  to={`/product/${product.type.replace(' ', '').toLowerCase()}/${product.brand.toLowerCase()}/${product.slug}`}
                >
                  <Button className="color-secondary mt-3" size="md">
                    View More
                  </Button>
                </Link>
              </div>
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
    specification: PropTypes.string.isRequired,
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
    on_sale: PropTypes.bool.isRequired,
    new_arrival: PropTypes.bool.isRequired,
    best_seller: PropTypes.bool.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}
