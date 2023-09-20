import Image from "next/image";

import _logo from "../public/images/verglas-long-primary-600.gif";
import Link from "next/link";

export default function Navbar({ children, title }) {
	return (
		<navbar className="fixed w-screen bg-white h-[4.5rem] z-10 flex items-center justify-center">
			<div className="w-2/3 flex items-center h-full">
				<Image
					src={_logo}
					style={{objectFit: "contain"}}
					height={45}
					className="brightness-50"
				/>
				<div className="flex items-center gap-10 h-full ml-12 text-primary-900 decoration-primary-900 decoration-2 underline-offset-[5px]">
					<Link href="/events/igloocode" className="hover:underline">IglooCode</Link>
					<Link href="/products/educatr" className="hover:underline">Educatr</Link>
				</div>
			</div>
		</navbar>
	);
}