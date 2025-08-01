import { IoIosRocket } from "react-icons/io"
import { FaGoogle } from "react-icons/fa"

export default function Auth() {
	return <div className="h-[100vh] f-center bg-black/97">
		<div className="w-[350px] bg-black px-6 py-12 rounded">
			<div className="text-white f-center">
				<IoIosRocket size={22} className="text-red-400" />
				<p className="fmed ml-2 text-[25px]">StudyForge</p>
			</div>

			<div className="w-[90%] mx-auto f flex-col relative">
				<input
					className="mx-auto w outline-none bg-[#1e2126] p-2 rounded-t mt-4 placeholder:text-white border border-[#272b30]"
					placeholder="Email"
					type="email"
					required
				/>

				<input
					className="mx-auto w outline-none bg-[#1e2126] p-2 rounded-b placeholder:text-white border border-t-0 border-[#272b30]"
					placeholder="Password"
					type="password"
					required
				/>

				<button
					aria-label="Log in"
					className="bg-blue-600 mt-4 rounded text-white py-2 pointer transition-all hover:bg-blue-700"
					type="button"
				>
					Log in
				</button>

				<div className="w relative my-2">
					<div className="h-[1px] w mt-[21px] bg-[#1e2126]"></div>
					<div className="absolute rounded-full text-white bg-black p-2 top-[0] left-1/2 -translate-x-1/2">OR</div>
				</div>

				<button aria-label="Continue with Google" className="text-white f-center bg-[#1e2126] mt-4 py-2 rounded pointer transition-all hover:bg-[#15171b]">
					<FaGoogle />
					<p className="ml-2">Continue with Google</p>
				</button>

				<p className="text-white mt-2 text-[14px] text-center">
					Don't have an account?
					<span className="italic underline ml-2 pointer">Register here!</span>
				</p>
			</div>
		</div>
	</div>
}
