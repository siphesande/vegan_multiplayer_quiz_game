<template>
  <transition name="fade">
    <div class="home" v-if="!secondplayer">
      <div class="inner">


      <div class="mult">
        <h1>Boost you Veganism Activism Skills</h1>
      </div>

      <div class="faq">
        <p>Will Help You Answer FAQ about Veganism</p>
      </div>

      <div class="destroy">
       <p>Rise Above | Destroy Meat Eaters! </p>
      </div>
        <!-- <h1>Vegan Multiplayer Quiz Game</h1>
         <p>Boost you Activism Skill</p>
        <p>Will Help You Answer FAQ about Veganism</p>
        <p>Destroy Meat Eaters! </p>
        <p>Test your knowledge of Veganism</p>
         <h1> Let us play!</h1> -->
      <div class="divOfsecondPlayerLink">
        <p class="secondplayerLink">Invite a second player by sending them this link:<em> {{url}}</em></p>
        <p>You are Team A</p>
        <p>And Game will start automatically</p>

      </div>
      </div>
    </div>
    <div class="play" v-if="secondplayer">
      <div>
        <div class="container hamilton--header--text">
          <div class="quizGame">
          <h1><em>We Will Play Together</em></h1>
        </div>
            <!-- <p class="Rise"><em>We Will Rise Together</em></p> -->
          <div class="columns hamilton--inner">
            <div class="column is-half left">
              <!-- <p class="title">User 1</p> -->
              <p class="title">Team A (The Cute Piglets)</p>
            <img src="https://vignette.wikia.nocookie.net/whatever-you-want/images/b/b3/Cute_Piglets_Pictures_10.jpg/revision/latest?cb=20130803212429" alt="Cheetah!" width="100" height="50">
              <p class="subtitle">Total Score: {{playerdata.one.score}}</p>
            </div>
            <div v-if="secondplayer" class="column is-half right">
              <!-- <p class="title">User 2</p> -->
              <p class="title">Team B (The Bunny Rabbits)</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcm_WjM6-Hst7RtYWmqXh9dWo2C3Cw4IOJ4fP0oUOX8_ICVkshkg" alt="Cheetah!" width="100" height="50">
              <p class="subtitle">Total Score: {{playerdata.two.score}}</p>
            </div>
          </div>

          <div class="hamilton--lyrics--text">
            <p>{{question.lyric}}
            </p>
            <div class="hamilton--answers">
              <a v-bind:class="{ 'wronganswer': hasAnswered && !item.correct, 'correctanswer': hasAnswered && item.correct}" @click="checkAnswer(item)" v-for="(item, index) in options">{{item.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  import ChannelDetails from '@/components/ChannelDetails'
  const lyrics = [
    {
      lyric: 'What is Veganism?',
      options: [{name: 'Lifestle of Avoiding meat', correct: false}, {name: 'Avoiding Dairy', correct: false}, {name: 'Group of people that seek attension', correct: false}, {name: 'is the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.', correct: true}],
      answer: 'is the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.'
    },
    {
      lyric: 'Why you become Vegan?',
      options: [{name: 'I want to look Sexy', correct: false}, {name: 'I want long life', correct: false}, {name: 'I can about Animals, Health and Environment', correct: true}, {name: 'Why you Eat meat?', correct: false}],
      answer: 'I can about Animals, Health and Environment'
    },
    {
      lyric: 'Anonymous for the Voiceless is about: Animals * Health *  ______',
      options: [{name: 'Protests', correct: false}, {name: 'Food', correct: false}, {name: 'Environment', correct: true}, {name: 'Making people feel quilty', correct: false}],
      answer: 'Environment'
    },
    {
      lyric: 'Veganism is ______',
      options: [{name: 'Violent', correct: false}, {name: 'Peacefull', correct: true}, {name: 'Radical', correct: false}, {name: 'Sexy', correct: false}],
      answer: 'Peacefull'
    },
    {
      lyric: 'Cube of True shows',
      options: [{name: 'Scary movies', correct: false}, {name: 'Animals', correct: false}, {name: 'Tube with truth', correct: false}, {name: 'Hidden cruelty of Factory Farming', correct: true}],
      answer: 'Angelica'
    },
    {
      lyric: 'Plants all live by can not  _____',
      options: [{name: 'Die', correct: true}, {name: 'Surfer', correct: false}, {name: 'Feel pain', correct: true}, {name: 'walk and run', correct: false}],
      answer: 'Feel pain'
    },
    {
      lyric: 'Meat Eater: So you are vegan where do you get your Proteins ?',
      options: [{name: 'From Plants', correct: false}, {name: 'From God', correct: false}, {name: 'From all plant that give proteins', correct: true}, {name: 'From from the Sun', correct: false}],
      answer: 'From all plant that give proteins'
    },
    {
      lyric: 'Meat Eater: You vegans you lack B12',
      options: [{name: 'Meat Eater also lack B12', correct: false}, {name: 'King George', correct: true}, {name: 'Eliza Hamilton', correct: false}, {name: 'Angelica Schuyler', correct: false}],
      answer: 'King George'
    },
    {
      lyric: 'Which documentary film that explores the impact of animal agriculture on the environment?',
      options: [{name: 'Cowspiracy: The Sustainability Secret ', correct: true}, {name: 'Earthlings', correct: false}, {name: 'Dominion', correct: false}, {name: 'Land of Glory', correct: false}, {name: 'Dominion', correct: false}, {name: 'What the health', correct: false}],
      answer: 'Peggy Schuyler'
    },
    {
      lyric: "Filmmaker Kip Andersen uncovers the secret to preventing and even reversing chronic diseases, and he investigates why the nation's leading health organizations doesn't want people to know about it",
      options: [{name: 'Vegan 2017', correct: false}, {name: 'Game Chagers', correct: false}, {name: 'Lucid', correct: false}, {name: 'What the Heath', correct: true}],
      answer: 'What the heath'
    },
    {
      lyric: 'Why Vegatarin is not Enoght',
      options: [{name: 'That is correct', correct: false}, {name: 'Calf sufer because of us drinking milk', correct: false}, {name: 'Not your Mum, Not you Milk', correct: false}, {name: 'Laurens', correct: true}],
      answer: 'Calf sufer because of us drinking milk'
    },
    {
      lyric: 'In their ability to suffer, non-human animal are the same as us, they seek comfort, they seek safety and the seek _____',
      options: [{name: 'life free from pain', correct: true}, {name: 'Water', correct: false}, {name: 'More Food', correct: false}, {name: 'long life', correct: false}],
      answer: 'life free from pain'
    },
    {
      lyric: 'Why you say we are herbirover',
      options: [{name: 'I donot eat animals, animals are my friends', correct: true}, {name: 'Adam and Eve were eating plants and fruit', correct: false}, {name: 'Mulligan', correct: false}, {name: 'Laurens', correct: false}],
      answer: 'Hamilton'
    },

    {
      lyric: '____, these animals embody the mystery and wonder of consciousness. ____, they are not only in the world, they are aware of it. _____, they are the psychological centers of a life that is uniquely their own.!',
      options: [{name: 'Like us', correct: true}, {name: 'Like others', correct: false}, {name: 'Like God', correct: false}, {name: 'like Vegans', correct: false}],
      answer: 'Like us'
    },
    {
      lyric: 'Eat Eater: why you blame me for Animals, I do not kill animals slagther hose worker and farmer do',
      options: [{name: 'My friend demand meater and threfore we hire them to do dirt work for us', correct: true}, {name: 'Lol you are a medurer', correct: false}, {name: 'George', correct: false}, {name: 'Laurens', correct: false}],
      answer: 'My friend demand meater and threfore we hire them to do dirt work for us'
    },
    {
      lyric: 'Children should not see this ',
      options: [{name: 'Yes they should cause the are meat and there contrube to the demand', correct: true}, {name: 'I agree they will have night mare', correct: false}, {name: 'They shoul watch becuse they are merdure like you!', correct: false}, {name: 'If it is good for kids to watch it its not good happen', correct: false}],
      answer: 'Yes they should cause the are meat and there contrube to the demand'
    },
    {
      lyric: 'Should we get Life of an animal that does not want to die because of our taste buds/',
      options: [{name: 'Yes animal donot matter', correct: false}, {name: 'Not becase meat is not nice', correct: false}, {name: 'No bacause animals are friendly', correct: false}, {name: 'No because it can never be moral justified to take thier lives for food as we lie in a word where altanatev are available', correct: true}],
      answer: 'No because it can never be moral justified to take thier lives for food as we lie in a word where altanatev are available'
    },
    {
      lyric: 'Who is a better vegan activist between James Aspey, Education ed, Joey Carbstrong, gary yourofsky?',
      options: [{name: 'gary yourofsky', correct: false}, {name: 'Joey Carbstrong', correct: false}, {name: 'James Aspey', correct: false}, {name: 'Every one that is against animal cruelty is the best', correct: true}],
      answer: 'Every one that is against animal cruelty is the best'
    },
    {
      lyric: '____ are my friends and i dont eat my friends?',
      options: [{name: 'Dogs', correct: false}, {name: 'Cows', correct: false}, {name: 'Humans', correct: false}, {name: 'Animals', correct: true}],
      answer: 'Animals'
    },
    {
      lyric: 'What are Animals Factory Farms?',
      options: [{name: 'Consentration camp for Animals ', correct: false}, {name: 'They are hell', correct: false}, {name: 'They not humane', correct: false}, {name: 'Intensive Animal Farming means that animals are crammed by the hundreds of thousands into filthy, windowless sheds: stuffed into wire cages, metal crates, and may other torturous devices', correct: true}],
      answer: 'Intensive Animal Farming means that animals are crammed by the hundreds of thousands into filthy, windowless sheds: stuffed into wire cages, metal crates, and may other torturous devices'
    },
    {
      lyric: 'Meat Eater:Why you use words like Holocaust, Murder, Rape?',
      options: [{name: 'because you are Murderers', correct: false}, {name: 'because we are angry!', correct: false}, {name: 'I do not know!', correct: false}, {name: 'We call it like it is!', correct: true}],
      answer: 'We call it like it is!'
    },
    {
      lyric: 'In Anonymous for The Voiceless, cube of truth explaine to people why you here?',
      options: [{name: 'We want to end meat consuption ', correct: false}, {name: 'Cows', correct: false}, {name: 'Humans', correct: false}, {name: 'We rising awaness of animal Agriculture cruely. We want poeple to know where thier meat comes from', correct: true}],
      answer: 'We call it like it is!'
    },
    {
      lyric: 'What is humane slaughter?',
      options: [{name: 'Consentration camp for Animals ', correct: false}, {name: 'Cows', correct: false}, {name: 'Humans', correct: false}, {name: 'Nothing humane for killing someone that deos not want to die', correct: true}],
      answer: 'We call it like it is!'
    },
    {
      lyric: 'Is Asia bad because they kill and eat dogs?',
      options: [{name: 'Yes It can never be justified king pets ', correct: false}, {name: 'Cows', correct: false}, {name: 'Humans', correct: false}, {name: 'Yes they are, like we are also rong killing pigs, cow, sheeps etc', correct: true}],
      answer: 'Yes they are, like we are also rong killing pigs, cow, sheeps etc'
    },
    {
      lyric: 'What we do to Animals is:',
      options: [{name: 'Yes It can never be justified king pets ', correct: false}, {name: 'Cows', correct: false}, {name: 'Humans', correct: false}, {name: 'the exploitation of the weak by the strong', correct: true}],
      answer: 'the exploitation of the weak by the strong'
    },
    {
      lyric: 'The question is not, Can they reason?, nor Can they talk? but, ______?',
      options: [{name: 'Can they survive ', correct: false}, {name: 'Can they play', correct: false}, {name: 'Can they suffer', correct: true}, {name: 'Can they reproduce', correct: false}],
      answer: 'Can they suffer'
    }
  ]
  export default {
    name: 'home',
    data () {
      return {
        presenceid: null,
        hasAnswered: false,
        question: null,
        options: null,
        correctanswer: null,
        count: null,
        players: 1,
        secondplayer: false,
        playerdata: {
          one: {
            id: null,
            score: 0,
            userid: null
          },
          two: {
            id: null,
            score: 0,
            userid: null
          }
        },
        userid: null,
        url: null
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.presenceid = this.getUniqueId()
        if (!this.checkPresenceID()) {
          var separator = (window.location.href.indexOf('?') === -1) ? '?' : '&'
          window.location.href = window.location.href + separator + this.presenceid
        }
        this.url = window.location.href
        this.getNewQuestion()
        let channel = ChannelDetails.subscribeToPusher()
        channel.bind('pusher:member_added', members => {
          this.players += 1
          this.secondplayer = true
        })
        channel.bind('pusher:subscription_succeeded', members => {
          if (members.count === 1 && !this.playerdata.one.id) {
            this.playerdata.one.id = members.myID
            this.playerdata.one.userid = 1
            this.userid = 1
          } else if (members.count === 2) {
            this.secondplayer = true
            this.playerdata.two.id = members.myID
            this.playerdata.two.userid = 2
            this.userid = 2
          }
        })
        channel.bind('pusher:member_removed', member => {
          this.players -= 1
          if (member.count === 1) {
            this.secondplayer = false
          }
        })
        channel.bind('client-send', (data) => {
          if (this.userid === 1) {
            this.playerdata.two.score = data.data.two.score
          } else if (this.userid === 2) {
            this.playerdata.one.score = data.data.one.score
          }
        })
      },
      getUniqueId () {
        return 'id=' + Math.random().toString(36).substr(2, 8)
      },
      checkPresenceID () {
        let getQueryString = (field, url) => {
          let href = url ? url : window.location.href
          let reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i')
          let string = reg.exec(href)
          return string ? string[1] : null
        }
        let id = getQueryString('id')
        return id
      },
      checkAnswer (item) {
        let channel = ChannelDetails.subscribeToPusher()
        this.hasAnswered = true
        if (item.name === this.correctanswer) {
          if (this.userid === 1) {
            this.playerdata.one.score += 10
          } else if (this.userid === 2) {
            this.playerdata.two.score += 10
          }
        } else {
          if (this.userid === 1) {
            this.playerdata.one.score = Math.max(0, this.playerdata.one.score -= 10)
          } else if (this.userid === 2) {
            this.playerdata.two.score = Math.max(0, this.playerdata.two.score -= 10)
          }
        }
        channel.trigger('client-send', {data: this.playerdata})
        this.count = 3
        let countdown = setInterval(() => {
          this.count -= 1
          if (this.count === 0) {
            clearInterval(countdown)
            this.getNewQuestion()
          }
        }, 1000)
      },
      getRandomQuestions (array, count) {
        let length = array.length
        let randomIndexes = []
        let randomItems = []
        let index, item

        count = count | 1

        while (count) {
          index = Math.floor(Math.random() * length)
          if (randomIndexes.indexOf(index) === -1) {
            count--
            randomIndexes.push(index)
          }
        }

        randomIndexes.forEach((index) => {
          item = array.slice(index, index + 1).pop()
          randomItems.push(item)
        })

        if (randomItems.length === 1) {
          return randomItems.pop()
        } else {
          return randomItems
        }
      },
      getNewQuestion () {
        let question = this.getRandomQuestions(lyrics, 1)
        this.question = question
        this.options = question.options
        this.correctanswer = question.answer
        this.hasAnswered = false
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    padding-top: 20px;
    align-items: center;
    justify-content: center;
    height: 85vh;
    width: 100%;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
  p {
    font-size: 1.5rem;
    margin: 0 0 20px 0;
  }
  .play--button {
    background-color: white;
    color: #7fd4d3;
    font-weight: bold;
    border-radius: 20px;
    letter-spacing: 1px;
    padding: 20px;
    transition: all .3s ease;
    text-shadow: 0 1px 3px rgba(36,180,126,.4);
    text-transform: uppercase;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  }
  .play--button:hover {
    background-color: white;
    color: #7fd4d3;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  a {
    color: #fff;
  }
  p {
    color: #fff;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  .play--button {
    background-color: white;
    color: #7fd4d3;
    font-weight: bold;
    border-radius: 20px;
    letter-spacing: 1px;
    padding: 20px;
    transition: all .3s ease;
    text-shadow: 0 1px 3px rgba(36,180,126,.4);
    text-transform: uppercase;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 5;
  }
  .play--button:hover {
    background-color: white;
    color: #7fd4d3;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }
  .hamilton--header--text {
    margin-top: 50px;
  }
  .hamilton--inner {
    margin-top: 20px;
  }
  .hamilton--inner .left{
    text-align: left;
  }
  .hamilton--inner .right{
    text-align: right;
  }
  .title {
    font-weight: bold;
    color: #ff66cc;
  }
  .Rise{
    color: #0066ff
  }
  .hamilton--lyrics--text {
    width: 600px;
    margin: 0 auto;
  }
  .hamilton--lyrics--text p {
    font-weight: bold;
  }
  .hamilton--answers a{
    display: block;
    border: 3px solid white;
    border-radius: 50px;
    margin: 20px auto;
    width: 500px;
    padding: 10px;
  }
  .wronganswer {
    background-color: #ec6969;
    border: none !important;
    opacity: 0.4;
    transition: background-color 0.5s ease;
  }
  .correctanswer {
    background-color: #00c4a7;
    border: none !important;
    transition: background-color 0.5s ease;
  }
  /*New by me*/
  .secondplayerLink em {
  color: #cc66ff;
}

* {
  box-sizing:border-box;
}

.mult {
  background-color:#2196F3;
  padding:20px;

  width:100%; /* The width is 20%, by default */
}

.faq {
  background-color:#ffff66;
  padding:20px;

  width:100%; /* The width is 60%, by default */
}

.destroy {
  background-color:#ff0000;
  padding:20px;

  width:100%; /* The width is 20%, by default */
}
.divOfsecondPlayerLink {
  background-color:#99ff33;
  padding:20px;

  width:100%; /* The width is 20%, by default */
}
.quizGame {
  background-color:#000000;
  padding:20px;

  width:100%; /* The width is 20%, by default */
}
.subtitle{
  color:#0033cc;
}
img {
  border-radius: 50%;
}

/* Use a media query to add a break point at 800px: */
@media screen and (max-width:800px) {
  .left, .main, .right {
    width:100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
</style>
