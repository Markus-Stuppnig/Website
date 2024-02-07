"use client";

import React from "react";
import SectionHeading from "@/components/-General/SectionHeading";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { FaPaperPlane } from "react-icons/fa6";

export type FormData = {
  email: string;
  message: string;
  rating: string;
};

export default function Contact() {

  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  
  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div className="w-full flex justify-center">
        <div className="flex flex-col justify-start w-full max-w-[50rem] rounded-2xl p-[2rem]">

          <div className="flex flex-col p-[2rem] mb-[2rem] rounded-xl">
            <SectionHeading>Contact me</SectionHeading>

            <p>
              Please contact me directly at{" "}
              <a className="underline" href="mailto:markus@stuppnig.net">
              markus@stuppnig.net
              </a>{" "}
              or through this form.
            </p>
          </div>

          <form 
            className="flex flex-col w-full items-start justify-start"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex w-full flex-row">
              <div className="flex flex-col w-3/5 mr-[2rem] p-[2rem] bg-secondary rounded-xl">
                <input
                  className={`h-14 px-4 rounded-lg transition-all`}
                  type="email"
                  required
                  maxLength={500}
                  placeholder="Your email"
                  {...register('email', { required: true })}
                />
                <textarea
                  className={`h-52 mt-[2rem] rounded-lg borderBlack p-4 transition-all`}
                  placeholder="Your message"
                  required
                  maxLength={5000}
                  {...register('message', { required: true })}
                />
              </div>
              <div className="flex flex-col h-full w-2/5 p-[2rem] bg-secondary rounded-xl">
                <textarea
                  className={`h-full w-full rounded-lg borderBlack p-4 transition-all`}
                  placeholder="Improvements for my website"
                  maxLength={5000}
                  {...register('rating', { required: true })}
                />
                <button
                  type="submit"
                  className={`bg-primary mt-4 hover:bg-primary ease-in-out duration-300 group flex items-center justify-center gap-2 h-[3.031rem] w-[8.14rem] text-white rounded-full outline-none transition-all`}
                  disabled={false}
                >
                  <div className="flex flex-row focus:scale-110 hover:scale-110 px-7 py-3">
                    Submit{" "}
                    <FaPaperPlane className="ml-3 text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
