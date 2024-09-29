import Slider from 'react-slick'
import { Chip } from '@nextui-org/react'
import '../../css/BannerContainer.css'
import PropTypes from 'prop-types'

export default function BannerContainer({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    dotsClass: 'slick-dots slick-banner',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => (
      <Chip variant="bordered" className="h-[8px] text-left"></Chip>
    ),
  }

  return (
    <div className="carousel w-full min-h-[500px] h-auto md:h-[500px] lg:h-[500px] overflow-hidden relative">
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}

BannerContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
