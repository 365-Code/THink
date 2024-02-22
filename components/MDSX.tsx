import { MDXRemote } from 'next-mdx-remote/rsc'
 
export default async function RemoteMdxPage({markdown}: {markdown: string}) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  return <MDXRemote source={markdown} />
}