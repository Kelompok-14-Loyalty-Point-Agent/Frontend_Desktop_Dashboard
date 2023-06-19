import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  TableContainer,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  get_profile,
  update_profile,
} from "../config/redux/editProfile/editProfileThunk";
import { useProfileSelector } from "../config/redux/editProfile/editProfileSelector";

function Form_EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_profile());
  }, []);
  const profile = useProfileSelector();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: profile?.id,
      name: profile?.name,
      address: profile?.address,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(update_profile(values));

      alert("Update Success");
      navigate("/dashboard");
    },
  });

  return (
    <Box px={10} pt={10} flex="1">
      <Flex gap={5} justifyContent="end" mb={4}>
        <Button
          variant="outline"
          colorScheme="#B26801"
          color="#B26801"
          fontFamily="heading"
          fontWeight={700}
          fontSize={20}
          width={133}
        >
          Edit Profile
        </Button>
        <Button
          variant="outline"
          colorScheme="#030F51"
          color="#030F51"
          fontFamily="heading"
          fontWeight={700}
          fontSize={20}
          px={25}
        >
          <Link to="/dashboard">Home</Link>
        </Button>
      </Flex>
      <Box mx={14} mt={7}>
        <Text fontSize={32} fontFamily="heading" fontWeight={700} mb={10}>
          Profile
        </Text>
        <Tabs variant="unstyled">
          <TabList>
            <Tab fontWeight={700} fontFamily="heading">
              Profile
            </Tab>
          </TabList>
          <TabIndicator
            height={1}
            borderRadius={6}
            backgroundColor="teal.400"
          />
          <TabPanels>
            <TabPanel bg="white" boxShadow="lg" mt={5} borderRadius={12} p={6}>
              <TableContainer pt={9}>
                <form onSubmit={formik.handleSubmit}>
                  <FormControl id="name" isRequired>
                    <FormLabel
                      fontFamily="heading"
                      fontWeight={700}
                      fontSize={24}
                    >
                      Nama Lengkap
                    </FormLabel>
                    <Input
                      height="60px"
                      fontWeight={400}
                      fontSize={20}
                      placeholder="Andrew Mathew"
                      _placeholder={{ color: "gray.500" }}
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <Text color="#BE4057" textAlign="start" mt={1}>
                        {formik.errors.name}
                      </Text>
                    )}
                  </FormControl>
                  <br />
                  <FormControl id="address" isRequired>
                    <FormLabel
                      fontFamily="heading"
                      fontWeight={700}
                      fontSize={24}
                    >
                      Alamat
                    </FormLabel>
                    <Input
                      height="60px"
                      fontWeight={400}
                      fontSize={20}
                      placeholder="Jakarta, Indonesia"
                      _placeholder={{ color: "gray.500" }}
                      type="text"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.address && formik.errors.address && (
                      <Text color="#BE4057" textAlign="start" mt={1}>
                        {formik.errors.address}
                      </Text>
                    )}
                  </FormControl>
                  <br />
                  <Stack spacing={4}>
                    <Button
                      bg="#030F51"
                      color="white"
                      _hover={{
                        background: "#385898",
                      }}
                      fontWeight={400}
                      fontSize={16}
                      type="submit"
                    >
                      Save Changes
                    </Button>
                  </Stack>
                </form>
                <br />
                <hr />
                <br />
                <FormControl id="password">
                  <FormLabel
                    fontFamily="heading"
                    fontWeight={700}
                    fontSize={24}
                  >
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      height="60px"
                      fontWeight={400}
                      fontSize={20}
                      placeholder="***********************"
                      _placeholder={{ color: "gray.500" }}
                      type={showPassword ? "text" : "password"}
                      id="password"
                    />
                    <InputRightElement h={"full"}>
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
                </FormControl>
                <br />
                <Stack spacing={4}>
                  <Button
                    bg="#030F51"
                    color="white"
                    _hover={{
                      background: "#385898",
                    }}
                    fontWeight={400}
                    fontSize={16}
                  >
                    Change Password
                  </Button>

                  <Button
                    bg="#690837"
                    color="white"
                    _hover={{
                      background: "#e53e3e",
                    }}
                    fontWeight={400}
                    fontSize={16}
                  >
                    Sign Out
                  </Button>
                </Stack>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Form_EditProfile;
