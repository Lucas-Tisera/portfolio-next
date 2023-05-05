import { Suspense } from "react"
import { ListOfPosts } from "./ListOfPosts"

export default async function PostsListPage () {
    return(
        <section>
            <Suspense fallback={<p>Cargando Posts...</p>}>
                <h1>NOVEDADES!</h1>
                <ListOfPosts/>
            </Suspense>
        </section>
    )
  };