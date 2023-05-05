import Link from "next/link"

const fetchSinglePost = async(id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {next:{revalidate: 5}})
    .then(response => (response.json()))
}

export default async function PostLayout ({params, children}) {
    const {id} = params
    const post = await fetchSinglePost(id)
    
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
            {children}
        </article>
    )
}
