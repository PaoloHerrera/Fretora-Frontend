import NavbarAnon from '../components/NavbarAnon'
import video from '../../public/eko_sa_350.mp4'
import FeaturedProductVideo from '../components/FeaturedProductVideo'
import eko_sa_350_reviews from '../data_testing/eko_sa_350.reviews.json'
import fretora_reviews from '../data_testing/fretora.reviews.json'
import Reviews from '../components/Reviews'
import limited_time_sale from '../data_testing/limited_time.sales.json'
import offers from '../data_testing/offers.sales.json'
import Sales from '../components/Sales'
import { Divider } from '@nextui-org/react'
import top_picks from '../data_testing/top.picks.json'
import TopPicks from '../components/TopPicks'

export default function App() {
  return (
    <main>
      <NavbarAnon />
      <FeaturedProductVideo
        videoSrc={video}
        productName="Eko SA 350"
        description="SA 350 is the semi-acoustic guitar of 'Tribute Jazz' series by Eko Guitars"
        offerPrice="349.99"
        price="400.00"
      />
      <section>
        <div className="text-3xl font-bold pt-10 pl-6">
          <h2>Eko SA 350 Reviews</h2>
        </div>
        <Reviews reviews={eko_sa_350_reviews} />
      </section>
      <section>
        <div className="text-3xl font-bold pt-10">
          <Divider></Divider>
          <h2 className="text-center pt-10">SALES</h2>
        </div>
        <Sales limitedTimeSale={limited_time_sale} offers={offers} />
      </section>
      <section>
        <div className="text-3xl font-bold pt-10 pl-6">
          <Divider></Divider>
          <h2 className="text-center pt-10">TOP PICKS</h2>
        </div>
        <TopPicks products={top_picks} />
      </section>
      <section>
        <div className="text-3xl font-bold pt-10 pl-6">
          <Divider></Divider>
          <h2 className="text-center pt-10">OUR PARTNERS</h2>
        </div>
        <Reviews reviews={fretora_reviews} />
      </section>
      <section>
        <div className="text-3xl font-bold pt-10 pl-6">
          <Divider></Divider>
          <h2 className="text-center pt-10">Feedback from Our Clients</h2>
        </div>
        <Reviews reviews={fretora_reviews} />
      </section>
    </main>
  )
}
