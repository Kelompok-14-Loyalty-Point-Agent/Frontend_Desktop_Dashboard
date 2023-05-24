import { Link } from "react-router-dom";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Flex>
      {/* #SIDEBAR DASHBOARD START  */}
      <Box w={330} bg="#171717" h={1024}>
        <Center mt={"80px"} color="white">
          {" "}
          <img src="./Ellipse78.svg" alt="" />
        </Center>
        <Center mt={4} color="white">
          <Text fontSize={32} fontFamily="heading" fontWeight={600}>
            Andrew
          </Text>
        </Center>
        <Center
          mt={4}
          color="purple.200"
          fontSize={20}
          fontFamily="heading"
          fontWeight={700}
        >
          <p>Welcome back!</p>
        </Center>
        <Center color="purple.100" fontSize={16}>
          <p>Admin</p>
        </Center>
        <Flex flexDirection="column" mt={20} gap={5}>
          <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
            <Flex alignItems="center" gap={2}>
              <img src="./icons/white/dashboard-active.svg" alt="" />
              <Link to="/dashboard">
                <Text
                  ml={2}
                  color="purple.200"
                  fontFamily="heading"
                  fontWeight={700}
                  fontSize={20}
                >
                  Dashboard
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
            <Flex alignItems="center" gap={2}>
              <img src="./icons/white/people.svg" alt="people.svg" width={26} />
              <Link to="/customers">
                <Text
                  ml={2}
                  fontWeight={700}
                  color="purple.200"
                  fontFamily="heading"
                  fontSize={20}
                >
                  Customer Data
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
            <Flex alignItems="center" gap={2}>
              <img
                src="./icons/white/receiptitem.svg"
                alt="people.svg"
                width={26}
              />
              <Link to="/transactions">
                <Text
                  ml={2}
                  fontWeight={700}
                  color="purple.200"
                  fontFamily="heading"
                  fontSize={20}
                >
                  Customer Transaction
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box borderLeftRadius="7px" ml="36px" pl={3} py={2} bg="white">
            <Flex alignItems="center" gap={2}>
              <img src="./icons/black/moneys.svg" alt="people.svg" width={26} />
              <Link to="/stocks">
                <Text
                  ml={2}
                  fontWeight={700}
                  color="black"
                  fontFamily="heading"
                  fontSize={20}
                >
                  Stock Credit / Data
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
            <Flex alignItems="center" gap={2}>
              <img
                src="./icons/white/emptywallet.svg"
                alt="people.svg"
                width={26}
              />
              <Link to="/dashboardhome">
                <Text
                  ml={2}
                  fontWeight={700}
                  color="purple.200"
                  fontFamily="heading"
                  fontSize={20}
                >
                  Stock Cashout
                </Text>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
      {/* #SIDEBAR DASHBOARD END  */}
    </Flex>
  );
};

export default Sidebar;
