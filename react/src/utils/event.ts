function subscribe(eventName: string, listener: Function) {
  document.addEventListener(eventName, listener as EventListener);
}

function unsubscribe(eventName: string, listener: Function) {
  document.removeEventListener(eventName, listener as EventListener);
}

function publish(eventName: string, data: any) {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}

export { subscribe, unsubscribe, publish };
