import {Queue} from "./Queue"
import { KJsType, KSeparator } from "./types";

type Tree = { [key: string]: Tree | any | undefined };

export function findDeep(
  T: Tree | string,
  pattern: string
): Map<string, any> | undefined {
  const re = new RegExp(pattern);
  const found = new Map();
  if (typeof T === KJsType.STRING) {
    if (re.test(T as string)) {
      return
    }
  }

  const q = new Queue();
  q.enqueue({ path: "", value: T });
  while (q.size()) {
    const { path, value } = q.dequeue();

    if (typeof value !== KJsType.OBJECT) {
      continue;
    }

    const keys = Object.keys(value);
    for (const key of keys) {
      const child = value[key];
      const childPath = [path, key].join(KSeparator.OBJECT_PATH);
      const subTree = { path: childPath, value: child };
      if (re.test(key)) {
        found.set(childPath, child);
      }
      if (child) {
        q.enqueue(subTree);
      }
    }
  }
  return found.size ? found : undefined;
}