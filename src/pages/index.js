import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Donate Organs - Save Lives</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Organ and Blood Donation Initiative under OHM, Government of India" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-[Poppins] flex flex-col items-center p-6 sm:p-10 gap-10">
        {/* Header */}
        <header className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="https://www.pngarc.com/wp-content/uploads/2023/05/World-Blood-Donor-Day-Organ-donation-logo-png-image-min.png"
              alt="Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="text-sm sm:text-base text-center sm:text-left">
              <strong>Under Organ Health Mission</strong>
              <br />
              Government of India
            </div>
          </div>
          <div className="flex gap-3">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => (window.location.href = "user-login.html")}
            >
              User Login
            </button>
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              onClick={() => (window.location.href = "admin-login.html")}
            >
              Admin Login
            </button>
          </div>
        </header>

        {/* Navigation Bar */}
        <nav className="flex gap-6 text-sm sm:text-base border-t border-b py-2 w-full justify-center">
          <a href="index.html" className="hover:underline">Home</a>
          <a href="check-availability.html" className="hover:underline">Check Availability</a>
          <a href="dashboard.html" className="hover:underline">Dashboard</a>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col-reverse sm:flex-row items-center gap-8 w-full max-w-5xl">
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Donate Organs - Save Lives :)</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">Join the mission to give life a second chance.</p>
            <p className="italic text-sm text-gray-600 dark:text-gray-400 mb-4">
              "The gift of life is the greatest legacy one can leave."
            </p>
            <button
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
              onClick={() => (window.location.href = "register.html")}
            >
              Register Now
            </button>
          </div>
          <div className="flex-1">
            <Image
              src="https://img.freepik.com/free-vector/donate-blood-isolated-logo_1025-350.jpg"
              alt="Donate Blood or Organs"
              width={400}
              height={400}
              className="object-contain rounded"
            />
          </div>
        </section>

        {/* Info Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="border rounded shadow p-4 bg-white dark:bg-gray-800">
            <Image
              src="https://img.freepik.com/free-vector/happy-world-blood-donor-day-red-white-background-social-media-design-banner-free-vector_1340-21529.jpg"
              alt="Blood Donation"
              width={300}
              height={200}
              className="rounded mb-2"
            />
            <p>
              Blood donation is a vital, accessible way to support patients requiring transfusions for surgeries, trauma, or treatments for conditions like cancer or anemia.
            </p>
          </div>
          <div className="border rounded shadow p-4 bg-white dark:bg-gray-800">
            <Image
              src="https://www.careinsurance.com/upload_master/media/posts/August2024/national-organ-donation-day.webp"
              alt="Organ Donation"
              width={300}
              height={200}
              className="rounded mb-2"
            />
            <p>
              Organ donation is a selfless act that can save or transform the lives of individuals suffering from organ failure.
            </p>
          </div>
          <div className="border rounded shadow p-4 bg-white dark:bg-gray-800">
            <Image
              src="https://www.shutterstock.com/image-vector/banner-organ-transplant-donation-awareness-260nw-1067188598.jpg"
              alt="Eligibility"
              width={300}
              height={200}
              className="rounded mb-2"
            />
            <p>
              Any person not less than 18 years of age, who voluntarily authorizes the removal of any of his organ and/or tissue...
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>Email:</strong> support@donateorgans.com</p>
        </section>

        {/* Footer */}
        <footer className="w-full text-center py-4 border-t mt-10 text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 Donate Organs Initiative. All Rights Reserved. | Designed under OHM
        </footer>
      </div>
    </>
  );
}
