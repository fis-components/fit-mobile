module.exports = function (id) {
    const WIDTH = 400
    const ratio = screen.width / WIDTH
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'viewport')
    meta.setAttribute('content', 'width=' + WIDTH + ',initial-scale=' + ratio + ',maximum-scale=' + ratio + ',minimum-scale=' + ratio + ',user-scalable=no,target-densitydpi=device-dpi,minimal-ui')
    document.getElementsByTagName('head')[0].appendChild(meta)
    document.getElementById(id).style.width = WIDTH + 'px'
    document.getElementById(id).style.margin = '0 auto'
    document.getElementById(id).style.position = 'relative'
}