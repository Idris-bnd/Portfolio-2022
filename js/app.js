// ANIMATION
const myLetter = document.querySelectorAll('.oui');

for (const letter of myLetter)
    letter.addEventListener('mouseenter', (e) => {
        mySingleLetter = e.currentTarget

        if (mySingleLetter.classList.contains('brown')){
        mySingleLetter.className = 'oui yo'

        setTimeout(() => {
            letter.className = 'oui white'
        },1000)

        }else if (mySingleLetter.classList.contains('yo')){
        mySingleLetter.className = 'oui yo'
        
        setTimeout(() => {
            letter.className = 'oui brown'
        },1000)

        }else{
            mySingleLetter.className = 'oui yo'

            setTimeout(() => {
                letter.className = 'oui brown'
            },1000)
        }

    })
// ANIMATION


// ---
const ButtonMore = document.getElementById('more');
const leftSlider = document.getElementById('leftSlider')

ButtonMore.addEventListener('click', () => {
    leftSlider.scrollIntoView()
})
// ---

// ----------

// ---
const ButtongoBack = document.getElementById('goBack');
const mainHeader = document.getElementById('mainHeader');
ButtongoBack.addEventListener('click', () => {
    mainHeader.scrollIntoView()
})
// ---

// ----------

// ---
const ButtonBottomRightMain = document.getElementById('BottomRightMainLeftSlider');
const rightSlider = document.getElementById('rightSlider');

ButtonBottomRightMain.addEventListener('click', () => {
    rightSlider.scrollIntoView()
})
// ---

// ----------

// ---
const ButtonBottomLeftRightSlider = document.getElementById('BottomLeftRightSlider');

ButtonBottomLeftRightSlider.addEventListener('click', () => {
    leftSlider.scrollIntoView()
})
// ---

// ----------

// ---

const divAllMyProject = document.getElementById('allMyProjects');

 const allMyProjects = [
    [
        'TripO\'dvisor',
        '2022',
        '#leftSlider',
    ],
    [
        'nasaaa',
        '2021',
        '#leftSlider',
    ],
    [
        'ouioui',
        '2020',
        '#leftSlider',
    ],
    [
        'twitter',
        '2022',
        '#leftSlider',
    ],
    [
        'facebook ^^',
        '2022',
        '#',
    ]

 ]



 for (const projet of allMyProjects){

     const myDiv = document.createElement('div');
     myDiv.classList.add('project');

     const myA = document.createElement('a');
     myA.href = projet[2];
     myA.innerText = projet[0];

     const myDate = document.createElement('p');
     myDate.innerText = projet[1];

     myDiv.append(myA, myDate);


    divAllMyProject.append(myDiv);
 }

// ---
