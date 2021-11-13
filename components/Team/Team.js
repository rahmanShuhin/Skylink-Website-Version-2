import React from "react";
import Image from "next/image";
import dev from "../../assets/images/dev.jpg";
import mifta from "../../assets/images/mifta.jpg";
import tushar from "../../assets/images/tushar.jpg";
import shuhin from "../../assets/images/shuhin.jpg";
import sourob from "../../assets/images/sourob.jpg";
import rafi from "../../assets/images/rafi.jpeg";
const Team = () => {
  const member = [
    {
      name: "Khairujjaman Shuvo",
      skill: "SEO Expert & Wordpress Developer",
      img: dev,
    },
    {
      name: "Mozumder Tushar",
      skill: "Web Developer",
      img: tushar,
    },
    {
      name: "Mahmudur Rahman Shuhin",
      skill: "Web Developer",
      img: shuhin,
    },
    {
      name: "Sourov Purkayastha",
      skill: "Web Developer",
      img: sourob,
    },
    {
      name: "Mifta Uddin Khan",
      skill: "Web Developer",
      img: mifta,
    },
    {
      name: "Minhazur Rahman",
      skill: "Web Developer",
      img: rafi,
    },

    {
      name: "Arifur Rahman",
      skill: "Content Writer",
      img: dev,
    },
  ];
  return (
    <div className="team ">
      <div className="team_head">
        <h2>Our team</h2>
        <p>We communicate, create, develop and love what we do!</p>
      </div>
      <div className="team_container">
        {member.map((x) => (
          <div className="team_box">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image src={x?.img} alt="Picture of the author" />
            </div>
            <p className="team_name">{x.name}</p>
            <p className="team_skill">{x.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
