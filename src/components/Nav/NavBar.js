import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';

import * as React from 'react';
import { signOut } from 'supertokens-web-js/recipe/session';
import { FiMenu } from 'react-icons/fi';
import { Logo } from '../../Logo';
import { redirect } from 'react-router-dom';

export const NavBar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const logOut = async () => {
    await signOut();
    redirect('/');
  };

  return (
    <Box
      as="section"
      pb={{
        base: '12',
        md: '24',
      }}
    >
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container
          py={{
            base: '4',
            lg: '5',
          }}
        >
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {['Exercises', 'Sessions', 'Programs', 'Stats 👨‍🔬'].map(
                    item => (
                      <Button key={item}>{item}</Button>
                    )
                  )}
                </ButtonGroup>
                <HStack spacing="1">
                  <Select size="sm">
                    <option value="athlete">Athlete</option>
                    <option value="coach">Coach</option>
                    <option value="admin">Admin</option>
                  </Select>
                  <Button variant="primary" onClick={logOut}>
                    Log out
                  </Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
