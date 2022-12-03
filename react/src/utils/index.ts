import { sourceData, type SourceData } from "~/assets/data";

function* generateID() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

export const generateId = generateID();

export const deepClone = <T extends object>(
  source: T,
  map = new WeakMap()
): T => {
  if (typeof source !== "object" || source === undefined) return source;
  let ret = Array.isArray(source) ? [] : {};

  if (map.get(source)) {
    return map.get(source);
  }
  for (let key in source) {
    // @ts-ignore
    ret[key] = deepClone(source[key], map);
  }
  return ret as T;
};

export type Software = Omit<SourceData, "versions"> & {
  id: number;
  children?: number[];
  versionCode: string;
  versionName: string;
  date: string;
};

export const flatData = () => {
  // const cloneData = deepClone<SourceData[]>(sourceData);
  const cloneData = sourceData;

  const array: Software[] = [];
  const genSoftwateId = () => generateId.next().value;

  const flat = (
    arr: (Omit<SourceData, "versions"> & {
      versions?: SourceData["versions"];
    })[]
  ) => {
    arr.forEach((element) => {
      if (element.versions) {
        const versions = [...element.versions];
        delete element.versions;

        const childrenSoftware: Software[] = [];

        const parent: Software = {
          id: genSoftwateId() as number,
          ...element,
          versionCode: versions[0].code,
          versionName: versions[0].name,
          date: versions[0].date,
          children: [],
        };

        versions.shift();

        versions.forEach((item) => {
          const id = genSoftwateId() as number;
          parent.children?.push(id);

          const child: Software = {
            id,
            name: element.name,
            description: element.description,
            logo: element.logo,
            versionCode: item.code,
            versionName: item.name,
            date: item.date,
          };

          childrenSoftware.push(child);
        });

        array.push(parent, ...childrenSoftware);
      }
    });
  };

  flat(cloneData);

  return array;
};

export const softwareData = flatData();
