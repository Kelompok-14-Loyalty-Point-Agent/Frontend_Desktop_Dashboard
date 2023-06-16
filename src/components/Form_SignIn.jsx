import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { signin } from "../config/redux/signin/SignInThunk";
import { useTokenSelector } from "../config/redux/signin/SignInSelector";

const Form_SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useTokenSelector();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      dispatch(signin(values));
    },
  });

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  const inputBorderColor = (fieldName) =>
    formik.errors[fieldName] && formik.touched[fieldName]
      ? "#BE4057"
      : "#DFE0EB";

  return (
    <Box
      border="1px"
      borderColor="#DFE0EB"
      rounded={"xl"}
      shadow="15px 15px 22px rgba(0, 0, 0, 0.2)"
      px={12}
      py="60px"
      textAlign="center"
    >
      <Box pb={12}>
        <Heading fontSize={32} textAlign={"center"} mb={3}>
          Sign In
        </Heading>
        <Text
          fontSize={16}
          fontWeight={400}
          color={useColorModeValue("cyan.700")}
          textAlign={"center"}
          textShadow="0 4px 4px #DFE0EB"
        >
          It’s nice to see you, please sign in to continue!
        </Text>
      </Box>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <FormControl id="email">
            <FormLabel fontWeight={700} fontSize={20}>
              Email Address
            </FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              borderColor={inputBorderColor("email")}
            />
            {formik.errors.email && formik.touched.email && (
              <Text color="#BE4057" textAlign={"start"} mt={1}>
                {formik.errors.email}
              </Text>
            )}
          </FormControl>
          <FormControl id="password" mt={3}>
            <FormLabel fontWeight={700} fontSize={20}>
              Password
            </FormLabel>
            <InputGroup>
              <Input
                placeholder="Please Enter Your Password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                borderColor={inputBorderColor("password")}
              />
              <InputRightElement>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {formik.errors.password && formik.touched.password && (
              <Text color="#BE4057" textAlign={"start"} mt={1}>
                {formik.errors.password}
              </Text>
            )}
          </FormControl>
          <Stack isInline justifyContent="end" mt={8}>
            <Link to="/forgot">
              <Text
                fontWeight={400}
                color="#BE4057"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Forgot Password?
              </Text>
            </Link>
          </Stack>
          <Button
            type="submit"
            bg="#030F51"
            color="white"
            _hover={{
              background: "#385898",
            }}
            w="full"
            mt={12}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Form_SignIn;
