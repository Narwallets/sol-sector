import React from 'react';
import { Container, Navbar, Logo, Button } from '../../shared/components';
import { Flex, Link, Center, Spacer, Box } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"

import bureaucracy_form from "../assets/govt-bureaucracies.jpg"

export function WelcomeIncinerator() {
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
        <h2>Thank you for your choice citizen!</h2>
        <p>
          Dear Citizen 11243534A, This is Form A445-23565-Revision 135b. You need to fill this form by hand, two copies and deliver them
          personally to: Central Honorable Incinerator Commission, Central Road 1563, Floor 478, Office 2-B. After processing and if you
          are approved, you will be allowed to receive three copies of Form A445-23565-Revision 42g.
          Then you need to fill Form A445-23565-Revision 42g by hand, three copies and deliver them
          personally to: Central Honorable Incinerator Commission, Central Road 1563, Floor 478, Office 2-I. <br />
          By Central Directive C445-23565-2235 of the Beloved Community Government, any scratch or illegible information on Form A445-23565-Revision 42g
          will cause the prompt destruction of the Forms and you need to fill a new Form A445-23565-Revision 135b with additional Form A445-23565-Revision 135b-Annex
          indicating the reasons for the new presentation and a letter with sincere apologies according to model M-A451N0. You have up to 3 opportunities to present
          the Forms in perfect order or you will be charged with obstructing bureaucracy, and you will need to fill Form P334-23565-Revision 533j to be processed.
          Please be aware that if you are found guilty of obstructing bureaucracy you can be sentenced to jail time followed by ecoincineration.

        </p>
        <p>
          <Center>
            <img
              src={bureaucracy_form}
              style={{
                width: "auto", height: "auto", objectFit: "cover"
              }}
            >
            </img >
          </Center>
        </p>
        <Center>
          <Link
            to="/"
            as={RouterLink}
          >
            <Button preset="primary" >
              <Center>
                Let's talk about that Free Ticket
              </Center>
            </Button>
          </Link>
        </Center>
        <Spacer />
      </Flex >
    </Container >
  );
}
