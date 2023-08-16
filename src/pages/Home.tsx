import * as React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { CreatePost } from "../components/CreatePost";
import { useAppSelector } from "../app/hooks";
import { Post } from "../components/Post";
import http from "../utils/http";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import { SuggestUser } from "../components/SuggestUser";

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
        <div className="bg-white rounded-xl shadow-sm p-5 px-6 border-1">
          <div className="flex justify-between text-black dark:text-white">
            <h3 className="font-bold text-base"> People You might know </h3>
            <div className="cursor-pointer">
              <SyncOutlined />
            </div>
          </div>
          <SuggestUser />
          <SuggestUser />
          <SuggestUser />
          <SuggestUser />
        </div>
      </div>
    </div>
  );
}
