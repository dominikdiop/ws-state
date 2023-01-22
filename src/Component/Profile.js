import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.person = {
      fullName: "tarek essid",
      bio: "hello guys i live in tunisia",
      imgSrc:
        "https://thumbs.dreamstime.com/b/avatar-profile-icon-simple-element-illustrationavatar-profile-icon-material-concept-illustration-avatar-profile-icon-simple-146422497.jpg",
      profession: "Web Developer",
    };
  }
  render() {
    return <div>
        <img src={this.person.imgSrc} alt="pic" width={200}/>
        <h1>{this.person.fullName}</h1>
        <h2>{this.person.bio}</h2>
        <h2>{this.person.profession}</h2>
    </div>;
  }
}
