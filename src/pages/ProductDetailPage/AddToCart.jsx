import { motion } from 'framer-motion'
import { AddShoppingCart } from '@mui/icons-material'
import { Button } from '@nextui-org/react'
import PropTypes from 'prop-types'

export default function AddToCart({ onSale, discountPrice, originalPrice }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 text-center z-10 p-4 w-full bg-white"
    >
      <Button
        className="color-secondary"
        size="lg"
        startContent={<AddShoppingCart />}
      >
        Add To Cart - ${onSale ? discountPrice : originalPrice}
      </Button>
    </motion.div>
  )
}

AddToCart.propTypes = {
  onSale: PropTypes.bool.isRequired,
  discountPrice: PropTypes.string,
  originalPrice: PropTypes.string.isRequired,
}
