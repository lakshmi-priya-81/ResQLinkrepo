import Head from "next/head";

export default function CheckAvailability() {
  return (
    <>
      <Head>
        <title>Check Availability - Organ Donor Portal</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-red-50 dark:from-gray-900 dark:to-black p-6 flex flex-col justify-center items-center font-[Poppins]">
        <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
            Check Organ / Blood Availability
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-center">
            Our Organ & Blood Donor Match Portal connects patients with life-saving donations by
            providing real-time availability from verified hospitals and donors.
            Please use the form below to check what's available in your region.
          </p>

          <form className="flex flex-col gap-4">
            <select
              required
              className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Organ/Blood Type</option>
              <option>Heart</option>
              <option>Kidney</option>
              <option>Liver</option>
              <option>Blood</option>
            </select>

            <input
              type="text"
              placeholder="Enter City or State"
              required
              className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded"
            >
              Search
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
            New to the platform?{" "}
            <a href="/register" className="text-red-600 hover:underline">
              Register as a Donor or Recipient
            </a>
          </div>
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 Organ & Blood Donor Match Portal | Powered by OHM
        </footer>
      </div>
    </>
  );
}
