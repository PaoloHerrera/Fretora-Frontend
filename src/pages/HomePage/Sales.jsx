import PropTypes from 'prop-types'
import ProductCard from '../../components/ProductCard'

export default function Sales({ offers }) {
  return (
    <div className="pt-10 pl-6 pr-6 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:gap-10 gap-2 max-w-[1800px]">
        {offers.map((item) => (
          <ProductCard product={item} key={item.id}></ProductCard>
        ))}
      </div>
    </div>
  )
}

Sales.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
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
      expiration_offer: PropTypes.string,
      time_zone: PropTypes.string,
      currency: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      in_stock: PropTypes.bool.isRequired,
      on_sale: PropTypes.bool.isRequired,
      new_arrival: PropTypes.bool.isRequired,
      best_seller: PropTypes.bool.isRequired,
      top_pick: PropTypes.bool,
      slug: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}
