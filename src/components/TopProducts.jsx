/* eslint-disable react/prop-types */
import { Image, Card, CardBody, CardFooter } from '@nextui-org/react'
import '../assets/TopProducts.css'

export default function TopProducts({ products }) {
  return (
    <div className="grid grid-cols-4 gap-2 pl-6 pt-8 pr-6">
      {products.top_products.map((item, index) => (
        <Card
          shadow="sm"
          disableRipple
          key={index}
          isPressable
          onPress={() => console.log(`Se presionó: ${item.name}`)}
        >
          <CardBody className="overflow-visible p-0 items-center cards-top-products">
            <Image
              alt={item.name}
              className="w-full object-cover h-[200px]"
              src={item.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p className="text-default-500">${item.original_price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
