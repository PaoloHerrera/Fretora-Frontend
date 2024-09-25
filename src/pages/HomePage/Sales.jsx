import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Divider,
} from '@nextui-org/react'
import PropTypes from 'prop-types'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import Products from '../../components/ProductCard'

export default function Sales({ limitedTimeSale, offers }) {
  return (
    <div className="pt-10 pl-6 pr-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 sm:gap-10 gap-2">
        <Card className="col-span-2 lg:col-span-2 row-span-2 relative">
          <CardHeader className="flex justify-center flex-col pt-10">
            <div className="limited-badge">Offer Expires In...</div>
            <FlipClockCountdown
              className="mt-5"
              to={new Date(limitedTimeSale.expiration_offer).getTime()}
              labelStyle={{
                fontSize: 12,
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
              digitBlockStyle={{
                width: 25,
                height: 40,
                fontSize: 30,
              }}
              dividerStyle={{ color: 'white', height: 0 }}
              separatorStyle={{ color: 'black', size: '6px' }}
              labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
              duration={0.5}
            ></FlipClockCountdown>
            <h3 className="font-bold mt-3 text-lg">{limitedTimeSale.brand}</h3>
            <h4>
              {limitedTimeSale.name} {limitedTimeSale.model}
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Product Limited Time Sale"
            className="object-cover"
            src={limitedTimeSale.image}
          ></Image>
          <Divider></Divider>
          <CardFooter className="flex flex-col">
            <h3 className="text-2xl font-bold">
              ${limitedTimeSale.discount_price}
            </h3>
            <p className="line-through ml-3 text-md">
              ${limitedTimeSale.original_price}
            </p>
            <Button className="color-secondary mt-3" size="md">
              View More
            </Button>
          </CardFooter>
        </Card>
        {offers.map((item) => (
          <Products product={item} key={item.id}></Products>
        ))}
      </div>
    </div>
  )
}

Sales.propTypes = {
  limitedTimeSale: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    discount_price: PropTypes.string.isRequired,
    expiration_offer: PropTypes.string.isRequired,
    time_zone: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      original_price: PropTypes.string.isRequired,
      discount_price: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      in_stock: PropTypes.bool.isRequired,
      new_arrival: PropTypes.bool.isRequired,
      best_seller: PropTypes.bool.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}
