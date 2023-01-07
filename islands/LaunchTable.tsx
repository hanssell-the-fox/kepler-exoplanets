type Mission = {
  name: string;
};

export default function Upcoming() {
  const missions: Array<Mission> = [];

  return missions.length === 0
    ? (
      <h1 class="flex flex-grow items-center">
        Upcoming Missions
      </h1>
    )
    : <table class="w-full flex-grow border-1"></table>;
}
