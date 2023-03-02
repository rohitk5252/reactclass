import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

const PostDetails = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  //   let { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=` + userId)
      .then((response) => response.json())
      .then((json) => {
        console.log("fefefef", json);
        // setData(json);
      });
  }, [userId]);

  // const handleClick = (id) => {
  //   navigate(`/${id}`);
  // };
  // const data1 = data.map((item, i) => {
  //   return (
  //     <div className="parent" key={item.id}>
  //       <h2 className="Btn" onClick={() => handleClick(item.postId)}>
  //         {item.postId}
  //       </h2>
  //       <p>{item.id}</p>
  //       <p>{item.name}</p>
  //       <p>{item.email}</p>
  //       <p>{item.body}</p>
  //     </div>
  //   );
  // });
  // return <div>{data1}</div>;

  //   const handleClickDiv = () => {
  //     navigate("/posts");
  //   };
  return (
    <div>
      {/* {data.map((item) => {
        const { id, userId, body, title } = item;
        return (
          <div onClick={handleClickDiv(userId)} className="parent" key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        );
      })} */}
      Post Details
    </div>
  );
};

export default PostDetails;
