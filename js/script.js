﻿const _0x31f02a=_0x1c5d;(function(_0x1c31db,_0x581a26){const _0x5653ed=_0x1c5d,_0x35d94f=_0x1c31db();while(!![]){try{const _0x10920a=-parseInt(_0x5653ed(0x1b6))/0x1*(-parseInt(_0x5653ed(0x1cf))/0x2)+parseInt(_0x5653ed(0x1ae))/0x3+-parseInt(_0x5653ed(0x1bf))/0x4+-parseInt(_0x5653ed(0x1ab))/0x5+parseInt(_0x5653ed(0x1b4))/0x6+parseInt(_0x5653ed(0x1d6))/0x7*(-parseInt(_0x5653ed(0x1cd))/0x8)+parseInt(_0x5653ed(0x1c7))/0x9*(-parseInt(_0x5653ed(0x1af))/0xa);if(_0x10920a===_0x581a26)break;else _0x35d94f['push'](_0x35d94f['shift']());}catch(_0xd36de6){_0x35d94f['push'](_0x35d94f['shift']());}}}(_0x38b5,0xe50d0));let $=document;const image=$[_0x31f02a(0x1b0)](_0x31f02a(0x1a7)),title=$['getElementById'](_0x31f02a(0x1bb)),artist=$[_0x31f02a(0x1b0)](_0x31f02a(0x1c8)),music=$[_0x31f02a(0x1c4)](_0x31f02a(0x1ad)),currentTimeEl=$[_0x31f02a(0x1b0)]('current-time'),durationEl=$['getElementById'](_0x31f02a(0x1b1)),progress=$[_0x31f02a(0x1b0)]('progress'),progressContainer=$['getElementById'](_0x31f02a(0x1ce)),prevBtn=$['getElementById'](_0x31f02a(0x1c1)),playBtn=$[_0x31f02a(0x1b0)](_0x31f02a(0x1ba)),nextBtn=$['getElementById']('next'),background=$[_0x31f02a(0x1b0)](_0x31f02a(0x1db)),songs=[{'path':_0x31f02a(0x1c0),'displayName':_0x31f02a(0x1d2),'artist':_0x31f02a(0x1a5),'cover':'images/jamie.jpg'},{'path':_0x31f02a(0x1c9),'displayName':_0x31f02a(0x1b2),'artist':_0x31f02a(0x1c6),'cover':_0x31f02a(0x1d0)},{'path':_0x31f02a(0x1b3),'displayName':_0x31f02a(0x1ac),'artist':_0x31f02a(0x1c2),'cover':'images/Cheriimoya.jpg'}];let isPlaying=![];function playSong(){const _0x2dcd0e=_0x31f02a;isPlaying=!![],playBtn['classList'][_0x2dcd0e(0x1bd)](_0x2dcd0e(0x1a8),'fa-pause'),playBtn[_0x2dcd0e(0x1d3)](_0x2dcd0e(0x1bb),_0x2dcd0e(0x1ca)),music['play']();}function pauseSong(){const _0x767a35=_0x31f02a;isPlaying=![],playBtn['classList'][_0x767a35(0x1bd)](_0x767a35(0x1b7),'fa-play'),playBtn[_0x767a35(0x1d3)](_0x767a35(0x1bb),_0x767a35(0x1b9)),music[_0x767a35(0x1da)]();}function loadSong(_0x2bb520){const _0x404392=_0x31f02a;title['textContent']=_0x2bb520[_0x404392(0x1d9)],artist[_0x404392(0x1d1)]=_0x2bb520[_0x404392(0x1c8)],music[_0x404392(0x1b5)]=_0x2bb520[_0x404392(0x1d7)],changeCover(_0x2bb520[_0x404392(0x1a7)]);}function changeCover(_0x3b40aa){const _0x427f58=_0x31f02a;image[_0x427f58(0x1cb)][_0x427f58(0x1c5)](_0x427f58(0x1bc)),setTimeout(()=>{const _0x278c67=_0x427f58;image[_0x278c67(0x1b5)]=_0x3b40aa,image[_0x278c67(0x1cb)][_0x278c67(0x1a6)](_0x278c67(0x1bc));},0x64),background[_0x427f58(0x1b5)]=_0x3b40aa;}function _0x1c5d(_0x2e61b1,_0x568df3){const _0x38b514=_0x38b5();return _0x1c5d=function(_0x1c5d57,_0xe15241){_0x1c5d57=_0x1c5d57-0x1a5;let _0x4d5577=_0x38b514[_0x1c5d57];return _0x4d5577;},_0x1c5d(_0x2e61b1,_0x568df3);}let songIndex=0x0;function prevSong(){songIndex--,songIndex===-0x1&&(songIndex=songs['length']-0x1),loadSong(songs[songIndex]),playSong();}function nextSong(){const _0xc0d91a=_0x31f02a;songIndex++,songIndex>songs[_0xc0d91a(0x1cc)]-0x1&&(songIndex=0x0),loadSong(songs[songIndex]),playSong();}loadSong(songs[songIndex]);function _0x38b5(){const _0x2103a9=['artist','musics/drive\x20forever.mp3','Pause','classList','length','1664IVkZyq','progress-container','537958jkvQIK','images/drive.jpg','textContent','In\x20the\x20End','setAttribute','click','addEventListener','10451wcgebU','path','offsetX','displayName','pause','background','Jamie\x20Dupuise','add','cover','fa-play','style','srcElement','5992130CJgknF','Living\x20Life,\x20In\x20the\x20night','audio','4114962xiXRop','310yXRpAy','getElementById','duration','Drive\x20forever','musics/living\x20life.mp3','8949258BcbwIF','src','6MOnvyY','fa-pause','clientWidth','Play','play','title','active','replace','floor','2009908nDSzfV','musics/in\x20the\x20end.mp3','prev','Cheriimoya\x20ft\x20Sierra\x20Kidd','currentTime','querySelector','remove','Sergio\x20Valentino','443448ynYFna'];_0x38b5=function(){return _0x2103a9;};return _0x38b5();}function updateProgressBar(_0x3fdc90){const _0x8efbf8=_0x31f02a;if(isPlaying){const _0x17f5cb=_0x3fdc90[_0x8efbf8(0x1aa)][_0x8efbf8(0x1b1)],_0x1870b8=_0x3fdc90[_0x8efbf8(0x1aa)][_0x8efbf8(0x1c3)],_0x1abbdd=_0x1870b8/_0x17f5cb*0x64;progress[_0x8efbf8(0x1a9)]['width']=_0x1abbdd+'%';const _0x4d17f4=Math[_0x8efbf8(0x1be)](_0x17f5cb/0x3c);let _0x437158=Math[_0x8efbf8(0x1be)](_0x17f5cb%0x3c);_0x437158<0xa&&(_0x437158='0'+_0x437158);_0x437158&&(durationEl[_0x8efbf8(0x1d1)]=_0x4d17f4+':'+_0x437158);const _0x44b82b=Math[_0x8efbf8(0x1be)](_0x1870b8/0x3c);let _0x5031cd=Math[_0x8efbf8(0x1be)](_0x1870b8%0x3c);_0x5031cd<0xa&&(_0x5031cd='0'+_0x5031cd),currentTimeEl['textContent']=_0x44b82b+':'+_0x5031cd;}}function setProgressBar(_0x9e4538){const _0x11c236=_0x31f02a,_0x31134e=this[_0x11c236(0x1b8)],_0x378aa7=_0x9e4538[_0x11c236(0x1d8)],_0x234e49=music[_0x11c236(0x1b1)];music['currentTime']=_0x378aa7/_0x31134e*_0x234e49;}playBtn[_0x31f02a(0x1d5)](_0x31f02a(0x1d4),function(){isPlaying===![]?playSong():pauseSong();}),prevBtn[_0x31f02a(0x1d5)](_0x31f02a(0x1d4),prevSong),nextBtn[_0x31f02a(0x1d5)](_0x31f02a(0x1d4),nextSong),music[_0x31f02a(0x1d5)]('ended',nextSong),music[_0x31f02a(0x1d5)]('timeupdate',updateProgressBar),progressContainer[_0x31f02a(0x1d5)](_0x31f02a(0x1d4),setProgressBar);