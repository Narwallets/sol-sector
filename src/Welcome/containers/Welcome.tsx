import React from 'react';
import { Container, Navbar, Logo } from '../../shared/components';
import { Flex } from '@chakra-ui/react'
import { Footer } from '../components/Footer';
import { WelcomeMessage } from '../components/WelcomeMessage';

export function Welcome() {
  return (
    <Container>
      <Navbar />
      <Flex
        direction="column"
        paddingY={3}
      >
        <Box
          w="100%"
        >
          <Logo.Image />
        </Box>
        <p>
          Dear Citizen 11243534A:
        </p>
        <p>Terra is over-populated, but our beloved communitarian democracy reigns supreme and all human rights are respected,
          including the individual freedom to choose. Based on our unrelenting respect for personal choice, the Terra central government
          is giving all the new citizens the choice of a free ticket out of Terra, to any planet and sector you can think of, or else to be
          ecologically incinerated in the next months as soon there's a spot in the waiting list (Incinerators are clogged, and despite the
          Central Honorable Incinerator Commission enormous efforts to serve our citizens, there are large waiting lists)
        </p>
        <p>
          You have the choice of a free ticket to an exiting new planet in the periphery. Rumors say that the new planets lack some modern infrastructure,
          amenities, supplies and even enough oxygen, but don't listen to internet terrorists, where they see lack of basic life support systems we see opportunities!
          Everything is to be done!
        </p>
        <p>
          Dear Citizen 11243534A! you're free to choose!
        </p>
        <Center>
          <Spacer />
          <Spacer />
          <Spacer />
          <Link
            to="/dashboard"
            as={RouterLink}
          >
            <Button preset="primary" >
              <Center>
                Free Ticket
              </Center>
            </Button>
          </Link>
          <Spacer />
          <Link
            to="/incinerator"
            as={RouterLink}
          >
            <Button preset="primary" >
              <Center>
                Incineration
              </Center>
            </Button>
          </Link>
          <Spacer />
          <Spacer />
          <Spacer />
        </Center>
      </Flex >
    </Container >

  );
}
