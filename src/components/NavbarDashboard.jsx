import { Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTokenSelector } from "../config/redux/signin/SignInSelector";
import { useDispatch } from "react-redux";
import { signInAction } from "../config/redux/signin/SignInSlice";
import { logoutUser } from "../config/redux/logout/logoutUserThunk";
import { useEffect } from "react";
import {
  useLogoutUserDatasSelector,
  useLogoutUserType,
} from "../config/redux/logout/logoutUserSelector";
import { logoutUserAction } from "../config/redux/logout/logoutUserSlice";

function NavbarDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutUserData = useLogoutUserDatasSelector();
  const logoutUserType = useLogoutUserType();

  const handleClickProfile = () => {
    navigate("/profile");
  };
  const handleClickLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (logoutUserData?.data) {
      dispatch(logoutUserAction.setClearDatas());
      dispatch(signInAction.setToken(""));
      dispatch(signInAction.setType());
      navigate("/signin");
    }
  }, [logoutUserType]);

  return (
    <Flex gap={5} justifyContent="end" mb={4} mx={10} mt={10}>
      <Button
        id="button_editProfile"
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
        id="button_signOut"
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
