import {
  DashOutlined,
  DeleteOutlined,
  EditOutlined,
  MehOutlined,
  PictureOutlined,
  ShareAltOutlined,
  SmileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import * as React from "react";

export interface Comment {
  comment: string;
  image: string;
  commentBy: {
    _id: string;
    first_name: string;
    last_name: string;
    username: string;
    picture: string;
  };
  commentAt: string;
  _id: string;
}
export interface IPostProps {
  _id: string;
  type: string;
  text: string;
  images: {
    url: string;
  }[];
  user: {
    _id: string;
    first_name: string;
    last_name: string;
    username: string;
    picture: string;
  };
  // background?: string;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export function Post({ post }: { post: IPostProps }) {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center hover:text-gray-800 rounded-md ">
          <ShareAltOutlined className="pr-2" />
          Share
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center hover:text-gray-800 rounded-md ">
          <EditOutlined className="pr-2" />
          Edit Post
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex items-center text-red-500 rounded-md ">
          <DeleteOutlined className="pr-2 text-red-500" />
          Delete
        </div>
      ),
    },
  ];
  return (
    <div className="card lg:mx-0 uk-animation-slide-bottom-small">
      <div className="flex justify-between items-center lg:p-4 p-2.5">
        <div className="flex flex-1 items-center space-x-4">
          <div className="">
            <img
              src={post.user.picture}
              className="bg-gray-200 border border-white rounded-full w-10 h-10"
              alt=""
            />
          </div>
          <div className="flex-1 font-semibold capitalize">
            <p className="text-black dark:text-gray-100">
              {post.user.first_name} {post.user.last_name}
            </p>
            <div className="text-gray-700 flex items-center space-x-2">
              <span className="pr-2">{post.createdAt}</span>
              <TeamOutlined />
            </div>
          </div>
        </div>
        <div className="">
          <Dropdown menu={{ items }} placement="bottomRight">
            <div className="">
              <DashOutlined className="hover:bg-gray-200  cursor-pointer rounded-full  p-2 transition -mr-1 dark:hover:bg-gray-700" />
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="uk-lightbox">
        <div className="">
          <img
            src="https://demo.foxthemes.net/socialite/assets/images/avatars/avatar-lg-3.jpg"
            alt=""
            className="max-h-96 w-full object-cover"
          />
        </div>
        <p className="p-5 pt-0 border-b dark:border-gray-700">{post?.text}</p>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex space-x-4 lg:font-bold">
          <a href="#" className="flex items-center space-x-2">
            <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={22}
                height={22}
                className="dark:text-gray-100"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            </div>
            <div> Like</div>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={22}
                height={22}
                className="dark:text-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div> Comment</div>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 flex-1 justify-end"
          >
            <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={22}
                height={22}
                className="dark:text-gray-100"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </div>
            <div> Share</div>
          </a>
        </div>
        <div className="flex items-center space-x-3 pt-2">
          <div className="flex items-center">
            <img
              src="https://demo.foxthemes.net/socialite/assets/images/avatars/avatar-1.jpg"
              alt=""
              className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
            />
            <img
              src="https://demo.foxthemes.net/socialite/assets/images/avatars/avatar-1.jpg"
              alt=""
              className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
            />
            <img
              src="https://demo.foxthemes.net/socialite/assets/images/avatars/avatar-1.jpg"
              alt=""
              className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
            />
          </div>
          <div className="dark:text-gray-100">
            Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
          </div>
        </div>

        <div className="border-t py-4 space-y-4 dark:border-gray-600">
          <div className="flex">
            <div className="w-10 h-10 rounded-full relative flex-shrink-0">
              <img
                src="https://demo.foxthemes.net/socialite/assets/images/avatars/avatar-1.jpg"
                alt=""
                className="absolute h-full rounded-full w-full"
              />
            </div>
            <div>
              <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12  dark:bg-gray-800 dark:text-gray-100">
                <p className="leading-6">
                  In ut odio libero vulputate
                  <i className="uil-grin-tongue-wink"> </i>{" "}
                </p>
                <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
              </div>
              <div className="text-sm flex items-center space-x-3 mt-2 ml-5">
                <a href="#" className="text-red-600">
                  {" "}
                  <i className="uil-heart" /> Love{" "}
                </a>
                <a href="#"> Replay </a>
                <span> 3d </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-10 h-10 rounded-full relative flex-shrink-0">
              <img
                src="https://demo.foxthemes.net/socialite/assets/images/avatars/avatar-1.jpg"
                alt=""
                className="absolute h-full rounded-full w-full"
              />
            </div>
            <div>
              <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12  dark:bg-gray-800 dark:text-gray-100">
                <p className="leading-6">
                  {" "}
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                  magna aliquam erat volutpat. David !
                  <i className="uil-grin-tongue-wink-alt" />{" "}
                </p>
                <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
              </div>
              <div className="text-xs flex items-center space-x-3 mt-2 ml-5">
                <a href="#" className="text-red-600">
                  {" "}
                  <i className="uil-heart" /> Love{" "}
                </a>
                <a href="#"> Replay </a>
                <span> 3d </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hover:text-blue-600 hover:underline">
          {" "}
          Veiw 8 more Comments{" "}
        </div>
        <div className="bg-gray-100 py-3 flex  items-center rounded-full relative dark:bg-gray-800 border-t">
          <input
            placeholder="Add your Comment.."
            className="bg-transparent max-h-10 shadow-none px-5"
          />
          <div className="absolute bottom-2 flex items-end right-3 text-xl">
            <SmileOutlined className="hover:bg-gray-200 p-1.5 rounded-full md hydrated" />
            <PictureOutlined className="hover:bg-gray-200 p-1.5 rounded-full md hydrated" />
          </div>
        </div>
      </div>
    </div>
  );
}
