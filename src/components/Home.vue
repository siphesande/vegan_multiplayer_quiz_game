<template>
  <transition name="fade">
    <div class="home" v-if="!secondplayer">
      <div class="inner">


      <div class="mult">
        <li>Test your Veganism Knowlegde with Quiz Game</li>
      </div>

      <div class="faq">
        <li>Play with your friends/vegans everywhere they are in the world</li>
      </div>

      <div class="destroy">
       <li>RESPOND TO 30 NON-VEGAN EXCUSES</li>
      </div>

      <div class="divOfsecondPlayerLink">
        <ul class="secondplayerLink">Invite a second player by sending them this link:<em> {{url}}</em></ul>

        <p>And Game will start automatically</p>
          <p>You are Team A</p>

      </div>


      </div>


      <div class="container">

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <img src="/static/av3.png" alt="Los Angeles" style="width:100%; border-radius: 50%;">
            </div>

            <div class="item">
              <img src="/static/av3.jpg" alt="Chicago" style="width:100%;">
            </div>

            <div class="item">
              <img src="/static/domi.jpg" alt="New york" style="width:100%;">
            </div>
            <div class="item">
              <img src="/static/av5.jpg" alt="New york" style="width:100%;">
            </div>
          </div>

          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>


    </div>
    <div class="play" v-if="secondplayer">

      <div>
        <!-- <div class="container" > -->
          <!-- <div class="quizGame">
          <h1><em>We Will Play Together</em></h1>
        </div> -->
            <!-- <p class="Rise"><em>We Will Rise Together</em></p> -->
          <div class="columns hamilton--inner">
            <div class="column is-half left">
              <!-- <p class="title">User 1</p> -->
              <p class="title">Team A</p>
              <p class="pigsbunny"  style="font-size:100%;">(Cute Piglets)</p>
            <img src="https://media.gettyimages.com/photos/piglets-on-grass-picture-id533964231?b=1&k=6&m=533964231&s=612x612&w=0&h=zd0IFTcF_0yy-sThJVnYImWeD8hy3uL4kqUDGUrKoJw=" id="teamimage1" alt="Cheetah!" width="100" height="50">
              <p class="subtitle" style="font-size:110%;">Total Score: {{playerdata.one.score}}</p>
            </div>
            <div v-if="secondplayer" class="column is-half right">
              <!-- <p class="title">User 2</p> -->
              <p class="title">Team B </p>
              <p class="pigsbunny"style="font-size:100%;">  (Bunny Rabbits)</p>
              <img src="https://media.gettyimages.com/photos/white-rabbits-xlarge-picture-id157619624?b=1&k=6&m=157619624&s=612x612&w=0&h=BWSa86P3MQHhR77DFOsGDNuJY6f1EcijFabtHj3KhbQ=" id="teamimage2"alt="Cheetah!" width="100" height="40">
              <p class="subtitle" style="font-size:110%;">Total Score: {{playerdata.two.score}}</p>
            </div>
          </div>

          <div class="hamilton--lyrics--text">
            <p>{{question.lyric}}
            </p>
            <div class="hamilton--answers">
              <a v-bind:class="{ 'wronganswer': hasAnswered && !item.correct, 'correctanswer': hasAnswered && item.correct}" @click="checkAnswer(item)" v-for="(item, index) in options">{{item.name}}</a>
            </div>
          </div>
        <!-- </div> -->
      </div>
    </div>
  </transition>

</template>

