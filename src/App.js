import { useState } from "react";
import "./App.css";
import AddAlbum from "./AddAlbum";
import Albums from "./Albums";

function App() {
  const [albums, setAlbums] = useState([
    {
      id: 1,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      id: 2,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      id: 3,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      id: 4,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      id: 5,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      id: 6,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      id: 7,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      id: 8,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      id: 9,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
  ]);
  const handleAddAlbum = (data) => {
    // console.log("popo", data);
    let temp = [...albums];
    temp.push(data);
    setAlbums(temp);
  };
  const handleDelete = (id) => {
    let temp = [...albums];
    let finalAfterDelete = temp.filter((x) => x.id !== id);
    setAlbums(finalAfterDelete);
  };
  return (
    <div className="App">
      <AddAlbum newId={albums.length + 1} handleAdd={handleAddAlbum} />
      <Albums
        title={"Albums"}
        delete={handleDelete}
        data={albums.sort((a, b) => b.id - a.id)}
      />
    </div>
  );
}

export default App;
