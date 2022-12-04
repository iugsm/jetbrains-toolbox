import DefaultHeader from "~/components/DefaultHeader";
import InstallList from "~/components/InstallList";
import AvailableList from "~/components/AvailableList";

export default function Home() {
  return (
    <>
      <DefaultHeader />
      <InstallList />
      <AvailableList />
    </>
  );
}
