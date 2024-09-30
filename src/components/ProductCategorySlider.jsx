import { Card, CardFooter, Image } from '@nextui-org/react'
import Electric from '../assets/icons/electric-guitar.svg'
import Acoustic from '../assets/icons/acoustic-guitar.svg'
import Amp from '../assets/icons/amplifier-1.svg'
import Pedal from '../assets/icons/guitar-pedal-1.svg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

export function ProductCategorySlider({ categories, brand }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    initialSlide: 0,
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
      <div className="pl-6 pt-10 max-w-[320px]">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/${category.toLowerCase()}/${brand.toLowerCase()}`}
            >
              <article className="w-full flex place-content-center">
                {(category == 'Electrics' && (
                  <Card
                    className="w-[100px]"
                    isHoverable
                    shadow="none"
                    isPressable
                  >
                    <Image
                      removeWrapper
                      className="object-cover"
                      src={Electric}
                    ></Image>
                    <CardFooter className="h-full">
                      <div className="text-center font-bold justify-center text-gray-700 w-full">
                        Electrics
                      </div>
                    </CardFooter>
                  </Card>
                )) ||
                  (category == 'Electro Acoustics' && (
                    <Card
                      key={index}
                      className="max-w-[100px]"
                      isHoverable
                      shadow="none"
                      isPressable
                    >
                      <Image
                        removeWrapper
                        className="object-cover"
                        src={Acoustic}
                      ></Image>
                      <CardFooter className="h-full">
                        <div className="text-center font-bold justify-center text-gray-700 w-full">
                          Electro Acoustics
                        </div>
                      </CardFooter>
                    </Card>
                  )) ||
                  (category == 'Acoustics' && (
                    <Card
                      key={index}
                      className="w-[100px]"
                      isHoverable
                      shadow="none"
                      isPressable
                    >
                      <Image
                        removeWrapper
                        className="object-cover"
                        src={Acoustic}
                      ></Image>
                      <CardFooter className="h-full">
                        <div className="text-center font-bold justify-center text-gray-700 w-full">
                          Acoustics
                        </div>
                      </CardFooter>
                    </Card>
                  )) ||
                  (category == 'Amps' && (
                    <Card
                      key={index}
                      className="w-[100px]"
                      isHoverable
                      shadow="none"
                      isPressable
                    >
                      <Image
                        removeWrapper
                        className="object-cover"
                        src={Amp}
                      ></Image>
                      <CardFooter className="h-full">
                        <div className="text-center font-bold justify-center text-gray-700 w-full">
                          Amps
                        </div>
                      </CardFooter>
                    </Card>
                  )) ||
                  (category == 'Pedals & Effects' && (
                    <Card
                      key={index}
                      className="w-[100px]"
                      isHoverable
                      shadow="none"
                      isPressable
                    >
                      <Image
                        removeWrapper
                        className="object-cover"
                        src={Pedal}
                      ></Image>
                      <CardFooter className="h-full">
                        <div className="text-center font-bold justify-center text-gray-700 w-full">
                          Pedals & Effects
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </article>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  )
}

ProductCategorySlider.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  brand: PropTypes.string.isRequired,
}
