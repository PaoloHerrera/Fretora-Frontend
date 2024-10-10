import video from '../../assets/videos/eko_sa_350.mp4'
import FeaturedProductVideo from '../../components/FeaturedProductVideo'
import fretora_reviews from '../../data_testing/fretora.reviews.json'
import Reviews from '../../components/Reviews'
import offers from '../../data_testing/offers.sales.json'
import Sales from './Sales'
import { Divider, Tabs, Tab } from '@nextui-org/react'
import top_picks from '../../data_testing/top.picks.json'
import TopPicks from './TopPicks'
import OurBrands from './OurBrands'
import brands from '../../data_testing/fretora.brands.json'
import BannerContainer from '../../components/BannerContainer'
import BannerSlide from '../../components/BannerSlide'
import LimitedTimeSales from './LimitedTimeSales'
import NewArrivalCard from './NewArrivalCard'
import BestSellersCard from './BestSelllersCard'
import ExploreSalesCard from './ExploreSalesCard'
import ViewAllProductsCard from './ViewAllProductsCard'

export default function HomePage() {
  return (
    <>
      <section>
        <BannerContainer>
          <BannerSlide
            imageAlt="Fretora Banner"
            imageSrc="https://res.cloudinary.com/dgbzqgmvn/image/upload/v1727568363/BannerCover1_xwsrdp.jpg"
            imageTitle="Fretora: Ignite Your Passion for Guitar"
            homePage={true}
          ></BannerSlide>
          <FeaturedProductVideo
            videoSrc={video}
            brand="Eko"
            model="SA 350"
            type="Electrics"
            slug="sa-350-sunburst"
            description="SA 350 is the semi-acoustic guitar of 'Tribute Jazz' series by Eko Guitars"
            offerPrice="349.99"
            price="400.00"
          />
        </BannerContainer>
      </section>

      <section className="grid grid-cols-10 mt-20 gap-8">
        <div className="col-start-2 col-span-8 sm:col-span-4 sm:col-start-2 lg:col-span-2 lg:col-start-2">
          <NewArrivalCard />
        </div>
        <div className="col-start-2 col-span-8 sm:col-start-6 sm:col-span-4 lg:col-span-2">
          <BestSellersCard />
        </div>
        <div className="col-start-2 col-span-8 sm:col-span-4 sm:col-start-2 lg:col-span-2">
          <ExploreSalesCard />
        </div>
        <div className="col-start-2 col-span-8 sm:col-start-6 sm:col-span-4 lg:col-span-2">
          <ViewAllProductsCard />
        </div>
      </section>
      <section>
        <div className="text-3xl font-bold">
          <h2 className="text-center pt-20 pl-6 pr-6 text-black">
            SHOP HIGHLIGHTS
          </h2>
        </div>
        <Tabs
          aria-label="Shop Highlights"
          className="mt-20 justify-center w-full"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              'gap-2 md:gap-6 lg:min-w-[1000px] min-w-[100px] rounded-none p-0 border-b border-divider font-bold',
            cursor: 'w-full bg-[#141496]',
            tabContent:
              'group-data-[selected=true]:text-[#141496] text-sm md:text-lg',
          }}
        >
          <Tab key="flash sales" title="Flash Sales">
            <LimitedTimeSales />
          </Tab>
          <Tab key="best offers" title="Best Offers">
            <Sales offers={offers} />
          </Tab>
          <Tab key="our picks" title="Our Picks">
            <TopPicks products={top_picks} />
          </Tab>
        </Tabs>
      </section>
      <section>
        <div className="text-3xl font-bold pt-20 pl-6 pr-6">
          <Divider></Divider>
          <h2 className="text-center pt-20 text-black">OUR BRANDS</h2>
        </div>
        <OurBrands brands={brands} />
      </section>
      <section>
        <div className="text-3xl font-bold pt-20 pl-6 pr-6">
          <Divider></Divider>
          <h2 className="text-center pt-20 text-black">
            Feedback from Our Clients
          </h2>
        </div>
        <Reviews reviews={fretora_reviews} />
      </section>
    </>
  )
}
