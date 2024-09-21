import NavbarAnon from '../components/NavbarAnon'
import video from '../../public/eko_sa_350.mp4'
import FeaturedProductVideo from '../components/FeaturedProductVideo'
import eko_sa_350_reviews from '../data_testing/eko_sa_350.reviews.json'
import Reviews from '../components/Reviews'
import limited_time_sale from '../data_testing/limited_time.sales.json'
import offers from '../data_testing/offers.sales.json'
import Sales from '../components/Sales'
import { Divider } from '@nextui-org/react'
// import top_products from '../data_testing/top.products.json'
// import TopProducts from '../components/TopProducts'

export default function App() {
  return (
    <>
      <NavbarAnon />
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
      <div className="text-3xl font-bold pt-10">
        <Divider></Divider>
        <h2 className="text-center pt-10">SALES</h2>
      </div>
      <Sales limitedTimeSale={limited_time_sale} offers={offers} />
      {/* <div className="text-3xl font-bold pt-10 pl-6">
        <h1>Top Products</h1>
      </div>
      <TopProducts products={top_products} /> */}
    </>
  )
}
