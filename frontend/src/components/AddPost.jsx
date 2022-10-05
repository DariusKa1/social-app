import { useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { postAdded } from "../features/posts/postsSlice"
import { selectAllUsers } from "../features/users/usersSlice"


const AddPost = () => {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        userId: ""
    })
    const {title, content, userId} = formData

    const users = useSelector(selectAllUsers)

    const onChangeHandler = (e) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }))
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        if(!title || !content) return alert("Please fill form")

        dispatch(postAdded(formData))

        setFormData({title: "", content: ""})
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)


    const userOpstions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))



  return (
    <>
        <form onSubmit={formSubmitHandler}>
            <input type="text" name="title" value={title} onChange={onChangeHandler} />
            <select name="userId" id="userId" onChange={onChangeHandler}>
                <option value=""></option>
                {userOpstions}
            </select>
            <input type="text" name="content" value={content} onChange={onChangeHandler} />
            <button disabled={!canSave} type="submit">Create Post</button>
        </form>
    </>
  )
}

export default AddPost