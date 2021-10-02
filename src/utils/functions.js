import { useState, useEffect } from "react";
import { successToastify } from "./customToastify";
import firebaseApp from "./firebase";

export const addCard = (newBlog) => {
  const blogCardRef = firebaseApp.database().ref("blogCard");
  blogCardRef.push(newBlog);
  successToastify("Added successfully");
};

export const useFetch = () => {
  const [blogCardList, setBlogCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const blogCardRef = firebaseApp.database().ref("blogCard");
    blogCardRef.on("value", (snapshot) => {
      const blogCards = snapshot.val();
      const blogCardArray = [];
      for (let id in blogCards) {
        blogCardArray.push({ id, ...blogCards[id] });
      }
      setBlogCardList(blogCardArray);
      setIsLoading(false);
    });
  }, []);
  return { blogCardList, isLoading };
};

export const editHandler = (id, blogUpdate) => {
  const updateBlogRef = firebaseApp.database().ref("blogCard").child(id);
  updateBlogRef.update(blogUpdate);
};

export const deleteHandler = (id) => {
  const updateBlogRef = firebaseApp.database().ref("blogCard").child(id);
  updateBlogRef.remove();
  successToastify("Deleted successfully");
};
