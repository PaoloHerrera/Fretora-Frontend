import PropTypes from 'prop-types'
import { Image } from '@nextui-org/react'

export default function ProductDetail({
  name,
  color,
  brand,
  originalPrice,
  discountPrice,
  onSale,
  logoUrl,
  description,
}) {
  return (
    <>
      <div className="flex text-center items-center gap-4 flex-col h-full lg:text-left">
        <Image
          src={logoUrl}
          alt={`${brand} Logo`}
          className="hidden lg:block max-w-[200px]"
        />
        <h1 className="font-bold text-black text-xl lg:text-4xl">
          {name} - {color}
        </h1>
        <div className="hidden lg:flex pt-6">
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="lg:hidden">
          <h2 className="font-bold text-black text-lg">{brand}</h2>
        </div>
        {onSale ? (
          <div className="font-bold text-black text-xl lg:hidden">
            ${discountPrice}
            <span className="ml-3 line-through text-gray-700 text-sm">
              ${originalPrice}
            </span>
          </div>
        ) : (
          <div className="font-bold text-black text-xl lg:hidden">
            ${originalPrice}
          </div>
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
  logoUrl: PropTypes.string,
  description: PropTypes.string,
}
