import { Card, CardHeader, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export default function ViewAllProductsCard() {
  return (
    <article>
      <Link to={'/products/new-arrival'}>
        <Card className="max-w-[300px] h-[200px]">
          <CardHeader className="absolute z-10 top-1 flex-col text-white text-xl font-bold text-center">
            View All Our Products
          </CardHeader>
          <Image
            removeWrapper
            alt="View All Our Products"
            className="z-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dgbzqgmvn/image/upload/v1728587304/nikolas-mitsiggas-Y2qugjxmw0g-unsplash_byqsmr.jpg"
          />
        </Card>
      </Link>
    </article>
  )
}
