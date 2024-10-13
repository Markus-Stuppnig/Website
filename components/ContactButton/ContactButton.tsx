import Link from "next/link";

const ContactButton = () => {
  return (
    <div className="flex animate-slidein">
      <Link
        href="/contact"
        className="flex items-center border-primary border-2 hover:border-secondary justify-center text-primary bg-transparent hover:bg-secondary hover:text-white ease-in-out duration-300 rounded-full"
      >
        <p className="rounded-full py-3 px-6 font-semibold">Contact 👋</p>
      </Link>
    </div>
  );
};

export default ContactButton;
