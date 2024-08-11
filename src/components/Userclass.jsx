import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummyname",
        location: "Default",
        avatar_url: "http:dummy-photo-com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/surya");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }
  componentDidUpdate() {
    console.log("component did mount");
  }
  componentWillUnmount() {
    console.log("componet will unmoun");
  }
  render() {
    const { name, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>

        <h4>ID:{id}</h4>

        <img src={avatar_url} alt="dummy-photo" />
      </div>
    );
  }
}

export default Userclass;
