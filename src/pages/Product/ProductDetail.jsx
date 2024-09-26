import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../../data_testing/fretora.products.json'
import {
  Button,
  Image,
  Radio,
  RadioGroup,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
} from '@nextui-org/react'
import '../../css/ProductDetail.css'
import { Info, Description, AddShoppingCart } from '@mui/icons-material'

export default function ProductDetail() {
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

  if (loading) return <div>Loading...</div>

  if (!product || !allProducts) return <div> Product not found</div>

  return (
    <section>
      <article className="max-h-[75vh] overflow-auto">
        <div className="flex justify-between pt-10 pr-6 pl-6">
          <Image src={product.image_detail}></Image>
          <div className="flex flex-col text-center items-center gap-2">
            <div className="font-bold text-black">Select Color</div>
            <div className="pt-4">
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
        </div>
        <div className="pt-10 pr-6 pl-6 ">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-black text-lg">
              {product.name} - {product.color}
            </h1>
            {product.on_sale ? (
              <div className="font-bold text-black text-lg">
                ${product.discount_price}
                <span className="original-price text-gray-700">
                  ${product.original_price}
                </span>
              </div>
            ) : (
              <div className="font-bold text-black text-lg">
                ${product.original_price}
              </div>
            )}
          </div>
          <div className="pt-3">
            <h2 className="font-bold text-black text-md">{product.brand}</h2>
          </div>
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
                <p className="text-gray-700">{product.description}</p>
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
                <Table
                  hideHeader
                  isStriped
                  aria-label={`Table ${product.brand} ${product.name} ${product.color}`}
                >
                  <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>DESCRIPTION</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {Object.keys(product.specs).map((key) => (
                      <TableRow key={key}>
                        <TableCell className="font-bold text-black">
                          {(
                            key.charAt(0).toUpperCase() +
                            key.split('_').join(' ').slice(1)
                          ).replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                            letter.toUpperCase()
                          )}
                        </TableCell>
                        <TableCell className="text-black">
                          {product.specs[key]}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Tab>
            </Tabs>
          </div>
        </div>
      </article>

      <div className="flex justify-center pt-5">
        <Button
          className="color-secondary"
          size="lg"
          startContent={<AddShoppingCart />}
        >
          Add To Cart - $
          {product.on_sale ? product.discount_price : product.original_price}
        </Button>
      </div>
    </section>
  )
}
