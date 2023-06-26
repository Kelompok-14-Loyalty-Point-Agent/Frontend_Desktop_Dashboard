import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { getDataAdmin } from "../config/redux/getDataAdmin/getDataAdminThunk";
import { useDataAdminSelector } from "../config/redux/getDataAdmin/getDataAdminSelector";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePicture } from "../config/redux/updatePicture/updatePictureThunk";
import { useUpdatePictureType } from "../config/redux/updatePicture/updatePictureSelector";

function Sidebar_Profile() {
  useEffect(() => {
    dispatch(getDataAdmin());
  }, []);
  const dataAdmin = useDataAdminSelector();
  const dispatch = useDispatch();
  const picture = useUpdatePictureType();

  const [file, setFile] = useState(null);
  useEffect(() => {
    if (picture === "updatePicture/profile/fulfilled") {
      dispatch(getDataAdmin());
    }
  }, [dataAdmin]);

  const handleUpdate = () => {
    dispatch(updatePicture(file));
    setFile(null);
    alert("Update Profile Success");
    window.location.reload();
  };

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
            src={`https://3.0.59.152.nip.io/images/url/${dataAdmin?.data?.profile?.URL}`}
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
          <Input
            id="input_image"
            type="file"
            style={{
              opacity: 0,
              position: "absolute",
              width: "200px",
              padding: "10px",
              cursor: "pointer",
            }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <p style={{ cursor: "pointer" }}>Change Photo Profile</p>
        </Center>
        {file && (
          <Center>
            <Button
              id="button_updateProfile"
              bg="#030F51"
              color="white"
              _hover={{
                background: "#385898",
              }}
              fontWeight={400}
              fontSize={16}
              type="submit"
              onClick={handleUpdate}
            >
              Update Profile
            </Button>
          </Center>
        )}
      </Box>
    </Flex>
  );
}

export default Sidebar_Profile;
