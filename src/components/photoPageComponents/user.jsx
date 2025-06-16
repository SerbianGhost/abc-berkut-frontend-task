const User = ({avatar,name,username}) => {
  return (
    <div className="user">
      <div className="user__avatar">
        <img src={avatar} alt="user-avatar" />
      </div>
      <div className="user__info">
        <h2 className="user__name">{name}</h2>
        <p className="user__tag">@{username}</p>
      </div>
    </div>
  );
};
export default User;