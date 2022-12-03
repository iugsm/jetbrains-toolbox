interface IEmitter {
  addEventListener: (type: string, cb: (evt: CustomEvent) => void) => void;
  removeEventListener: (type: string, cb: (evt: CustomEvent) => void) => void;
}

class Emitter implements IEmitter {
  #events: { type: string; cb: (evt: CustomEvent) => void }[] = [];

  addEventListener(type: string, cb: (evt: CustomEvent) => void) {
    this.#events.push({ type, cb });
  }

  removeEventListener(type: string, cb: (evt: CustomEvent) => void) {
    this.#events = this.#events.filter((element) => {
      return element.type !== type || element.cb !== cb;
    });
  }

  emit(evt: CustomEvent) {
    this.#events.forEach(({ type, cb }) => {
      if (type === evt.type) {
        cb(evt);
      }
    });
  }
}

export const emitter = new Emitter();
