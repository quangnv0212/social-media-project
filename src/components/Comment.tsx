import * as React from "react";
import { IComment } from "./Post";
import Moment from "react-moment";

export interface ICommentProps {
  comment?: IComment;
}

export function Comment({ comment }: ICommentProps) {
  return (
    <div className="flex">
      <div className="w-10 h-10 rounded-full relative flex-shrink-0">
        <img
          src={comment?.commentBy.picture}
          alt=""
          className="absolute h-full rounded-full w-full"
        />
      </div>
      <div>
        <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12  dark:bg-gray-800 dark:text-gray-100">
          <p className="leading-6">
            {comment?.comment}
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
          <span>
            <Moment fromNow interval={30}>
              {comment?.commentAt}
            </Moment>
          </span>
        </div>
      </div>
    </div>
  );
}
