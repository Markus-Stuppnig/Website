import Link from "next/link";

const ContactButton = () => {

	return (
		<div className="flex">
			<Link
				href="/contact"
				className="flex items-center border border-primary border-2 hover:border-secondary justify-center text-primary bg-transparent hover:bg-secondary hover:text-white ease-in-out duration-300 rounded-full"
			>
				<p className="rounded-full py-3 px-6">
					Say Hello 👋
				</p>
			</Link>
		</div>
	);
};

export default ContactButton;