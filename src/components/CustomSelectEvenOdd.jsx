import { useState } from "react";
import { Box, List, ListItem, Image, Img, Flex } from "@chakra-ui/react";

const CustomSelectEvenOdd = ({ options, name, formik }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    console.log(option);
    formik.setFieldValue(name, option.label);
    formik.setFieldValue("id_data", option.stock_id_data);
    formik.setFieldValue("id_credit", option.stock_id_credit);
    setIsOpen(false);
  };

  const selectedOption = options.find(
    (data) => data.label === formik.values.stock_id
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
          zIndex="999"
          width={300}
        >
          {options.map((option) => (
            <ListItem
              key={option.id}
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

export default CustomSelectEvenOdd;
