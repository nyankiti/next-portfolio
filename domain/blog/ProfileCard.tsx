import React from "react";
/* components */
import Link from "components/elements/Link";
/* data */
import { siteMetadata } from "constants/siteMetaData";
import {
  FaUniversity,
  FaBriefcase,
  FaMapMarkerAlt,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { SiQiita } from "react-icons/si";

export const ProfileCard = (props) => {
  return (
    <div
      id="profile-card"
      className="w-5/6 mb-4 p-3 px-6 bg-white rounded-lg shadow-md"
    >
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4 flex justify-center">
          <img
            alt="self portrait"
            src={siteMetadata.selfPortrait}
            className="shadow-xl rounded-full align-middle border-none w-48"
          />
        </div>
      </div>
      <div className="text-center mt-6">
        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
          そうけん
        </h3>
        <div className="leading-normal mt-0 mb-2 text-blueGray-600 font-bold">
          <FaMapMarkerAlt className="mr-2 text-lg text-blueGray-400 inline" />
          奈良県
        </div>
        <div className="mb-2 text-blueGray-600 mt-6">
          <FaBriefcase className="mr-2 text-lg text-blueGray-400 inline" />
          {/* メガベンチャーの新卒エンジニア */}
          大学3年生
        </div>
        <div className="mb-2 text-blueGray-600">
          <FaUniversity className="mr-2 text-lg text-blueGray-400 inline" />
          大阪市立大学
        </div>
      </div>
      <div id="icon area" className="flex justify-center my-5">
        <Link href={siteMetadata.github}>
          <FaGithub
            size={28}
            className="mx-4 text-lg text-blueGray-400 inline"
          />
        </Link>
        <Link href={siteMetadata.twitter}>
          <FaTwitter
            size={28}
            className="mx-4 text-lg text-blueGray-400 inline"
          />
        </Link>
        <Link href="/portflio">
          <ImProfile
            size={28}
            className="mx-4 text-lg text-blueGray-400 inline"
          />
        </Link>
        <Link href={siteMetadata.qiita}>
          <SiQiita
            size={28}
            className="mx-4 text-lg text-blueGray-400 inline border-2 rounded-md"
            style={{ borderColor: "rgb(148,163,184)" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
