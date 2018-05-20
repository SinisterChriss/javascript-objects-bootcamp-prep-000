var playlist = {artistName: songTitle};
var artistName = ["My Bloody Valentine", "Phil Ochs", "Slowdive"];
var songTitle = ["Here's To The State Of Mississippi", "Sometimes", "Alsion"];


function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}