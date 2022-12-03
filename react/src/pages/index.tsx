import DefaultHeader from "~/components/DefaultHeader";
import InstallList from "~/components/InstallList";
import AvailableList from "~/components/AvailableList";

export default function Home() {
  return (
    <>
      <DefaultHeader />
      <InstallList />
      <AvailableList />

      <p
        style={{
          fontSize: 12,
          textAlign: "center",
          color: "#aaa",
        }}
      >
        素材版权归 JetBrains 所有，本项目仅供学习使用
      </p>
    </>
  );
}
