import { navigation } from "../constants";

export default function Footer() {
  return (
    <div className="container flex justify-center px-6 border-t-2 pt-2">
      <div className="w-1/3">
        <b>Print Media</b>
        <p>
          Выбрав нас в качестве партнера, Вы на 100% будете довольны будущим
          результатом!
        </p>
        <div className="flex justify-start gap-3">
          <img
            src="/src/assets/social/telegram.svg"
            alt="1"
            width={30}
            height={30}
          />
          <img
            src="/src/assets/social/facebook.svg"
            alt="1"
            width={30}
            height={30}
          />
          <img
            src="/src/assets/social/instagram.svg"
            alt="1"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="w-1/3">
        <ul className="mx-auto">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm font-bold leading-6 text-gray-900 py-1 hover:text-blue-600 hover:border-b-2"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/3">
        <b>Контакты</b>
        <p>Ответ на вопросы и прием заказов по тел. в Ташкенте:</p>
        <a href="http://"></a>
        <a href="http://"></a>
      </div>
    </div>
  );
}
