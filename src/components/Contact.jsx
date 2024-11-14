"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { cn } from "@/lib/utils";
import { Cover } from "./ui/cover";

export function Contact() {
  const [loadingMessage, setLoadingMessage] = useState({
    loading: false,
    message: "",
    success: false,
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.message
      ) {
        setLoadingMessage({
          loading: false,
          message: "Please fill all fields..",
          success: false,
        });
        return;
      }

      setLoadingMessage({
        loading: true,
        message: "",
        success: false,
      });

      const formatData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: formData.message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formatData),
      });

      if (!response.ok) throw new Error("Something went wrong...");

      const res = await response.json();
      if (res?.message) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });

        setLoadingMessage({
          loading: false,
          message: res?.message,
          success: true,
        });
      } else {
        setLoadingMessage({
          loading: false,
          message: "Failed to send message",
          success: false,
        });
      }
    } catch (error) {
      setLoadingMessage({
        loading: false,
        message: "Failed to send message",
        success: false,
      });
      console.error("Contact form error:", error);
    }
  };
  return (
    <div className="max-w-[800px] backdrop-blur-[18px] bg-[#11121617] z-20 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black" id="contact">
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
        Do you have a Project, <Cover>let&apos;s Discuss</Cover>
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              name="firstName"
              value={formData?.firstName}
              onChange={handleChange}
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              name="lastName"
              value={formData?.lastName}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Enter Your Message</Label>
          <textarea
            id="message"
            placeholder="Write your message..."
            name="message"
            value={formData?.message}
            onChange={handleChange}
            className="flex h-[140px] resize-none p-[10px] w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {!loadingMessage?.loading ? "Submit" : "Submitting..."}
          <BottomGradient />
        </button>
        {loadingMessage?.message && (
          <p
            className={`mt-[10px] text-[0.9rem] text-center ${
              loadingMessage?.success ? "text-green-400" : "text-red-400"
            }`}
          >
            *{loadingMessage?.message}
          </p>
        )}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
