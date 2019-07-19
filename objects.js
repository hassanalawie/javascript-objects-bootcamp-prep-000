var playlist = {
      Slowdive = 'Alison',
      My Bloody Valentine = 'Sometimes'
}

function updatePlaylist(obj,key,value)
{
 obj[key]=value
  return obj
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist.artistName
  return playlist
}