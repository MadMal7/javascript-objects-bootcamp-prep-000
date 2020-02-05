var playlist = {
  'Motorhead': ['Ace of Spades', 'Overkill', 'Whorehouse Blues'],
  'Black Sabbath': ['Black Sabbath', 'Paranoid', 'Sabbath Bloody Sabbath'],
  'Megedeth': ['My Last Words', 'Holy Wars', 'In My Darkest Hour'],
  'Mic Gordon': 'Rip & Tear'
  }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}