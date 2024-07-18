import { ProfitChart } from "./ProfitChart";
import { RevenueChart } from "./RevenueChart";

const Charts = () => {
  return (
    <div className="h-[calc(72%-70px)] overflow-hidden w-full bg-zinc-300 flex justify-center gap-5 items-center">
      <div className="__leftChart w-[64%] h-[95%] -mt-4 bg-white">
        <RevenueChart />
      </div>
      <div className="__rightChart w-[30%] h-[95%] -mt-4 bg-white">
        <ProfitChart />
      </div>
    </div>
  );
};

export default Charts;
