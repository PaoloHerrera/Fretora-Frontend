import { Card, CardFooter, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import Electric from '../assets/icons/electric-guitar.svg'
import Acoustic from '../assets/icons/acoustic-guitar.svg'
import Amp from '../assets/icons/amplifier-1.svg'
import Pedal from '../assets/icons/guitar-pedal-1.svg'
import PropTypes from 'prop-types'

export default function ProductCategoryCard({ categories, brand }) {
  const category = categories[0]

  return (
    <>
      <Link to={`/${category.toLowerCase()}/${brand.toLowerCase()}`}>
        <article className="w-full flex place-content-center">
          {(category == 'Electrics' && (
            <Card className="w-[100px]" isHoverable shadow="none" isPressable>
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
              <Card className="w-[100px]" isHoverable shadow="none" isPressable>
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
              <Card className="w-[100px]" isHoverable shadow="none" isPressable>
                <Image removeWrapper className="object-cover" src={Amp}></Image>
                <CardFooter className="h-full">
                  <div className="text-center font-bold justify-center text-gray-700 w-full">
                    Amps
                  </div>
                </CardFooter>
              </Card>
            )) ||
            (category == 'Pedals & Effects' && (
              <Card className="w-[100px]" isHoverable shadow="none" isPressable>
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
    </>
  )
}
ProductCategoryCard.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  brand: PropTypes.string.isRequired,
}
