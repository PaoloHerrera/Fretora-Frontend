import {
  Card,
  CardHeader,
  Image,
  Divider,
  CardFooter,
  Button,
} from '@nextui-org/react'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function LimitedTimeProductCard({ product }) {
  return (
    <article className="mt-4 mb-4 ml-4 mr-4">
      <Card
        shadow="sm"
        className="col-span-4 lg:col-span-2 xl:col-span-1 relative max-w-[340px] min-w-[250px] place-self-center"
      >
        <CardHeader className="flex justify-center flex-col pt-10">
          <div className="limited-badge">Offer Expires In...</div>
          <FlipClockCountdown
            className="mt-5"
            to={new Date(product.expiration_offer).getTime()}
            labelStyle={{
              fontSize: 12,
              fontWeight: 500,
              textTransform: 'uppercase',
            }}
            digitBlockStyle={{
              width: 20,
              height: 30,
              fontSize: 28,
            }}
            dividerStyle={{ color: 'white', height: 0 }}
            separatorStyle={{ color: 'black', size: '6px' }}
            labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
            duration={0.5}
          ></FlipClockCountdown>
          <h3 className="font-bold mt-3 text-lg">{product.brand}</h3>
          <h4 className="text-center text-sm md:text-md">{product.name}</h4>
          <h5 className="text-center text-sm md:text-md">
            {product.specification}
          </h5>
        </CardHeader>
        <Image
          removeWrapper
          alt={`${product.name} - ${product.specification}`}
          className="object-cover"
          src={product.image}
        ></Image>
        <Divider></Divider>
        <CardFooter className="flex flex-col">
          <h3 className="text-2xl font-bold">${product.discount_price}</h3>
          <p className="line-through ml-3 text-md">${product.original_price}</p>
          <Link
            to={`/product/${product.type.split(' ')[0].toLowerCase()}/${product.brand.toLowerCase()}/${product.slug}`}
            className="mt-3 rounded-medium"
          >
            <Button className="color-secondary" size="md" radius="md">
              View Product
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </article>
  )
}

LimitedTimeProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    specification: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    fingerboard: PropTypes.string,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    image_detail: PropTypes.string,
    original_price: PropTypes.string.isRequired,
    discount_price: PropTypes.string,
    expiration_offer: PropTypes.string.isRequired,
    time_zone: PropTypes.string,
    currency: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    in_stock: PropTypes.bool.isRequired,
    on_sale: PropTypes.bool.isRequired,
    new_arrival: PropTypes.bool.isRequired,
    best_seller: PropTypes.bool.isRequired,
    top_pick: PropTypes.bool,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}