<script>
  import ChannelDetails from '@/components/ChannelDetails'
  const lyrics = [
    {
      lyric: 'What is Veganism?',
      options: [{name: 'lifestyle  of Avoiding Meat', correct: false}, {name: 'Veganism is Vegetarian', correct: false}, {name: 'Group of people that seek attention', correct: false}, {name: 'is the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.', correct: true}],
      answer: 'is the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.'
    },
    {
      lyric: 'Why you become Vegan?',
      options: [{name: 'I want to look sexy and attractive ', correct: false}, {name: 'I want live a long life', correct: false}, {name: 'Animals Are My Friends And I Do not Eat My Friends', correct: false}, {name: 'I can about Animals, Health and Environment', correct: true}, {name: 'Why you Eat meat?', correct: false}],
      answer: 'I care about Animals, Health and Environment'
    },
    {
      lyric: 'Veganism/Anonymous for the Voiceless is about: Animals * Health *  ______',
      options: [{name: 'Protests', correct: false}, {name: 'Food', correct: false}, {name: 'Environment', correct: true}, {name: 'Making meat eaters feel quilty', correct: false}],
      answer: 'Environment'
    },
    {
      lyric: 'Veganism is ______',
      options: [{name: 'Extreme', correct: false}, {name: 'Peaceful', correct: true}, {name: 'About Animals', correct: false}, {name: 'The Future', correct: false}],
      answer: 'Peaceful'
    },
    {
      lyric: 'Meat Eater: So you are vegan where do you get your Proteins?',
      options: [{name: 'The biggist miconception is that you need meat for proteins', correct: false}, {name: 'We get proteins from fish and eggs', correct: false}, {name: 'We get proteins from plants the original source of proteins', correct: true}, {name: 'From from the Sun', correct: false}],
      answer: 'We get proteins from plants the original source of proteins'
    },
    {
      lyric: 'Which documentary film that explores the impact of animal agriculture on the environment?',
      options: [{name: 'Cowspiracy: The Sustainability Secret ', correct: true}, {name: 'Earthlings', correct: false}, {name: 'Land of hope and glory', correct: false}, {name: 'Dominion', correct: false}, {name: 'What the health', correct: false}],
      answer: 'Cowspiracy: The Sustainability Secret'
    },
    {
      lyric: "Film that uncovers the secret to preventing and even reversing chronic diseases, and he investigates why the nation's leading health organizations doesn't want people to know about it",
      options: [{name: 'Vegan 2017', correct: false}, {name: 'Game Changers', correct: false}, {name: 'Lucid', correct: false}, {name: 'What the Heath', correct: true}, {name: 'PETA', correct: false}],
      answer: 'What the heath'
    },

    {
      lyric: 'In their ability to suffer, non-human animal are the same as us, they seek comfort, they seek safety and the seek _____',
      options: [{name: 'life free from pain', correct: true}, {name: 'Water', correct: false}, {name: 'More Food', correct: false}, {name: 'long life', correct: false}],
      answer: 'life free from pain'
    },
    {
      lyric: '____, these animals embody the mystery and wonder of consciousness. ____, they are not only in the world, they are aware of it. _____, they are the psychological centers of a life that is uniquely their own.!',
      options: [{name: 'Like us', correct: true}, {name: 'Like others', correct: false}, {name: 'Like God', correct: false}, {name: 'like Vegans', correct: false}],
      answer: 'Like us'
    },
    {
      lyric: 'Eat Eater: why you blame me for killing Animals, I do not kill animals, slaughterhouse worker and farmer do so?',
      options: [{name: 'We the ones that demanded meat and therefore we hired farmers and Slaughterhouse worker to kill animals. Supply and demand', correct: true}, {name: 'Yes you hired a hit-man', correct: false}, {name: 'Everyone that eat animals is guilty', correct: false}, {name: 'Meat is Murder', correct: false}],
      answer: 'We the ones that demanded meat and therefore we hired farmers and Slaughterhouse worker to kill animals. Supply and demand'
    },
    {
      lyric: '____ are my friends and I dont eat my friends?',
      options: [{name: 'Dogs', correct: false}, {name: 'Cows', correct: false}, {name: 'Humans', correct: false}, {name: 'Animals', correct: true}],
      answer: 'Animals'
    },
    {
      lyric: 'What are Animals Factory Farms?',
      options: [{name: 'Animal`s consentration camp', correct: false}, {name: 'Intensive Animal Farming', correct: false}, {name: 'Unmercyful production lines', correct: false}, {name: 'Intensive Animal Farming means that animals are crammed by the hundreds of thousands into filthy, windowless sheds: stuffed into wire cages, metal crates, and may other torturous devices', correct: true}],
      answer: 'Intensive Animal Farming means that animals are crammed by the hundreds of thousands into filthy, windowless sheds: stuffed into wire cages, metal crates, and may other torturous devices'
    },
    {
      lyric: 'It is ok kill animals if we use humane slaughter?',
      options: [{name: 'we we need to kill them fast and quick', correct: false}, {name: 'yes we need to show compassion and benevolence when', correct: false}, {name: 'No shoul be killing animals for food', correct: false}, {name: 'Nothing humane for killing someone that deos not want to die', correct: true}],
      answer: 'Nothing humane for killing someone that deos not want to die'
    },
    {
      lyric: 'Animals are With us not ___',
      options: [{name: 'for meat', correct: false}, {name: 'nature', correct: false}, {name: 'to be killed', correct: false}, {name: 'for us', correct: true}],
      answer: 'for us'
    },
    {
      lyric: 'The question is not, Can they reason?, nor Can they talk? but, ______?',
      options: [{name: 'Can they survive ', correct: false}, {name: 'Can they play', correct: false}, {name: 'Can they suffer', correct: true}, {name: 'Can they reproduce', correct: false}],
      answer: 'Can they suffer'
    },
    {
      lyric: 'Meat eater: Why you use words like Holocaust, Murder, Rape?',
      options: [{name: 'because you Murderer and rape animals', correct: false}, {name: 'because we are angry!', correct: false}, {name: 'I do not know!', correct: false}, {name: 'We call it like it is! like where when farmers put their hand on animals anus, doing Artificial insemination-that is rape', correct: true}],
      answer: 'We call it like it is! like where when farmers put their hand on animals anus, doing Artificial insemination-that is rape'
    },
    {
      lyric: 'Can you love animals and eat them?',
      options: [{name: 'Yes, as long you eat it when it old enough', correct: false}, {name: 'No because it can never be morally justified to take thier lives for food as we lie in a word where alternative are available', correct: false}, {name: 'if you love animals then by default the last thing you would ever want is to see their murdered body parts on a plate in front of you.', correct: true}, {name: 'animals are my friends so I do not eat my friends', correct: false}],
      answer: 'if you love animals then by default the last thing you would ever want is to see their murdered body parts on a plate in front of you.'
    },
    {
      lyric: 'Meat-eater: Eating animal products is my personal choice!',
      options: [{name: 'if someone makes the personal choice to abuse a dog, does that make it morally justifiable?', correct: true}, {name: 'yes I respect you choice', correct: false}, {name: 'chooses to be racist or a rapist actively chooses to commit rape.', correct: false}, {name: 'What about the choice of the victims/non-human aniimals?', correct: false}],
      answer: 'if someone makes the personal choice to abuse a dog, does that make it morally justifiable?'
    },
    {
      lyric: 'Meat eater:I like the taste and I couldn’t give it up',
      options: [{name: 'But you can eat vegans foods that taste like meat', correct: false}, {name: 'do you value your taste buds higher than the life of an animal?', correct: true}, {name: 'Eating meat is murder', correct: false}, {name: 'I also the  like the taste of meat buy I choose not to eat it', correct: false}],
      answer: 'do you value your taste buds higher than the life of an animal?'
    },
    {
      lyric: 'Non-vegans: But other animals eat other animals',
      options: [{name: 'Whether they eat other or not, we do not care. We just want people to be vegans', correct: false}, {name: 'So what?', correct: false}, {name: 'wild animals kill each other, does that mean it is morally justifiable for humans to kill each other just because some wild animals do?', correct: true}],
      answer: 'wild animals kill each other, does that mean it is morally justifiable for humans to kill each other just because some wild animals do?'
    },
    {
      lyric: 'Non-vegan excuse: We need to eat animal products for nutrition',
      options: [{name: 'It is 2018, we do not need to eat animals', correct: false}, {name: 'eating meat causes cancer', correct: false}, {name: 'If you eat meat you will die young', correct: false}, {name: 'It is act of unnecessary cruelty because all nutrients we can get from plant. Who should watch: What the heath?. movie', correct: true}],
      answer: 'It is act of unnecessary cruelty because all nutrients we can get from plant. Who should watch: What the heath?. movie'
    },
    {
      lyric: 'meat eater excuse:"Eating animals is traditinal and cultural"',
      options: [{name: 'You can not kill someone who wants to live in a compassionate and kind way', correct: false}, {name: 'The Yulin dog meat festival is traditional, does that make it okay to butcher and kill dogs and cats?', correct: true}, {name: 'should culture dedact morality?', correct: false}, {name: 'yes its cultural', correct: false}],
      answer: 'The Yulin dog meat festival is traditional, does that make it okay to butcher and kill dogs and cats?'
    },
    {
      lyric: 'Non-vegan excuse/justification: Our ancestors ate animals/we evolved by eating animals',
      options: [{name: 'Yes they ate animals and got sick and died', correct: false}, {name: 'That`s interesting', correct: false}, {name: 'if it’s morally justifiable to eat animals because our ancestors used to do it, does that not mean that it must also be morally justifiable to murder each other, as our ancestors use to do that as well?', correct: true}, {name: 'our ancestors evolved from Apes', correct: false}],
      answer: 'if it’s morally justifiable to eat animalsbecause our ancestors used to do it, does that not mean that it must also be morally justifiable to murder each other, as our ancestors use to do that as well?'
    },
    {
      lyric: 'If we did not eat Animals they would overrun us or go extinct',
      options: [{name: 'the world isn’t going to go vegan overnight and it will instead be a gradual process over a long period, this means that as more and more people go vegan, less and less animals will be bred in proportion with the rise of veganism', correct: true}, {name: 'No the will not because first we gonna eat all animals and go vegan after that', correct: false}, {name: 'Yes they will!', correct: false}],
      answer: 'the world isn’t going to go vegan overnight and it will instead be a gradual process over a long period, this means that as more and more people go vegan, less and less animals will be bred in proportion with the rise of veganism'
    },
    {
      lyric: 'Human rights issues are more important',
      options: [{name: 'How does the fact that there is war in the Middle East or people living homeless make it acceptable for you to pay someone else to kill and butcher an animal?', correct: false}, {name: 'Do you think it’s strange that we have enough food to feed 56 billion land animals every year, yet there are 800 million people currently living in a state of starvation?', correct: false}, {name: 'All of the above', correct: true}],
      answer: 'All of the above'
    },
    {
      lyric: 'Plants feel pain',
      options: [{name: 'Yes they feel pain because they are living organisms', correct: false}, {name: 'A plant lacks a central nervous system, pain receptors and a brain which means that anatomically they don’t have the ability to feel pain.', correct: true}, {name: 'Does that justify the killing of animal?', correct: false}],
      answer: 'A plant lacks a central nervous system, pain receptors and a brain which means that anatomically they don’t have the ability to feel pain.'
    },
    {
      lyric: "Excuse from meat eater: Animals don’t feel pain & don't suffer the same as we do",
      options: [{name: 'Can they survive ', correct: false}, {name: 'Can they play', correct: false}, {name: 'Can they suffer', correct: true}, {name: 'Can they reproduce', correct: false}],
      answer: 'animals are in pain they act correspondingly, showing unusual behavioural traits like rocking back and forth, emitting distress calls and changes in the rate and depth of breathing, such as panting. Humans in pain also display these behaviours'
    },
    {
      lyric: "Carnist: It's the food chain",
      options: [{name: 'The food chains in nature exist because they have to. The predator needs to kill the prey to survive. We don’t have to kill anyone to live ', correct: true}, {name: 'are we at the top of food chain', correct: false}, {name: 'Humans do not have to kill animals because we herbevores', correct: false}],
      answer: 'The food chains in nature exist because they have to. The predator needs to kill the prey to survive. We don’t have to kill anyone to live'
    },
    {
      lyric: "We're more intelligent",
      options: [{name: 'Does intelligence define worth of life?”', correct: false}, {name: 'Is your life worth more than someone who has learning difficulties?', correct: false}, {name: 'If intelligence equals dominance does that mean that anyone with a high IQ can do what they want to someone with a lower IQ?”', correct: false}, {name: 'Worth of life can not be detected by the nortion of intelligence by instead is equel among all living beings', correct: false}, {name: 'All of the above', correct: true}],
      answer: 'All of the above'
    },
    {
      lyric: 'We’re doing animals a favour by giving them a life',
      options: [{name: 'If a child is born into an abusive family, where he or she is regularly beaten, is never fed and eventually dies from all the abuse, would we think “well at least that child’s parents gave them a chance to experience life?” ', correct: true}, {name: 'Animals are where for us but with us', correct: false}, {name: 'We do have to bred animals to existence', correct: false}],
      answer: 'If a child is born into an abusive family, where he or she is regularly beaten, is never fed and eventually dies from all the abuse, would we think “well at least that child’s parents gave them a chance to experience life?” '
    },
    {
      lyric: 'Can’t we just improve the lives of animals?',
      options: [{name: 'Yes let us end Factory faming and promote old school traditional farming', correct: false}, {name: 'Yes animals should not be treated as objects', correct: false}, {name: 'it doesn’t matter what privilege or treatment the animals receive, if they are destined to be killed, exploited or abused in anyway then there is no ethical or humane way in which to treat these animals', correct: true}, {name: '?', correct: false}],
      answer: 'It doesn’t matter what privilege or treatment the animals receive, if they are destined to be killed, exploited or abused in anyway then there is no ethical or humane way in which to treat these animals'
    },
    {
      lyric: 'Morality is subjective',
      options: [{name: 'Morality should not be dedact by culture', correct: false}, {name: 'yes we stronger than animals so we must kill them for food', correct: false}, {name: 'Morality is not subjective', correct: false}, {name: 'If you believe morality is subjective, would it therefore be acceptable for someone to murder their partner?', correct: true}],
      answer: 'If you believe morality is subjective, would it therefore be acceptable for someone to murder their partner?'
    },
    {
      lyric: 'Everything in moderation',
      options: [{name: 'Yes, we should eat less meat', correct: false}, {name: 'Let us eat meat that comes from good farms not from Factory farms', correct: false}, {name: 'If something is bad for you, it’s bad for you. It doesn’t matter if you consume a lot or a little', correct: true}],
      answer: 'If something is bad for you, it’s bad for you. It doesn’t matter if you consume a lot or a little'
    },
    {
      lyric: 'Malzoan: What if you were stranded on a desert island?',
      options: [{name: 'Yes kill animal so that you survive', correct: false}, {name: 'That will never happen, please be realistic!', correct: false}, {name: 'The reality is, we are not stuck on a desert island and therefore we do not need to kill and eat an animal out of necessity', correct: true}],
      answer: 'The reality is, we are not stuck on a desert island and therefore we do not need to kill and eat an animal out of necessity'
    },
    {
      lyric: 'Can not be 100% vegan?',
      options: [{name: 'there morally a difference between an animal accidentally being killed in crop production and an animal purposefully being killed in a slaughterhouse?', correct: true}, {name: 'Yes It is impossible to 100% vegan', correct: false}, {name: 'I agree with you let us only eat meat once a week', correct: false}],
      answer: 'there morally a difference between an animal accidentally being killed in crop production and an animal purposefully being killed in a slaughterhouse?'
    },
    {
      lyric: 'Vegetarian: Isn’t being vegetarian enough?',
      options: [{name: 'Being vegetarian quite simply isn’t enough', correct: false}, {name: 'In the egg industry male chicks are a useless byproduct and they serve no use to the industry. So as soon as they are hatched they are thrown by the thousands into industrial grinders where they are minced apart, or they are gassed alive.', correct: false}, {name: 'The dairy industry is equally disgusting, like male chicks, newborn male calves are useless to dairy farmers and so they are taken away from their mothers normally within 24 - 72 hours of birth,', correct: false}, {name: 'All of the above', correct: true}],
      answer: 'All of the above'
    },
    {
      lyric: 'Hitler was a vegetarian/I once knew a vegan who wasn’t very nice',
      options: [{name: 'Chairman Mao, Mussolini and Stalin all ate meat and committed unforgivable crimes.', correct: false}, {name: 'actually Hitler wasn’t a vegetarian, but even if he was how does that morally justify you eating animals and their secretions', correct: true}, {name: 'some of these ideas cameabout because Goebbels wanted to make Hitler seem likeable by creating comparisons between him and Gandhi, who was a vegetarian.', correct: false}, {name: 'remind them that you are vegan, not vegetarian', correct: false}],
      answer: 'actually Hitler wasn’t a vegetarian, but even if he was how does that morally justify you eating animals and their secretions?'
    },
    {
      lyric: 'What About farmer`s jobs?',
      options: [{name: 'Farmers should die of hunger ', correct: false}, {name: 'We do not care About farmer', correct: false}, {name: 'Farmers should go to ubarn areas/cities/town', correct: false}, {name: 'farmers can switch to arable farming and produce only plants', correct: true}],
      answer: 'farmers can switch to arable farming and produce only plants'
    },
    {
      lyric: 'Non vegans: It is the circle of life',
      options: [{name: 'You are like the Nates', correct: false}, {name: 'Why yes meat eater you so have so much disconnect', correct: false}, {name: 'by the logic that we are morally justified to slaughter animals because all life dies anyway, would it therefore be acceptable for me to cut the throat of a dog?', correct: true}, {name: 'People have been killing one another Since the beginning of times deos that make it moral', correct: false}],
      answer: 'by the logic that we are morally justified to slaughter animals because all life dies anyway, would it therefore be acceptable for me to cut the throat of a dog?'
    },
    {
      lyric: 'Malzoan: Animals are bred for a purpose',
      options: [{name: 'Yes It can never be justified king pets', correct: false}, {name: 'We should not even bred animals', correct: false}, {name: 'Animals are like us', correct: false}, {name: 'Is dog fighting therefore moral if the dogs were bred with the purpose to fight?', correct: true}],
      answer: 'Is dog fighting therefore moral if the dogs were bred with the purpose to fight?'
    },
    {
      lyric: 'Soya farming is destroying the environment',
      options: [{name: 'you’re right, soya farming is destructive for the environment, but did you know that over 85% of the soya grown is fed to livestock animals? It’s because of animal agriculture that soya is currently so destructive.', correct: true}, {name: 'Non vegans also eat soy/soya', correct: false}, {name: 'Soya is mostly eaten by Vegans', correct: false}],
      answer: 'you’re right, soya farming is destructive for the environment, but did you know that over 85% of the soya grown is fed to livestock animals? It’s because of animal agriculture that soya is currently so destructive.'
    },
    {
      lyric: 'Meat eater: We‘re omnivores with Canine teeth',
      options: [{name: 'Our Canine are smaller', correct: false}, {name: 'Yes we have evolved now we are omnivores', correct: false}, {name: 'if we are natural omnivores, which means that by default we cansurvive only on plants, how do we then morally justify taking the life of an animal as by your own admission it is unnecessary?.', correct: true}, {name: 'Canine teeth proves that humans are Carnivore and therefore should eat animals', correct: false}],
      answer: 'if we are natural omnivores, which means that by default we cansurvive only on plants, how do we then morally justify taking the life of an animal as by your own admission it is unnecessary?.'
    },
    {
      lyric: 'Excuses from non vegans: God says that we can eat animals',
      options: [{name: 'There is no God', correct: false}, {name: 'God is a liar', correct: false}, {name: 'if we don’t have to kill God’screatures do you not think a kind, compassionate, benevolent God would rather that we didn’t?.', correct: true}, {name: 'Are you serious?', correct: false}],
      answer: 'if we don’t have to kill God’screatures do you not think a kind, compassionate, benevolent God would rather that we didn’t?.'
    },
    {
      lyric: 'My friends and family will not like it if I go Vegan',
      options: [{name: 'Do it for animals and do not try to inpress or please for friends and family', correct: false}, {name: 'Whether they like it or not, just forget about them!', correct: false}, {name: 'nobody should ever let the opinions of others stop them from following a way of life that is morally right.', correct: true}],
      answer: 'nobody should ever let the opinions of others stop them from following a way of life that is morally right.'
    },
    {
      lyric: 'What is Speciesism',
      options: [{name: 'It is a Dominion is one species over another', correct: false}, {name: 'It is when earthling kill another earthling', correct: false}, {name: 'It is an attitute of showing baise in favour of the interest of ones species against others species', correct: true}],
      answer: 'It is an attitute of showing baise in favour of the interest of ones species against interest of others species'
    },
    {
      lyric: 'Which Religion is Veganism?',
      options: [{name: 'Christianity', correct: false}, {name: 'Islam', correct: false}, {name: 'Buddhism', correct: false}, {name: 'None of the Above', correct: true}],
      answer: 'None of the Above'
    },
    {
      lyric: 'Are vegans deficient in vitamin b12?',
      options: [{name: 'We can survive without b12', correct: false}, {name: 'B12 is not produced by any large organism. There is a common myth that it is produced by animals. It is not.', correct: false}, {name: 'B12 is made by anaerobic microorganisms. Anaerobic bacteria are common in the gastrointestinal tract of animals.Meat eater also need B12', correct: true}, {name: 'None of the Above', correct: false}],
      answer: 'B12 is made by anaerobic microorganisms. Anaerobic bacteria are common in the gastrointestinal tract of animals.Meat meater also need B12'
    },
    {
      lyric: 'What are Earthlings',
      options: [{name: 'Earthlings are non human animals', correct: false}, {name: 'Since we all inhabit the Earth, all of us are considered earthlings. There is no sexism, no racism, or speciesism in the term earthling. It encompasses each and every one of us, warm or cold-blooded, mammal, vertebrae or invertebrate, bird, reptile, amphibian, fish, and human alike.', correct: true}, {name: 'Earthlings are Aliens', correct: false}, {name: 'None of the Above', correct: false}],
      answer: 'Since we all inhabit the Earth, all of us are considered earthlings. There is no sexism, no racism, or speciesism in the term earthling. It encompasses each and every one of us, warm or cold-blooded, mammal, vertebrae or invertebrate, bird, reptile, amphibian, fish, and human alike.'
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
            // document.getElementByClassName('thetime').classList.add('mystyle')
            this.secondplayer = true
            this.playerdata.two.id = members.myID
            this.playerdata.two.userid = 2
            this.userid = 2
          } else {
            alert('This channel has been taken, only two players needed!!')
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
    /*padding-top: 20px;*/
    align-items: center;
    /*justify-content: center;*/
    /*height: 85vh;*/
    width: 100%;
    margin-top: 1px;
  }
  /*transition {
    position: fixed;
  }*/
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
    margin-top: 1px;
    padding-top: 1px;


  }
  .hamilton--inner {
    margin-top: 0px;
    margin-left: 1px;
    margin-bottom: 0px;
    padding-right: 4px;
    /*overflow:scroll;*/
    /*white-space:nowrap;
    text-wrap:no-wrap;*/

    /*margin: auto;*/
    /*display: block;*/

  }
  .hamilton--inner .left{
    display:inline-block;
    text-align: left;
    margin-top: 0px;
    padding-top: 0px;
    margin-bottom:0px;
    padding-bottom:0px;


  }
  .hamilton--inner .right{
    display:inline-block;
    text-align: right;
    margin-top: 0px;
    padding-top: 0px;
    margin-bottom:0px;
    padding-bottom:0px;


  }
  .title {
    font-weight: bold;
    color: #ff66cc;
    padding-bottom:0px;
    margin: 1px;
  }
  .Rise{
    color: #0066ff
  }
  .hamilton--lyrics--text {
    width: 600px;
    margin: 0 auto;
    margin-top: 1px;
    padding-top: 4px;
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
  padding:4px;

  width:100%; /* The width is 20%, by default */
}

