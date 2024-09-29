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
      <div className="flex justify-between gap-4 flex-col">
        <h1 className="font-bold text-black text-xl">
          {name} - {color}
        </h1>
        <div>
          <h2 className="font-bold text-black text-lg">{brand}</h2>
        </div>
        {onSale ? (
          <div className="font-bold text-black text-xl">
            ${discountPrice}
            <span className="ml-3 line-through text-gray-700 text-sm">
              ${originalPrice}
            </span>
          </div>
        ) : (
          <div className="font-bold text-black text-xl">${originalPrice}</div>
        )}
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
