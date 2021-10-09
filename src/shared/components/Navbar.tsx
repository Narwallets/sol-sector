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
      <Link to="#">
        <Button preset="secondary">
          <Text fontSize="xs">Account</Text>
        </Button>
      </Link>
    </Flex>
  );
}
