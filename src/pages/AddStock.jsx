import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Img,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

function AddStock() {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const previewImg = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(previewImg));

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading was error");
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log(file);
        console.log(binaryStr);
      };

      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Flex height="100%">
      <Sidebar />
      <Box mx={14} flex={"1"}>
        <Box my={16} mx={10}>
          <Heading>Add Stock</Heading>
          <Text fontFamily="heading">Credit / Data</Text>
        </Box>
        <SimpleGrid
          boxShadow="dark-lg"
          mx={10}
          mb={32}
          px={24}
          pt={16}
          pb={24}
          borderRadius="xl"
        >
          <form>
            <Box mb={10}>
              <Flex flexDir="column" align="center" gap={5}>
                <Flex
                  bgColor="blackAlpha.200"
                  w={300}
                  height={300}
                  alignItems="center"
                  borderRadius="2xl"
                >
                  <FormControl {...getRootProps()}>
                    <Input {...getInputProps()} />
                    {selectedImage ? (
                      <Flex>
                        <Center>
                          <Img
                            src={selectedImage}
                            alt={selectedImage.name}
                            w={200}
                          />
                        </Center>
                      </Flex>
                    ) : (
                      <Box>
                        {isDragActive ? (
                          <Flex alignItems="center">
                            <img
                              src="../icons/black/addcircle.svg"
                              alt="addcircle.svg"
                            />
                            <p>Drop files here</p>
                          </Flex>
                        ) : (
                          <Img
                            src="../icons/black/addcircle.svg"
                            alt="addcircle.svg"
                            width={104}
                            mx="auto"
                            mb={5}
                          />
                        )}
                      </Box>
                    )}
                  </FormControl>
                </Flex>
                {selectedImage ? (
                  <Button
                    colorScheme="teal"
                    onClick={() => setSelectedImage(null)}
                  >
                    Remove Image
                  </Button>
                ) : null}
              </Flex>
            </Box>
            <FormControl mb={10}>
              <FormLabel fontSize={27} fontFamily="heading" mb={5}>
                Provider Name
              </FormLabel>
              <Input
                borderColor="black"
                borderRadius="lg"
                size="lg"
                placeholder="Input Provider"
                _placeholder={{ fontSize: 20 }}
              />
            </FormControl>
            <FormControl mb={10}>
              <FormLabel fontSize={27} fontFamily="heading" mb={5}>
                Stock
              </FormLabel>
              <SimpleGrid columns={2} gap={5}>
                <Input
                  borderColor="black"
                  borderRadius="lg"
                  size="lg"
                  placeholder="Min"
                  _placeholder={{ fontSize: 20 }}
                />
                <Input
                  borderColor="black"
                  borderRadius="lg"
                  size="lg"
                  placeholder="Max  "
                  _placeholder={{ fontSize: 20 }}
                />
              </SimpleGrid>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={27} fontFamily="heading" mb={5}>
                Price
              </FormLabel>
              <SimpleGrid columns={2} gap={5}>
                <Input
                  borderColor="black"
                  borderRadius="lg"
                  size="lg"
                  placeholder="Min"
                  _placeholder={{ fontSize: 20 }}
                />
                <Input
                  borderColor="black"
                  borderRadius="lg"
                  size="lg"
                  placeholder="Max"
                  _placeholder={{ fontSize: 20 }}
                />
              </SimpleGrid>
            </FormControl>
            <Button
              mt={16}
              w="100%"
              h={50}
              fontFamily="poppins"
              colorScheme="facebook"
              fontWeight={400}
            >
              Save Changes
            </Button>
          </form>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default AddStock;
