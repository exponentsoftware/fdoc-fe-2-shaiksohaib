import SingleCard from "./SingleCard";
function Albums(props) {
  return (
    <div className="albums">
      <h1>{props?.title || "Untitled"}</h1>
      <div className="albumscontainer">
        {props?.data?.length > 0 &&
          props?.data?.map((albumData) => (
            <SingleCard
              key={albumData?.id}
              data={albumData}
              delete={props?.delete}
            />
          ))}
      </div>
    </div>
  );
}

export default Albums;
