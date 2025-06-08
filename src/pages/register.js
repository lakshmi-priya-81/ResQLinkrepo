import Head from "next/head";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register Now - Organ Donor Portal</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-red-50 dark:from-gray-900 dark:to-black p-6 font-[Poppins] flex items-center justify-center">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-4 text-red-700 dark:text-red-400">Donor Registration</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Join our community of life savers by registering as a donor. Your contribution can give someone a second chance at life.
          </p>

          <form className="flex flex-col gap-4">
            <label htmlFor="fullname" className="font-semibold text-gray-800 dark:text-gray-200">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Full Name"
              required
              className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <label htmlFor="email" className="font-semibold text-gray-800 dark:text-gray-200">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              required
              className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <label htmlFor="phone" className="font-semibold text-gray-800 dark:text-gray-200">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              required
              className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <label htmlFor="location" className="font-semibold text-gray-800 dark:text-gray-200">
              Location (City, State)
            </label>
            <input
              id="location"
              type="text"
              placeholder="Location (City, State)"
              required
              className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <span className="font-semibold text-gray-800 dark:text-gray-200">Select Donation Type:</span>
            <div className="mb-6 flex gap-6">
              <div>
                <input type="checkbox" id="blood" name="donationType" value="Blood" className="mr-2" />
                <label htmlFor="blood" className="text-blue-700 dark:text-blue-400 font-semibold cursor-pointer">
                  Blood
                </label>
              </div>
              <div>
                <input type="checkbox" id="organs" name="donationType" value="Organs" className="mr-2" />
                <label htmlFor="organs" className="text-blue-700 dark:text-blue-400 font-semibold cursor-pointer">
                  Organs
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium transition-colors duration-200"
            >
              Submit
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            <strong>Note:</strong> All your details are kept confidential and used only for donor matching purposes.
          </p>
        </div>
      </div>
    </>
  );
}
