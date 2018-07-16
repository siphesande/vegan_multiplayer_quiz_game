<script>
  import Pusher from 'pusher-js'
  const pusher = new Pusher('9515943b8731629a2b7b', {
    cluster: 'eu',
    encrypted: true,
    authEndpoint: 'https://vegmultiplayer.herokuapp.com/pusher/auth'
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
