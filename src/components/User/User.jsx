import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../../redux/actions/actions";
import "./User.css";

const User = () => {

      const navigate = useNavigate();

      const user = useSelector(state => state);
      // console.log(user?.userInfo?.map(u=> console.log(u)));
      const dispatch = useDispatch();

      const handleClick = (id) => {
          navigate(`/user/${id}`)
      }

    const fetchUsers = async() => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        .catch((err) => {
            console.log("err :", err);
        });
        dispatch(setUserInfo((response.data)));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return(
      <div className="user_container">
        {user?.userInfo?.map(u => 
          <h3 onClick={() => handleClick(u.id)} key={u.id}>
            {u.name}
          </h3>)}
      </div>
    )
  
}

export default User;