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
      className="fixed top-0 z-10 flex items-center justify-between w-full px-16 py-6 text-white border-b border-gray-700 bg-black/40 backdrop-blur-md md:justify-evenly"
    >

      <a
        href="#home"
        className="text-3xl font-semibold text-transparent transition-all duration-300 bg-white bg-clip-text opacity-80 hover:opacity-100"
      >
        Sultan
      </a>

      <ul className="hidden gap-10 md:flex">
        <li>
          <a href="#home" className="transition opacity-70 hover:opacity-100">
            Home
          </a>
        </li>

        <li>
          <a href="#technology" className="transition opacity-70 hover:opacity-100">
            Technology
          </a>
        </li>

        <li>
          <a href="#projects" className="transition opacity-70 hover:opacity-100">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="transition opacity-70 hover:opacity-100">
            Contact
          </a>
        </li>
      </ul>

      {/* Desktop Social */}
      <ul className="hidden gap-5 md:flex">

        <li>
          <button
            onClick={() => openLink("https://www.youtube.com/@razercode_dev")}
            className="transition opacity-70 hover:text-red-500 hover:opacity-100"
          >
            <BsYoutube size={20}/>
          </button>
        </li>

        <li>
          <button
            onClick={() => openLink("https://github.com/razercode-dev")}
            className="transition opacity-70 hover:text-gray-400 hover:opacity-100"
          >
            <BsGithub size={20}/>
          </button>
        </li>

        <li>
          <button
            onClick={() => openLink("https://instagram.com")}
            className="transition opacity-70 hover:text-pink-500 hover:opacity-100"
          >
            <BsInstagram size={20}/>
          </button>
        </li>

        <li>
          <button
            onClick={() => openLink("https://twitter.com")}
            className="transition opacity-70 hover:text-blue-500 hover:opacity-100"
          >
            <BsTwitter size={20}/>
          </button>
        </li>

      </ul>

      {/* Mobile Toggle */}
      {isOpen ? (
        <BiX className="block text-4xl md:hidden" onClick={menuOpen}/>
      ) : (
        <BiMenu className="block text-4xl md:hidden" onClick={menuOpen}/>
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
                className="transition opacity-70 hover:opacity-100"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technology"
                onClick={() => setIsOpen(false)}
                className="transition opacity-70 hover:opacity-100"
              >
                Technology
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="transition opacity-70 hover:opacity-100"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="transition opacity-70 hover:opacity-100"
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
                className="transition opacity-70 hover:text-red-500 hover:opacity-100"
              >
                <BsYoutube size={22}/>
              </button>
            </li>

            <li>
              <button
                onClick={() => openLink("https://github.com/razercode-dev")}
                className="transition opacity-70 hover:text-gray-400 hover:opacity-100"
              >
                <BsGithub size={22}/>
              </button>
            </li>

            <li>
              <button
                onClick={() => openLink("https://instagram.com/rz.coding")}
                className="transition opacity-70 hover:text-pink-500 hover:opacity-100"
              >
                <BsInstagram size={22}/>
              </button>
            </li>

            <li>
              <button
                onClick={() => openLink("https://twitter.com/rz_coding")}
                className="transition opacity-70 hover:text-blue-500 hover:opacity-100"
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