export default function Form() {
  return (
    <form class="flex flex-col w-full md:mb-0 md:w-1/2 py-5 gap-3 items-center">
      <div class="flex flex-col md:flex-row md:justify-center w-full md:w-full md:gap-0">
        <label class="md:w-2/5 pr-2 md:text-right">
          Mission Name
          <span class="hidden md:inline font-bold text-blue-200">
            &nbsp;-&gt;
          </span>
        </label>
        <input
          class="md:w-2/5 p-1 bg-[rgba(0,0,0,.4)] outline-none text-sm"
          autofocus
          type="text"
          id="mission-name"
        />
      </div>
      <hr class=" w-2/3 opacity-25" />
      <div class="flex flex-col md:flex-row md:justify-center w-full md:w-full md:gap-0">
        <label class="md:w-2/5 pr-2 md:text-right">
          Launch Date
          <span class="hidden md:inline font-bold text-blue-200">
            &nbsp;-&gt;
          </span>
        </label>
        <input
          class="md:w-2/5 p-1 bg-[rgba(0,0,0,.4)] outline-none text-sm"
          type="date"
          id="launch-day"
          max="2030-12-31"
        />
      </div>
      <hr class=" w-2/3 opacity-25" />
      <div class="flex flex-col md:flex-row md:justify-center w-full md:w-full md:gap-0">
        <label class="md:w-2/5 pr-2 md:text-right">
          Rocket Type
          <span class="hidden md:inline font-bold text-blue-200">
            &nbsp;-&gt;
          </span>
        </label>
        <input
          class="md:w-2/5 p-1 bg-[rgba(0,0,0,.4)] outline-none text-sm"
          type="text"
          id="rocket-name"
          value="Experimental IS1"
          disabled
        />
      </div>
      <hr class=" w-2/3 opacity-25" />
      <div class="flex flex-col md:flex-row md:justify-center w-full md:w-full md:gap-0">
        <label class="md:w-2/5 pr-2 md:text-right">
          Destination Exoplanet
          <span class="hidden md:inline font-bold text-blue-200">
            &nbsp;-&gt;
          </span>
        </label>
        <select
          class="md:w-2/5 p-1 bg-[rgba(0,0,0,.4)] outline-none text-sm"
          style="min-height: 1.6rem"
          id="planets-selector"
        >
        </select>
      </div>
      <hr class=" w-2/3 opacity-25" />
      <div class="flex flex-col md:flex-row md:justify-center w-full md:w-full md:gap-0">
        <label class="md:w-2/5 pr-2 md:text-right">
          Customers
          <span class="hidden md:inline font-bold text-blue-200">
            &nbsp;-&gt;
          </span>
        </label>
        <input
          class="md:w-2/5 p-1 bg-[rgba(0,0,0,.4)] outline-none text-sm"
          type="text"
          id="customers"
        />
      </div>

      <button class="mx-auto mt-5 font-semibold hover:text-green-200">
        [&nbsp;Save Mission ✔&nbsp;]
      </button>
    </form>
  );
}
