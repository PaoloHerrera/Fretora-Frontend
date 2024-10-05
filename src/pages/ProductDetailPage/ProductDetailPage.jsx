import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../../data_testing/fretora.products.json'
import brands from '../../data_testing/fretora.brands.json'
import { Radio, RadioGroup, Tab, Tabs } from '@nextui-org/react'
import '../../css/ProductDetail.css'
import { Info, Description } from '@mui/icons-material'
import { motion } from 'framer-motion'
import ProductImage from './ProductImage'
import AddToCart from './AddToCart'
import ProductDetail from './ProductDetail'
import ProductSpecsTable from './ProductSpecsTable'
import ProductSpecs from './ProductSpecs'

export default function ProductDetailPage() {
  const { type, brand, slug } = useParams()

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const [brandInfo, setBrandInfo] = useState(null)

  const [allProducts, setAllProducts] = useState(null)
  const [selected, setSelected] = useState(slug)

  const [orientation, setOrientation] = useState('vertical')

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = products.find(
        (item) =>
          item.type.toLowerCase().replace(' ', '') === type &&
          item.brand.toLowerCase() === brand &&
          item.slug === slug &&
          item.in_stock
      )
      setProduct(foundProduct)

      const foundBrandInfo = brands.find(
        (item) => item.name.toLowerCase() === brand
      )
      setBrandInfo(foundBrandInfo)

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
        item.type.toLowerCase().replace(' ', '') === type &&
        item.brand.toLowerCase() === brand &&
        item.slug === selected
    )
    setProduct(foundProduct)
  }, [brand, navigate, selected, type])

  useEffect(() => {
    const updateOrientation = () => {
      if (window.innerWidth >= 1024) {
        setOrientation('horizontal')
      } else {
        setOrientation('vertical')
      }
    }

    updateOrientation()

    window.addEventListener('resize', updateOrientation)

    return () => {
      window.removeEventListener('resize', updateOrientation)
    }
  }, [])

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
        <div className="grid grid-cols-8 lg:grid-cols-12 lg:ml-20 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex pl-6 place-self-start col-span-3"
          >
            <ProductDetail
              name={product.name}
              brand={product.brand}
              color={product.color}
              originalPrice={product.original_price}
              discountPrice={product.discount_price}
              onSale={product.on_sale}
              logoUrl={brandInfo.logo}
              description={product.description}
            />
          </motion.div>
          <div className="pt-10 pr-6 pl-6 text-center col-span-4 col-start-3 lg:col-start-4 lg:col-span-6">
            <ProductImage
              slug={product.slug}
              url={product.image_detail}
              brand={product.brand}
              name={product.name}
              color={product.color}
            />
          </div>
          <div className="lg:col-span-3 justify-center lg:grid lg:grid-rows-4 lg:items-center">
            <div className="font-bold text-black mb-3 text-center flex flex-col items-center pt-10 lg:row-start-2">
              Select Color
              <RadioGroup
                className="color-select pt-5"
                color="default"
                defaultValue={product.slug}
                value={selected}
                onValueChange={setSelected}
                orientation={orientation}
              >
                {allProducts.map((item) => (
                  <Radio
                    key={item.id}
                    value={item.slug}
                    className={
                      item.slug === selected
                        ? `${item.slug} item-selected disable-hover`
                        : item.slug
                    }
                  ></Radio>
                ))}
              </RadioGroup>
            </div>

            <div className="hidden lg:block text-bold lg:row-start-3">
              {product.on_sale ? (
                <div className="font-bold text-black text-2xl text-center">
                  ${product.discount_price}
                  <div className="ml-3 line-through text-gray-700 text-medium text-center">
                    ${product.original_price}
                  </div>
                </div>
              ) : (
                <div className="font-bold text-black text-2xl text-center">
                  ${product.original_price}
                </div>
              )}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden w-full bg-white lg:block lg:row-start-4"
            >
              <AddToCart />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-10 pr-6 pl-6 lg:hidden col-span-4 col-start-3"
          >
            <ProductDetail
              name={product.name}
              brand={product.brand}
              color={product.color}
              originalPrice={product.original_price}
              discountPrice={product.discount_price}
              onSale={product.on_sale}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-8 text-center place-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-10 lg:hidden col-span-6 col-start-2 "
          >
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
                <p className="text-gray-700 pt-4 max-w-[300px] lg:max-w-[1200px] sm:max-w-[600px]">
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
                <ProductSpecsTable
                  specs={product.specs}
                  brand={product.brand}
                  name={product.name}
                  color={product.color}
                  slug={product.slug}
                />
              </Tab>
            </Tabs>
          </motion.div>
        </div>
        <section className="hidden color-tertiary lg:block">
          <div className="grid grid-cols-12 mt-10 ml-20">
            <div className="col-span-11 pl-6">
              <h2 className="text-3xl text-left font-bold pt-10">
                {product.name} Specs
              </h2>
              <ProductSpecs specs={product.specs} slug={product.slug} />
            </div>
          </div>
        </section>
      </article>

      <section className="hidden lg:block">
        <div className="grid grid-cols-12 mt-10 ml-20">
          <div className="col-span-11 pl-6">
            <h2 className="text-3xl text-left font-bold pt-10 text-black">
              Recommended For You
            </h2>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 text-center z-10 p-4 w-full bg-white lg:hidden"
      >
        <AddToCart
          onSale={product.on_sale}
          originalPrice={product.original_price}
          discountPrice={product.discount_price}
        />
      </motion.div>
    </motion.section>
  )
}
