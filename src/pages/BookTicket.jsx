import { useState } from "react";
import { Container, Heading, FormControl, FormLabel, Input, Button, VStack, Alert, AlertIcon, Select } from "@chakra-ui/react";

const BookTicket = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [numTickets, setNumTickets] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const events = [
    { id: 1, name: "Event 1" },
    { id: 2, name: "Event 2" },
    { id: 3, name: "Event 3" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !userEmail || !numTickets || !selectedEvent) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setSuccess("Ticket booked successfully!");
    // Here you would typically handle the form submission, e.g., send the data to a server
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Book Ticket</Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        {success && (
          <Alert status="success">
            <AlertIcon />
            {success}
          </Alert>
        )}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="user-name" isRequired>
              <FormLabel>User Name</FormLabel>
              <Input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
            <FormControl id="user-email" isRequired>
              <FormLabel>User Email</FormLabel>
              <Input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="num-tickets" isRequired>
              <FormLabel>Number of Tickets</FormLabel>
              <Input
                type="number"
                value={numTickets}
                onChange={(e) => setNumTickets(e.target.value)}
              />
            </FormControl>
            <FormControl id="select-event" isRequired>
              <FormLabel>Select Event</FormLabel>
              <Select
                placeholder="Select event"
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
              >
                {events.map((event) => (
                  <option key={event.id} value={event.name}>
                    {event.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Book Ticket
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default BookTicket;