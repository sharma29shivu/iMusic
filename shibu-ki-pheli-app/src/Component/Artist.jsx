import React from "react";
import artistCard from "./Artist.module.scss";
import { useNavigate } from "react-router-dom";
import playButton from "../images/playButton.png";

export const Artist = (props) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className={artistCard.output}>
        {props.artistImage.map((imgUrl, index) => (
          <div key={index} className={artistCard.artistCard}>
            <div className={artistCard.playCircle}>
              <img
                src={playButton}
                height="21px"
                width="21px"
                onClick={() => {
                  console.log(props.artistsId[index]);

                  props.sendDataToApp(
                    props.artistsId[index],
                    imgUrl,
                    props.artists[index],
                    props.artistFollowers[index]
                  );
                  navigate("/albums");
                }}
              />
            </div>
            <img
              src={imgUrl}
              alt=""
              style={{ cursor: "pointer" }}
              className={artistCard.titleCover}
              onClick={() => {
                console.log(props.artistsId[index]);

                props.sendDataToApp(
                  props.artistsId[index],
                  imgUrl,
                  props.artists[index],
                  props.artistFollowers[index]
                );
                navigate("/albums");
              }}
            />

            <div className={artistCard.songTitle}>{props.artists[index]}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

/*
 REDIRECT_URL = https://localhost:3000, https%3A%2F%2Flocalhost%3A3000
 CLIENT_ID = 219920e764664a3dafb265f5cfc670a8
 CLIENT_SECRET = c4f7d9f36c8e401ead612876b205f8e4
 https://accounts.spotify.com/authorize?response_type=code&client_id=219920e764664a3dafb265f5cfc670a8&scope=playlist-modify-private&redirect_uri=https%3A%2F%2Flocalhost%3A3000

 code=AQDaAVZZ4j2_c6ShLMl9JsQ89PK5-jOlVZUSzROKQVkq9meObL-0oJyWVPA_3AV9_l-s1RJNQYLAkmZQrq6gXdYP_5loeuNHQQOwlwxVqNaJzxcWKxBPu14gJ7FN4YuMLKWPQ2MSW3OlPwgq9-WO-T4YMRrL3K51cSl-93K4AMJ6iuEBD5L-_Yi8ACivR_5UpMd1"

 curl -d client_id=219920e764664a3dafb265f5cfc670a8 -d client_secret=c4f7d9f36c8e401ead612876b205f8e4 -d grant_type=authorization_code -d code=AQC6KeulgNGZM2ByfjLKcSuf_dVNcn92UsmUdpP1lXbKm9lVB0VKouKObxfN4LwAh2idc9AfhC7cao_CrvOSDNaBtjtv7FtGP9R16d6FqtpPyg2esA1-OlKMVDTGVG1LYvczGobowbBCg8gjrQmIbGfAE-jqh-mUURQofNKa5ccWqSPNiC8cGrR4mAMzUg5nN8gl -d redirect_uri=https%3A%2F%2Flocalhost%3A3000 https://accounts.spotify.com/api/token
*/
