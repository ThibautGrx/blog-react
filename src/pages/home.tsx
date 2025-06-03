import { useState } from "react"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useFetch } from "../hooks/useFetch.tsx"

export function Home() {
  useDocumentTitle("Mon Blog")
  const [posts,setPosts] = useState([])

  useFetch('https://jsonplaceholder.typicode.com/posts', setPosts)

  return (
    <>
      <h1>Mon Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        { posts.map( (post)=> {
          return (
            <div key={post.id} className="card bg-base-100 w-70 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{ post.body }</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">{post.id}</button>
                </div>
              </div>
            </div>
          )
        } 
        )
        }
      </div>
    </>
  )
}
