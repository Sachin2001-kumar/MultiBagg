import Link from "next/link";

const ToolkitDrop = () => {
  return (
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-175 bg-gray-900 border border-gray-800 rounded-xl shadow-xl p-6 hidden group-hover:flex gap-4">
      
      {/* Market Explorer */}
      <div className="flex flex-col gap-4 min-w-45">
        <h3 className="text-purple-400  font-bold text-xl">Market Explorer</h3>

        <Link href="#" className="text-gray-400 hover:text-white transition font-semibold">
          Screener
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition font-semibold">
          IPO
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition font-semibold">
          ETF
        </Link>
      </div>

      {/* Market Pulse */}
      <div className="flex flex-col gap-4 min-w-45 border-l border-gray-800 pl-6">
        <h3 className="text-purple-400 font-bold text-xl">Market Pulse</h3>

        <Link href="#" className="text-gray-400 hover:text-white transition font-semibold">
          Market
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition font-semibold">
          FII DII Activity
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition font-semibold">
          Upcoming Earnings
        </Link>
      </div>

      {/* Deep Dive */}
      <div className="flex flex-col gap-4 min-w-45 border-l border-gray-800 pl-6">
        <h3 className="text-purple-400  font-bold text-xl">Deep Dive</h3>

        <Link href="#" className="text-gray-400 hover:text-white transition font-semibold">
          Earnings Tracker
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition font-semibold">
          All Sectors
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition font-semibold">
          All Industries
        </Link>
      </div>

    </div>
  );
};

export default ToolkitDrop;