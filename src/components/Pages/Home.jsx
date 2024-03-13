import { catalogs, portfolio, services } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <div className="text-center mt-10">
        <p className="text-yellow-400 font-bold tracking-[0.3em]">
          КОРОТКО О НАС
        </p>
        <h1 className="font-bold text-3xl my-2">
          Полиграфия безупречного качества
        </h1>
        <p>
          Основным направлением деятельности нашей компании является оперативная
          цифровая и офсетная печать всех видов полиграфической продукции:
          визиток, брошюр, каталогов, журналов и любых других материалов на
          самых выгодных для клиента условиях.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-2">
        {services.map((item) => (
          <div className="border-l-2 border-b-2 p-4" key={item.name}>
            <FontAwesomeIcon icon={item.icon} size="4x" color="orange" />
            <h3 className="font-bold text-xl my-5">{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="border-2 py-2 px-4 m-2 hover:bg-orange-500 hover:text-white rounded-lg">
          О Компания
        </button>
      </div>
      <div className="text-center mt-10">
        <h1 className="text-yellow-400 font-bold tracking-[0.3em]">
          НАШИ ПРОДУКТЫ
        </h1>
        <p className="font-bold text-3xl my-2">Что нужно заказать?</p>
        <p>
          Мы работаем с высококачественной техникой от известных мировых
          производителей. Это позволяет нам производить качественную продукцию в
          максимально сжатые сроки, а Вам сэкономить время и деньги.
        </p>
        <div className="grid grid-cols-3 gap-3 my-2">
          {catalogs.map((i) => (
            <button
              key={i.id}
              className="border-2 rounded-lg px-4 py-2 mx-4 hover:bg-orange-500 hover:text-white"
            >
              {i.catalog}
            </button>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <h1 className="text-yellow-400 font-bold tracking-[0.3em]">
          ПОРТФОЛИО
        </h1>
        <p className="font-bold text-3xl my-2">Примеры наших работ</p>
        <p>
          Наша фирма объединяет ведущих специалистов различных направлений
          рекламного бизнеса, способных решать различные задачи в области
          офсетной, цифровой и тампо-печати, графического дизайна, изготовлении
          нестандартных и комбинированных изделий.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mx-auto gap-2 w-3/4 my-10">
        {portfolio.map((i) => (
          <img key={i.id} src={i.img} alt={i.id} width={300} height={300} />
        ))}
      </div>
    </>
  );
}
