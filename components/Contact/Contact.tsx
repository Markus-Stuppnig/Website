"use client";

import React from "react";
import toast from "react-hot-toast";
import SectionHeading from "@/components/-General/SectionHeading";
import { useForm } from "react-hook-form";
import SubmitButton from "../-General/SubmitButton";
import { sendEmail } from "@/utils/send-email";

export type FormData = {
  email: string;
  message: string;
};

export default function Contact() {

  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-start w-full md:w-1/2">
        <SectionHeading>Contact me</SectionHeading>

        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:markus@stuppnig.net">
          markus@stuppnig.net
          </a>{" "}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
          //   const { data, error } = await sendEmail(formData);

            if (true) {
              toast.error("not implemented yet");
              return;
            }

            toast.success("Email sent successfully!");
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            {...register('email', { required: true })}
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            placeholder="Your message"
            required
            maxLength={5000}
            {...register('message', { required: true })}
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
