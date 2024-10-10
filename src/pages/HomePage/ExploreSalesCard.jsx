import { Card, CardHeader, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export default function ExploreSalesCard() {
  return (
    <article>
      <Link to={'/products/sales'}>
        <Card className="max-w-[300px] h-[200px]">
          <CardHeader className="absolute z-10 top-1 flex-col text-white text-xl font-bold text-center">
            Explore Ours Sales
          </CardHeader>
          <Image
            removeWrapper
            alt="Explore Ours Sales"
            className="z-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dgbzqgmvn/image/upload/v1728537225/dominik-scythe-cJmTXUAUBGc-unsplash_lxldvn.jpg"
          />
        </Card>
      </Link>
    </article>
  )
}
