
import { VictoryPie } from "victory-pie";
const donationItems = JSON.parse(localStorage.getItem("donation"));
const donate = (donationItems.length);

const myData = [
  { x: "Total Donation", y: 12 },
  { x: "Your Donation", y: donate },
]
const Statistics = () => {


  return (
    <div className='h-64'>
      <VictoryPie
        data={myData}
        colorScale={['red', "green"]}
        radius={100}
      >
      </VictoryPie>

      <div className=" flex gap-10 text-center justify-center items-center mx-auto container">
        <div className="flex gap-2 items-center">
          <h2 className="text-sm">Your Donation:</h2>
          <div className="w-20 h-2 bg-red-700">
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="text-sm">Total Donation:</h2>
          <div className="w-20 h-2 bg-green-700">
          </div>
        </div>
      </div>

    </div>
  );
};

export default Statistics;


