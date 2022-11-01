import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { Logo } from '../Logo';
import { PasswordField } from '../components/PasswordField';
import UserService from '../services/UserService';
import { Form, redirect } from 'react-router-dom';

export async function action({ request, params }) {
  try {
    const formData = await request.formData();
    const formFields = Object.fromEntries(formData);
    const { email, password } = formFields;
    let logged = await UserService.login({ email, password });
    console.log('logged', logged);
    if (logged.status === 200) {
      return redirect('/dashboard');
    } else {
    }
  } catch (error) {
    console.log(error);
  }
}

export const Login = () => {
  /*  
  Think about error management (UI)
  Action need to communicate to 👇
  let [loginError, setLoginError] = useState(); 
  */

  return (
    <Container
      maxW="lg"
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Center>
            <Logo />
          </Center>

          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={useBreakpointValue({
                base: 'xs',
                md: 'sm',
              })}
            >
              Welcome to PTP <br />
              Log in to your account
            </Heading>
            {/*             <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack> */}
          </Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={useBreakpointValue({
            base: 'transparent',
            sm: 'bg-surface',
          })}
          boxShadow={{
            base: 'none',
            sm: useColorModeValue('md', 'md-dark'),
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}
        >
          <Form method="post" id="login-form">
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <input
                    placeholder="my.email@address.com"
                    id="email"
                    name="email"
                    type="email"
                  />
                </FormControl>
                <PasswordField placeholder="My secret password 123" />
              </Stack>
              <HStack justify="space-between">
                {/* 
                  NOT MVP
                  <Checkbox defaultChecked>Remember me</Checkbox> 
                */}
                {/* Not MVP       
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button> */}
              </HStack>
              <Stack spacing="6">
                <button
                  method="submit"
                  className="bg-gray-300 hover:bg-green-500"
                >
                  Sign in
                </button>
              </Stack>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Container>
  );
};
