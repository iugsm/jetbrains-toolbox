import { atom, selector } from "recoil";
import { Software, sourceData } from "~/assets/data";

export type InstallStatus =
  | "downloading"
  | "installing"
  | "installed"
  | "uninstalling";

export interface InstallMapKey {
  name: string;
  version: string;
}

export interface InstallMapValue {
  status: InstallStatus;
}

export const installMapState = atom({
  key: "installMapState",
  default: new Map<InstallMapKey, InstallMapValue>(),
});

// 可用列表
export const avaliableListState = selector<Software[]>({
  key: "avaliableList",
  get: ({ get }) => {
    const install = get(installMapState);
    const nameSet = new Set();

    for (const [key] of install) {
      nameSet.add(key.name);
    }

    const list = sourceData.filter((item) => !nameSet.has(item.name));
    return list;
  },
});
