import { Card, Image } from '@nextui-org/react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function OurPartners({ partners }) {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    initialSlide: 0,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1,
        },
      },
    ],
  }

  return (
    <div className="pt-10 pl-6 pr-6">
      <Slider arrows={false} {...settings}>
        {partners.map((item) => (
          <Link key={item.id} to={item.url}>
            <article>
              <Card className="max-w-[140px] mb-4" isPressable>
                <Image
                  removeWrapper
                  src={item.logo}
                  className="object-cover"
                  alt={item.name}
                ></Image>
              </Card>
            </article>
          </Link>
        ))}
      </Slider>
    </div>
  )
}

OurPartners.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      categories: PropTypes.array.isRequired,
      logo: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ),
}
