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
    <section className="relative featured-product-video">
      <video autoPlay muted loop className="md:background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browse does not support the video tag.
      </video>
      <div className="product-info">
        <h2>{productName}</h2>
        <p>{description}</p>
        <h2>
          ${offerPrice} <span className="original-price">${price}</span>
        </h2>
        <Button className="color-secondary" size="md">
          View More
        </Button>
      </div>
    </section>
  )
}

FeaturedProductVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  offerPrice: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}
