/* eslint-disable react/prop-types */
import { Button } from '@nextui-org/react'
import '../assets/FeaturedProductVideo.css'

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
