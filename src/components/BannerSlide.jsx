import { Image } from '@nextui-org/react'
import PropTypes from 'prop-types'

export default function BannerSlide({
  imageAlt,
  imageTitle,
  imageDescription,
  imageSrc,
  homePage,
}) {
  return (
    <article className="relative w-full h-full banner-container">
      {homePage ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full min-h-[500px] md:min-h-[500px] lg:min-h-[600px] object-cover"
        />
      ) : (
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[500px] lg:min-h-[600px] object-cover object-left"
        />
      )}

      <div className="banner-slide-info">
        {imageTitle && (
          <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 z-10">
            <h1 className="text-white text-3xl md:text-4xl font-bold pl-6 w-1/2 md:w-1/3">
              {imageTitle}
            </h1>
          </div>
        )}
        {imageDescription && <h2>{imageDescription}</h2>}
      </div>
    </article>
  )
}

BannerSlide.propTypes = {
  imageAlt: PropTypes.string.isRequired,
  imageTitle: PropTypes.string,
  imageDescription: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  homePage: PropTypes.bool.isRequired,
}
