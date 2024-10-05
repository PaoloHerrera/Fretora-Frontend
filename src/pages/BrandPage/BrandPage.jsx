import { useParams } from 'react-router-dom'
import brands from '../../data_testing/fretora.brands.json'
import { Card, Button, Image } from '@nextui-org/react'
import { Facebook, Instagram, X, YouTube } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { ProductCategorySlider } from '../../components/ProductCategorySlider'
import products from '../../data_testing/fretora.products.json'
import ProductCard from '../../components/ProductCard'

export default function BrandPage() {
  const { brand } = useParams()

  const brandInfo = brands.filter(
    (item) => item.name.toLowerCase() === brand
  )[0]

  const topPicks = products.filter(
    (item) =>
      item.brand.toLowerCase() === brand.toLowerCase() && item.top_pick == true
  )

  return (
    <>
      <section className="flex flex-col items-center">
        <article className="grid grid-cols-12 w-full">
          <Card className="w-full h-full min-h-[100px] col-span-12 max-h-[750px]">
            {brandInfo.banner_image_2 ? (
              <>
                <Image
                  removeWrapper
                  src={brandInfo.banner_image}
                  alt={`${brandInfo.name} banner`}
                  className="w-full h-full object-cover object-left md:hidden"
                />
                <Image
                  removeWrapper
                  src={brandInfo.banner_image_2}
                  alt={`${brandInfo.name} banner`}
                  className="w-full h-full object-cover md:block hidden"
                />
              </>
            ) : (
              <Image
                removeWrapper
                src={brandInfo.banner_image}
                alt={`${brandInfo.name} banner`}
                className="w-full h-full object-cover object-left"
              />
            )}
          </Card>
        </article>
      </section>

      <section>
        <article>
          <div className="pt-10 pl-6 pr-6 max-w-[1200px] mx-auto lg:pt-20 md:pt-10 sm:pt-10">
            <h1 className="text-center text-4xl fretora-primary-color font-bold">
              About {brandInfo.name}
            </h1>
            <p className="pt-6 text-gray-700 text-md lg:text-xl md:text-lg">
              {brandInfo.description}
            </p>
          </div>
        </article>
      </section>

      <section className="flex flex-col items-center pt-10">
        <div className="pt-6 flex flex-col gap-5 justify-center align-middle">
          <h2 className="text-center text-3xl fretora-primary-color font-bold">
            {brandInfo.name} Top Picks
          </h2>
        </div>
        <div className="grid grid-cols-2 w-full max-w-[1200px] lg:grid-cols-4 gap-5 pt-10 pl-6 pr-6">
          {topPicks.map((top) => (
            <ProductCard key={top.id} product={top}></ProductCard>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center pt-10">
        <div className="pt-6 flex flex-col gap-5 justify-center align-middle">
          <h2 className="text-center text-3xl fretora-primary-color font-bold">
            {brandInfo.name} Categories
          </h2>
        </div>
        <ProductCategorySlider
          categories={brandInfo.categories}
          brand={brandInfo.name}
        />
      </section>

      <section className="flex flex-col items-center pt-10">
        <div className="flex pt-8 pl-6 pr-6 gap-2 items-center">
          <span className="text-black font-bold">
            Follow {brandInfo.name} social networks:
          </span>
        </div>
        <div className="flex items-center gap-4 pt-2 pl-6 pr-6">
          {brandInfo.instagram && (
            <Link to={brandInfo.instagram}>
              <Button isIconOnly variant="light">
                <Instagram />
              </Button>
            </Link>
          )}
          {brandInfo.x && (
            <Link to={brandInfo.x}>
              <Button isIconOnly variant="light">
                <X />
              </Button>
            </Link>
          )}
          {brandInfo.youtube && (
            <Link to={brandInfo.youtube}>
              <Button isIconOnly variant="light">
                <YouTube />
              </Button>
            </Link>
          )}
          {brandInfo.facebook && (
            <Link to={brandInfo.facebook}>
              <Button isIconOnly variant="light">
                <Facebook />
              </Button>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
