import { Logo } from './Logo';
import { Flex, Spacer, Link, Text } from "@chakra-ui/react"
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
        direction="row"
      >
        <Text fontSize="xs">Sol token:</Text>
        <Spacer />
        <Text fontSize="xs">1.000.000</Text>
      </Flex>
      <Link to="#">
        <Button preset="secondary">
          <Text fontSize="xs">Account</Text>
        </Button>
      </Link>
    </Flex>
  );
}
