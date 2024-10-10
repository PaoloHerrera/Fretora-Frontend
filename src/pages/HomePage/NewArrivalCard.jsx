import { Card, CardHeader, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export default function NewArrivalCard() {
  return (
    <article>
      <Link to={'/products/new-arrival'}>
        <Card className="max-w-[300px] h-[200px]">
          <CardHeader className="absolute z-10 top-1 flex-col text-white text-xl font-bold text-center">
            Explore Ours New Arrivals
          </CardHeader>
          <Image
            removeWrapper
            alt="Explore Ours New Arrivals"
            className="z-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dgbzqgmvn/image/upload/v1728536342/simon-weisser-phS37wg8cQg-unsplash_rpoh9a.jpg"
          />
        </Card>
      </Link>
    </article>
  )
}
