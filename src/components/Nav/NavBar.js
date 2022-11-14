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
import { Form, Link, redirect } from 'react-router-dom';

export async function action({ request, params }) {
  await signOut();
  return redirect('/');
}
export const NavBar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

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
            <Link to="/dashboard">
              <Logo />
            </Link>

            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {[
                    { libelle: 'Exercises', path: '/dashboard/exercices' },
                    { libelle: 'Sessions', path: '/dashboard/sessions' },
                    { libelle: 'Programs', path: '/dashboard/programs' },
                    { libelle: 'Stats 👨‍🔬', path: '/dashboard/statistics' },
                  ].map((item, index) => (
                    <Link to={item.path} key={index}>
                      {item.libelle}
                    </Link>
                  ))}
                </ButtonGroup>
                <HStack spacing="1">
                  <Select size="sm">
                    <option value="athlete">Athlete</option>
                    <option value="coach">Coach</option>
                    <option value="admin">Admin</option>
                  </Select>
                  <Form method="post" id="logout-form">
                    {' '}
                    <button
                      method="submit"
                      className="bg-gray-300 hover:bg-green-500"
                    >
                      Logout
                    </button>
                  </Form>
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
