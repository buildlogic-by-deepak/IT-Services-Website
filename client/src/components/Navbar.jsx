export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">BuildLogic</h1>

      <div className="space-x-6">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}