import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableCell,
  TableRow,
} from '@nextui-org/react'
import { snakeCaseToFirstLettersCase } from '../../utils/utils'
import PropTypes from 'prop-types'

export default function ProductSpecsTable({ specs, brand, name, color, slug }) {
  return (
    <Table
      hideHeader
      isStriped
      aria-label={`Table ${brand} ${name} ${color}`}
      className="pt-4"
    >
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>DESCRIPTION</TableColumn>
      </TableHeader>
      <TableBody>
        {Object.keys(specs).map((key) => (
          <TableRow key={`${slug}-${key}`}>
            <TableCell className="font-bold text-black">
              {snakeCaseToFirstLettersCase(key)}
            </TableCell>
            <TableCell className="text-black">{specs[key]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

ProductSpecsTable.propTypes = {
  specs: PropTypes.object.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}
