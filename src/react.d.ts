import { AriaAttributes, DOMAttributes } from 'react'

// workaround to fix this problem: https://github.com/johnsoncodehk/volar/discussions/592
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    class?: string
  }
}
