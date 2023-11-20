import Articles from '@/components/Articles'
import Blogs from '@/components/Blogs'
import Contact from '@/components/Contact'
import Discover from '@/components/Discover'

export default function Home() {
  return (
    <main>
      <Discover/>
      <Articles/>
      <Blogs/>
      <Contact/>
      
    </main>
  )
}
