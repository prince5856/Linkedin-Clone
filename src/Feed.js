import React from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const postsCollection = collection(db, "posts");
  const user = useSelector(selectUser);

  const fetchPosts = async () => {
    const postsQuery = query(postsCollection, orderBy("timestamp", "desc"));
    const postsSnapshot = await getDocs(postsQuery);
    setPosts(
      postsSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    await addDoc(postsCollection, {
      name: user && user.displayName,
      description: "This is a description",
      message: inputValue,
      photoUrl: user && user.photoUrl,
      timestamp: serverTimestamp(),
    });
    setInputValue("");
    fetchPosts();
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" value={inputValue} onChange={handleInputValue} />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="70B5F9" />
          <InputOption Icon={EventNoteIcon} title="Event" color="70B5F9" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="70B5F9"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
