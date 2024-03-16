export default function Services() {
  return (
    <>
      <div className="px-4">
        <h3 className="text-3xl font-bold mb-5">Широкоформатная фотопечать</h3>
        <p>
          Исходя из самого названия, становится понятно, что широкоформатная
          печать подразумевает печать на большом формате, форматы А1 и А2.Обычно
          широкоформатная печать используется для создания баннеров, плакатов,
          постеров и так далее. Мы производим широкоформатную фотопечать с
          помощью принтера Epson с разрешением до 2880х1440 dpi.
        </p>
      </div>
      <div className="flex justify-center items-center my-10 border-2 p-4 bg-slate-200">
        <img src="/service/1.jpg" alt="" width={500} height={500} />
      </div>
      <div className="my-10 px-4">
        <p className="my-3 font-bold">
          Предлагаем Вашему вниманию широкоформатную фотопечать:
        </p>
        <ul className=" list-disc ml-5">
          <li>На фотобумаге плотностью 260 г/м2</li>
          <li>
            На холсте, основным отличительным преимуществом перед другими типами
            материалов при печати репродукций является его неповторимая фактура,
          </li>
          <li>
            благодаря которой репродукции, созданные с применением холста,
            практически неотличимы от оригинальных, нарисованных художниками,
            полотен.
          </li>
          <li>
            На атласной бумаге 255 г/м2, влагоустойчивая и быстросохнущая.
          </li>
          <li>
            На самоклейке, матовая и прозрачная 120г/м2, главным преимуществом
            которой является прочность и стойкость, ведь самоклейке не страшны
            ни влага ни солнце.
          </li>
          <li>
            На матовом холсте на х/б основе 320 г/м2, матовый холст обладает
            ярко-белой гладкой поверхностью, что позволяет печатать четкие
            изображения в сочетании с высоким качеством, долгосрочностью и
            водостойкостью.
          </li>
          <li>На флеш ткани плотностью 260 г/м2</li>
          <li>На золотой и серебристой матовой пленке 160 г/м2</li>
          <li>
            На бумаге в рулонах Inkjet Monochrome 75-180 г/м2, обладает высокой
            степенью белизны и однородности бумажной массы. Предназначена для
            черно-белой струйной печати, подходит также для цветной печати с
            низкой заливкой и невысоким разрешением.
          </li>
        </ul>
      </div>
    </>
  );
}
