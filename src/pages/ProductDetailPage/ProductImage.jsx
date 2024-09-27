import { motion, AnimatePresence } from 'framer-motion'
import { Image } from '@nextui-org/react'
import PropTypes from 'prop-types'

export default function ProductImage({ slug, url, brand, name, color }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="w-full h-[350px] relative"
        key={slug} // Clave única para que Framer Motion detecte cambios
        initial={{ opacity: 0, scale: 0.9 }} // Comienza invisible y más pequeño
        animate={{ opacity: 1, scale: 1 }} // Termina visible y tamaño normal
        exit={{ opacity: 0, scale: 0.9 }} // Al cambiar, ocúltala de nuevo
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        <Image
          src={url}
          alt={`${brand} ${name} ${color}`}
          isZoomed
          className="w-full h-[350px] z-0"
        ></Image>
      </motion.div>
    </AnimatePresence>
  )
}

ProductImage.propTypes = {
  slug: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
