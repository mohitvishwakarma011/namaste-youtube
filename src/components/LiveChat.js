import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, makeRandomString } from "../utils/helper";

const LiveChat = () => {
  const [chatText, setChatText] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {

      dispatch(addMessage({ name: generate(), message: makeRandomString(10) }));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="mx-1 col-span-4 rounded-lg shadow-lg h-[30rem] bg-gray-100 border overflow-y-scroll flex flex-col-reverse">
        {messages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({name:"MOhit",message:chatText}))
        }}
      >
        <input
          className="border "
          type="text"
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
        ></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
