import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation, options } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header({ theme, setTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container ">
      <header className="inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 xl:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Hilola nur print</span>
              <img
                className="h-8 w-auto"
                src="/logo/hilola-02.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden xl:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex xl:flex lg:gap-x-12 xl:gap-x-12 ">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex xl:flex lg:flex-1 xl:flex-1 xl:justify-end lg:justify-end">
            {options.map((opt) => (
              <button
                onClick={() => setTheme(opt.text)}
                key={opt.text}
                className={`flex gap-1 text-xl rounded-full mx-2 ${
                  theme === opt.text && "text-sky-600"
                }`}
              >
                <FontAwesomeIcon icon={opt.icon} />
              </button>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden xl:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 bg-white dark:text-gray-100 dark:bg-slate-900 duration-100 md:max-w-sm md:ring-1 md:ring-gray-900/10  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 xs:w-2/3 xs:ring-1 xs:ring-gray-900/10 ">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Hilola Nur Print</span>
                <img
                  className="h-8 w-auto"
                  src="/logo/hilola-02.png"
                  alt="logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-slate-100">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-blue-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {options.map((opt) => (
                    <button
                      onClick={() => setTheme(opt.text)}
                      key={opt.text}
                      className={`gap-1 text-xl rounded-full mx-2 ${
                        theme === opt.text && "text-sky-600"
                      }`}
                    >
                      <FontAwesomeIcon icon={opt.icon} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
