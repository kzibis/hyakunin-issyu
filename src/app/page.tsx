"use client"
import { SetStateAction, useState } from "react";
import {Input} from "@nextui-org/react";

export default function Home() {
  const [inputId, setInputId] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [displayTextOriginal, setDisplayTextOriginal] = useState('');

  // Handle input change
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
      setInputId(event.target.value);
  };

  // Find text by ID
  const handleDisplay = () => {
      const item = data.find((item) => item.id === parseInt(inputId));
      setDisplayText(item ? item.text : "Text not found.");
      setDisplayTextOriginal(item ? item.original : "Text not found.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-3/5 mx-auto">
        <div className="text-center">
            <h2 className="font-bold mb-4">Enter the number</h2>
            <Input
                placeholder="Enter ID"
                value={inputId}
                onChange={handleChange}
                className="rounded w-24 mx-auto"
            />
            <button
                onClick={handleDisplay}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Search the translation
            </button>
            {displayText && (
                <>
                  <div className="mt-10 text-3xl font-bold">
                      {displayText}
                  </div>
                  <div className="mt-10 text-3xl font-bold">
                      {displayTextOriginal}
                  </div>
                </>
            )}
        </div>
    </div>
  );
}

const data = [
  {
      "id": 0+1,
      "text": "The roof cover of the temporary shed for harvest in autumn is so rough that my sleeves are getting wet and wet with dewdrops.",
      "original": "あきのたの　かりほのいほの　とまをあらみ　わがころもでは　つゆにぬれつつ"
  },
  {
      "id": 1+1,
      "text": "It seems spring has passed and summer has come.  You can see the white clothes aired on Mt. Amano Kaguyama, which is said to be aired them on in.",
      "original": "はるすぎて　なつきにけらし　　しろたへの　ころもほすてふ　あまのかぐやま"
  },
  {
      "id": 2+1,
      "text": "It's not interesting to sleep alone such a long night in autumn as a Japanese pheasant's train.",
      "original": "あしびきの　やまどりのをの　しだりをの　ながながしよを　ひとりかもねむ"
  },
  {
      "id": 3+1,
      "text": "When I came to Tagonoura, I got moved to see the white high peak of Mt. Fuji being covered and covered with snow.",
      "original": "たごのうらに　うちいでてみれば　しろたへの　ふじのたかねに　ゆきはふりつつ"
  },
  {
      "id": 4+1,
      "text": "How lonely autumn is when a deer calls his wife plodding on the ground covered with maple leaves in the mountains.",
      "original": "おくやまに　もみぢふみわけ　なくしかの　こゑきくときぞ　あきはかなしき"
  },
  {
      "id": 5+1,
      "text": "Oh, it has grown so late at night, seeing the frost on the bridge in the imperial Court, the legendary bridge magpie spans the Milky Way, brightening whitely!",
      "original": "かささぎの　わたせるはしに　おくしもの　しろきをみれば　よぞふけにける"
  },
  {
      "id": 6+1,
      "text": "Looking up at the sky, the moon is out, which used to be on Mt. Mikasa in my hometown.  Oh, I miss it!",
      "original": "あまのはら　ふりさけみれば　かすがなる　みかさのやまに　いでしつきかも"
  },
  {
      "id": 7+1,
      "text": "My hermitage is in the southeast of the capital, where I live quietly like this, but people call it Mt. Uji for the life escaping from this world, taking it bitter.",
      "original": "わがいほは　みやこのたつみ　しかぞすむ　よをうぢやまと　ひとはいふなり"
  },
  {
      "id": 8+1,
      "text": "My figure has declined in grace while I was lost in thought of love and variety of things in the world, as well as the color of cherry blossoms has faded while I was lost in thought to no purpose with this long rain.",
      "original": "はなのいろは　うつりにけりな　いたづらに　わがみよにふる　ながめせしまに"
  },
  {
      "id": 9+1,
      "text": "This is literally Ousaka Barrier, where, both acquaintances and strangers, leaving and coming back, meet and part from each other.",
      "original": "これやこの　いくもかへるもわかれては　しるもしらぬも　あふさかのせき"
  },
  {
      "id": 10+1,
      "text": "Fishing boats, please tell the people in Kyoto I miss that I have just sailed for many islands beyond the sea.",
      "original": "わたのはら　やそしまかけて　こぎいでぬと　ひとにはつげよ　あまのつりぶね"
  },
  {
      "id": 11+1,
      "text": "The wind on the sky, blow and block the way to heaven through clouds.  I'd like these girls like angles, dancing Gosechi, to stay here a little more.",
      "original": "あまつかぜ　くものかよひぢ　ふきとぢよ　をとめのすがた　しばしとどめむ"
  },
  {
      "id": 12+1,
      "text": "My love has got deep enough to make a pool now, as well as the drops from the peak of Mt. Tsukuba make a deep pool in Minano River.",
      "original": "つくばねの　みねよりおつる　みなのがは　こひぞつもりて　ふちとなりぬる"
  },
  {
      "id": 13+1,
      "text": "My mind is confused like the pattern of Sinobumozizuri in Michinoku.  Whose fault is it that it has begun?  Not mine but yours.",
      "original": "みちのくの　しのぶもぢずり　たれゆゑに　みだれそめにし　われならなくに"
  },
  {
      "id": 14+1,
      "text": "For you, my dear, I went out to the  field and picked green herbs, then it snowed and snowed on my sleeves.",
      "original": "きみがため　はるののにいでて　わかなつむ　わがころもでに　ゆきはふりつつ"
  },
  {
      "id": 15+1,
      "text": "I'll leave you now but I'll come back immediately when I hear you are waiting for me like the name of pines growing on the top of Mt. Inaba.",
      "original": "たちわかれ　いなばのやまの　みねにおふる　まつとしきかば　いまかへりこむ"
  },
  {
      "id": 16+1,
      "text": "Water of Tatsuta River was tie-dyed scarlet by maple leaves...?  I would never hear such a thing even in the era of God when strange things often happened.",
      "original": "ちはやぶる　かみよもきかず　たつたがは　からくれなゐに　みづくくるとは"
  },
  {
      "id": 17+1,
      "text": "I'm wondering why I should go to see you in secret even in my dream at night(=yoru), the word of dashing(=yoru) waves against Suminoe Beach?",
      "original": "すみのえの　きしによるなみ　よるさへや　ゆめのかよひぢ　ひとめよくらむ"
  },
  {
      "id": 18+1,
      "text": "Do you tell me to spend my life without seeing you even in such a short time as between joints of a reed in Naniwagata?",
      "original": "なにはがた　みじかきあしの　ふしのまも　あはでこのよを　すぐしてよとや"
  },
  {
      "id": 19+1,
      "text": "It is same to be annoyed like this as to ruin myself.  I want to see you now even if it consumes me, like the word \"miotsukushi\" in Naniwa.",
      "original": "わびぬれば　いまはたおなじ　なにはなる　みをつくしても　あはむとぞおもふ"
  },
  {
      "id": 20+1,
      "text": "I have seen the morning moon after I waited long at night in September, simply because you said you would come and see me soon.",
      "original": "いまこむと　いひしばかりに　ながつきの　ありあけのつきを　まちいでつるかな"
  },
  {
      "id": 21+1,
      "text": "Plants in autumn wither as soon as the wind blows from mountains.  Oh, I see, that's why we call the wind from mountains \"storm\" probably.",
      "original": "ふくからに　あきのくさきの　しをるれば　むべやまかぜを　あらしといふらむ"
  },
  {
      "id": 22+1,
      "text": "I have lots to feel sad for, seeing the moon, autumn never comes only to make me sad, though.",
      "original": "つきみれば　ちぢにものこそ　かなしけれ　わがみひとつの　あきにはあらねど"
  },
  {
      "id": 23+1,
      "text": "This trip, the scene of maple leaves is so beautiful that I can't offer nusa(=offerings to God).  Please receive the splendor of colored maple leaves on Mt. Tamuke as God likes.",
      "original": "このたびは　ぬさもとりあへず　たむけやま　もみぢのにしき　かみのまにまに"
  },
  {
      "id": 24+1,
      "text": "If sane(=sleep)-kazura on Mt. Ou(=see)saka really has the meaning of the name \"seeing and sleeping\", I wish I had a way to come and see you in secret hauling in the vine.",
      "original": "なにしおはば　あふさかやまの　さねかづら　ひとにしられで　くるよしもがな"
  },
  {
      "id": 25+1,
      "text": "If the maple leaves on Mt. Ogura have hearts, I'd like to make them to be as beautiful as they are until next Emperor's pilgrimage.",
      "original": "をぐらやま　みねのもみぢば　こころあらば　いまひとたびの　みゆきまたなむ"
  },
  {
      "id": 26+1,
      "text": "Like the name of Izumi River gushing out from Mikanohara and flowing like dividing it, when did I see her and why I miss her so much (though I have never seen her)?",
      "original": "みかのはら　わきてながるる　いづみがは　いつみきとてか　こひしかるらむ"
  },
  {
      "id": 27+1,
      "text": "Thinking of visitors having disappeared and leaves and grass having been withered, I feel more lonely in a mountain village in winter.",
      "original": "やまざとは　ふゆぞさびしさ　まさりける　ひとめもくさも　かれぬとおもへば"
  },
  {
      "id": 28+1,
      "text": "I'm wondering if I could pick the white chrysanthemun by guesswork.  The first frost of the year has turned the view white, so it is hard to tell them apart snow...",
      "original": "こころあてに　をらばやをらむ　はつしもの　おきまどはせる　しらぎくのはな"
  },
  {
      "id": 29+1,
      "text": "Since you said good-bye to me with a cold air like the morning moon, nothing has been bitter for me to see than daybreak.",
      "original": "ありあけの　つれなくみえし　わかれより　あかつきばかり　うきものはなし"
  },
  {
      "id": 30+1,
      "text": "When it began to break, Yoshino was covered with snow so beautifully that I thought it lightened by the morning moon.",
      "original": "あさぼらけ　ありあけのつきと　みるまでに　よしののさとに　ふれるしらゆき"
  },
  {
      "id": 31+1,
      "text": "The weir built in a mountain stream by the wind was maple leaves, staying not flowing away.",
      "original": "やまがはに　かぜのかけたる　しがらみは　ながれもあへぬ　もみぢなりけり"
  },
  {
      "id": 32+1,
      "text": "I'm wondering why cherry blossoms are going to fall in a flurry on such a  day with sunlight calm and mild.",
      "original": "ひさかたの　ひかりのどけき　はるのひに　しづこころなく　はなのちるらむ"
  },
  {
      "id": 33+1,
      "text": "Who on earth can be my friend?  There is nothing as old as I except the pine trees in Takasago, which are not my old friends either.",
      "original": "たれをかも　しるひとにせむ　たかさごの　まつもむかしの　ともならなくに"
  },
  {
      "id": 34+1,
      "text": "Dear proprietor, I don't know whether you've changed your mind, but only the plum blossoms are in glorious bloom as ever in my hometown.",
      "original": "ひとはいさ　こころもしらず　ふるさとは　はなぞむかしの　かににほひける"
  },
  {
      "id": 35+1,
      "text": "night is so short that the day breaks while you think it in the evening.  I'm wondering where the moon is staying.",
      "original": "なつのよは　まだよひながら　あけぬるを　くものいづこに　つきやどるらむ"
  },
  {
      "id": 36+1,
      "text": "How beautiful the fields in autumn with the dewdrops on the grass scattering like unchained beads windblown constantly are!",
      "original": "しらつゆに　かぜのふきしく　あきののは　つらぬきとめぬ　たまぞちりける"
  },
  {
      "id": 37+1,
      "text": "I never think it is bitter for me that you are forgetting me, or rather, I'm sorry you must die incurred the punishment of heaven because you have broken the promise you swore by God.",
      "original": "わすらるる　みをばおもはず　ちかひてし　ひとのいのちの　をしくもあるかな"
  },
  {
      "id": 38+1,
      "text": "I've been enduring like the word \"shino(=endure)\" of shino fields with chigaya, where bamboos are growing, but why do I miss you so much as well as the fields are going full of dewdrops on shino leaves?",
      "original": "あさぢふの　をののしのはら　しのぶれど　あまりてなどか　ひとのこひしき"
  },
  {
      "id": 39+1,
      "text": "I have been concealing my love but my face has betrayed it so much that people ask me now whether I'm in love.",
      "original": "しのぶれど　いろにいでにけり　わがこひは　ものやおもふと　ひとのとふまで"
  },
  {
      "id": 40+1,
      "text": "There is already a grapevine that I'm in love, I have just begun to be in love with her in secret, though.",
      "original": "こひすてふ　わがなはまだき　たちにけり　ひとしれずこそ　おもひそめしか"
  },
  {
      "id": 41+1,
      "text": "We have promised, squeezing our sleeves wet with tears each other, that our mind will never change as well as the wave never goes over Mt. Suenomatsu, haven't we?",
      "original": "ちぎりきな　かたみにそでを　しぼりつつ　すゑのまつやま　なみこさじとは"
  },
  {
      "id": 42+1,
      "text": "My love to you could be nothing, compared with that after I met and slept with you.",
      "original": "あひみての　のちのこころに　くらぶれば　むかしはものを　おもはざりけり"
  },
  {
      "id": 43+1,
      "text": "If I would never see you, on the contrary, I would not have a grudge against you and myself.",
      "original": "あふことの　たえてしなくは　なかなかに　ひとをもみをも　うらみざらまし"
  },
  {
      "id": 44+1,
      "text": "I don't think anyone would feel pity for my lost love, so I will have to die in vain.",
      "original": "あはれとも　いふべきひとは　おもほえで　みのいたづらに　なりぬべきかな"
  },
  {
      "id": 45+1,
      "text": "My love is wondering, not knowing where and how it is going, as well as a boatman sailing over Yura Strait is drifting about in the sea, having lost his rudder.",
      "original": "ゆらのとを　わたるふなびと　かぢをたえ　ゆくへもしらぬ　こひのみちかな"
  },
  {
      "id": 46+1,
      "text": "Only autumn has come as ever to this lonely house with weeds growing thickly, where anyone wouldn't come.",
      "original": "やへむぐら　しげれるやどの　さびしきに　ひとこそみえね　あきはきにけり"
  },
  {
      "id": 47+1,
      "text": "These days I have been lost in thought with my heart breaking to pieces alone because she is not interested in me, as well as a wave beats against a rock but it breaks to pieces alone with a fierce wind.",
      "original": "かぜをいたみ　いはうつなみの　おのれのみ　くだけてものを　おもふころかな"
  },
  {
      "id": 48+1,
      "text": "My love annoys me every day, burning at night and going out in the day like bonfires made by guards of gates in Court.",
      "original": "みかきもり　ゑじのたくひの　よるはもえ　ひるはきえつつ　ものをこそおもへ"
  },
  {
      "id": 49+1,
      "text": "I didn't afraid of giving my life to see you, but now I would like to live longer to see you.",
      "original": "きみがため　をしからざりし　いのちさへ　ながくもがなと　おもひけるかな"
  },
  {
      "id": 50+1,
      "text": "I can't tell you even I am in love with you like this, so you can't know my love is burning like sashi-mogusa on Mt. Ibuki.",
      "original": "かくとだに　えやはいぶきの　さしもぐさ　さしもしらじな　もゆるおもひを"
  },
  {
      "id": 51+1,
      "text": "I know it goes dark and I can see you again, still, I can't help feeling sorry when the day breaks.",
      "original": "あけぬれば　くるるものとは　しりながら　なほうらめしき　あさぼらけかな"
  },
  {
      "id": 52+1,
      "text": "You don't know how long the night is when I sleep alone missing you until dawn, do you?",
      "original": "なげきつつ　ひとりねるよの　あくるまは　いかにひさしき　ものとかはしる"
  },
  {
      "id": 53+1,
      "text": "You told me you'd never forget me but it is difficult for you not to change your mind forever so I would rather die today when I'm happy.",
      "original": "わすれじの　ゆくすゑまでは　かたければ　けふをかぎりの　いのちともがな"
  },
  {
      "id": 54+1,
      "text": "Though it has passed long since the waterfall lost the water and the sound, only the name has been known and is heard even now.",
      "original": "たきのおとは　たえてひさしく　なりぬれど　なこそながれて　なほきこえけれ"
  },
  {
      "id": 55+1,
      "text": "I'm going to die, so I want to see you once again to make a good memory to comfort me in heaven.",
      "original": "あらざらむ　このよのほかの　おもひでに　いまひとたびの　あふこともがな"
  },
  {
      "id": 56+1,
      "text": "I met you by chance but you hurried back before I don't make sure that you are my old friend, as well as the midnight moon I came across disappeared behind a cloud before I recognize it.",
      "original": "めぐりあひて　みしやそれとも　わかぬまに　くもがくれにし　よはのつきかな"
  },
  {
      "id": 57+1,
      "text": "When the wind blows in Inano bamboo plains near Mt. Arima, it rustles in the bamboo leaves.  That's it.  (It is you that is unreliable though you say I'm not reliable.)  How can I forget you?, I'll never forget you.",
      "original": "ありまやま　ゐなのささはら　かぜふけば　いでそよひとを　わすれやはする"
  },
  {
      "id": 58+1,
      "text": "Probably I went to bed without hesitation if you had not given me a promise, but the day has broken and I have seen the moon sinking down to the sky in the west.",
      "original": "やすらはで　ねなましものを　さよふけて　かたぶくまでの　つきをみしかな"
  },
  {
      "id": 59+1,
      "text": "The road going over Mt. Oe and via Ikuno is so far that I have not set foot on Amanohasidate and seen a letter from my mother yet.",
      "original": "おほえやま　いくののみちの　とほければ　まだふみもみず　あまのはしだて"
  },
  {
      "id": 60+1,
      "text": "The double cherry blossoms are smelling sweet in bloom today in the imperial Court in Kyoto(Heian) as well as long ago in the ancient capital in Nara.",
      "original": "いにしへの　ならのみやこの　やへざくら　けふここのへに　にほひぬるかな"
  },
  {
      "id": 61+1,
      "text": "Even if you mimic a crow of a rooster before sunrise, concealing night, Ousaka Barrier, where you and I meet, would never let you pass through.",
      "original": "よをこめて　とりのそらねは　はかるとも　よにあふさかの　せきはゆるさじ"
  },
  {
      "id": 62+1,
      "text": "Now I wish I had a way to tell you directly, not by a messenger, only that I will get over you.",
      "original": "いまはただ　おもひたえなむ　とばかりを　ひとづてならで　いふよしもがな"
  },
  {
      "id": 63+1,
      "text": "The fog over Uji River is clearing brokenly at dawn and the stakes of bamboo nets for fishing in the shallows are appearing hear and there.",
      "original": "あさぼらけ　うぢのかはぎり　たえだえに　あらはれわたる　せぜのあじろぎ"
  },
  {
      "id": 64+1,
      "text": "How sad my name will be withered by the rumor of love, even though my sleeves which are never dried with tears because of sorrow and jealousy for your being heartless would not decay!",
      "original": "うらみわび　ほさぬそでだに　あるものを　こひにくちなむ　なこそをしけれ"
  },
  {
      "id": 65+1,
      "text": "Miss me as well as I miss you, wild cherry blossoms.  In such a heart of a mountain, it is only I that know how beautiful you are and it is only you that know how lonely I am.",
      "original": "もろともに　あはれとおもへ　やまざくら　はなよりほかに　しるひともなし"
  },
  {
      "id": 66+1,
      "text": "How much I regret that we'll be gossiped about romance worthlessly* just because of such a transitory pillow of my head on your arm as a night dream in !",
      "original": "はるのよの　ゆめばかりなる　たまくらに　かひなくたたむ　なこそをしけれ"
  },
  {
      "id": 67+1,
      "text": "If would I continue to live in this bitter world against my will, I'm sure I would feel this midnight moon close to me like an only friend of mine.",
      "original": "こころにも　あらでうきよに　ながらへば　こひしかるべき　よはのつきかな"
  },
  {
      "id": 68+1,
      "text": "The maple leaves on Mt. Mimuro with a storm raging fall and float on Tatsuta River one after another and make a gorgeous brocade.",
      "original": "あらしふく　みむろのやまの　もみぢばは　たつたのかはの　にしきなりけり"
  },
  {
      "id": 69+1,
      "text": "When I left home in too much loneliness and looked around, it was also lonely sunset in autumn everywhere.",
      "original": "さびしさに　やどをたちいでて　ながむれば　いづこもおなじ　あきのゆふぐれ"
  },
  {
      "id": 70+1,
      "text": "When evening comes, an autumn cool breeze, rustling the rice plant leaves in the paddy fields in front of my residence, blows to my humble reed hut.",
      "original": "ゆふされば　かどたのいなば　おとづれて　あしのまろやに　あきかぜぞふく"
  },
  {
      "id": 71+1,
      "text": "I'll be careful not to take the famous waves(= your flirtation) on Takashi Beach, otherwise I'll get my sleeves wet (with tears).",
      "original": "おとにきく　たかしのはまの　あだなみは　かけじやそでの　ぬれもこそすれ"
  },
  {
      "id": 72+1,
      "text": "The cherry blossoms have got in bloom at the top of distant high mountains.  Mist over mountains near villages, please don't lay over them.",
      "original": "たかさごの　をのへのさくら　さきにけり　とやまのかすみ　たたずもあらなむ"
  },
  {
      "id": 73+1,
      "text": "A fierce wind blowing down from the mountains in Hatsuse, I prayed (at Hase Temple) that the lady who are not interested in me would turn to me, not that my bitterness would get heavier.",
      "original": "うかりける　ひとをはつせの　やまおろしよ　はげしかれとは　いのらぬものを"
  },
  {
      "id": 74+1,
      "text": "I have been relying on the word \"sashimo-gusa(=\"Don't worry. Leave it to me.\")\" like a welcome dew you promised me, but oh, it looks just going over in vain without fulfillment of my wish this autumn too!",
      "original": "ちぎりおきし　させもがつゆを　いのちにて　あはれことしの　あきもいぬめり"
  },
  {
      "id": 75+1,
      "text": "If I start rowing toward the ocean and look over, whitecaps are forming in the offing as if they were white clouds in the sky.",
      "original": "わたのはら　こぎいでてみれば　ひさかたの　くもゐにまがふ　おきつしらなみ"
  },
  {
      "id": 76+1,
      "text": "I declare that I will be with you again in the future even if I say good-bye to you, as well as a stream running as fast as a waterfall is stopped and split into two by rocks because it runs too fast but unites later.",
      "original": "せをはやみ　いはにせかるる　たきがはの　われてもすゑに　あはむとぞおもふ"
  },
  {
      "id": 77+1,
      "text": "I'm wondering how many nights the gatekeeper of Suma Barrier was wakened by the sad songs of plovers flying from Awazi Island.",
      "original": "あはぢしま　かよふちどりの　なくこゑに　いくよねざめぬ　すまのせきもり"
  },
  {
      "id": 78+1,
      "text": "How bright and clear the moonlight through the rifts in the clouds trailing with an autumn wind is!",
      "original": "あきかぜに　たなびくくもの　たえまより　もれいづるつきの　かげのさやけさ"
  },
  {
      "id": 79+1,
      "text": "I can not see your mind well although you said you would love me forever, so this morning I'm lost in thought with my heart confused like my disheveled black hair.",
      "original": "ながからむ　こころもしらず　くろかみの　みだれてけさは　ものをこそおもへ"
  },
  {
      "id": 80+1,
      "text": "Looking at the note of a little cuckoo, I could see merely the morning moon left in the sky.",
      "original": "ほととぎす　なきつるかたを　ながむれば　ただありあけの　つきぞのこれる"
  },
  {
      "id": 81+1,
      "text": "I love her in secret but she wouldn't know it, and this love has been annoying me for years.  Although I'm still alive, yet my tears can't endure the bitterness and run down.",
      "original": "おもひわび　さてもいのちは　あるものを　うきにたへぬは　なみだなりけり"
  },
  {
      "id": 82+1,
      "text": "Oh, this world doesn't have any escape!  Hearing a deer crying, even such a deep heart of a mountain, which I have come into with determination, seems to have bitterness and sadness too.",
      "original": "よのなかよ　みちこそなけれ　おもひいる　やまのおくにも　しかぞなくなる"
  },
  {
      "id": 83+1,
      "text": "I'm wondering whether I could look back on these bitter days with nostalgia if I live long, as well as I miss now the past time when I had much grief.",
      "original": "ながらへば　またこのごろや　しのばれむ　うしとみしよぞ　いまはこひしき"
  },
  {
      "id": 84+1,
      "text": "When I'm lost in thought all the night holding a grudge against my sweet heart, it takes longer for the day to break and even the opening of the door in my bed room looks heartless to me.",
      "original": "よもすがら　ものおもふころは　あけやらで　ねやのひまさへ　つれなかりけり"
  },
  {
      "id": 85+1,
      "text": "Does the moon tell me to cry and make me be lost in thought?  (No, my sweet heart does.)  Still, my eyes are brimming with tears I blame on the moon for.",
      "original": "なげけとて　つきやはものを　おもはする　かこちがほなる　わがなみだかな"
  },
  {
      "id": 86+1,
      "text": "I felt it plaintive to see mist rising over the maki leaves where the dewdrops by the shower have not dried yet at dusk in autumn.",
      "original": "むらさめの　つゆもまだひぬ　まきのはに　きりたちのぼる　あきのゆふぐれ"
  },
  {
      "id": 87+1,
      "text": "Should I devote myself to the love to you all my life, though I met you just one night so short as a piece of stubbles of the reeds growing at in Naniwa Creek?  (Yes, I can never forget you.)",
      "original": "なにはえの　あしのかりねの　ひとよゆゑ　みをつくしてや　こひわたるべき"
  },
  {
      "id": 88+1,
      "text": "Die if you die, my life.  Otherwise, my heart to endure the secret love will get down and it will be open if you live long.",
      "original": "たまのをよ　たえなばたえね　ながらへば　しのぶることの　よわりもぞする"
  },
  {
      "id": 89+1,
      "text": "I want to show you my sleeves which have turned red with tears, even the fisher men's sleeves in Ojima get wet and wet but never turn red, though.",
      "original": "みせばやな　をじまのあまの　そでだにも　ぬれにぞぬれし　いろはかはらず"
  },
  {
      "id": 90+1,
      "text": "How lonely I am to sleep clothed alone with my head on my own arm, on a cold straw mat on such a frosted night, when grasshoppers are chirping!",
      "original": "きりぎりす　なくやしもよの　さむしろに　ころもかたしき　ひとりかもねむ"
  },
  {
      "id": 91+1,
      "text": "My sleeves don't have a time to dry like a rock in the offing which can't be seen even when the tide is out, though people don't know it.",
      "original": "わがそでは　しほひにみえぬ　おきのいしの　ひとこそしらね　かわくまもなし"
  },
  {
      "id": 92+1,
      "text": "I'd like the world not to be changed forever.  I am really moved to see a fisher man is pulling the rope another man tied at the head of the boat.",
      "original": "よのなかは　つねにもがもな　なぎさこぐ　あまのをぶねの　つなでかなしも"
  },
  {
      "id": 93+1,
      "text": "It has got late at night with an autumn wind blowing from Mt. Yoshino, Yoshino village, the old capital, has got cold, and I'm hearing the wintry sound of beating cloths.",
      "original": "みよしのの　やまのあきかぜ　さよふけて　ふるさとさむく　ころもうつなり"
  },
  {
      "id": 94+1,
      "text": "I have begun to live on Mt. Hiei, will make an effort so that people in this world can live in peace and quiet by my training of Buddhism, though it's greater than I deserve.",
      "original": "おほけなく　うきよのたみに　おほふかな　わがたつそまに　すみぞめのそで"
  },
  {
      "id": 95+1,
      "text": "It is myself, not the cherry blossoms falling like snowing in the garden where the wild wind is scattering them, that is getting older.",
      "original": "はなさそふ　あらしのにはの　ゆきならで　ふりゆくものは　わがみなりけり"
  },
  {
      "id": 96+1,
      "text": "I'm waiting for my dear but she wouldn't come.  Oh, I can't stay any longer!  I love her so ardently that I feel as if I were the seaweed burned for salt in the calm evening at Matsuho Beach.",
      "original": "こぬひとを　まつほのうらの　ゆふなぎに　やくやもしほの　みもこがれつつ"
  },
  {
      "id": 97+1,
      "text": "The sunset on Narano Stream in Kamigamo, with a gentle wind rustling the Japanese oak leaves, looks like in autumn, but the Shinto ritual of taking a bathe in the river shows it is still in .",
      "original": "かぜそよぐ　ならのをがはの　ゆふぐれは　みそぎぞなつの　しるしなりける"
  },
  {
      "id": 98+1,
      "text": "It is a matter for regret that I am lost in thought variously because of taking this world unworthy, sometimes loving people and sometimes hating people.",
      "original": "ひともをし　ひともうらめし　あぢきなく　よをおもふゆゑに　ものおもふみは"
  },
  {
      "id": 99+1,
      "text": "I look back upon the past, when the Imperial Court was the most prosperous, seeing the shinobu growing over the edge of the old and ruined eaves of the Imperial Palace, but I can't miss it all, no matter how I miss it.",
      "original": "ももしきや　ふるきのきばの　しのぶにも　なほあまりある　むかしなりけり"
  }
]