function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
}
 console.log(whisper(HELLO))

 function logShout(string) {
    console.log(string.toUpperCase());
}


logShout('hello')

function logWhisper(string) {
    console.log(string.toLowerCase());
}
 logWhisper('HELLO')

//  function sayHiToHeadphonedRoommate(string){
//     if(string.toLowerCase)
//         return "I can't hear you!"
//  }

function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!") {
        return "I would love to!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else {
        return "I can't hear you!";
    }
}

   

