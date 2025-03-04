import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import React from "react";
import { addToast } from "@heroui/toast";

const ContactSection = () => {
  function sendEmail(e) {
    addToast({
      title: "Mail sent successfully!",
      color: "success",
    });
  }
  return (
    <form className="w-2/3 flex flex-col items-center gap-4">
      <Input label="Name" placeholder="Enter your name" variant="flat" />
      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        variant="flat"
      />
      <Textarea
        className="w-full"
        rows={3}
        label="Description"
        placeholder="Enter your description"
        style={{ resize: "none" }}
      />
      <Button
        className="w-min px-6 mt-10"
        type="button"
        color="primary"
        variant="shadow"
        onPress={sendEmail}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactSection;
