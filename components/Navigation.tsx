import Link from "./Link.tsx";

type Route = {
  label: string;
  url: string;
};

const routes: Array<Route> = [
  { label: "New Mission", url: "/missions" },
  { label: "Upcoming", url: "/upcoming" },
  { label: "History", url: "/history" },
];

export default function NavigationBar() {
  return (
    <nav class="flex flex-wrap md:flex-nowrap w-full md:w-auto gap-2 md:mt-0 justify-center">
      {routes.map((route: Route) =>
        // Create a link to the route
        <Link to={route.url}>{route.label}</Link>
      )}
    </nav>
  );
}
