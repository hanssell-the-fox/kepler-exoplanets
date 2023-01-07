import Page from "../components/Page.tsx";
import LaunchHistory from "../islands/LaunchHistory.tsx";

export default function HistoryPage() {
  return (
    <Page title="History | Kepler Exoplanets">
      <main class="flex flex-col flex-grow gap-5 md:w-2/3 mx-auto justify-center items-center py-5">
        <article class="w-full flex flex-col p-2 gap-3">
          <h1 class="mb-2 font-bold">
            History
          </h1>
          <p>
            History of tracked mission launches.
          </p>
        </article>
        <LaunchHistory />
      </main>
    </Page>
  );
}
