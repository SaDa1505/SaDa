document.addEventListener("DOMContentLoaded", function() {
    const daysContainer = document.getElementById("days-container");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    let currentDay = 1;

    const data = [
        { date: "Day 1: 29/01/2024 - THE BEST PERSON IN MY LIFE", image: "01.jpg", song: "Day1.mp3", description: "Day 1 The first day - Meeting you after 1.5 years. After 504 Days!. The moment I saw you, My mind went blank, I went blank. All I knew was that I missed you my friend. I straight in went for the hug while you were busy abusing me. I ssly found you very pretty that day Jaadu❤ I ssly was veryyyy much glad that you came to pick me up, You put so much efforts into making me feel good. I ssly believe that was the turning point. If you hadn't come to pick me up that day, Things wouldn't have ended up like they did. We might have met maybe later that day if you didn't come to pick me up toh tu office thi avine mane madva aavte. Hu BT and Pressure ma hte abt things. Maru pressure aa divase j ochu thai gylu. Because I knew during this journey from Mumbai to Surat, Nobody is with us. Nobody whose BT I am going to take. Bas most comfy moment which made me veryyyy ekdm comfortable to be around you. I ssly think that this was the besttttt decision of your life.Now, Some messages from that day : Good morning jaadi,Just texting so that tri savar atleast sari way ma chlu thai.You made my whole trip better (You made my wholeee life better actually jst bt breathinggg), Bt I can atleast make all your mornings better, Jaadu❤Everyday from now onwards - I will pick up one thing or one qualitttyy that you haveee. For todayyy, Want to start on a high note so:- Being Pretty/Cute:You are less cuter than you were before jaadu, Bt everything and anything suits you. You looked really good even when you had more weight than what you have right now. And you look pretty right now anyways. Anddd jsttt howww 3 idiots ma he saysss ke dekhoo millimeter ab centimeter jo bn gya hai. Dekho mera jaadu ab thodaaa hotttt jo ban gyaaa hai❤. I will still say ke let others focus on hotness cuz I want bs aisa good girllllll.Bt you loook verrry pretty re jaadi🥹❤ Aisa completely glt baat objectifying 😂 bt you look 1000/10 bc !❤And fucking annoying thing is le you look like this when you wear anythinggggg. Agar te sarkhu plan kairu che and kai ae rite pehrelu hoi toh puriii vaat.Still haven't gotten over blue Navratri dress. Haven't seen anybody look better than that. Kainaiii jaadu, I will get a girlfriend prettier than youuuu and then I will flex, Jo joo, Vishwas thaiii ane joine ke mri gf? But till then, Good Morning to the prettiest babe in town ❤"},
        { date: "Day 2: 30/01/2024 - TATTTOOO DAYY", image: "Day2.jpg", song: "Day2.mp3", description: "Tattooo DAYYY!!! I still think one of the best days in temrs of mee starrringgg at youuu. And now, Saloni. You have permanently become a forever part of my life with that tatttoo. This is nt an infinity logo or smtng it's jst mtlb my bond with Saloni that's it. Pchi bhale ae signify kai b krtu hoi bt kale uthine apdu kai b sru khrab thai, It is only going to signify our bond to us ke we know it is for us. Tra mate bo motto step hsej aa, Bt mri vt kru hu khli. Never been a tattoo person. Kdhu em judge krto pehla loko ne. And mne bo em thai ke kai rite loko tattoo kravi dei bhle hu koi mate zindgi bhar sure hois bt hu nai kravis tattoo bcz Ik ke agal jaine mre regret nai krvu bs pchi. Bt bhai tu mne akhoj bdli lei yr. Em superpower aj alag ke jo kbhi na krvau woh cheez bhi turant hi maan jau. And this is now mere liye foreverrrr ki bhai aa chokri j che je chee. Aana mte tu kai b krva tyyr hto and rehse. And thank you for this tattoo, Ssly you dk what it means to me. Not even the faintest ideaa tne.When I said, -This feels like home, I meant it. I ssly always want to do jst this. Be with you roaming or shit. Bt Ik everything has an expiry date. Ours is soon, Hope it doesn't come sooner than we have planned 🧿❤ I am verry srry if I made you thoda bhi uncomfortable aaj. I am very em aware aa situations ma ke bs em keep calm and make smne walu feel okay and comfortable so em I stopped suddenly bcz dk bs very conscious. Aaje bo bdhu thyu divs ma. Bt ssly will go down as one of my best days with you. For various reasons. And Idk te mne kem puchelu -Do you love me?, Bro - I love you more than the whole world together can🙂❤And I mean it. And it will stay that way no matter whoever comes in your life. Thank you for letting me be with you. Bs aana thi vdhre kaij nai bcz mtlb mere liye yahi bdi baat hai." },
        { date: "Day 3: 02/01/2024 - RED CHILLIES BC", image: "Day3.jpg", song: "Day3.mp3", description: "IK Thoda BT day bt you still like that day and so I have to write something for itttt. First meet after new years aise. Okayyy, Happiest New Year, Saloni❤ I hated the months Dec and January. No nazar 🧿 bt jst 2-3 days have changed it entirely. And I can't wait for the days to come. You have been my soulmate for more than 1 and a half years. You have been my bestestttt frienddd for the same timee. I wish ki yeh hmesha bna rhe❤ Main hmesha tjhe dukhde suna sku, Tu hmesha mere smne ro ske. Tu hmesha hi DDayyyy bula ske aur hmesha ki main jaadi ko nfrt se nhi bs pyr se bula sku. Tere jaisi dosti naaa payii thi naa paunga, Tera jitna dhyan rkha utnaa naa hi kisi aur kaa rkh paunga, Karza itna le liya tere se zindagi jeene ka, Pta nahi kab aur kaise lauta paunga, Itna pta hai bs, Jab bhi zrurat hogi ya mann hi mann main DDayy ko pukaregi, Kitna bhi door ho, Sbse pehle bhaag ke aa jaungaa 😎😎😎Hai ne mst. Jst aisa likhte likhte socha. Jaadi, Thank you for making my life beautiful. Thank you for gracing me with your presence. Thank you for not only making my year good but making my life a whole lot better. I hope I am forever with you. I hope this is not a few days, few weeks thing. I want this to be a forever thing❤ 🧿 I love no one else more than you. And, I will love nobody else more than I will ever love you. Happy new year mariii jaduu❤ I love you.💫" },
        { date: "Day 4: 03/01/2024 - PIZZA DATE AND TEDDY EXCHANGE DAYYYY", image: "Day4.jpg", song: "Day4.mp3", description: "I just read ke this day I texted you that I wish I could make you mine. Verrryyyy cool dayy, Cool vibes, Best frienddyyyy vibes, Teddies we will keep forever. Chotu sa para for chotu meet and chotu day." },
        { date: "Day 5: WTF DID WE DO THIS DAY?", image: "Day5.jpg", song: "Day5.mp3", description: "Yeh din meri zindagi se aise nikal gaya hai jaise sab purani tension tune nikali hai. Yaad hij nai. But atleast Ik this song means alot to us. And resonates alot with us. Aur hopefully thode time main aisa hoga ki abhi abhi mile hai par kabhi bhi jaane ki baat nahi hogi. Kabse pasand aaye hai par kabhi chuutne ki baad nahi hogi. Hogi toh bas pyaar bhari subah shaame aur raat. Aur bas hmesha milega ek dusre ko donno ke pyaar ka sath." },
        { date: "Day 6: Mostttt complete day. His blessings will be with us for life.", image: "Day6.jpg", song: "Day6.mp3", description: "THIS IS YOUR MESSAGE - Meri life ka sbsee pyara din thaaa yeh. (But 10th aug will always be the first) Nthng better than this could've happened today, me apni life ke sbse important 2 jano ko ek sath mili hu. Waheguru ji ko b maine aj itna thank u bola haina vha pe, coz u really are his version for me DDayyy. Human version of waheguru ji for me 🥺❤ Thank you soo much har ek chiz ke liye yr ssly❤ Long drivee Long Long hugsss Holding handsss hmesha That forehead kiss Sath me khaaavsaa afterrr sooo longggg Ghr ke bahar bethna ho, mst chai pinaaa Scrap book re-read krnaa To click cute cute pictures together To cry together To sittt in such a good vibe cafee 🥺 Last me as always tera bye na kehna And long hugss ese last me bhi🥺 DDaayyyy u r my worldd. Aj b pata hain cafe me low kyu ho gyi thi. Ek hi que hora tha waheguru ji se ke mtlb nt understanding ke wht does god wants to do with my life. Right time wrong people Wrong time right people. Bht zyda scenes ho gaye hain eseee Budddy, I loveee you alottt 🥺❤ Till The death" },
        { date: "Day 7: First meet after confessing", image: "Day7.jpg", song: "Day7.mp3", description: "Okay jaadi. Yesterday was the best day of my life. Em very mixed day very veryyy mixed day. Bt still dk. Most comfortable day yet the most uncomfortable one. Most loving yet the most heartbreaking one. Jaadu, You are the perfect girl/woman one man looks for. And to think that a regular guy like me can impress or atleast make someone likeee you like mee is em smtng that 15 year old DD would die laughing at if I told him by going back to the past. I can jst imagine holding your pic and telling that 15 year old DD who thinks he is in love with Janvi, And showing him your pic and telling him that this girl would be someone you'd be spending your days with and this girl might fall a bit for you some day. He would abuse the shit out of me before he starts laughing out loud. Because aaukat ke bahar hai tu. And nai chdhvto tne. Mane tne ssly impress krine kai nai mdvanu jaadu. Mtlb humko bhi apni situation pta hi hai. Aisa kal ke kal donno ek dusre ke ho bhi jneko tyyr hongeee officially bt we won't cuz pta haiii ki kch nahi hai aage. So em mne kai personal gain nai tri tariff krine. Nai pehla hto, Nai agal hovano. Bt jaadu, Ssly tu aaukat bahar che mrii. Bdhijjj rite. Looks toh em jva de baap zindgi ma ni vichairu hoi aavi chokri hse mri sthe frti b. Bt em everh way jaadu. Most important one is taru inclusion of meee and acceptance of me in yourr life. And not blaming me for things that actually happened to you cuz of me. Tu mne kei ke I am next to god for you etc. Jaadu, You areee God for me. Because tu ssly Waheguru ji nu vichre kai b vstu pehla bt hu toh taruj vichrine agad vdhu jaadu. Yesterday was em ekdm shocking forrr me cuz I kneww you liked me bt aisaa nahi ki itna cuz I know jaadi tu bo reserved che. Bhale hu DDay chu. Bhale tro bst frnd chu bt Ik tara ma 1% b himmat nai hte mne aa bdhu kehvani. I still have no idea how did you gainnn that strength. Cuz honestly, Hu agar lagan krto hte toh tu mandap ma aavine em mane congrats kaine jti rehte bt baap zindgi ma aa bdhu kehte nai cuz you are like thatttt. Bt tune yeh bola wahi bht bda surprise tha mere liyeee. Jaadu, Main teri ksm har baar apan Gurudware gye, Darr vkhte my first thing would always be ke Saloni ne mri sthe rkhjo bs and Saloni apjo mne life ma. I never meant it in that way love shove etc. Jst ke I want you in my life always. And pela divse khali Bharuch gya and this happenss. Em papa atla vrso thi maro vishwas and faith build krvani try kre kai thai nai emna thi. Ek random chokri. 2 varas pehla life ma enter kee. 1.5 varas thi besttt friend. Ema thi varas vaat nai kari hse. But ae chokri na faith pr, Mane etlo faith ke hu em blindly follow krva lagu bdhuuu. And then badhu saru thva b lage 🧿 Etle jaadi main agad msg b krelo ke apre everytime Bardoli mdsu toh Gurudware jsu cuz mra mate 2 sauthi mst divs ej hta. Ek apde Bardoli ma Gurudware thi stsrt kairu ae divs and second Bharuch valu. And yeh week mereko first time lga je tu kehti ae ke em I always thought Waheguru ji ki nhi bnti mere sth. Shyd maine unki fav child ka dil directly indirectly tudvaya hai itni baar isliye. Bt you always said ki aisa you are his fav and I am yoursss. So sb ek haiii. And this week I genuinely felt it Having you in my life is the bestttest thing to happen to me. Bhale ketli b BT chadhti, Ketli b kai khrab vstu thati. Everything is worth it for this smile. Everything is worth it for that hug. Everything is worth it every time you hold my hand. About your outfitsss, Jaadu - You loook verryy hotttt, Bt mere liye I always want my jaadu to be cuteeee. No physicallll attraction bkchodi bs em Me and my jaaduuu with ourrr stupid vibes. Bt you do look hot bc, And it does make me thoda em question your own self ke kem aa chokri compromise kre che atlu🤣 Sachu kai em aane mgj ma khrabi nai nee Bt more so, You are prettier jaadi. Cuz you can pull off anything. Western? Yes. Traditional? Yes. Simple saalon purane sone wale kapde? Yes. Naak main se chembud? Yes as well. Jaadu hu bo concious thai jaav em jo kai rite bhari bhari ne tarif kri Traditional ma. Western ma I can't cuz em I don't want to seem like a creep. Bt bnchd tu kai b pehr bhai tu ssly hmesha ekdm perfect for every occasion aj lgeee jadu yr." },
        { date: "Day 8: Sasural Visit Day", image: "Day8.jpg", song: "day2_song.mp3", description: "Okay jaadi. First of all, Thai gylo nervous dk kem. Start ma. Hu bo chill mood ma avto hto. Jem jem distance ochu thatu gyu tem tem jrak tensed thato gyo. And lift ma toh faati j gyli🤣 And dk kem. Etle ekdm em fati ni gyli bt comparatively yes baki hu nai hov aavo. I am very confident ke haan I can impress people if I want to. Bt yeh dk ek personal em aim htu ke idhar toh krna hi hai bhai impress. And jaadu, Bhavika di ni hte toh b same vstu j hate I feel. I ssly thought tu ekdm em chup chap ek jagah ae besse em pressure ma aunty nu etc. Bt you were being normal em you weren't weird or restricted em. Haa I could see thoda thoda BT tra pr bt ae vaat alag. Okay so now negativeee points firstt: It wasn't perfect pehla toh. I was em disappointed potana ma thodu ke hu kem khasu chup riyo. Bt also ae b che ke koi conversation initiate thailuj nai khas. Teniyao ma j busy. I wanted to talk to aunty thoduk and ae nai thayu so ae BT. Bhavika di sthe b dk mra thi etli khuli ne vaat ni thai. Mane Hindi nu bo concious kri didhelu bdha ae so mra thi Jagu vali Hindi b ni bolati hti etle sidhu English aj avtu htu cuz most comfortable emaj. Bt theek che Bhavika di nu mane kai BT nai cuz Ik ae toh cover kri lais hu aaagad. Thennn, Teniyao ignoring me🥲I thought mst ramis teniyao sthe bt em alag aj masti ma eloko. Hu etlooo biased chu Mehr mate only Ik. Bt em I didn't want to show ke bhai mne khali Mehr sthe em 5-10 min tp krva do so em tried to act thoda em casual🤣 Also, Didn't want anyone to think Mehr mte biased so mgj ma ae b chalee ke Kiyuuu kdhar Kiyu ko bhi utna hi timeee de. Bt em ae biasedness je pti gyu ne bhai jyre chelle Kiyu mst besi riyo em pic pdavti vkhtee. Ekdm shanti thi em chotu hug bt still very calmingg. Tyre sb aisa chla gyaaa. Good points: As I said, You were comfortable so hu b hto. Mne em besva ma ke kai rite behave krvu ae vstu ma 0 awkwardness ultu tne kehvu htu mre ke room btav bhai je room thi vaat kre, Guitar dikha. Woh Lamp dikha aur bed ke upar ka picture dikha. Bt guessed ke vdhre thai jse aaa. 2) No judgment types tra ghre atleast did not feel. Tne ayvu hoi te dk. Bt em Ik mra ghre koi b ave toh mummy ghuira j krse🤣 Bt evu tra ghre kaij nai. Ha ae I knewww ke aunty kehse tne ke em Mehr Kiyu su lge ke ena mte layvo etc Last thing. Dk wanted to create ekdm achi strong impression ke em eloko tne smne thi kei ke kaini Darshit aj che ne eni sthej jvani che ne toh kaini. Woh kch aisa hua nahi and I also dk km mne etlu impress krvanu chdhelu mgj pr. Bt acha tha overall bs em not perfect but not bad either cuz it could have gone so wrong and boring and silent bt evu nai htu so em ideal vche nu ekdm. Personally, Big thing ke you find me good enough to bring me in front of your family. Bhale main reason Mehr aj hoi." },
        { date: "BREAKKK JAADI SORRRY - EK KAAM BHI THEEK SE NAHI KAR SAKA. But only want to stop bcz baat karni hai yarrrrrr.", image: "WE.jpg", song: "W.mp3", description: "Lol Ik maro pic set nai thato hato ek b so chalse if I look fucked up but you fitttt so fucking well jaadu mari. And jem aa pic ma tu aatli mst fit thai gayi che emaj tu mari life ma b fit thai gyi che. I hope to fucking have each and everything with you in the future. I want those pre wedding photos of yours. I want our friends to say things at our wedding. I want to give that ring to Bhavika DI, Most importantly I want to get that diamond on your ring in a way you would not have even imagined in your dreams. I bet you jaadu my proposal would be somethingggg we will forever tell our kids it will be very grand and very perfect just like our love. I love you baby!, Sorry to disappoint you on valentine's bt mere se nahi raha jaega baat kiye binaaa. I love you, I love you more than anything in the world, I want you more than anything in the world, I want to make tea for you, I want to serve you lunch, dinner and breakfast, I want to feed you with my ownn handss, I wanttt to get married with you. Please let me be obessed with you forever."},
        { date: "Day 9: Thoda sa BT Starbucks Date", image: "Day9.jpg", song: "day2_song.mp3", description: "[Paragraph about the day]" },
        { date: "Day 10: First KISS and Ring Proposal (50rs wadi)!!!!!!", image: "Day10.jpg", song: "day2_song.mp3", description: "[Paragraph about the day]" },
        { date: "Day 11: Your Favourite Picture (Nini's Kitchen)", image: "Day11.jpg", song: "day2_song.mp3", description: "[Paragraph about the day]" },
        { date: "Day 12: Babasuit Day", image: "Day12.jpg", song: "day2_song.mp3", description: "[Paragraph about the day]" },

    ];


    function populateDays() {
        const dayData = data[currentDay - 1];
        const dayElement = createDayElement(dayData);
        daysContainer.innerHTML = '';
        daysContainer.appendChild(dayElement);
    }

    function createDayElement(dayData) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");

        const imageElement = document.createElement("img");
        imageElement.src = dayData.image;
        imageElement.alt = "Day Photo";

        const audioElement = document.createElement("audio");
        audioElement.controls = true;
        const sourceElement = document.createElement("source");
        sourceElement.src = dayData.song;
        sourceElement.type = "audio/mpeg";
        audioElement.appendChild(sourceElement);

        const dayContent = document.createElement("div");
        dayContent.classList.add("day-content");

        const headingElement = document.createElement("h2");
        headingElement.textContent = dayData.date;

        const paragraphElement = document.createElement("p");
        paragraphElement.textContent = dayData.description;

        dayContent.appendChild(headingElement);
        dayContent.appendChild(paragraphElement);

        dayElement.appendChild(imageElement);
        dayElement.appendChild(audioElement);
        dayElement.appendChild(dayContent);

        return dayElement;
    }

    populateDays();

    prevButton.addEventListener("click", function() {
        if (currentDay > 1) {
            currentDay--;
            populateDays();
        }
    });

    nextButton.addEventListener("click", function() {
        if (currentDay < data.length) {
            currentDay++;
            populateDays();
        }
    });

});
document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("popupModal");

    // Get the button that opens the modal
    var btn = document.getElementById("popupButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the page loads, show the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle button clicks
    var yesButton = document.getElementById("yesButton");
    var noButton = document.getElementById("noButton");

    yesButton.onclick = function() {
        // Display "I love you" message
        var loveMessage = document.createElement("div");


        // Hide modal
        modal.style.display = "none";
    }

 
});

