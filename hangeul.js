function hangeulStr(str){
  function hangeulChar(char){
    let index = char.charCodeAt(0) - 0xac00;
    let data  = Array(3);
    data[0]   = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ"[Math.floor(index/588)];
    index    %= 588;
    data[1]   = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ"[Math.floor(index/28)];
    index    %= 28;
    data[2]   = index==0?"":" ㄱㄳㄲㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ"[index];
    return data;
  }

  let data = [];
  for(let i=0; i<str.length; i++){
    data.push(hangeulChar(str[i]));
  }
  return data;
}

console.log(hangeulStr("안녕하십니까"))
