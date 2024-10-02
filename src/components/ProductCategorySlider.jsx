import PropTypes from 'prop-types'
import Slider from 'react-slick'
import ProductCategoryCard from './ProductCategoryCard'
import { useMemo } from 'react'
export function ProductCategorySlider({ categories, brand }) {
  const memoizedCategories = useMemo(() => categories, [categories])
  const memoizedBrand = useMemo(() => brand, [brand])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className="pl-6 pt-10 max-w-[320px]">
        {memoizedCategories.length > 2 && (
          <Slider {...settings}>
            {memoizedCategories.map((category, index) => (
              <ProductCategoryCard
                key={`${category}-${memoizedBrand}-${index}`}
                categories={[category]}
                brand={memoizedBrand}
              />
            ))}
          </Slider>
        )}
        {memoizedCategories.length === 1 && (
          <ProductCategoryCard
            categories={[memoizedCategories[0]]}
            brand={memoizedBrand}
          />
        )}
        {memoizedCategories.length === 2 && (
          <div className="flex gap-16">
            {memoizedCategories.map((category, index) => (
              <ProductCategoryCard
                key={`${category}-${memoizedBrand}-${index}`}
                categories={[category]}
                brand={memoizedBrand}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

ProductCategorySlider.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  brand: PropTypes.string.isRequired,
}
