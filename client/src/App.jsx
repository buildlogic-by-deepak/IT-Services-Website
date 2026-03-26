import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          BuildLogic IT Solutions
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          We build scalable web apps, mobile applications, and AI-powered business solutions to help your company grow.
        </p>

        <div className="mt-8 space-x-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
            Get Started
          </button>

          <button className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800">
            View Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Service 1 */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              Mobile App Development
            </h3>
            <p className="text-gray-400">
              Build scalable Android & iOS apps with modern UI and backend systems.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              Web Development
            </h3>
            <p className="text-gray-400">
              Responsive websites and web applications tailored to your business.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              AI Business Solutions
            </h3>
            <p className="text-gray-400">
              Automate your business with AI tools, chatbots, and smart systems.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}