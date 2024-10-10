import { Card, CardHeader, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export default function BestSellersCard() {
  return (
    <article>
      <Link to={'/products/best-sellers'}>
        <Card className="max-w-[300px] h-[200px]">
          <CardHeader className="absolute z-10 top-1 flex-col text-white text-xl font-bold text-center">
            Explore Best Sellers
          </CardHeader>
          <Image
            removeWrapper
            alt="Explore Best Sellers"
            className="z-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dgbzqgmvn/image/upload/v1728536988/jacob-bentzinger-Yv-2G04sKD8-unsplash_dcfeov.jpg"
          />
        </Card>
      </Link>
    </article>
  )
}
