import { Divider, Card, CardHeader, CardBody } from '@nextui-org/react'
import { SnakeCaseToFirstLettersCase } from '../../utils/utils'
import PropTypes from 'prop-types'

export default function ProductSpecs({ specs, slug }) {
  return (
    <div className="grid grid-cols-4 gap-4 pt-10">
      {Object.keys(specs).map((key) => (
        <Card
          key={`${slug}-${key}`}
          shadow="lg"
          radius="none"
          className="color-tertiary"
        >
          <CardHeader className="text-xl">
            {SnakeCaseToFirstLettersCase(key)}
          </CardHeader>
          <Divider />
          <CardBody className="text-sm">{specs[key]}</CardBody>
        </Card>
      ))}
    </div>
  )
}

ProductSpecs.propTypes = {
  specs: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
}
