import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { clrs, clrsLength } from "@/lib";
import { useSelector } from "react-redux";
import Link from "next/link";

const Comments = (props: { comments: any }) => {
  const [comments, setComments] = useState([]);

  const authUser = useSelector((state: any) => state.authReducer.auth);

  useEffect(() => {
    setComments(props.comments);
  }, [props.comments]);

  return (
    <div className="flex max-h-screen flex-1 flex-col gap-4">
      <h3 className="mb-1 text-center font-semibold underline">Comments</h3>
      {
        <div className="no-scrollbar overflow-y-scroll scroll-smooth transition-all">
          {comments.length ? (
            comments?.map((c: any, ind: number) => (
              <Comment
                key={c}
                comment={c}
                textColor={clrs[ind % clrsLength].text}
              />
            ))
          ) : (
              <h2 className="text-center text-lg font-semibold">
                No Comments Yet
              </h2>
          )}
        </div>
      }
      {authUser.user ? (
        <AddComment comments={comments} setComments={setComments} />
      ) : (
        <div className="text-center">
          {/* <hr className='w-4/5 mx-auto'/> */}
          <Link
            href="/auth/login"
            className="py-4 text-center transition-all hover:text-blue-500"
          >
            Login to access
          </Link>
        </div>
      )}
    </div>
  );
};

export default Comments;
