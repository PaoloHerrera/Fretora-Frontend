import { AddShoppingCart } from '@mui/icons-material'
import { Button } from '@nextui-org/react'

export default function AddToCart() {
  return (
    <>
      <Button
        className="color-secondary"
        size="lg"
        startContent={<AddShoppingCart />}
      >
        Add To Cart
      </Button>
    </>
  )
}
