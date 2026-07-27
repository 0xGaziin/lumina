import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center p-6 border-b border-gray-200 text-xl">
      <Link href="/">
        <span className="font-bold">Lumina</span>
      </Link>
    </nav>
  )
}