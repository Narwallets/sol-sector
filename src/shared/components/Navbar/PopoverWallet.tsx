import { Flex, Image, Link, Box, Text } from "@chakra-ui/react"

export function PopoverWallet() {
  return (
    <Flex>
      <Link
        to="#"
        borderBottomWidth={1}
        borderColor="blackAlpha.500"
        w="100%"
      >
        <Flex
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          p={1}
        >
          <Image
            src={require('../../assets/metamask.png').default}
            w={5}
            h={5}
            mr={1}
          />
          <Text
            fontSize="xs"
            color="black"
          >
            Metamask
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
