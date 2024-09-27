import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../../data_testing/fretora.products.json'
import { Radio, RadioGroup, Tab, Tabs } from '@nextui-org/react'
import '../../css/ProductDetail.css'
import { Info, Description } from '@mui/icons-material'
import { motion } from 'framer-motion'
import ProductImage from './ProductImage'
import AddToCart from './AddToCart'
import ProductSpecs from './ProductSpecs'
import ProductDetail from './ProductDetail'

export default function ProductDetailPage() {
  const { type, brand, slug } = useParams()

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const [allProducts, setAllProducts] = useState(null)
  const [selected, setSelected] = useState(slug)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = products.find(
        (item) =>
          item.type.toLowerCase() === type &&
          item.brand.toLowerCase() === brand &&
          item.slug === slug &&
          item.in_stock
      )
      setProduct(foundProduct)

      if (typeof foundProduct !== 'undefined') {
        const allFoundProducts = products.filter(
          (item) => item.name === foundProduct.name && item.in_stock
        )
        setAllProducts(allFoundProducts)
      }
    }
    fetchProduct()

    setLoading(false)
  }, [type, brand, slug])

  useEffect(() => {
    navigate(`/product/${type}/${brand}/${selected}`)
    const foundProduct = products.find(
      (item) =>
        item.type.toLowerCase() === type &&
        item.brand.toLowerCase() === brand &&
        item.slug === selected
    )
    setProduct(foundProduct)
  }, [brand, navigate, selected, type])

  if (loading)
    return (
      <motion.div
        className="loading-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div>Loading...</div>
      </motion.div>
    )

  if (!product || !allProducts) return <div> Product not found</div>

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="mb-24"
    >
      <article>
        <div className="flex justify-between pt-10 pr-6 pl-6">
          <ProductImage
            slug={product.slug}
            url={product.image_detail}
            brand={product.brand}
            name={product.name}
            color={product.color}
          />
          <div className="flex flex-col text-center items-center gap-2">
            <div className="font-bold text-black">Select Color</div>
            <RadioGroup
              className="color-select"
              color="default"
              defaultValue={product.slug}
              value={selected}
              onValueChange={setSelected}
            >
              {allProducts.map((item) => (
                <Radio
                  key={item.id}
                  value={item.slug}
                  className={
                    item.slug === selected
                      ? `${item.slug} item-selected`
                      : item.slug
                  }
                ></Radio>
              ))}
            </RadioGroup>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-10 pr-6 pl-6"
        >
          <ProductDetail
            name={product.name}
            brand={product.brand}
            color={product.color}
            originalPrice={product.original_price}
            discountPrice={product.discount_price}
            onSale={product.on_sale}
          />
          <div className="pt-10">
            <Tabs aria-label="options" variant="bordered">
              <Tab
                key="description"
                title={
                  <div className="flex items-center space-x-2">
                    <Description />
                    <span>Description</span>
                  </div>
                }
              >
                <p className="text-gray-700 flex flex-col">
                  {product.description}
                </p>
              </Tab>
              <Tab
                key="specs"
                title={
                  <div className="flex items-center space-x-2">
                    <Info />
                    <span>Specs</span>
                  </div>
                }
              >
                <ProductSpecs
                  specs={product.specs}
                  brand={product.brand}
                  name={product.name}
                  color={product.color}
                  slug={product.slug}
                />
              </Tab>
            </Tabs>
          </div>
        </motion.div>
      </article>
      <AddToCart
        onSale={product.on_sale}
        originalPrice={product.original_price}
        discountPrice={product.discount_price}
      />
    </motion.section>
  )
}
