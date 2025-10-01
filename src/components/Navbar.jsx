export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-dark">
      <h1 className="text-2xl font-bold text-neonBlue">IELTS Academy</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-neonPink">Home</a></li>
        <li><a href="#" className="hover:text-neonPink">Courses</a></li>
        <li><a href="#" className="hover:text-neonPink">Features</a></li>
        <li><a href="#" className="hover:text-neonPink">Pricing</a></li>
        <li><a href="#" className="hover:text-neonPink">Contact</a></li>
      </ul>
    </nav>
  )
}
