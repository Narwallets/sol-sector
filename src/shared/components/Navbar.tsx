import { Logo } from './Logo';
import { Flex, Spacer, Link } from "@chakra-ui/react"

export function Navbar() {
  return (
    <Flex
      borderBottomWidth="1px"
      borderBottomColor="#ddd"
    >
      <Logo.Text />
      <Spacer />
      <Link color="teal.500" to="#">Mi cuenta</Link>
    </Flex>
  );
}
