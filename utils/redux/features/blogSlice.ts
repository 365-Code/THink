import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState: any = {
    blogs: [{
        thumbnail: "aldsfjasdf"
    }]
}

export const blogSlice = createSlice({
    name: "Blogs",
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload
            // console.log(action.payload)
            // return action.payload
        },
        addBlog: (state, action) => {
            const blog = {
                id: nanoid(),
                ...(action.payload),
            }
            state.blogs.push(blog)
        },
        updateBlog: (state, action) => {
            const blog = {
                id: nanoid(),
                title: action.payload,
            }
            state.blogs.push(blog)
        },
        removeBlog: (state, action) => {
            state.blogs = state.blogs.filter((blog: any)=>
            blog.id !== action.payload)
        },
    }
})

// like provider
export const { setBlogs, addBlog, updateBlog, removeBlog } = blogSlice.actions

// like useContext or (state to use)
export default (blogSlice.reducer)