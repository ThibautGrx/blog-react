
import {useEffect} from "react"

export function useFetch(url: string, setter: Function) {
  useEffect(
    ()=> {
      fetch(url)
        .then( (response)=> response.json())
        .then( (json) => setter(json))
    }
  )

}
