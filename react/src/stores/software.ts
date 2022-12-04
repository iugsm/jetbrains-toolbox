import { atom, selector } from "recoil";
import { Software, softwareData } from "~/utils";

export type Status = "downloading" | "installing" | "installed";

export type InstallMap = Map<number, Software>;

// 安装列表
export const installListState = atom<Software[]>({
  key: "installListState",
  default: [],
});

// 软件列表
export const softwareListState = selector<{
  avaliableList: Software[]; // 可安装列表
  installMap: InstallMap; // 已安装的 id - software map 映射
}>({
  key: "avaliableListState",
  get: ({ get }) => {
    // 已安装的列表
    const installList = get(installListState);

    // 已安装的 id - software map 映射
    const installMap = new Map<number, Software>();

    // 遍历，存储对应关系
    const installSoftwareNameSet = new Set();
    installList.forEach((element) => {
      installSoftwareNameSet.add(element.name);
      installMap.set(element.id, element);
    });

    // 可用列表筛选
    const avaliableList: Software[] = [];
    softwareData.forEach((element) => {
      if (
        !installSoftwareNameSet.has(element.name) &&
        element.children !== undefined
      ) {
        avaliableList.push(element);
      }
    });

    return {
      avaliableList,
      installMap,
    };
  },
});

// 安装状态
export const installStatusState = atom<Map<number, Status>>({
  key: "statusState",
  default: new Map(),
});

// 百分比
export const downloadPercentState = atom<Map<number, number>>({
  key: "percentState",
  default: new Map(),
});