.faq {
  background-color:#666633;
  padding:2px;

  width:100%; /* The width is 60%, by default */
}

.destroy {
  background-color:#ff0000;
  padding:4px;

  width:100%; /* The width is 20%, by default */
}
.divOfsecondPlayerLink {
  background-color:#99ff33;
  padding:20px;
  /*height: 2px;*/
  width:100%; /* The width is 20%, by default */
}

.quizGame {
  background-color:#000000;
  padding:15px;

  width:100%; /* The width is 20%, by default */
}
.subtitle{
  color:#0033cc;
}
#teamimage1{
  border-radius: 10%;
}
#teamimage2{
  border-radius: 10%;
}
img {
  /*border-radius: 50%;*/
  padding-top:1px;
}

/* Use a media query to add a break point at 800px: */
@media screen and (max-width:600px) {

    .hamilton--lyrics--text{
      margin:0;
      padding:0;
      max-width: 90%;
      margin-right: 0px;
      padding-right:0px;


  }
  .hamilton--lyrics--text p {
    font-weight: bold;
    text-align: center;
  }
  .hamilton--answers a{
    display: block;
    border: 3px solid white;
    border-radius: 50px;
    margin: 15px auto;
    width: 450px;
    padding: 1px;
    text-align: center;
  }

}

@media screen and (max-width:800px) {
  .quizGame {

    width:80%; /* The width is 20%, by default */
  }


}


