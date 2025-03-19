import css from "./Profile.module.css";
console.log(css);

const Profile = ({ name, tag, location, img }) => {
  return (
    <div>
      <div>
        <img src={img} alt="User avatar" />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>1000</span>
        </li>
        <li>
          <span>Views</span>
          <span>2000</span>
        </li>
        <li>
          <span>Likes</span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
