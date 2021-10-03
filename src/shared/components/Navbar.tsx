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
      <Flex
        justifyContent="center"
        alignItems="center"
        width={120}
        p={1}
      >
        <span className="text-xs">Sol token</span>
        <Spacer />
        <span className="text-xs">1.000.000</span>
      </Flex>
      <Link to="#">
        <Button preset="secondary">
          Account
        </Button>
      </Link>
    </Flex>
  );
}
