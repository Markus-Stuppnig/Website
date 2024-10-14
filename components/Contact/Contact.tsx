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
  const [isSubmitting, setSubmitting] = React.useState(false);

  async function onSubmit(data: FormData) {
    if (isSubmitting) return;
    setSubmitting(true);

    if (await sendEmail(data)) {
      alert("Form sent successfully!");
    } else {
      alert(
        "Form couldn't be sent. Please contact the website administrator markus@stuppnig.net",
      );
    }

    reset();
    setSubmitting(false);
  }

  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div className="w-full md:w-2/3 xl:w-1/2 bg-white md:shadow-2xl md:rounded-[1.5rem] p-12">
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
            Please contact me directly through this form.
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`bg-primary mt-6 text-base hover:bg-primary ease-in-out duration-300 group flex items-center justify-center gap-2 h-[3.031rem] w-[8.14rem] text-white rounded-full outline-none transition-all`}
            disabled={isSubmitting}
          >
            <div className="flex flex-row px-7 py-3">
              Submit
              {!isSubmitting ? (
                <FaPaperPlane className="mt-2 ml-2 focus:scale-110 hover:scale-110 text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              ) : (
                <div role="status" className="mt-1 ml-2">
                  <div>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-200 animate-spin fill-primary"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
