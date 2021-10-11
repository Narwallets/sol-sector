import { Galaxy } from '../interfaces';
import { Flex, Heading, Center, Button, Spacer, Box } from '@chakra-ui/react'

type Props = Galaxy;

export function PopoverContent(props: Props) {
  return (
    <Flex>
      <Heading size="sm" color="black">{props.text}</Heading>
    </Flex>
  );
}
