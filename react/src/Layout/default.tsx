import React from "react";
import style from "./style.module.scss";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={style.layout}>{children}</div>
      <p className={style.copyright}>
        素材版权归
        <a
          href="https://www.jetbrains.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JetBrains
        </a>
        所有，本项目仅供学习使用
      </p>
    </>
  );
}
