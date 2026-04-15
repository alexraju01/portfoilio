import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";

const Header = () => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='max-w-2xl mx-auto flex justify-between items-center items-center'>
				<Link href='/'>
					<h1 className='text-4xl font-semibold'>
						Alex .<span className='text-blue-500'>R</span>
					</h1>
				</Link>
				{/* desktop nav */}
				<div className='hidden xl:flex items-center gap-8'>
					<Navbar />
					<Link href='/contact' className=''>
						<Button>Hire Me</Button>
					</Link>
				</div>

				{/* Mobile nav */}
				<div className='xl:hidden'>Mobile nav</div>
			</div>
		</header>
	);
};

export default Header;
