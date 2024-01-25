import Link from "next/link";

const ContactButton = () => {

	return (
		<div className="flex">
			<Link
				href="/contact"
				className="flex gap-6 items-center justify-center bg-black hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"
			>
			Contact
			</Link>
		</div>
	);
};

export default ContactButton;