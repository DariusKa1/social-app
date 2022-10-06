import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendPost } from "../../features/posts/postsSlice";
import { PostCreateFormStyled, UploadAndSubmit } from "./PostCreateFormStyled";
import FileBase from "react-file-base64";

const PostCreateForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    message: "",
    creator: "",
    tags: [],
    selectedFile: "",
  });
  const { title, message, creator, tags, selectedFile } = formData;

  const onChangeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      sendPost({
        ...formData,
        tags: tags > 0 ? tags.split(" ") : [],
      })
    );

    setFormData({
      title: "",
      message: "",
      creator: "",
      tags: [],
      selectedFile: "",
    });
  };

  const canSendPost =
    Boolean(title) &&
    Boolean(message) &&
    Boolean(creator) &&
    Boolean(selectedFile);

  return (
    <>
      <PostCreateFormStyled>
        <h1>CREATE NEW POST</h1>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Post title"
          value={title}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          id="message"
          name="message"
          placeholder="message"
          value={message}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          id="creator"
          name="creator"
          placeholder="creator"
          value={creator}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          id="tags"
          name="tags"
          placeholder="tags"
          value={tags}
          onChange={onChangeHandler}
        />   
        <UploadAndSubmit asd={!canSendPost}>
          <FileBase
            type="file"
            accept="image/*"
            multiple={false}
            onDone={({ base64 }) => {
              const fileToCheck = base64.split(":")[1];
              const isImage = fileToCheck.startsWith("image");
              isImage
                ? setFormData({ ...formData, selectedFile: base64 })
                : alert("Only images allowed");
            }}/>
            <button disabled={!canSendPost} onClick={formSubmitHandler}>
              Create Post
            </button>
        </UploadAndSubmit>
      </PostCreateFormStyled>
     
      
    </>
  );
};

export default PostCreateForm;
