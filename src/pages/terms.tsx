import { MDXProvider } from '@mdx-js/react'
import Terms from '../mdx/terms.mdx'
export default function Post() {
  return (
    <MDXProvider >
     <div className='prose min-h-screen max-w-6xl mx-auto py-28'>
      <Terms/>
     </div>
    </MDXProvider>
  )
}