@media screen and (max-width:420px) {




  .title {
    top :0;

  }


  .hamilton--inner .left{
    display:inline-block;
    text-align: left;
    margin-top: 0px;
    padding-top: 0px;
    margin-bottom:0px;
    padding-bottom:0px;



  }
  .hamilton--inner .right{
    display:inline-block;
    text-align: right;
    margin-top: 0px;
    padding-top: 0px;
    margin-bottom:0px;
    padding-bottom:0px;



  }
  .subtitle {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .hamilton--header--text {
    margin-top: 1px;
    padding-top: 1px;
    padding-left:0px;
    padding-right:0px;

  }
  .container {
    margin-top: 0px;
    padding-top: 0px;
    padding-left:0px;
    padding-right:0px;

  }


.pigsbunny {

  top :0;
  bottom: 0;
  margin-bottom: 0px;
  padding-bottom: 0px;

  }
  #teamimage1 {
    margin-top:0px;
    padding: 0;
  }
  .hamilton--answers{
    max-width: 90%;
    margin-right: 0px;
    padding-right:0px;
    position: relative;
    padding-top: 0px;
  }

  .hamilton--lyrics--text{
    margin:0;
    padding:0;
    max-width: 100%;
    padding-top: 0px;
    margin-right: 0px;
    padding-right:0px;

  }
  .hamilton--lyrics--text p {
    font-weight: bold;
    text-align: center;
  }
  .hamilton--answers a{
    display: block;
    border: 3px solid white;
    border-radius: 50px;
    margin: 10px auto;
    width: 400px;
    padding: 1px;
    text-align: center;
  }



  .mult{
    margin-top: 0px;

  }
  .hamilton--inner {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0;
    padding-bottom: 0;
    /*overflow:scroll;
    white-space:nowrap;
    text-wrap:no-wrap;*/
  }




}



</style>
