import Happyfamily from "../../assets/family.png";
import { Topics } from "./Topics";

export function MainMid() {
  return (
    <div className="py-12 space-y-12 flex flex-col items-center">
      <h2 className="sm:text-5xl text-4xl font-medium text-center text-cyan-400">
        Que tipo de atendimento <br /> você está procurando?
      </h2>

      <div className="flex justify-around">
        <img src={Happyfamily} alt="familia" className="w-80 hidden  lg:block"/>

        <div className="flex w-1/2 flex-wrap gap-4">
          <Topics/>
          <Topics/>
          <Topics/>
          <Topics/>
          <Topics/>
          <Topics/>
          <Topics/>
          <Topics/>
        </div>
      </div>
      <a href="#" className="bg-cyan-400 px-8 py-4 text-white shadow-xl hover:bg-cyan-500 duration-300 rounded-md">Agende uma consulta</a>
    </div>
  );
}
