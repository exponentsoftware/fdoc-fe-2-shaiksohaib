import { useState } from "react";
import "./App.css";
import AddAlbum from "./AddAlbum";
import Albums from "./Albums";

function App() {
  const [albums, setAlbums] = useState([
    {
      id: 1,
      album_title: "True",
      artist: "Avicii",
      album_cover:
        "https://i.redd.it/t643y235aqu11.png",
    },
    {
      id: 2,
      album_title: "Wake me up",
      artist: "Avicii",
      album_cover:
        "https://i.redd.it/t643y235aqu11.png",
    },
    {
      id: 3,
      album_title: "Without you",
      artist: "Avicii",
      album_cover:
        "https://i1.sndcdn.com/artworks-000242630824-w80jro-t500x500.jpg",
    },
    {
      id: 4,
      album_title: "A head full of dreams",
      artist: "Cold Play",
      album_cover:
        "https://a1-images.myspacecdn.com/images04/9/87fb3aa3d69d4733a5b0090674a7416b/600x600.jpg",
    },
    {
      id: 5,
      album_title: "Paradise",
      artist: "Cold Play",
      album_cover:
        "https://i.pinimg.com/originals/40/6c/56/406c567fd787fd81755d0a56826de69d.jpg",
    },
    {
      id: 6,
      album_title: "Tune kaha",
      artist: "Prateek Kuhad",
      album_cover:
        "https://i1.sndcdn.com/artworks-000146862841-5i4sde-t500x500.jpg",
    },
    {
      id: 7,
      album_title: "Kasoor",
      artist: "Prateek Kuhad",
      album_cover:
        "https://i.ytimg.com/vi/iOIF74Hk80A/maxresdefault.jpg",
    },
    {
      id: 8,
      album_title: "Belive",
      artist: "When Chai Met Toast",
      album_cover:
        "https://f4.bcbits.com/img/a1085574143_10.jpg",
    },
    {
      id: 9,
      album_title: "Joy of little things",
      artist: "When Chai Met Toast",
      album_cover:
        "https://f4.bcbits.com/img/a3650643450_10.jpg",
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
