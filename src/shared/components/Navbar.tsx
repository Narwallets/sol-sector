import { Logo } from './Logo';
import { Flex, Spacer, Link } from "@chakra-ui/react"
import { Button } from './Button';

export function Navbar() {
  return (
    <Flex
      paddingY={2}
    >
      <Logo.Text />
      <Spacer />
      <Link color="teal.500" to="#">
        <Button preset="secondary">
          Mi cuenta
        </Button>
      </Link>
    </Flex>
  );
}
