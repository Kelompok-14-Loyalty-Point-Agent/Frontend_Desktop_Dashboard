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
import NavbarDashboard from "../components/NavbarDashboard";

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
        <NavbarDashboard />
        <Heading mb={16} mx={10}>
          Add Stock
        </Heading>
        <SimpleGrid
          boxShadow="dark-lg"
          mx={10}
          mb={32}
          px={24}
          pt={16}
          pb={24}
          borderRadius="md"
        >
          <form>
            <Box mb={10}>
              <Flex flexDir="column" align="center" gap={5}>
                <Box
                  bgColor="gray.100"
                  w={300}
                  height={300}
                  alignContent="center"
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
                          <Box
                            position="relative"
                            top={14}
                            bottom={0}
                            px={10}
                            borderRadius="lg"
                          >
                            <Img
                              src="../icons/black/addcircle.svg"
                              alt="addcircle.svg"
                              width={104}
                              mx="auto"
                              mb={5}
                            />
                            <Text textAlign="center">
                              Drag and drop some files here, or click to select
                              files
                            </Text>
                          </Box>
                        )}
                      </Box>
                    )}
                  </FormControl>
                </Box>
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
                placeholder="Input Provider Name"
                _placeholder={{ fontSize: 20 }}
              />
            </FormControl>
            <FormControl mb={10}>
              <FormLabel fontSize={27} fontFamily="heading" mb={5}>
                Stock Total
              </FormLabel>
              <Input
                borderColor="black"
                borderRadius="lg"
                size="lg"
                placeholder="Input Stock Amount"
                _placeholder={{ fontSize: 20 }}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={27} fontFamily="heading" mb={5}>
                Price
              </FormLabel>
              <Input
                borderColor="black"
                borderRadius="lg"
                size="lg"
                placeholder="Input Price Amount"
                _placeholder={{ fontSize: 20 }}
              />
            </FormControl>
          </form>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default AddStock;
