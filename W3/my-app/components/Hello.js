export default function Hello({message="", src=""}) {
    // let message = "This is a message variable";
    return (
    <>
      <h1>Hello Component</h1>
      <p>Hello Joanne</p>
      <br />
      {/* I am a comment */}
      <p>{message.toUpperCase()}</p>
      <img src={src}
      width={200}
      alt="picture"></img>
      <hr />
    </>
  );
}