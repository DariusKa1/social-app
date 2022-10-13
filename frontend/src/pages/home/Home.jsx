import PostCard from "../../components/postCard/PostCard";
import { HomeMemories, HomeForm, HomeStyled } from "./HomeStyled";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../features/posts/postsSlice";
import AddPost from "../../components/postCreateForm/PostCreateForm";

const Home = () => {

  const posts = useSelector(selectAllPosts);
  console.log(posts);

  const postsToShow = posts.map((post) => (
    <PostCard key={post._id} data={post} />
  ));

  return (
    <HomeStyled>
      <HomeMemories>
        {postsToShow.length > 0 ? postsToShow : <h1>No posts to see</h1>}
      </HomeMemories>
      <HomeForm>
        <AddPost />
      </HomeForm>
    </HomeStyled>
  );
};

export default Home;
