import { socilaIcons } from "../../constants";

export default function Contacts() {
  return (
    <div
      className="flex justify-center mb-10 lg:inline md:inline sm:inline xs:inline
    "
    >
      <div className="w-1/2">
        <h3 className="text-3xl font-bold">Наш адрес:</h3>
        <p className="py-2">Узбекистан, Самарканд, ул.Самарканд , 50</p>
        <div className="flex my-5">
          <div className="w-1/2">
            <h3 className="text-3xl font-bold mb-5">Телефоны:</h3>
            <p>+998 (71) 233-03-21</p>
            <p>+998 (71) 232-00-61</p>
          </div>
          <div className="w-1/2">
            <h3 className="text-3xl font-bold mb-5">Email:</h3>
            <ul>
              <li>sales@hilolanp.uz</li>
              <li>manager@hilolanp.uz</li>
              <li>office@hilolanp.uz</li>
              <li>info@hilolanp.uz</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 my-3">
          {socilaIcons.map((i) => (
            <img key={i.id} src={i.img} alt={i.id} width={30} height={30} />
          ))}
        </div>
      </div>
      <div>
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
  );
}
