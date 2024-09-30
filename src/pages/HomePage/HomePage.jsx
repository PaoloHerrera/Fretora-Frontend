import video from '../../assets/videos/eko_sa_350.mp4'
import FeaturedProductVideo from '../../components/FeaturedProductVideo'
import fretora_reviews from '../../data_testing/fretora.reviews.json'
import Reviews from '../../components/Reviews'
import limited_time_sale from '../../data_testing/limited_time.sales.json'
import offers from '../../data_testing/offers.sales.json'
import Sales from './Sales'
import { Divider } from '@nextui-org/react'
import top_picks from '../../data_testing/top.picks.json'
import TopPicks from './TopPicks'
import OurPartners from './OurPartners'
import partners from '../../data_testing/fretora.partners.json'
import BannerContainer from '../../components/BannerContainer'
import BannerSlide from '../../components/BannerSlide'

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

      <section>
        <div className="text-3xl font-bold">
          <h2 className="text-center pt-10">FRETORA SALES</h2>
        </div>
        <Sales limitedTimeSale={limited_time_sale} offers={offers} />
      </section>
      <section>
        <div className="text-3xl font-bold pt-10 pl-6">
          <Divider></Divider>
          <h2 className="text-center pt-10">FRETORA TOP PICKS</h2>
        </div>
        <TopPicks products={top_picks} />
      </section>
      <section>
        <div className="text-3xl font-bold pt-10 pl-6">
          <Divider></Divider>
          <h2 className="text-center pt-10">FRETORA PARTNERS</h2>
        </div>
        <OurPartners partners={partners} />
      </section>
      <section>
        <div className="text-3xl font-bold pt-10 pl-6">
          <Divider></Divider>
          <h2 className="text-center pt-10">Feedback from Our Clients</h2>
        </div>
        <Reviews reviews={fretora_reviews} />
      </section>
    </>
  )
}
