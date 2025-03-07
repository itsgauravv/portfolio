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

    // Send form data to backend
    fetch("http://localhost:5001/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, description }),
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          addToast({ title: "Form submitted successfully!", color: "success" });
          setName("");
          setEmail("");
          setDescription("");
        } else {
          addToast({
            title: "Submission failed!",
            description: data.error,
            color: "danger",
          });
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        addToast({
          title: "Error!",
          description: "Something went wrong.",
          color: "danger",
        });
      });
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
