"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// import Profile from "@components/profile";
import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  console.log(posts);
  //problem de data avec posts probleme seession .user .id = undefined
  useEffect(() => {
    console.log(session); 
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      console.log("response");
      console.log(response);
      const data = await response.json();

      setPosts(data);
    };

    // fetchPosts();
    console.log(session);
    if (session?.user.id) {
        console.log("fetchposts appelé");
      fetchPosts();
    } else {
        console.log("error :(");
    }
  }, [session]);

  const handleEdit = () => {};
  const handleDelete = async () => {};

  return (
      <Profile
        name="My profile"
        description="Welcome to your personnalized profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
  );
};

export default MyProfile;
