var addSongButton = document.getElementById("queue-button");
addSongButton.addEventListener("click", addSong);

function addSong() {
  var text = addSongEntryBox.value;
  newSong(text, false);
}

var clearListenedButton = document.getElementById("clear-listened-button");
clearListenedButton.addEventListener("click", clearListened);

function clearListened() {
  var finishedSongs = addSongList.getElementsByClassName("listened");
  
  while(finishedSongs.length > 0) {
    finishedSongs.item(0).remove();
  }
}

var emptySongsButton = document.getElementById("empty-button");
emptySongsButton.addEventListener("click", emptySongs);

function emptySongs() {
  var songs = addSongList.children;
  while (songs.length > 0) {
    songs.item(0).remove();
  }
}

var saveSongsButton = document.getElementById("save-button");
saveSongsButton.addEventListener("click", saveSongs);

function saveSongs() {
  var songs = [];
  
  for(var i = 0; i < addSongsList.children.length; i++) {
    var song = addSongsList.children.item(i);
    
    var songInfo = {
      "songText": song.innerText,
      "listened": song.classList.contains("listened")
    };
    
    songs.push(songInfo);
    
  }
  
  localStorage.setItem("songs", JSON.stringify(songs));
}

function loadSongs() {
    if (localStorage.getItem("songs") !== null) {
        var songs = JSON.parse(localStorage.getItem("songs"));

        for (var i = 0; i < songs.length; i++) {
            var song = songs[i];
            newSong(song.songText, toDo.listened);
        }
    }
}

var addSongEntryBox = document.getElementById("add-song-entry-box");
var addSongList = document.getElementById("add-song-list");

function newSong(text, completed) {
  var song = document.createElement("li");
  var songText = document.createTextNode(text);
  song.appendChild(songText);
  
  if (completed) {
    song.classList.add("listened");
  }
  
  addSongList.appendChild(song);
  song.addEventListener("dblclick", toggleSongState);
}

function toggleSongState() {
  if (this.classList.contains("listened")) {
    this.classList.remove("listened");
  } else {
    this.classList.add("listened");
  }
}