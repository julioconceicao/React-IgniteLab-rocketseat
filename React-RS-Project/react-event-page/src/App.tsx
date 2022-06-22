import { useEffect } from "react"
import { client } from "./lib/apollo"

function App() {

  const GET_LESSONS_QUERY = gql`
    query{
      lessons {
        id
        title
      }
    }
    `

  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    }) .then(response => {
      console.log(response.data)
    })
  }, [])
  return (
   <h1 className="text-violet-400 text-5xl font-bold">Hello World</h1>
  )
}

export default App
