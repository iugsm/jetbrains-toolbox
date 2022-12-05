function* generateID() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

export const generateId = generateID();
