export interface Software {
  name: string;
  description: string;
  logo: string;
  versions: {
    code: string;
    name: string;
    date: string;
  }[];
}

export const sourceData: Software[] = [
  {
    name: "Flee",
    description: "由 JetBrains 打造的下一代 IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/Fleet_icon.svg",
    versions: [
      {
        code: "1.10.189",
        name: "1.10.189 Public Preview",
        date: "2022/10/31",
      },
      {
        code: "1.9.237",
        name: "1.9.237 Public Preview",
        date: "2022/10/15",
      },
    ],
  },
  {
    name: "Space Desktop",
    description: "完整软件开发平台",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/Space_icon.svg",
    versions: [
      {
        code: "2022.1.2",
        name: "2022.1.2",
        date: "2022/7/21",
      },
    ],
  },
  {
    name: "IntelliJ IDEA Ultimate",
    description: "最智能的 Java IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/IntelliJ_IDEA_icon.svg",
    versions: [
      {
        code: "223.7255.1",
        name: "2022.3 EAP",
        date: "2022/10/26",
      },
      {
        code: "222.4345.14",
        name: "2022.2.3",
        date: "2022/10/5",
      },
      {
        code: "222.4345.6",
        name: "2022.2.3 Preview",
        date: "2022/9/28",
      },
      {
        code: "221.6008.13",
        name: "2022.1.4",
        date: "2022/7/19",
      },
      {
        code: "213.7172.25",
        name: "2021.3.3",
        date: "2022/3/17",
      },
    ],
  },
  {
    name: "PyCharm Professional",
    description: "全栈 Python IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/PyCharm_icon.svg",
    versions: [
      {
        code: "223.7255.83",
        name: "2022.3 EAP",
        date: "2022/10/28",
      },
      {
        code: "222.4345.23",
        name: "2022.2.3",
        date: "2022/10/11",
      },
      {
        code: "222.4345.8",
        name: "2022.2.3 Release Candidate",
        date: "2022/9/90",
      },
      {
        code: "221.6008.17",
        name: "2022.1.4",
        date: "2022/7/21",
      },
      {
        code: "213.7172.26",
        name: "2021.3.3",
        date: "2022/3/17",
      },
    ],
  },
  {
    name: "DataSpell",
    description: "适用于数据科学家的 IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/DataSpell_icon.svg",
    versions: [
      {
        code: "223.6160.11",
        name: "2022.3 EAP",
        date: "2022/10/7",
      },
      {
        code: "222.4345.24",
        name: "2022.2.3",
        date: "2022/10/13",
      },
      {
        code: "222.4345.15",
        name: "2022.2.3 Release Candidate",
        date: "2022/10/6",
      },
      {
        code: "221.6008.15",
        name: "2022.1.4",
        date: "2022/7/21",
      },
      {
        code: "213.7172.29",
        name: "2021.3.3",
        date: "2022/3/17",
      },
    ],
  },
  {
    name: "Clio",
    description: "跨平台 C 和 C++ IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/CLion_icon.svg",
    versions: [
      {
        code: "223.7255.15",
        name: "2022.3 EAP",
        date: "2022/10/26",
      },
      {
        code: "222.4345.21",
        name: "2022.2.4",
        date: "2022/10/11",
      },
      {
        code: "221.5921.27",
        name: "2022.1.3",
        date: "2022/6/22",
      },
      {
        code: "213.7172.25",
        name: "2021.3.4",
        date: "2022/3/15",
      },
    ],
  },
  {
    name: "PhpStorm",
    description: "适用于 PHP 和 Web 的智能 IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg",
    versions: [
      {
        code: "223.7255.80",
        name: "2022.3 EAP",
        date: "2022/11/1",
      },
      {
        code: "222.4345.15",
        name: "2022.2.3",
        date: "2022/10/6",
      },
      {
        code: "222.4345.7",
        name: "2022.2.3 Preview",
        date: "2022/9/29",
      },
      {
        code: "221.6008.16",
        name: "2022.1.4",
        date: "2022/7/21",
      },
      {
        code: "213.7172.28",
        name: "2021.3.3",
        date: "2022/3/17",
      },
    ],
  },
  {
    name: "DataGrip",
    description: "适用于数据库和 SQL 的 IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/DataGrip_icon.svg",
    versions: [
      {
        code: "223.7255.80",
        name: "2022.3 EAP",
        date: "2022/11/1",
      },
      {
        code: "222.4345.15",
        name: "2022.2.3",
        date: "2022/10/6",
      },
      {
        code: "222.4345.7",
        name: "2022.2.3 Preview",
        date: "2022/9/29",
      },
      {
        code: "221.6008.16",
        name: "2022.1.4",
        date: "2022/7/21",
      },
      {
        code: "213.7172.28",
        name: "2021.3.3",
        date: "2022/3/17",
      },
    ],
  },
  {
    name: "Rider",
    description: "跨平台 .NET IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/Rider_icon.svg",
    versions: [
      {
        code: "223.7255.80",
        name: "2022.3 EAP",
        date: "2022/11/1",
      },
      {
        code: "222.4345.15",
        name: "2022.2.3",
        date: "2022/10/6",
      },
      {
        code: "222.4345.7",
        name: "2022.2.3 Preview",
        date: "2022/9/29",
      },
      {
        code: "221.6008.16",
        name: "2022.1.4",
        date: "2022/7/21",
      },
      {
        code: "213.7172.28",
        name: "2021.3.3",
        date: "2022/3/17",
      },
    ],
  },
  {
    name: "GoLand",
    description: "适用于 Go 和 Web 的 IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/GoLand_icon.svg",
    versions: [
      {
        code: "223.7255.80",
        name: "2022.3 EAP",
        date: "2022/11/1",
      },
      {
        code: "222.4345.15",
        name: "2022.2.3",
        date: "2022/10/6",
      },
      {
        code: "222.4345.7",
        name: "2022.2.3 Preview",
        date: "2022/9/29",
      },
      {
        code: "221.6008.16",
        name: "2022.1.4",
        date: "2022/7/21",
      },
      {
        code: "213.7172.28",
        name: "2021.3.3",
        date: "2022/3/17",
      },
    ],
  },
  {
    name: "MPS",
    description: "适用于 DSL 开发的 IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/MPS_icon.svg",
    versions: [
      {
        code: "223.7255.80",
        name: "2022.3 EAP",
        date: "2022/11/1",
      },
      {
        code: "222.4345.15",
        name: "2022.2.3",
        date: "2022/10/6",
      },
      {
        code: "222.4345.7",
        name: "2022.2.3 Preview",
        date: "2022/9/29",
      },
      {
        code: "221.6008.16",
        name: "2022.1.4",
        date: "2022/7/21",
      },
      {
        code: "213.7172.28",
        name: "2021.3.3",
        date: "2022/3/17",
      },
    ],
  },
  {
    name: "RubyMine",
    description: "Ruby 和 Rails IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/RubyMine_icon.svg",
    versions: [
      {
        code: "223.7255.80",
        name: "2022.3 EAP",
        date: "2022/11/1",
      },
      {
        code: "222.4345.15",
        name: "2022.2.3",
        date: "2022/10/6",
      },
      {
        code: "222.4345.7",
        name: "2022.2.3 Preview",
        date: "2022/9/29",
      },
      {
        code: "221.6008.16",
        name: "2022.1.4",
        date: "2022/7/21",
      },
      {
        code: "213.7172.28",
        name: "2021.3.3",
        date: "2022/3/17",
      },
    ],
  },
  {
    name: "AppCode",
    description: "适用于 iOS 和 macOS 的智能 IDE",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/AppCode_icon.svg",
    versions: [
      {
        code: "223.7255.80",
        name: "2022.3 EAP",
        date: "2022/11/1",
      },
      {
        code: "222.4345.15",
        name: "2022.2.3",
        date: "2022/10/6",
      },
      {
        code: "222.4345.7",
        name: "2022.2.3 Preview",
        date: "2022/9/29",
      },
      {
        code: "221.6008.16",
        name: "2022.1.4",
        date: "2022/7/21",
      },
      {
        code: "213.7172.28",
        name: "2021.3.3",
        date: "2022/3/17",
      },
    ],
  },
];
