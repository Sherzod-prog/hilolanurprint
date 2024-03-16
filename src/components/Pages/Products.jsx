import { catalogs, htext, ptext } from "../../constants";

export default function Products() {
  return (
    <>
      <div className="text-center my-10">
        <h1 className={ptext}>НАШИ ПРОДУКТЫ</h1>
        <p className={htext}>Что нужно заказать?</p>
        <p className=" w-3/4 mx-auto my-4">
          Мы работаем с высококачественной техникой от известных мировых
          производителей. Это позволяет нам производить качественную продукцию в
          максимально сжатые сроки, а Вам сэкономить время и деньги.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-3 my-2">
          {catalogs.map((i) => (
            <button
              key={i.id}
              className="border-2 rounded-lg px-4 py-2 mx-4 hover:bg-orange-500 hover:text-white"
            >
              <span className=" hyphens-auto" lang="ru">
                {i.catalog}
              </span>
            </button>
          ))}
        </div>
        <button className="border-2 rounded-lg px-4 py-2 mx-4 hover:bg-orange-500 hover:text-white">
          Контакты
        </button>
      </div>
    </>
  );
}
