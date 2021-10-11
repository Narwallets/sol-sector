import React from 'react';
import { Text, Heading } from '@chakra-ui/react'

export function WelcomeMessage() {
  return (
    <>
      <Heading size="sm" my={1} color="whiteAlpha.900">
        Dear Citizen 11243534A:
      </Heading>
      <Text my={1} color="whiteAlpha.900">
        Terra is over-populated, but our beloved communitarian democracy reigns supreme and all human rights are respected,
        including the individual freedom to choose. Based on our unrelenting respect for personal choice, the Terra central government
        is giving all the new citizens the choice of a free ticket out of Terra, to any planet and sector you can think of, or else to be
        ecologically incinerated in the next months as soon there's a spot in the waiting list (Incinerators are clogged, and despite the
        Central Honorable Incinerator Commission enormous efforts to serve our citizens, there are large waiting lists)
      </Text>
      <Text my={1} color="whiteAlpha.900">
        You have the choice of a free ticket to an exiting new planet in the periphery. Rumors say that the new planets lack some modern infrastructure,
        amenities, supplies and even enough oxygen, but don't listen to internet terrorists, where they see lack of basic life support systems we see opportunities!
        Everything is to be done!
      </Text>
      <Text my={1} color="whiteAlpha.900">
        Dear Citizen 11243534A! you're free to choose!
      </Text>
    </>
  );
}
