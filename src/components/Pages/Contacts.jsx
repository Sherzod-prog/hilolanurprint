import { htext, socilaIcons } from "../../constants";

export default function Contacts() {
  return (
    <>
      <div className="flex justify-center my-10 lg:inline md:inline sm:inline xs:inline">
        <div className="w-1/2 lg:w-full md:w-full sm:w-full xs:w-full px-4">
          <h3 className={htext}>Наш адрес:</h3>
          <p className="py-2">Узбекистан, Самарканд, ул.Самарканд , 50</p>
          <div className="flex sm:inline xs:inline my-5">
            <div className="w-1/2 sm:w-full xs:w-full">
              <h3 className={htext}>Телефоны:</h3>
              <p>+998 (93) 239-53-69</p>
              <p>+998 (93) 777-77-77</p>
            </div>
            <div className="w-1/2 sm:w-full xs:w-full">
              <h3 className={htext}>Email:</h3>
              <ul>
                <li>sales@hilolanp.uz</li>
                <li>manager@hilolanp.uz</li>
                <li>office@hilolanp.uz</li>
                <li>info@hilolanp.uz</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2 my-3">
            {socilaIcons.map((i) => (
              <a key={i.id} href={i.url}>
                <img
                  src={i.img}
                  alt={i.id}
                  className="w-8 h-8 md:w-6 md:h-6 sm:w-6 sm:h-6 xs:w-6 xs:h-6"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="px-4">
          <form className="w-full gap-4" action="">
            <input
              className="border border-black w-full p-2 my-2 "
              type="text"
              placeholder="Имя"
            />
            <div className="flex justify-between">
              <input
                type="text"
                className="border border-black w-[49%] p-2 my-2"
                placeholder="Email"
              />
              <input
                type="text"
                className="border border-black w-[49%] p-2 my-2"
                placeholder="Телефон"
              />
            </div>
            <input
              type="text"
              className="border border-black w-full p-2 my-2"
              placeholder="Тема"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border border-black w-full p-2 my-2"
              placeholder="Текст сообщения"
            ></textarea>
            <button className="border-2 border-slate-700 rounded-md w-full px-2 py-3 my-8 hover:bg-orange-400 hover:text-white hover:border-white">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
