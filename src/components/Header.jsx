import { navigation } from "../constants";

export default function Header() {
  return (
    <header className="lg:flex flex-row sm:inline sm:text-center">
      <div className="px-5 basis-1/3">
        <a href="#" className="-m-1.5 p-1.5">
          <img
            className="h-8 w-auto sm:m-auto"
            src="/logo/hilola-02.png"
            alt="logo"
          />
        </a>
      </div>
      <ul className="lg:flex gap-x-10 items-center sm:inline sm:justify-center sm:mx-2 px-2">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 py-1 hover:text-blue-600 hover:border-b-2"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
