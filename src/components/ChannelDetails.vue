<script>
  import Pusher from 'pusher-js'
  var port = process.env.LINKPORT || 8082
  const pusher = new Pusher('d24f1489405006464fcf', {
    cluster: 'eu',
    encrypted: true,
    authEndpoint: 'https://vegmultiplayer.herokuapp.com/pusher/auth'
    //authEndpoint: 'https://vegmultiplayer.herokuapp.com'+ port +'/pusher/auth'
  })

  export default ({
    getPresenceID () {
      let getQueryString = (field, url) => {
        let href = url ? url : window.location.href
        let reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i')
        let string = reg.exec(href)
        return string ? string[1] : null
      }
      let id = getQueryString('id')
      id = 'presence-' + id
      return id
    },
    subscribeToPusher () {
      let presenceid = this.getPresenceID()
      let channel = pusher.subscribe(presenceid)
      return channel
    }
  })
</script>
