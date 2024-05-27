import { useState } from "react";
import { Container, Heading, FormControl, FormLabel, Input, Textarea, Button, VStack, Alert, AlertIcon } from "@chakra-ui/react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate || !eventLocation || !eventDescription) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setSuccess("Event created successfully!");
    // Here you would typically handle the form submission, e.g., send the data to a server
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Create Event</Heading>
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
            <FormControl id="event-name" isRequired>
              <FormLabel>Event Name</FormLabel>
              <Input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </FormControl>
            <FormControl id="event-date" isRequired>
              <FormLabel>Event Date</FormLabel>
              <Input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </FormControl>
            <FormControl id="event-location" isRequired>
              <FormLabel>Event Location</FormLabel>
              <Input
                type="text"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
              />
            </FormControl>
            <FormControl id="event-description" isRequired>
              <FormLabel>Event Description</FormLabel>
              <Textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Create Event
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default CreateEvent;