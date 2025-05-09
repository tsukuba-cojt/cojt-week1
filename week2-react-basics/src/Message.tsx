function Message(props){
  return(
      <>
      <p>{props.text}</p>
      <p>{props.name}'s profile</p>
      <p>age: {props.age}</p>
      <p>Hobby: {props.hobby}</p>
      </>
  );
}

export default Message;