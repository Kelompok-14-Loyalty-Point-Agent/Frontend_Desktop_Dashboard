import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { useProfileSelector } from "../config/redux/editProfile/editProfileSelector";
import { get_profile } from "../config/redux/editProfile/editProfileThunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Sidebar_Profile() {
  useEffect(() => {
    dispatch(get_profile());
  }, []);
  const profile = useProfileSelector();
  const dispatch = useDispatch();

  return (
    <Flex>
      <Box w={330} bg="#171717" h="full">
        <Center mt={"80px"} color="#95AEF0">
          <Text fontFamily="heading" fontWeight={700} fontSize={32}>
            Hello, Admin
          </Text>
        </Center>
        <Center mt={5} color="white">
          <Image
            src={profile?.image}
            alt="profile"
            borderRadius="full"
            boxSize="156px"
          />
          <img
            src="./icons/dashboard/editprofile.svg"
            alt="edit"
            style={{ marginTop: "140px" }}
          />
        </Center>
        <Center mt={3} color="white" fontWeight={400} fontSize={16}>
          <p>Change Photo Profile</p>
        </Center>
      </Box>
    </Flex>
  );
}

export default Sidebar_Profile;
