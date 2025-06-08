import Head from "next/head";
import Image from "next/image";

export default function UserLogin() {
  return (
    <>
      <Head>
        <title>User Login - Organ Donor Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-black flex flex-col items-center justify-center p-4 font-[Poppins]">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 text-center">
          <Image
            src="https://www.sakraworldhospital.com/assets/spl_splimgs/organ-donation-2020-1.webp"
            alt="Login Logo"
            width={160}
            height={120}
            className="mx-auto rounded mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">User Login</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Sign in to manage your donor profile, check organ availability, and update your health records.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your Email"
              required
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Enter Password"
              required
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded"
            >
              Login
            </button>
          </form>
          <p className="text-sm mt-4 text-gray-700 dark:text-gray-300">
            Not registered yet?{" "}
            <a href="/register.html" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </div>

        <footer className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 Donate Organs Initiative | A Mission by OHM
        </footer>
      </div>
    </>
  );
}
