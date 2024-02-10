"use client"
import React, {useRef, useState} from 'react'

const SearchBar = (blogs: {setAllBlogs:any, sectionName: string}) => {
    
  const [discover, setDiscover] = useState({
    search: "",
    ctg: "All"
  });


  const handleDiscover = (e: any)=>{
    const {value} = e.target
    setDiscover({
      search: value,
      ctg: value
    })

    if(value == ""){
        discoverSearch(null, false)
    }
  }

  const discoverSearch = async (e: any, scroll=true)=>{
    e?.preventDefault()
    try{
      const response = await fetch(`/api/blogs/search?ctg=${discover.ctg}&search=${discover.search}`)
      const res = await response.json()
      if(res.success && res.blogs.length){
        blogs.setAllBlogs(res.blogs)
        if(scroll && discover.search != ""){
          document.getElementById(blogs.sectionName)?.scrollIntoView()
        }
      }
    }catch(error: any){
      console.log(error);
    }
  }
  return (
    <form onSubmit={discoverSearch} className="flex transition-all mx-auto w-full sm:w-4/5 items-center rounded-lg bg-[#222222] p-4">
            <i id="fi" className="fi fi-sr-search text-[#ffffff]" />
              <input
                type="search"
                autoComplete="false"
                name="search"
                value={discover.search}
                onChange={handleDiscover}
                id="search-articles"
                className="relative w-full px-4 h-full outline-none transition-all"
                placeholder="Search"
              />
              <button type="submit" />
    </form>
  )
}

export default SearchBar