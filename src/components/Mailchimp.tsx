"use client";

import { newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const debouncedHandleChange = debounce(handleChange, 2000);

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email) || !message.trim()) {
      setError("Please fill in all fields correctly.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
          to: "andraalayubi@gmail.com",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setSubmitStatus("error");
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (newsletter.display === false) return null;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: 50,
          y: 0,
          radius: 100,
          cursor: true,
        }}
        gradient={{
          display: true,
          opacity: 90 as opacity,
          x: 50,
          y: 0,
          width: 50,
          height: 50,
          tilt: 0,
          colorStart: "accent-background-strong",
          colorEnd: "static-transparent",
        }}
        dots={{
          display: true,
          opacity: 20 as opacity,
          size: "2" as SpacingToken,
          color: "brand-on-background-weak",
        }}
        grid={{
          display: false,
          opacity: 100 as opacity,
          color: "neutral-alpha-medium",
          width: "0.25rem",
          height: "0.25rem",
        }}
        lines={{
          display: false,
          opacity: 100 as opacity,
          size: "16" as SpacingToken,
          thickness: 1,
          angle: 90,
          color: "neutral-alpha-medium",
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
          {newsletter.description}
        </Text>
      </Column>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Row
          fillWidth
          maxWidth={24}
          s={{ direction: "column" }}
          gap="8"
        >
          <Input
            formNoValidate
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              if (error) {
                handleChange(e);
              } else {
                debouncedHandleChange(e);
              }
            }}
            onBlur={handleBlur}
            errorMessage={error}
          />
          <Input
            id="message"
            name="message"
            type="text"
            placeholder="Message"
            required
            value={message}
            onChange={handleMessageChange}
          />
          <Row height="48" vertical="center">
            <Button 
              type="submit" 
              size="m" 
              fillWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Row>
          {submitStatus === "success" && (
            <Text variant="body-default-s" onBackground="brand-strong">
              Message sent successfully!
            </Text>
          )}
          {submitStatus === "error" && (
            <Text variant="body-default-s" onBackground="danger-strong">
              {error}
            </Text>
          )}
        </Row>
      </form>
    </Column>
  );
};
