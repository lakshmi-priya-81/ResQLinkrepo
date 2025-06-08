import Head from "next/head";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - Organ Donor Portal</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-red-50 dark:from-gray-900 dark:to-black p-6 font-[Poppins]">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-4 text-red-700 dark:text-red-400">Dashboard</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Welcome back! Manage your donor profile, view your donation history, and update your
            contact details below.
          </p>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Your Registration Details
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>✔️ Registered as: Blood + Organ Donor</li>
              <li>🗓️ Last Donation Date: 15 March 2025</li>
              <li>📍 Location: Chennai, Tamil Nadu</li>
              <li>📞 Contact Number: +91 98765 43210</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Upcoming Donation Camps Near You
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>🩸 Blood Donation Camp - Chennai City Hall, 20 June 2025</li>
              <li>🏥 Organ Donation Awareness Drive - Chennai General Hospital, 5 July 2025</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Update Profile Information
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="City"
                required
                className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white py-2 rounded font-medium"
              >
                Update Profile
              </button>
            </form>
          </section>
        </div>

        <footer className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 Organ & Blood Donor Match Portal | Powered by OHM
        </footer>
      </div>
    </>
  );
}
