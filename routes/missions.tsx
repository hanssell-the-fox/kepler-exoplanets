import Page from "../components/Page.tsx";
import LaunchForm from "../islands/MissionLaunchForm.tsx";

export default function NewMission() {
  return (
    <Page title="New Mission | Kepler Exoplanets">
      <main class="flex flex-col flex-grow gap-5 md:w-2/3 mx-auto justify-center items-center py-5">
        <article class="w-full flex flex-col p-2 gap-3">
          <h1 class="mb-2 font-bold">
            A glimpse into KEPLER discoveries
          </h1>

          <p>
            Schedule a mission launch for interstellar travel to one of the
            Kepler Exoplanets.
          </p>
          <p>
            Only confirmed planets orbiting stars matching the following
            criteria are available for the earliest scheduled missions:
            <ul>
              <li>1 M☉ (Solar Mass) ±10%</li>
              <li>1 R☉ (Solar Radius) ±10%</li>
            </ul>
          </p>
        </article>
        <hr class="md:hidden w-full opacity-25" />
        <LaunchForm />
      </main>
    </Page>
  );
}
