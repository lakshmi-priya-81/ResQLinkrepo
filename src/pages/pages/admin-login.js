import Head from "next/head";

export default function AdminLogin() {
  return (
    <>
      <Head>
        <title>Admin Login - Organ Donor Portal</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-red-50 dark:from-gray-900 dark:to-black flex flex-col items-center justify-center p-4 font-[Poppins]">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Admin Login</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Welcome, Admin! Use your credentials to securely manage organ and blood donor records,
            verify user registrations, and oversee availability statistics.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Admin Username"
              required
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
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
        </div>

        <footer className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 Donate Organs Initiative | Admin Panel | Developed under OHM
        </footer>
      </div>
    </>
  );
}
