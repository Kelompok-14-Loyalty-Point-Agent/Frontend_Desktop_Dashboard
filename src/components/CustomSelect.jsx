import { useState } from "react";
import { Box, List, ListItem, Image, Img, Flex } from "@chakra-ui/react";

const CustomSelect = ({ options, name, formik }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    formik.setFieldValue(name, option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find(
    (option) => option.value === formik.values[name]
  );

  return (
    <Box>
      <Box
        onClick={toggleDropdown}
        cursor="pointer"
        borderWidth="1px"
        borderColor="gray.300"
        bgColor="white"
        borderRadius="md"
        py="4"
        px="5"
        display="flex"
        width={300}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex alignItems="center">
          {selectedOption && (
            <Image
              src={selectedOption.imageSrc}
              alt={selectedOption.label}
              boxSize="40px"
              mr="2"
            />
          )}
          {selectedOption ? selectedOption.label : "Select an option"}
        </Flex>
        <Img
          src={`../icons/addStock/${
            isOpen ? "arrow_up.svg" : "arrow_down.svg"
          }`}
        />
      </Box>
      {isOpen && (
        <List
          borderWidth="1px"
          borderColor="gray.300"
          borderRadius="md"
          mt="2"
          bgColor="white"
          position="absolute"
          width={300}
        >
          {options.map((option) => (
            <ListItem
              key={option.value}
              cursor="pointer"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pl={3}
              py={4}
              _hover={{ bgColor: "#95AEF0" }}
              onClick={() => selectOption(option)}
            >
              {option.label}
              <Image
                src={option.imageSrc}
                alt={option.label}
                boxSize="40px"
                mr="2"
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default CustomSelect;
