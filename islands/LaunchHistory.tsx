type Launch = {
  name: string;
};

export default function History() {
  const launches: Array<Launch> = [];

  return launches.length === 0
    ? (
      <h1 class="flex flex-grow items-center">
        Launch History
      </h1>
    )
    : <table class="w-full flex-grow border-1"></table>;
}
