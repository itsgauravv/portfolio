import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import React, { useState } from "react";
import { addToast } from "@heroui/toast";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  function validateName(name) {
    return /^[A-Za-z\s]+$/.test(name.trim());
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function sendEmail(e) {
    e.preventDefault();

    if (!name.trim() && !email.trim() && !description.trim()) {
      return addToast({
        title: "Incomplete Form!",
        description: "Fill out the form in order to submit it.",
        color: "danger",
      });
    }

    if (!name.trim() || !validateName(name)) {
      return addToast({
        title: "Invalid Name!",
        description: "Name should contain only alphabets and spaces.",
        color: "danger",
      });
    }

    if (!email.trim() || !validateEmail(email)) {
      return addToast({
        title: "Invalid Email!",
        description: "Please enter a valid email address.",
        color: "danger",
      });
    }

    if (!description.trim()) {
      return addToast({
        title: "Description Required!",
        description: "Please enter a description before submitting.",
        color: "danger",
      });
    }

    addToast({
      title: "Mail sent successfully!",
      color: "success",
    });

    // Reset form after successful submission
    setName("");
    setEmail("");
    setDescription("");
  }

  return (
    <form
      className="w-full flex flex-col items-center gap-4"
      onSubmit={sendEmail}
    >
      <Input
        label="Name"
        placeholder="Enter your name"
        variant="flat"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        className="text-left"
        variant="flat"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textarea
        className="w-full"
        rows={3}
        label="Description"
        placeholder="Enter your description"
        style={{ resize: "none" }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        className="w-min px-6 mt-10"
        type="submit"
        color="primary"
        variant="shadow"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactSection;
