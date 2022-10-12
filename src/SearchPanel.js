import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import users from "./action/Action";
import "./Style.css";

const SearchPanel = (props) => {
  const [user_name, setUser_name] = useState();
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();

  const searchHandleChange = (value) => {
    setUser_name(value);
  };

  const fetchApi = async () => {
    let response = await fetch(`https://api.github.com/users`, {
      headers: {
        Authorization: `Bearer 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`,
      },
    });
    let result = await response.json();
    console.log(result);

    result.map((i) => {
      let r = i.login.includes(user_name);
      if (r) {
        fetch(`https://api.github.com/users/${user_name}`, {
          headers: {
            Authorization: `Bearer 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`,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            // console.log("res is", res);
            setArr([res]);
          });
      }
    });
  };

  useEffect(() => {
    fetchApi();
  }, [user_name]);

  console.log(arr);

  const showProfie = () => {
    // alert(arr[0].login);
    props.users(arr[0].login);
    sessionStorage.setItem("name_user", arr[0].login);
    if (arr[0].login) {
      navigate("./github");
    }
  };

  return (
    <div className="mainContainer">
      <h1 style={{ fontWeight: "bolder", color: "white" }}>
        Get Github Profile Cards
      </h1>
      <div className="textfiled">
        <input
          className="textField"
          value={user_name}
          onChange={(e) => searchHandleChange(e.target.value)}
          placeholder="Search a Github User"
        />
      </div>
      {arr.map((i) => (
        <div className="card">
          <div className="card_innerDiv1">
            <img src={i.avatar_url} alt="" />
          </div>
          <div className="card_innerDiv2">
            <div>
              <h1 style={{ fontWeight: "bolder", fontSize: "1.9vw" }}>
                {i.login}
              </h1>
              <p>Learning to learn</p>
            </div>
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>{i.followers} followers</p>
              <p>{i.following} following</p>
              <p>{i.public_repos} Repos</p>
            </div>
            <div className="Show_Profile_button" style={{ marginTop: "1.9vw" }}>
              <button onClick={showProfie}>Show Profile</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    users: (e) => dispatch(users(e)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(SearchPanel);

// export default SearchPanel;
