import PropTypes from 'prop-types'
import Slider from 'react-slick'
import ProductCard from './ProductCard'

export default function ProductCardSlider({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </Slider>
    </>
  )
}

ProductCardSlider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      specification: PropTypes.string.isRequired,
      fingerboard: PropTypes.string,
      brand: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      image_detail: PropTypes.string.isRequired,
      original_price: PropTypes.string.isRequired,
      discount_price: PropTypes.string,
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
