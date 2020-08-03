module.exports = {
    myImg:()=>'#side > header > div._1MXsz > div > img',
    chat:{
        search:()=>'#side > div._2EoyP > div > label > div > div._3FRCZ.copyable-text.selectable-text',
        current:()=>'#main > header > div._33QME > div._2FCjS > div > span',
        msgs:()=>'#main > div._3h-WS > div > div > div.z_tTQ > div',
        specific:()=>'#pane-side > div:nth-child(1) > div > div > div:nth-child(2) > div > div > div._2kHpK',
        block:(n)=>'#pane-side > div:nth-child(1) > div > div > div:nth-child('+n+')',
        nome:(n)=>'#pane-side > div:nth-child(1) > div > div > div:nth-child('+n+') > div > div > div._2kHpK > div._3dtfX > div._3CneP   span',
        time:(n)=>'#pane-side > div:nth-child(1) > div > div > div:nth-child('+n+') > div > div > div._2kHpK > div._3dtfX > div.m61XR',
        text:(n)=>'#pane-side > div:nth-child(1) > div > div > div:nth-child('+n+') > div > div > div._2kHpK > div._1582E > div._3tBW6 > span',
        msg:(n)=>'#main > div._3h-WS > div > div > div.z_tTQ > div:nth-child('+n+') > div > div > div > div.copyable-text > div > span._3Whw5.selectable-text.invisible-space.copyable-text > span'
    },
    msg:{
        text:(n)=>'#main > div._3h-WS > div > div > div.z_tTQ > div:nth-child('+n+') > div > div > div > div.copyable-text > div > span._3Whw5.selectable-text.invisible-space.copyable-text > span',
        time:(n)=>'#main > div._3h-WS > div > div > div.z_tTQ > div:nth-child('+n+') > div > div > div > div._2frDn > div > span'
    },
    numberChats:'#pane-side > div:nth-child(1) > div > div > div',
    input:'#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text',
    send:()=>'#main > footer > div._3ee1T._1LkpH.copyable-area > div:nth-child(3) > button > span > svg > path'
};