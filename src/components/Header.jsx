import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../constants";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const screenWidth = window.screen.width;
  console.log(screenWidth);
  return (
    <div className="container">
      <header className="inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 xl:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex xl:flex lg:gap-x-12 xl:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex xl:flex lg:flex-1 xl:flex-1 xl:justify-end lg:justify-end">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              UZ/RU <span aria-hidden="true">&darr;</span>
            </p>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden xl:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="/logo/hilola-02.png"
                  alt="logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    UZ/RU
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

// import { navigation } from "../constants";

// export default function Header() {
//   return (
//     <header className="container lg:flex lg:justify-cente xs:m-auto grid grid-cols-6 gap-4 items-center">
//       <div className="px-5 border-2 text-right col-start-1 col-end-3  ">
//         <a href="#" className="-m-1.5 p-1.5">
//           <img
//             className="h-8 w-auto sm:m-auto"
//             src="/logo/hilola-02.png"
//             alt="logo"
//           />
//         </a>
//       </div>
//       <div className="col-end-7 col-span-2 justify-end w-full">
//         <ul className="lg:flex gap-x-10 items-center sm:flex sm:justify-center sm:mx-2 px-2 xs:text-center">
//           {navigation.map((item) => (
//             <li key={item.name}>
//               <a
//                 href={item.href}
//                 className="text-sm font-semibold leading-6 text-gray-900 py-1 hover:text-blue-600 hover:border-b-2"
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// }
