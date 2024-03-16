import { navigation, socilaIcons } from "../constants";

export default function Footer() {
  return (
    <div className="container flex justify-center sm:inline xs:inline px-6 border-t-2 pt-2">
      <div className="w-1/3 sm:w-full xs:w-full pt-5 pb-10">
        <b>Print Media</b>
        <p>
          Выбрав нас в качестве партнера, Вы на 100% будете довольны будущим
          результатом!
        </p>
        <div className="flex justify-start gap-3 py-2">
          {socilaIcons.map((s) => (
            <img key={s.id} src={s.img} alt={s.id} width={30} height={30} />
          ))}
        </div>
      </div>
      <div className="w-1/3 pt-5 pb-10 xs:hidden">
        <div className="flex justify-center items-center">
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
      <div className="w-1/3 sm:w-full xs:w-full pt-5 pb-10">
        <b>Контакты</b>
        <p>Ответ на вопросы и прием заказов по тел. в Ташкенте:</p>
        <a href="http://"></a>
        <a href="http://"></a>
      </div>
    </div>
  );
}
