import { useParams } from 'react-router-dom'
import partners from '../../data_testing/fretora.partners.json'
import { Card, Button, Image } from '@nextui-org/react'
import { Facebook, Instagram, X, YouTube } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { ProductCategorySlider } from '../../components/ProductCategorySlider'

export default function BrandPage() {
  const { brand } = useParams()

  const partner = partners.filter(
    (item) => item.name.toLowerCase() === brand
  )[0]

  return (
    <>
      <section className="flex flex-col items-center">
        <article className="grid grid-cols-12">
          <Card className="w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[500px] lg:min-h-[600px] col-span-12">
            <Image
              removeWrapper
              src={partner.banner_image}
              alt={`${partner.name} banner`}
              className="w-full h-full object-cover object-left"
            />
          </Card>
        </article>
      </section>

      <section>
        <article>
          <div className="pt-8 pl-6 pr-6">
            <h1 className="text-center text-3xl text-black font-bold">
              About {partner.name}
            </h1>
            <p className="pt-6 text-gray-700">{partner.description}</p>
          </div>
        </article>
      </section>

      <section className="flex flex-col items-center">
        <div className="pt-6 flex flex-col gap-5 justify-center align-middle">
          <h2 className="text-center text-3xl text-black font-bold">
            {partner.name} Products
          </h2>
        </div>
        <ProductCategorySlider
          categories={partner.categories}
          brand={partner.name}
        />
      </section>

      <section className="flex flex-col items-center pt-10">
        <div className="flex pt-8 pl-6 pr-6 gap-2 items-center">
          <span className="text-black font-bold">
            Follow {partner.name} social networks:
          </span>
        </div>
        <div className="flex items-center gap-4 pt-2 pl-6 pr-6">
          <Link to={partner.instagram}>
            <Button isIconOnly variant="light">
              <Instagram />
            </Button>
          </Link>
          <Link to={partner.x}>
            <Button isIconOnly variant="light">
              <X />
            </Button>
          </Link>
          <Link to={partner.youtube}>
            <Button isIconOnly variant="light">
              <YouTube />
            </Button>
          </Link>
          <Link to={partner.facebook}>
            <Button isIconOnly variant="light">
              <Facebook />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
