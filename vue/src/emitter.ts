import type { InjectionKey } from "vue";
import type { Emitter } from "mitt";

export type Events = {
  install: string;
};

export const emitterKey: InjectionKey<Emitter<Events>> = Symbol("emitterKey");
