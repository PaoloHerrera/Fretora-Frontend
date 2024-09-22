import Products from './Products'
import PropTypes from 'prop-types'
import '../assets/TopPicks.css'

export default function TopPicks({ products }) {
  return (
    <div className="pt-10 pl-6 pr-6">
      <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-10 gap-2">
        {products.map((item, index) => (
          <Products product={item} key={index}></Products>
        ))}
      </div>
    </div>
  )
}

TopPicks.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ),
}
