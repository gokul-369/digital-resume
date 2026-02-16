import type { ThemeClassSet } from "../../types";
import SpotlightCard from "../SpotLightCard";

function Dashboard({ theme }: { theme: ThemeClassSet }) {
  return (
    <div
      className={`h-dvh w-full flex px-40 py-8 text-white ${theme.bgPrimary}
        bg-[radial-gradient(circle_at_bottom,_rgba(129,140,248,0.22)_0%,_transparent_55%),_radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18)_0%,_transparent_55%)]
        `}
    >
      <div className="grid mt-20 justify-center grid-cols-3 gap-4">
        <SpotlightCard
          className="p-4 h-full  bg-indigo-500/15 backdrop-blur-sm"
          spotlightColor="rgba(255, 255, 255, 0.25)"
        >
          <h2 className="text-2xl font-bold mb-2">
            Check out the Latest blog from me
          </h2>
          <span className="text-sm">Published on 15th June 2024</span>
        </SpotlightCard>

        <SpotlightCard
          className="p-4 h-full bg-blue-500/15 backdrop-blur-sm"
          spotlightColor="rgba(255, 255, 255, 0.25)"
        >
          <h2 className="text-2xl font-bold mb-2">
            Check out the Latest blog from me
          </h2>
          <span className="text-sm">Published on 15th June 2024</span>
        </SpotlightCard>

        <SpotlightCard
          className="p-4 h-full bg-violet-500/15 backdrop-blur-sm"
          spotlightColor="rgba(255, 255, 255, 0.25)"
        >
          <h2 className="text-2xl font-bold mb-2">
            Check out the Latest blog from me
          </h2>
          <span className="text-sm">Published on 15th June 2024</span>
        </SpotlightCard>

        <div className="col-span-2 row-span-2">
          <SpotlightCard
            className="p-4 h-full bg-neutral-800/50"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <h2 className="text-2xl font-bold mb-2">
              Check out the Latest blog from me
            </h2>
            <span className="text-sm">Published on 15th June 2024</span>
          </SpotlightCard>
        </div>

        <div className="row-span-4">
          <SpotlightCard
            className="p-4 h-full bg-neutral-800/50"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <h2 className="text-2xl font-bold mb-2">
              Check out the Latest blog from me
            </h2>
            <span className="text-sm">Published on 15th June 2024</span>
          </SpotlightCard>
        </div>

        <div className="col-span-2 row-span-2">
          <SpotlightCard
            className="p-4 h-full bg-neutral-800/50"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <h2 className="text-2xl font-bold mb-2">
              Check out the Latest blog from me
            </h2>
            <span className="text-sm">Published on 15th June 2024</span>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
