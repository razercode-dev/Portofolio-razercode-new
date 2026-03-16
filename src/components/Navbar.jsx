import { useState } from "react"
import { BsYoutube, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"
import { BiMenu, BiX } from "react-icons/bi"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const menuOpen = () => {
    setIsOpen(!isOpen)
  }

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <nav
      className="fixed top-0 z-10 flex w-full
      items-center justify-between border-b border-gray-700
      bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly"
    >

      <a
        href="#home"
        className="bg-gradient-to-r from-cyan-500 to-gray-500 bg-clip-text
        text-transparent opacity-80 text-3xl font-semibold
        transition-all duration-300 hover:opacity-100"
      >
        Sultan
      </a>

      <ul className="hidden md:flex gap-10">
        <li>
          <a href="#home" className="opacity-70 hover:opacity-100 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#technology" className="opacity-70 hover:opacity-100 transition">
            Technology
          </a>
        </li>

        <li>
          <a href="#projects" className="opacity-70 hover:opacity-100 transition">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="opacity-70 hover:opacity-100 transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Desktop Social */}
      <ul className="hidden md:flex gap-5">

        <li>
          <button
            onClick={() => openLink("https://www.youtube.com/@razercode_dev")}
            className="opacity-70 hover:text-red-500 hover:opacity-100 transition"
          >
            <BsYoutube size={20}/>
          </button>
        </li>

        <li>
          <button
            onClick={() => openLink("https://github.com/razercode-dev")}
            className="opacity-70 hover:text-gray-400 hover:opacity-100 transition"
          >
            <BsGithub size={20}/>
          </button>
        </li>

        <li>
          <button
            onClick={() => openLink("https://instagram.com")}
            className="opacity-70 hover:text-pink-500 hover:opacity-100 transition"
          >
            <BsInstagram size={20}/>
          </button>
        </li>

        <li>
          <button
            onClick={() => openLink("https://twitter.com")}
            className="opacity-70 hover:text-blue-500 hover:opacity-100 transition"
          >
            <BsTwitter size={20}/>
          </button>
        </li>

      </ul>

      {/* Mobile Toggle */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen}/>
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen}/>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed right-0 top-[84px] flex h-screen w-1/2
          flex-col gap-10 border border-gray-800 bg-black/90 p-12"
        >

          <ul className="flex flex-col gap-8">

            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="opacity-70 hover:opacity-100 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technology"
                onClick={() => setIsOpen(false)}
                className="opacity-70 hover:opacity-100 transition"
              >
                Technology
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="opacity-70 hover:opacity-100 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="opacity-70 hover:opacity-100 transition"
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Mobile Social */}
          <ul className="flex flex-wrap gap-5">

            <li>
              <button
                onClick={() => openLink("https://www.youtube.com/@razercode_dev")}
                className="opacity-70 hover:text-red-500 hover:opacity-100 transition"
              >
                <BsYoutube size={22}/>
              </button>
            </li>

            <li>
              <button
                onClick={() => openLink("https://github.com/razercode-dev")}
                className="opacity-70 hover:text-gray-400 hover:opacity-100 transition"
              >
                <BsGithub size={22}/>
              </button>
            </li>

            <li>
              <button
                onClick={() => openLink("https://instagram.com/rz.coding")}
                className="opacity-70 hover:text-pink-500 hover:opacity-100 transition"
              >
                <BsInstagram size={22}/>
              </button>
            </li>

            <li>
              <button
                onClick={() => openLink("https://twitter.com/rz_coding")}
                className="opacity-70 hover:text-blue-500 hover:opacity-100 transition"
              >
                <BsTwitter size={22}/>
              </button>
            </li>

          </ul>

        </div>
      )}
    </nav>
  )
}

export default Navbar