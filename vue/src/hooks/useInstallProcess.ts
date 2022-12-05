import {
  useDownloadPercentMap,
  useInstallList,
  useInstallStatusMap,
} from "@/stores/software";
import type { Software } from "@/utils";
import { emitter } from "@/utils/emitter";
import { storeToRefs } from "pinia";
import { onBeforeMount, onMounted } from "vue";

export const useInstallProcess = () => {
  // 安装列表
  const installListStore = useInstallList();
  // 安装状态
  const installStatusMapStore = useInstallStatusMap();
  // 百分比
  const downloadPercentMapStore = useDownloadPercentMap();
  const { percentMap } = storeToRefs(downloadPercentMapStore);

  const handleInstall = (evt: CustomEvent) => {
    const software = evt.detail as Software;
    installListStore.installList.push(software);

    installStatusMapStore.updateStatusMap(software.id, "downloading");

    // 获取百分比
    let percent = percentMap.value.get(software.id);

    if (percent === undefined) {
      // 没有就添加
      percent = 0;
      downloadPercentMapStore.updatePercentMap(software.id, 0);
    }

    let intervalID = setInterval(() => {
      if (percent! < 100) {
        percent =
          percent! + Math.random() * 10 > 100
            ? 100
            : (percent = percent! + Math.random() * 10);
      } else {
        clearInterval(intervalID);

        // 修改状态为 installing
        installStatusMapStore.updateStatusMap(software.id, "installing");

        // 2000ms 后修改为 installed
        setTimeout(() => {
          installStatusMapStore.updateStatusMap(software.id, "installed");
        }, 2000);
      }

      // 设置百分比
      downloadPercentMapStore.updatePercentMap(software.id, percent!);
    }, 1000);
  };

  onMounted(() => {
    emitter.addEventListener("install", handleInstall);
  });

  onBeforeMount(() => {
    emitter.removeEventListener("install", handleInstall);
  });
};
