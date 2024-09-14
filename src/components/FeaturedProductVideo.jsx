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
    <section className="featured-product-video">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browse does not support the video tag.
      </video>
      <div className="product-info">
        <h1>{productName}</h1>
        <p>{description}</p>
        <h2>
          ${offerPrice} <span className="original-price">${price}</span>
        </h2>
        <Button color="primary">View More</Button>
      </div>
    </section>
  )
}
