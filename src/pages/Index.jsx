import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">Organize and manage your events seamlessly with our platform.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/event-management.jpg" alt="Event Management" />
        </Box>
        <Button as={Link} to="/create-event" colorScheme="teal" size="lg" mt={6}>
          Create Your First Event
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;