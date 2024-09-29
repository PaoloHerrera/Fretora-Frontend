import { Button } from '@nextui-org/react'
import '../css/FeaturedProductVideo.css'
import PropTypes from 'prop-types'

export default function FeaturedProductVideo({
  videoSrc,
  productName,
  description,
  offerPrice,
  price,
}) {
  return (
    <article className="w-full h-full relative banner-container">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full min-h-[500px] md:min-h-[500px] lg:min-h-[600px] object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browse does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4 pl-6">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          {productName}
        </h2>
        <p className="text-white text-lg md:text-xl mt-2">{description}</p>
        <h2 className="text-white text-xl md:text-2xl mt-4">
          ${offerPrice}
          <span className="line-through text-gray-300 ml-4 text-lg md:text-xl">
            ${price}
          </span>
        </h2>
        <Button className="color-secondary mt-4" size="md">
          View More
        </Button>
      </div>
    </article>
  )
}

FeaturedProductVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  offerPrice: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}
