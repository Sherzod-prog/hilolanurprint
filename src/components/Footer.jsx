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
            <img key={s.id} src={s.img} alt={s.id} className="w-6 h-6" />
          ))}
        </div>
      </div>
      <div className="w-1/3 sm:w-full xs:w-full px-6">
        <div className="xl:flex xl:justify-center xl:items-center">
          <ul>
            {navigation.map((item) => (
              <li key={item.name} className="flex">
                <img src={item.icon} alt={item.name} width={15} height={15} />
                <a
                  href={item.href}
                  className="text-sm font-bold leading-6 text-gray-900 py-1 hover:text-blue-600 hover:border-b-2 ml-1"
                >
                  {item.name}
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
          <a href="#">+998 97 000 00 00</a>
        </p>
        <p className="font-semibold">
          <a href="#">+998 97 000 00 00</a>
        </p>
      </div>
    </div>
  );
}
