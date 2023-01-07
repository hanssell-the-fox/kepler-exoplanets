import NavBar from "./Navigation.tsx";

export default function Header() {
  return (
    <header class="flex flex-wrap md:flex-nowrap justify-end gap-5 md:justify-between items-center mb-5">
      {/* Logo */}
      <div class="flex flex-col items-end font-bold text-blue-200">
        <a href="/">
          <h1>KEPLER Exoplanets</h1>
        </a>
        <h2>
          <span class="text-green-200 opacity-50">:N:O:</span>
          <a href="https://deno.land" target="_blank">D:E:N:O</a>
          <span class="text-green-200 opacity-50">:</span>
        </h2>
      </div>

      <NavBar />
    </header>
  );
}
