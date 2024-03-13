import Link from "next/link";

export default function BlogPage(){
    return <main>
        <h1>The Blog</h1>
        <p><Link href="/blog/post-1">post1</Link></p>
        <p><Link href="/blog/post-2">post2</Link></p>
    </main>
}