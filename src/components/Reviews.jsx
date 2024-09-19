/* eslint-disable react/prop-types */
import { Card, CardHeader, CardBody, Avatar } from '@nextui-org/react'
import { Rating } from '@mui/material'
import Slider from 'react-slick'
import '../assets/Reviews.css'

export default function Reviews({ reviews }) {
  const settings = {
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
        },
      },
    ],
  }

  return (
    <div className="review-carousel">
      <Slider arrows={false} {...settings}>
        {reviews.map((item, index) => (
          <Card key={index} className="max-w-[340px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" src={item.avatar} />
              </div>
              <div className="flex flex-col gap-1 items-start justify-left">
                <p className="text-md font-semibold leading-none text-default-600">
                  {item.name}
                </p>
              </div>
              <Rating name="read-only" value={item.rating} readOnly />
            </CardHeader>
            <CardBody>
              <p className="text-md font-normal">{item.comment}</p>
            </CardBody>
          </Card>
        ))}
      </Slider>
    </div>
  )
}
