/**
 * Created by andycall on 15/12/30.
 */
const WIDTH = 400
const ratio = screen.width / WIDTH
const meta = document.createElement('meta')
meta.setAttribute('name', 'viewport')
meta.setAttribute('content', 'width=' + WIDTH + ',initial-scale=' + ratio + ',maximum-scale=' + ratio + ',minimum-scale=' + ratio + ',user-scalable=no,target-densitydpi=device-dpi,minimal-ui')
document.getElementsByTagName('head')[0].appendChild(meta)
document.getElementById('main').style.width = WIDTH + 'px'
document.getElementById('main').style.margin = '0 auto'
document.getElementById('main').style.position = 'relative'