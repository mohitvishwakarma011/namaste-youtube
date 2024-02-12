import React from "react";

const commentsData = [
  {
    name: "Mohit Vishwakarma",
    text: "Lorem Ipsum dolor sit amet, consectetur adip lorem bhai.",
    replies: [
      {
        name: "Mohit Vishwakarma",
        text: "Lorem Ipsum dolor sit amet, consectetur adip lorem bhai.",
        replies: [
          {
            name: "Mohit Vishwakarma",
            text: "Lorem Ipsum dolor sit amet, consectetur adip lorem bhai.",
            replies: [
              {
                name: "Mohit Vishwakarma",
                text: "Lorem Ipsum dolor sit amet, consectetur adip lorem bhai.",
                replies: [
                  {
                    name: "Mohit Vishwakarma",
                    text: "Lorem Ipsum dolor sit amet, consectetur adip lorem bhai.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    name: "Mohit Vishwakarma",
    text: "Lorem Ipsum dolor sit amet, consectetur adip lorem bhai.",
    replies: [
      {
        name: "Mohit Vishwakarma",
        text: "Lorem Ipsum dolor sit amet, consectetur adip lorem bhai.",
        replies: [],
      },
    ],
  },

  {
    name: "Mohit Vishwakarma",
    text: "Lorem Ipsum dolor sit amet, consectetur adip lorem bhai.",
    replies: [],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} >
      <Comment  data={comment} />
      <div className="pl-5 border border-white border-l-gray-200 ml-5">
        <CommentList comments={comment?.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 rounded-lg p-2 m-1">
      <img
        className="h-8 w-8 mx-2"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
      ></img>
      <div>
        <h3 className="font-bold">{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="font-bold my-3 ">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
