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
export const softwareListState = selector<Software[]>({
  key: "avaliableListState",
  get: ({ get }) => {
    // 已安装的列表
    const installList = get(installListState);

    // 遍历，存储对应关系
    const installSoftwareNameSet = new Set();
    installList.forEach((element) => {
      installSoftwareNameSet.add(element.name);
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

    return avaliableList;
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
