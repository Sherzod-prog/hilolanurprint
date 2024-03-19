import { navigation, socilaIcons } from "../constants";

export default function Footer() {
  return (
    <div className="container flex justify-center sm:inline xs:inline pt-4">
      <div className="w-1/3 sm:w-full xs:w-full px-6 pb-4">
        <b>Hilola Nur Print</b>
        <p>
          Выбрав нас в качестве партнера, Вы на 100% будете довольны будущим
          результатом!
        </p>
        <div className="flex justify-start gap-2 py-2">
          {socilaIcons.map((s) => (
            <a key={s.id} href={s.url} blank="_">
              <img src={s.img} alt={s.id} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
      <div className="w-1/3 sm:w-full xs:w-full px-6">
        <div className="xl:flex xl:justify-center xl:items-center">
          <ul>
            {navigation.map((item) => (
              <li key={item.name} className="flex">
                <a
                  href={item.href}
                  className="text-sm font-bold leading-6 py-1 hover:text-blue-600 hover:border-b-2 ml-1"
                >
                  &#x27A2; {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-1/3 sm:w-full xs:w-full px-6 pt-4">
        <b>Контакты</b>
        <p>Ответ на вопросы и прием заказов по тел:</p>
        <p className="font-semibold mt-2">
          <a href="#">+998 93 239-53-69</a>
        </p>
        <p className="font-semibold">
          <a href="#">+998 97 000 00 00</a>
        </p>
      </div>
    </div>
  );
}
