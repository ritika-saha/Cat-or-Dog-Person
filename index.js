const qs=["Option 1: Playing outside , Option 2: Sleeping Cozily","Option 1: Play Fetch , Option 2: Play with Yarn","Option 1: meat/Bone Option 2: milk/fish","Option 1: Like Swimming , Option 2: Don't like swimming","Option 1: Loud and fun , Option 2: Quite and Peaceful"]
const questionEle=document.querySelector('.question')
const nextBtn=document.getElementById('next')
const dogOpt=document.querySelector('.dog')
const catOpt=document.querySelector('.cat')
const pic=document.querySelector('.resultpic')
const result=document.querySelector('.result')
let i=1
let catto=0,doggo=0,clickFlag=false

dogOpt.addEventListener("click",f=>{
    if(clickFlag===false){
    doggo++;
    clickFlag=true;
    document.getElementById('dogmeter').innerText=`Doggo Meter: ${doggo}`

    }

})

catOpt.addEventListener("click",f=>{
    if(clickFlag===false){
        catto++;
        clickFlag=true;
        document.getElementById('catmeter').innerText=`Catto Meter: ${catto}`
    }
})
nextBtn.addEventListener("click",start=>{
   
    if(i<=5){
        clickFlag=false
        nextBtn.innerText="Next"
        console.log(qs[i])
        questionEle.innerHTML=`<h1>Question ${i}<br></br>${qs[i-1]}</h1>`
        i++;
        

        }
        if(i===6){
            nextBtn.innerText="Result🔍"
            i++
        }
        if(i===7){
        resultCard()
        }

})
function resultCard(){
    document.getElementById('reset2').addEventListener('click',f=> window.location.reload(false))
    nextBtn.addEventListener("click",f=>{document.querySelector('.container').style.display='none';
    result.style.display='block';

})

if(doggo>catto){
    getRandomDog()
}
else if(catto>doggo)
{
    getRandomCat()
}

}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				pic.innerHTML = `<img src=${data.url} alt="dog" style=" width: 500px;
                height: 350px; border-radius: 100px;"  />`;
			}
		});
        document.getElementById('refresh').addEventListener("click",getRandomDog)
        document.querySelector('.resultpara').innerHTML="<p><b>You are a Dog Person-----</b>Dog people are more extraverted. You are fun and outgoing. You are usually the life of the group.</p>"
}

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			pic.innerHTML = `<img src=${data.file} alt="cat" style=" width: 500px;
            height: 350px; border-radius: 100px;" />`;
		});
        document.getElementById('refresh').addEventListener("click",getRandomCat)
        document.querySelector('.resultpara').innerHTML="<p><b>You are a Cat Person---</b>Cat people score higher in intelligence and are more intellectually curious. You Love cozy Environment and you are calm and collected.</p>"
}




document.getElementById('reset').addEventListener('click',f=> window.location.reload(false))





 

