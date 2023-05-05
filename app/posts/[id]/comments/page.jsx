import Image from "next/image"

const fetchComments = async(id) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {next:{revalidate: 5}})
    .then(response => (response.json()))
}

export default async function PostPage ({params}) {
    const {id} = params
    const comments = await fetchComments(id)
    return (
        <ul style={{fontSize: '14px'}}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <Image
                        width={50}
                        height={50}
                        src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${comment.email}`}
                        alt="avatar"
                    />
                    <h3>{comment.name}</h3>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}
