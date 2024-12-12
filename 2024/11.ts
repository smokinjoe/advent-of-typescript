type Excuse<T extends { [key: string]: string }> = {
  new <K extends keyof T>(L: Record<K, string>): `${string & K}: ${T[K]}`;
};
