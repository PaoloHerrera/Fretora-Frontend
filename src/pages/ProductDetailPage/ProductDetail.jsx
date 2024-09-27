import PropTypes from 'prop-types'

export default function ProductDetail({
  name,
  color,
  brand,
  originalPrice,
  discountPrice,
  onSale,
}) {
  return (
    <>
      <div className="flex justify-between items-center gap-7">
        <h1 className="font-bold text-black text-lg">
          {name} - {color}
        </h1>
        {onSale ? (
          <div className="font-bold text-black text-lg">
            ${discountPrice}
            <span className="original-price text-gray-700">
              ${originalPrice}
            </span>
          </div>
        ) : (
          <div className="font-bold text-black text-lg">${originalPrice}</div>
        )}
      </div>
      <div className="pt-3">
        <h2 className="font-bold text-black text-md">{brand}</h2>
      </div>
    </>
  )
}

ProductDetail.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  originalPrice: PropTypes.string.isRequired,
  discountPrice: PropTypes.string,
  onSale: PropTypes.bool.isRequired,
}
