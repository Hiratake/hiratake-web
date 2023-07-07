import type { InjectionKey } from 'vue'

export const isInstanceKey: InjectionKey<boolean> = Symbol()
export const shareKey: InjectionKey<(instanceDomain?: string) => void> =
  Symbol()
