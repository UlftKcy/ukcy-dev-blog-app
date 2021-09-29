import { useState, useEffect } from "react";
import { successToastify } from "./customToastify";
import firebase from "./firebase";

export const addCard = (newBlog) => {
  const blogCardRef = firebase.database().ref("blogCard");
  blogCardRef.push(newBlog);
  successToastify("Added successfully")
};

export const useFetch = () => {
  const [blogCardList, setBlogCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const blogCardRef = firebase.database()?.ref("blogCard");
    blogCardRef.on("value", (snapshot) => {
      const blogCards = snapshot.val();

      const blogCardArray = [];
      for (let id in blogCards) {
        blogCardArray.push({ id, ...blogCards[id] });
      }
      setBlogCardList(blogCardArray);
      setIsLoading(false);
      // console.log(blogCardArray)
    });
  }, []);
  return { blogCardList, isLoading };
};

export const editHandler = (updateBlog) => {
  const updateBlogRef = firebase.database().ref("blogCard").child(updateBlog.id);
  updateBlogRef.update(updateBlog);
  successToastify("Updated Successfully")
};

export const deleteHandler = (id) => {
  const updateBlogRef = firebase.database().ref("blogCard").child(id);
  updateBlogRef.remove();
  successToastify("Deleted successfully");
};
