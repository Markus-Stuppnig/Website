"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { FaPaperPlane } from "react-icons/fa6";
import Heading from "@/components/miscellaneous/Heading";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    if (await sendEmail(data)) {
      alert("Form sent successfully!");
      reset();
    } else {
      alert(
        "Form couldn't be sent. Please contact the website administrator markus@stuppnig.net",
      );
    }
  }

  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div className="w-1/2 bg-white shadow-2xl rounded-[1.5rem] p-12">
        <div className="flex flex-col mb-[2rem]">
          <Heading color="secondary" className="mb-5">
            Contact me
          </Heading>

          <Heading
            color="black"
            size="text-base md:text-basePlus"
            weight="font-normal"
            capitalize={false}
            zoom={false}
          >
            Please contact me directly at{" "}
            <a className="underline" href="mailto:markus@stuppnig.net">
              markus@stuppnig.net
            </a>{" "}
            or through this form.
          </Heading>
        </div>
        <form
          className="flex flex-col w-full animate-slidein"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="last-name"
            >
              Name
            </label>
            <input
              type="text"
              id="last-name"
              required
              maxLength={50}
              placeholder="Your name"
              {...register("name", { required: true })}
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="email-input"
            >
              Email
            </label>
            <input
              id="email-input"
              type="email"
              required
              maxLength={50}
              placeholder="Your email"
              {...register("email", { required: true })}
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="message-input"
            >
              Message
            </label>
            <textarea
              id="message-input"
              required
              maxLength={500}
              placeholder="Your message"
              {...register("message", { required: true })}
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring focus:ring-blue-500"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`bg-primary mt-6 text-base hover:bg-primary ease-in-out duration-300 group flex items-center justify-center gap-2 h-[3.031rem] w-[8.14rem] text-white rounded-full outline-none transition-all`}
            disabled={false}
          >
            <div className="flex flex-row px-7 py-3">
              Submit{" "}
              <FaPaperPlane className="mt-2 ml-2 focus:scale-110 hover:scale-110 text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
