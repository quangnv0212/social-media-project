import * as React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { CreatePost } from "../components/CreatePost";
import { useAppSelector } from "../app/hooks";
import { Post } from "../components/Post";
import http from "../utils/http";
import { toast } from "react-toastify";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  const { currentUser } = useAppSelector((state) => state.user);
  const [loading, setLoading] = React.useState(false);
  const [postList, setPostList] = React.useState([]);
  React.useEffect(() => {
    const getAllPost = async () => {
      setLoading(true);
      try {
        const res = await http.get("getAllPosts", {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`,
          },
        });
        setPostList(res.data);
      } catch (error) {
        toast.error("Something went wrong, please try again");
      }
    };
    getAllPost();
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="lg:flex lg:space-x-10">
      <div className="lg:w-3/4 lg:px-20 space-y-7">
        <div className="user_story grid md:grid-cols-5 grid-cols-3 gap-2 lg:-mx-20 relative">
          story
        </div>
        <CreatePost user={currentUser} />
        {postList.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
      <div className="lg:w-72 w-fulls">
        <h3 className="text-xl font-semibold"> Contacts </h3>
      </div>
    </div>
  );
}
