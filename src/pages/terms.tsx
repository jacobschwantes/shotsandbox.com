import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import Terms from '../mdx/terms.mdx'

// const ResponsiveImage = (props) => (
//   <Image alt={props.alt} layout="responsive" {...props} />
// )

// const components = {
//   img: ResponsiveImage,
//   h1: Heading.H1,
//   h2: Heading.H2,
//   p: Text,
//   pre: Pre,
//   code: InlineCode,
// }

export default function Post(props) {
  return (
    <MDXProvider >
     <div className='prose min-h-screen max-w-6xl mx-auto py-28'>
      <Terms/>
     </div>
    </MDXProvider>
  )
}
