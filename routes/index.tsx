import Page from "../components/Page.tsx";
import Link from "../components/Link.tsx";

export default function Home() {
  return (
    <Page title="Kepler Exoplanets | A look into space">
      <main class="flex flex-col flex-grow gap-5 md:w-2/3 mx-auto justify-center items-center py-5">
        <article class="w-full flex flex-col p-2 gap-3">
          <h1 class="mb-2 font-bold">
            What was kepler?
          </h1>
          <p>
            NASA's Kepler spacecraft was launched to search for Earth-like
            planets orbiting other stars. It discovered more than 2,600 of these
            "exoplanets" — including many that are promising places for life to
            exist.
          </p>
          <p>
            Kepler was equipped to look for planets with size spans from
            one-half to twice the size of Earth (terrestrial planets) in the
            habitable zone of their stars where liquid water might exist in the
            natural state on the surface of the planet.
          </p>
        </article>

        <Link to="/missions">Explore the discoveries</Link>
      </main>
    </Page>
  );
}
