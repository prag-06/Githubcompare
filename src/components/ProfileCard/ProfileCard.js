import { Card } from "antd";
import React from "react";
import "antd/dist/antd.css";

const { Meta } = Card;
const ProfileCard = ({ data }) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={data.avatar_url} />}
      >
        <Meta title={data.name} />
        <p>
          <a href={data.html_url}>GitHub Profile</a>
        </p>
        <p>Public Repos: {data.public_repos}</p>
        <p>Public Gists: {data.public_gists}</p>
        <p>Followers: {data.followers}</p>
        <p>Following: {data.following}</p>
      </Card>
    </div>
  );
};

export default ProfileCard;
