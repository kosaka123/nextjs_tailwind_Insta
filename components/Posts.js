import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import Post from "./Post";

/*const posts = [
  {
    id: 1,
    username: "baba",
    userImg:
      "https://whatsthenetworth.com/wp-content/uploads/2021/08/Ma-Dong-Seok.jpg",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1633452025",
    caption: "This is DOPE axaxaxaxaaaaxaaaaxaaxaa",
  },
  {
    id: 2,
    username: "kaba",
    userImg:
      "https://whatsthenetworth.com/wp-content/uploads/2021/08/Ma-Dong-Seok.jpg",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1633452025",
    caption: "This is DOPE axaxaxaxaaaaxaaaaxaaxaa",
  },
];*/

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      },
    );

    return unSubscribe;
  }, [db]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
