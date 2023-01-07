import Page from "../components/Page.tsx";
import UpcomingLaunches from "../islands/LaunchTable.tsx";

export default function UpcomingPage() {
  return (
    <Page title="Upcoming Missions | Kepler Exoplanets">
      <main class="flex flex-col flex-grow gap-5 md:w-2/3 mx-auto justify-center items-center py-5">
        <article class="w-full flex flex-col p-2 gap-3">
          <h1 class="mb-2 font-bold">
            Upcoming Missions
          </h1>
          <p>
            Missions scheduled for launch
          </p>
          <p>
            Warning! Clicking on the
            <span class="text-red-500">&nbsp;✖&nbsp;</span>aborts the mission.
          </p>
        </article>
        <UpcomingLaunches />
      </main>
    </Page>
  );
}
