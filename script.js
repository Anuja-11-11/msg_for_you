const message = [

Happiest Birthday, Anuja! ❤️
Dear Anuja (Nae haengbok 😊)
Happy Birthday to the most amazing person! 🎉
I hope today brings you countless reasons to smile, laugh, and feel loved, because you truly deserve every bit of happiness in the world.
Birthdays come once a year, but people who leave a positive impact on others are rare. Your kindness, your smile, and the way you brighten the people around you make you someone who is genuinely special.
Life moves fast, and we often get busy with work, responsibilities, and everything else. But Birthday is a beautiful reminder of how far we've come and how many wonderful moments are still waiting ahead so today is about celebrating you—your journey, your dreams, your achievements, and all the wonderful moments still waiting for you.
I hope this year surprises you with good health, beautiful opportunities, peaceful days, unforgettable memories, endless laughter, success in everything you dream of, and people who always value and support you. Whenever life gets difficult, I hope you remember how strong, capable, and wonderful you truly are.
There is something I want to say to you...
I know I have hurt you, disappointed you, annoyed you, and become the reason for some unpleasant moments in your life. For all of that, I am truly sorry. It was never my intention to make your life even a little difficult, and I never wanted to become a source of discomfort or unhappiness in your life. Looking back, There were many moments which could have handled better, but I can't change the past. All I can do now is sincerely apologize, and I hope you can remember that none of it ever came from a place of bad intention.
Life has a way of taking people onto different paths, and sometimes the kindest thing we can do is respect those paths. No matter where life takes us from here, I genuinely hope you always find reasons to smile, people who care for you, and moments that make your heart feel at peace.
Thank you for being the person you are. 
Apart from those nice seniors, you are one of the greatest people Bharati Fire brought into my life, and I'll always be grateful for that.
I made this little birthday surprise with only one intention—to make you smile, even if it's just for a few moments. If it managed to do that, then it has already fulfilled its purpose.
May your smile never fade, your heart always stays full, and your life be filled with love, good health, success, happiness, billions of beautiful memories and a good people.
Happpppiiiiieeeesssssttttt Birthday, Anuja! ❤️
Wishing you nothing but the very best—for today, for this year, and for all the years to come.
Take care of yourself, always…
Keep smiling, always…
With warm wishes,
Aditya
];


const messageBox = document.getElementById("message");
const cursor = document.querySelector(".cursor");


/*
    Typing settings
*/

const typingSpeed = 55;       // Slower typing speed
const paragraphPause = 1600;  // Pause between paragraphs


/*
    Type one paragraph
*/

function typeParagraph(text) {

    return new Promise((resolve) => {

        const paragraph = document.createElement("div");

        paragraph.className = "paragraph";

        messageBox.appendChild(paragraph);

        let index = 0;


        function typeCharacter() {

            if (index < text.length) {

                paragraph.textContent += text.charAt(index);

                index++;

                /*
                    NO automatic scrolling.
                    The reader controls scrolling manually.
                */

                setTimeout(typeCharacter, typingSpeed);

            } else {

                setTimeout(resolve, paragraphPause);

            }
        }

        typeCharacter();

    });
}


/*
    Start the message
*/

async function startMessage() {

    for (const paragraph of message) {

        await typeParagraph(paragraph);

    }

    /*
        Message finished
    */

    cursor.style.animation = "blink 1s infinite";
}

const continueBtn = document.getElementById("continueBtn");
const intro = document.getElementById("intro");
const messagePage = document.getElementById("messagePage");

continueBtn.addEventListener("click", () => {

    intro.style.display = "none";
    messagePage.style.display = "block";

    startMessage();

});
