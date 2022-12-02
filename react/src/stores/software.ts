import { atom, selector } from "recoil";
import { Software, softwareData } from "~/utils";

export type InstallStatus =
  | "downloading"
  | "installing"
  | "installed"
  | "uninstalling";

export type TInstallSoftware = Software & { status: InstallStatus };

// 安装列表
export const installListState = atom<TInstallSoftware[]>({
  key: "installListState",
  default: [],
});

// 可用列表
export const avaliableListState = selector<Software[]>({
  key: "avaliableListState",
  get: ({ get }) => {
    // 已安装的列表
    const installList = get(installListState);

    // 储存安装的软件名称
    const installSoftwareNameSet = new Set();
    installList.forEach((element) => {
      installSoftwareNameSet.add(element.name);
    });

    // 可用列表筛选
    const list: Software[] = [];
    softwareData.forEach((element) => {
      if (
        !installSoftwareNameSet.has(element.name) &&
        element.children !== undefined
      ) {
        list.push(element);
      }
    });

    return list;
  },
});
