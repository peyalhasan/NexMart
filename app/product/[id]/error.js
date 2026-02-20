'use client'
import Error from "@/components/Error"


function error({reset}) {
  return (
    <Error reset={reset} />
  )
}

export default error