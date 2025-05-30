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
        { posts.map( (post)=> {
          return (
            <div key={post.id} className="card bg-base-100 w-96 shadow-sm">
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
    </>
  )
}
