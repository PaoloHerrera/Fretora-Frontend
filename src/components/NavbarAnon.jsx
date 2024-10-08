import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  Input,
  Divider,
} from '@nextui-org/react'
import logo from '../assets/images/fretora_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function NavbarAnon() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = [
    {
      name: 'Electrics',
      path: '/electrics',
    },
    {
      name: 'Acoustics',
      path: '/acoustic',
    },
    {
      name: 'Electro Acoustics',
      path: '/electro-acoustics',
    },
  ]

  return (
    <header>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        height="8rem"
      >
        <NavbarContent className="xl:hidden max-w-10 min-w-5" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </NavbarContent>

        <NavbarContent className="min-w-[100px] xl:hidden" justify="start">
          <Link to={'/'}>
            <img src={logo} width="150" height="150" alt="Fretora Logo" />
          </Link>
        </NavbarContent>

        <NavbarContent className="hidden xl:flex gap-4 pl-20" justify="start">
          <NavbarBrand>
            <Link to={'/'}>
              <img src={logo} width="150" height="150" alt="Fretora Logo" />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          justify="center"
          className="md:w-1/3 lg:w-1/2 xl:items-start xl:pt-6 xl:grid xl:grid-cols-3"
        >
          <Input
            classNames={{
              base: 'max-w-full h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
            }}
            className="hidden md:flex xl:col-span-5"
            placeholder="Search in Fretora..."
            size="lg"
            startContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            type="search"
          />
          {menuItems.map((item, index) => (
            <NavbarItem
              key={`${item}-${index}`}
              className="justify-self-center hidden xl:flex col-span-1"
            >
              <Link
                to={item.path}
                aria-current="page"
                className="fretora-primary-color"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent
          justify="end"
          className="xl:items-start xl:pt-6 max-w-30 min-w-20 xl:pr-20"
        >
          <NavbarItem className="flex justify-self-end">
            <Button isIconOnly variant="light">
              <ShoppingCartOutlined />
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem className="pb-5">
            <Input
              classNames={{
                base: 'max-w-full h-10',
                mainWrapper: 'h-full',
                input: 'text-small',
                inputWrapper:
                  'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
              }}
              className="md:hidden flex"
              placeholder="Search in Fretora..."
              size="lg"
              startContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              type="search"
            />
          </NavbarMenuItem>
          <Divider></Divider>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full fretora-primary-color"
                to={item.path}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  )
}
