import { Logo } from './Logo';
import { Flex, Spacer, Link } from "@chakra-ui/react"
import { Button } from './Button';

export function Navbar() {
  return (
    <Flex
      paddingY={2}
      borderBottomWidth={1}
      borderBottomColor="#333"
    >
      <Logo.Text />
      <Spacer />
      <Link to="#">
        <Button preset="secondary">
          Mi cuenta
        </Button>
      </Link>
    </Flex>
  );
}
