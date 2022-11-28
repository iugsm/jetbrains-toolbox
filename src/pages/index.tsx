import AvailableList from "~/components/AvailableList";
import HomeHeader from "~/components/HomeHeader";
import InstallList from "~/components/InstallList";

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div>
        <InstallList />
        <AvailableList />
      </div>
    </>
  );
}
