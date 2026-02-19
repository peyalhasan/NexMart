"use client"

import { FilterContext } from "@/context"
import { useContext } from "react"

export default function useFilter(){
    return useContext(FilterContext)
}