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
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getDataAdmin } from "../config/redux/getDataAdmin/getDataAdminThunk";
import { useDataAdminSelector } from "../config/redux/getDataAdmin/getDataAdminSelector";
import { updateDataAdmin } from "../config/redux/updateDataAdmin/updateDataAdminThunk";
import { useUpdateDataAdminType } from "../config/redux/updateDataAdmin/updateDataAdminSelector";
import { updatePassword } from "../config/redux/updatePassword/updatePasswordThunk";
import { useUpdatePasswordType } from "../config/redux/updatePassword/updatePasswordSelector";
import { useDispatch } from "react-redux";

function Form_EditProfile() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const dataAdmin = useDataAdminSelector();
  const useDataAdminType = useUpdateDataAdminType();
  const usePasswordType = useUpdatePasswordType();

  useEffect(() => {
    dispatch(getDataAdmin());

    if (useDataAdminType === "updateDataAdmin/updateData/fulfilled") {
      dispatch(getDataAdmin());
    }

    if (usePasswordType === "updatePassword/updatePassword/fulfilled") {
      dispatch(getDataAdmin());
    }
  }, [useDataAdminType, usePasswordType]);

  const formikNameAddress = useFormik({
    initialValues: {
      id: 1,
      name: dataAdmin?.data?.name || "",
      address: dataAdmin?.data?.profile?.Address || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(updateDataAdmin(values));
      alert("Update Nama & Alamat Success");
    },
  });

  const formikPassword = useFormik({
    initialValues: {
      id: 1,
      password: dataAdmin?.data?.password || "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(updatePassword(values));
      alert("Update Password Success");
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
          id="button_home_editProfile"
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
                <form
                  id="form_name&address"
                  onSubmit={formikNameAddress.handleSubmit}
                >
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
                      id="name"
                      {...formikNameAddress.getFieldProps("name")}
                      isInvalid={
                        formikNameAddress.touched.name &&
                        formikNameAddress.errors.name
                      }
                    />
                    {formikNameAddress.touched.name &&
                      formikNameAddress.errors.name && (
                        <Text color="#BE4057" textAlign="start" mt={1}>
                          {formikNameAddress.errors.name}
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
                      id="address"
                      {...formikNameAddress.getFieldProps("address")}
                      isInvalid={
                        formikNameAddress.touched.address &&
                        formikNameAddress.errors.address
                      }
                    />
                    {formikNameAddress.touched.address &&
                      formikNameAddress.errors.address && (
                        <Text color="#BE4057" textAlign="start" mt={1}>
                          {formikNameAddress.errors.address}
                        </Text>
                      )}
                  </FormControl>
                  <br />
                  <Stack spacing={4}>
                    <Button
                      id="button_saveChanges"
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
                <form id="form_password" onSubmit={formikPassword.handleSubmit}>
                  <FormControl id="password" isRequired>
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
                        {...formikPassword.getFieldProps("password")}
                        isInvalid={
                          formikPassword.touched.password &&
                          formikPassword.errors.password
                        }
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
                    {formikPassword.touched.password &&
                      formikPassword.errors.password && (
                        <Text color="#BE4057" textAlign="start" mt={1}>
                          {formikPassword.errors.password}
                        </Text>
                      )}
                  </FormControl>
                  <br />
                  <Stack spacing={4}>
                    <Button
                      id="button_changePassword"
                      bg="#030F51"
                      color="white"
                      _hover={{
                        background: "#385898",
                      }}
                      fontWeight={400}
                      fontSize={16}
                      type="submit"
                    >
                      Change Password
                    </Button>

                    <Button
                      id="button_signOut"
                      bg="#690837"
                      color="white"
                      _hover={{
                        background: "#e53e3e",
                      }}
                      fontWeight={400}
                      fontSize={16}
                    >
                      <Link to="/">Sign Out</Link>
                    </Button>
                  </Stack>
                </form>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Form_EditProfile;
