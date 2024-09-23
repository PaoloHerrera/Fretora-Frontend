import { Card, Image } from '@nextui-org/react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

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
        {partners.map((item, index) => (
          <article key={index}>
            <Card
              key={index}
              className="max-w-[140px] mb-4"
              isPressable
              onPress={() => console.log(`${item.name} is Pressable!`)}
            >
              <Image
                removeWrapper
                src={item.logo}
                className="object-cover"
                alt={item.name}
              ></Image>
            </Card>
          </article>
        ))}
      </Slider>
    </div>
  )
}

OurPartners.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.array.isRequired,
      logo: PropTypes.string.isRequired,
    }).isRequired
  ),
}
