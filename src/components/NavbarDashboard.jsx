import { Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTokenSelector } from "../config/redux/signin/SignInSelector";
import { useDispatch } from "react-redux";
import { signInAction } from "../config/redux/signin/SignInSlice";

function NavbarDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickProfile = () => {
    navigate("/profile");
  };
  const handleClickLogout = () => {
    dispatch(signInAction.setToken(""));
  };
  return (
    <Flex gap={5} justifyContent="end" mb={4} mx={10} mt={10}>
      <Button
        variant="outline"
        colorScheme="blue.700"
        color="blue.700"
        fontFamily="heading"
        width={133}
        onClick={handleClickProfile}
      >
        Profile
      </Button>
      <Button
        variant="outline"
        colorScheme="red.700"
        color="red.700"
        fontFamily="heading"
        px={25}
        onClick={handleClickLogout}
      >
        Sign Out
      </Button>
    </Flex>
  );
}

export default NavbarDashboard;
