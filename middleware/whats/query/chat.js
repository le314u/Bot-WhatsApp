module.exports = {
    block:(n)=>'#pane-side > div:nth-child(1) > div > div > div:nth-child('+n+')',
    nome:(n)=>'#pane-side > div:nth-child(1) > div > div > div:nth-child('+n+') > div > div > div._2kHpK > div._3dtfX > div._3CneP   span',
    time:(n)=>'#pane-side > div:nth-child(1) > div > div > div:nth-child('+n+') > div > div > div._2kHpK > div._3dtfX > div.m61XR',
    text:(n)=>'#pane-side > div:nth-child(1) > div > div > div:nth-child('+n+') > div > div > div._2kHpK > div._1582E > div._3tBW6 > span',
    msg:(n)=>'#main > div._3h-WS > div > div > div.z_tTQ > div:nth-child('+n+') > div > div > div > div.copyable-text > div > span._3Whw5.selectable-text.invisible-space.copyable-text > span',
    search:()=>'#side > div._2EoyP > div > label > div > div._3FRCZ.copyable-text.selectable-text',
    specific:()=>'#pane-side > div:nth-child(1) > div > div > div:nth-child(2) > div > div > div._2kHpK',
    nameCurrent:()=>'#main > header > div._33QME > div._2FCjS > div > span',
    numberChats:()=>'#pane-side > div:nth-child(1) > div > div > div',
    boxMsg:(n)=>'#main > div._3h-WS > div > div > div.z_tTQ > div:nth-child('+n+') > div > div > div > div.copyable-text > div > span._3Whw5.selectable-text.invisible-space.copyable-text > span',

    myMsg:'message-out'
    otherMsg:'message-in'
}
#main > div._3h-WS > div > div > div.z_tTQ > div[class*=message-out]