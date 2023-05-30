import { Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NavbarDashboard() {
  const navigate = useNavigate();

  const handleClickProfile = () => {
    navigate("/profile");
  };
  const handleClickLogout = () => {
    navigate("/logout");
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
