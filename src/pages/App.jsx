import NavbarAnon from '../components/NavbarAnon'
import video from '../../public/eko_sa_350.mp4'
import FeaturedProductVideo from '../components/FeaturedProductVideo'
import top_products from '../data_testing/top.products.json'
import TopProducts from '../components/TopProducts'

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
        <h1>Top Products</h1>
      </div>
      <TopProducts products={top_products} />
    </>
  )
}
