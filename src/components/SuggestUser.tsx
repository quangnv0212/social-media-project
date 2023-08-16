import * as React from "react";

export interface ISuggestUserProps {}

export function SuggestUser(props: ISuggestUserProps) {
  return (
    <div className="space-y-4 capitalize text-xs font-normal mt-5 mb-2 text-gray-500 dark:text-white/80">
      <div className="flex items-center gap-3">
        <a href="profile.html">
          <img
            src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-7.jpg"
            alt=""
            className="bg-gray-200 rounded-full w-10 h-10"
          />
        </a>
        <div className="flex-1">
          <a href="profile.html">
            <h4 className="font-semibold text-sm text-black dark:text-white">
              {" "}
              Johnson smith
            </h4>
          </a>
          <div className="mt-0.5"> Suggested For You </div>
        </div>
        <button
          type="button"
          className="text-sm rounded-full py-1.5 px-4 font-semibold bg-gray-200"
        >
          {" "}
          Follow{" "}
        </button>
      </div>
    </div>
  );
}
