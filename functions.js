/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const channels = require("./channels.json");
// console.log(channels[0]);

/**************************************************************
 * getChannelName(channel)
 * - receives a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  // Your code here
 return channel.name;
  // return channels.map(cName => cName.name)
}

// console.log(getChannelName(channels[0]));

/**************************************************************
 * numberOfVideos(channel)
 * - receives a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  // Your code here
  // let number = 0 //increment for each video in channel
  // channels.forEach(video => video.videos.map(videoNumber => (videoNumber = number ++)))
  return channel.videos.length
}
// console.log(numberOfVideos(channels[0]))

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - receives a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  // Your code here
  // use .toLower()
 return channel.videos.some(video => video.title.toLowerCase() === videoTitle.toLowerCase());
}
// console.log(channelHasVideo("The Universal S", channels[0]));
// console.log(channelHasVideo("The Universal S", channels[1]));

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - receives an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  // Your code here
  // use .toLower()
  return  channels.find(channel => channel.name.toLowerCase() === channelName.toLowerCase())
}
// console.log(getChannelByName("PowerfulJRE", channels))

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - receives an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  // Your code here
  // also also use .toLower()
  return channels.find((channel) =>
   channel.videos.some((video) =>
    video.title.toLowerCase() === videoTitle.toLowerCase()))
  // solution copied from video
  // QUESTION how do the parameters inside the arrow functions know to look for channel name or video name
  // ANSWER the iterator method is executed on the channels array and videos array respectivly
}
// console.log(getChannelByVideoTitle("The Universal S", channels));

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  // Your code here
  // also^3 use to .toLower()
  return channels.filter(channel =>
   channel.description.toLowerCase().includes(query.toLowerCase()) 
   || channel.name.toLowerCase().includes(query.toLowerCase()))
}
console.log(searchChannels("the", channels))

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
};
