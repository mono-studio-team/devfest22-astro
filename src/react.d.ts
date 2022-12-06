import { AriaAttributes, DOMAttributes } from 'react'

// workaround to fix this problem: https://github.com/johnsoncodehk/volar/discussions/592
// https://docs.astro.build/en/guides/typescript/#vue-components-are-mistakenly-typed-by-the-typesreact-package-when-installed
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    class?: string
  }
}
