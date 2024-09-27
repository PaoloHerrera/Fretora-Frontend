import video from '../../assets/videos/eko_sa_350.mp4'
import FeaturedProductVideo from '../../components/FeaturedProductVideo'
import eko_sa_350_reviews from '../../data_testing/eko_sa_350.reviews.json'
import fretora_reviews from '../../data_testing/fretora.reviews.json'
import Reviews from '../../components/Reviews'
import limited_time_sale from '../../data_testing/limited_time.sales.json'
import offers from '../../data_testing/offers.sales.json'
import Sales from './Sales'
import { Divider } from '@nextui-org/react'
import top_picks from '../../data_testing/top.picks.json'
import TopPicks from './TopPicks'
import OurPartners from './OurPartners'
import partners from '../../data_testing/partners.json'

export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center pt-10">
        Fretora: Where Passion for Guitars Comes to Life
      </h1>
      <section className="pt-10">
        <FeaturedProductVideo
          videoSrc={video}
          productName="Eko SA 350"
          description="SA 350 is the semi-acoustic guitar of 'Tribute Jazz' series by Eko Guitars"
          offerPrice="349.99"
          price="400.00"
        />
        <div className="text-3xl font-bold pt-10 pl-6">
          <h2>Eko SA 350 Reviews</h2>
        </div>
        <Reviews reviews={eko_sa_350_reviews} />
      </section>

      <section>
        <div className="text-3xl font-bold pt-10">
          <Divider></Divider>
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
