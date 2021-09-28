import { useState, useEffect } from "react";
import firebase from "./firebase";

export const addCard = (newBlog) => {
  const blogCardRef = firebase.database().ref("blogCard");
  blogCardRef.push(newBlog);
};

export const useFetch = () => {
  const [blogCardList, setBlogCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const blogCardRef = firebase.database().ref("blogCard");
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

export const editHandler = (newBlog) => {
  const blogCardRef = firebase.database().ref("blogCard").child(newBlog.id);
  blogCardRef.update(newBlog);
};

export const deleteHandler = (id) => {
  const blogCardRef = firebase.database().ref("blogCard").child(id);
  blogCardRef.remove();
};
