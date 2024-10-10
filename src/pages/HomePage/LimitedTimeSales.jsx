import productsLimitedTime from '../../data_testing/limited_time.sales.json'
import LimitedTimeProductCard from '../../components/LimitedTimeProductCard'

export default function LimitedTimeSales() {
  return (
    <div className="pt-10 pl-6 pr-6 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:gap-10 gap-2 max-w-[1800px]">
        {productsLimitedTime.map((item) => (
          <LimitedTimeProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}
