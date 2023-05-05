import Link from "next/link"
import { LikeButton } from "./LikeButton"

const fetchPosts = async() => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {next:{revalidate: 5}})
    .then(response => (response.json()))
    
}

export async function  ListOfPosts () {
    const posts = await fetchPosts()
    
    return posts.map(post => (
            <article key={post.id}>
                <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                    <h2 style={{color: "#09f"}}>{post.title}</h2>
                </Link>
                <p>{post.body}</p>
                <LikeButton id={post.id}/>
            </article>
        ))
    }
