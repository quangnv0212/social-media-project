import * as React from "react";
import { User } from "../features/userSlice";
import { Button, Modal } from "antd";
import { Input } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { Select, Space } from "antd";

const { TextArea } = Input;
export interface ICreatePostProps {
  user?: User;
}
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export function CreatePost({ user }: ICreatePostProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  if (!user) return null;
  return (
    <div className="card lg:mx-0 p-4">
      <div className="flex space-x-3">
        <img src={user.picture} alt="" className="w-10 h-10 rounded-full" />
        <input
          onClick={() => showModal()}
          className="bg-gray-100 hover:bg-gray-200 flex-1 h-10 px-6 rounded-full"
          placeholder="What's on your mind"
        />
      </div>
      <div className="grid grid-flow-col pt-3 -mx-1 -mb-1 font-semibold text-sm">
        <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
          <svg
            className="bg-blue-100 h-9 mr-2 p-1.5 rounded-full text-blue-600 w-9 -my-0.5 hidden lg:block"
            data-tippy-placement="top"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-tippy=""
            data-original-title="Tooltip"
          >
            {" "}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          Photo/Video
        </div>

        <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
          <svg
            className="bg-green-100 h-9 mr-2 p-1.5 rounded-full text-green-600 w-9 -my-0.5 hidden lg:block"
            uk-tooltip="title: Messages ; pos: bottom ;offset:7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-expanded="false"
          >
            {" "}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            ></path>
          </svg>
          Tag Friend
        </div>
        <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
          <svg
            className="bg-red-100 h-9 mr-2 p-1.5 rounded-full text-red-600 w-9 -my-0.5 hidden lg:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Feeling /Activity
        </div>
      </div>
      <Modal
        centered
        title="CREATE POST"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-1 items-start space-x-4 p-2">
          <img
            src={user.picture}
            className="bg-gray-200 border border-white rounded-full w-11 h-11  mt-2"
            alt=""
          />
          <div className="flex-1 pt-2">
            <TextArea
              className="uk-textare text-black shadow-none focus:shadow-none text-xl font-medium resize-none"
              placeholder="What's on your mind"
              allowClear
              onChange={onChange}
            />
          </div>
        </div>
        <div className=" bottom-0 px-4 space-x-4 w-full">
          <div className="flex bg-gray-50 border border-purple-100 rounded-2xl p-2 shadow-sm items-center">
            <div className="lg:block hidden ml-1">Add to your post</div>
            <div className="flex flex-1 items-center lg:justify-end justify-center space-x-2">
              <svg
                className="bg-blue-100 h-9 p-1.5 rounded-full text-blue-600 w-9 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <svg
                className="text-red-600 h-9 p-1.5 rounded-full bg-red-100 w-9 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                >
                  {" "}
                </path>
              </svg>
              <svg
                className="text-green-600 h-9 p-1.5 rounded-full bg-green-100 w-9 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                ></path>
              </svg>
              <svg
                className="text-pink-600 h-9 p-1.5 rounded-full bg-pink-100 w-9 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>{" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                >
                  {" "}
                </path>
              </svg>
              <svg
                className="text-pink-600 h-9 p-1.5 rounded-full bg-pink-100 w-9 cursor-pointer  "
                id="veiw-more"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="false"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                >
                  {" "}
                </path>
              </svg>
            </div>
          </div>
          <br />
          <div className="flex items-center w-full justify-between border-t p-3">
            <div className="btn-group bootstrap-select mt-2 story">
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Only me" },
                  { value: "lucy", label: "Everyone" },
                  { value: "Yiminghe", label: "Friend" },
                ]}
              />
            </div>
            <div className="flex space-x-2">
              <div className="bg-red-100 flex font-medium h-9 items-center justify-center px-5 rounded-md text-red-600 text-sm">
                Live
              </div>
              <div className="bg-blue-600 flex h-9 items-center justify-center rounded-md text-white px-5 font-medium">
                Share
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
