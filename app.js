let currentTopic="";


const viewer=document.getElementById("viewer");
window.addEventListener("DOMContentLoaded",()=>{
currentTopic="Penguin";
viewer.src="models/Penguin.glb";
info.innerText="Showing 3D model";
});

const info=document.getElementById("info");
const learn=document.getElementById("learn");


/* -------- DETECT TOPIC -------- */

function detect(text){
text=text.toLowerCase();

if(text.includes("heart")||text.includes("blood"))
return ["Heart","models/heart.glb"];

if(text.includes("brain")||text.includes("neuron"))
return ["Brain","models/brain.glb"];

if(text.includes("solar")||text.includes("planet")||text.includes("sun"))
return ["Solar System","models/solar_system.glb"];

if(text.includes("benzene") || text.includes("c6h6") || text.includes("aromatic ring") || text.includes("chemistry ring"))
return ["Benzene","models/benzene.glb"];

if(text.includes("eye") || text.includes("vision") || text.includes("retina") || text.includes("cornea") || text.includes("pupil"))
return ["Eye","models/eye.glb"];

if(text.includes("skull") || text.includes("bones") || text.includes("skeleton head") || text.includes("cranium"))
return ["Skull","models/skull.glb"];

if(text.includes("butterfly") || text.includes("insect") || text.includes("wings") || text.includes("metamorphosis"))
return ["Butterfly","models/butterfly.glb"];


if(text.includes("teeth") || text.includes("tooth") || text.includes("human teeth"))
return ["Human Teeth","models/humanteeth.glb"];

if(text.includes("butterfly lifecycle") || text.includes("life cycle butterfly"))
return ["Butterfly Life Cycle","models/lifecyclebutterfly.glb"];

if(text.includes("phoenix") || text.includes("phoenix bird"))
return ["Phoenix Bird","models/phoenixbird.glb"];

if(text.includes("earth core") || text.includes("inner core") || text.includes("outer core"))
return ["Earth Core","models/earthcore.glb"];

if(text.includes("space station") || text.includes("iss"))
return ["Space Station","models/spacestation.glb"];

if(text.includes("atom") || text.includes("atomic structure"))
return ["Atom","models/atom.glb"];

if(text.includes("moon"))
return ["Moon","models/moon.glb"];

if(text.includes("milky way") || text.includes("milkyway") || text.includes("galaxy"))
return ["Milky Way Galaxy","models/milkyway.glb"];

if(text.includes("black hole") || text.includes("blackhole") || text.includes("event horizon"))
return ["Black Hole","models/blackhole.glb"];

if(text.includes("skeleton") || text.includes("human skeleton") || text.includes("bones"))
return ["Human Skeleton","models/humanskeleton.glb"];


if (text.includes("mitochondria") || 
    text.includes("powerhouse") || 
    text.includes("atp") || 
    text.includes("cell respiration"))
return ["Mitochondria","models/mitochondria.glb"];


if (text.includes("chloroplast") || 
    text.includes("photosynthesis") || 
    text.includes("chlorophyll") || 
    text.includes("plant cell"))
return ["Chloroplast","models/chloroplast.glb"];


if (text.includes("hibiscus") || 
    text.includes("flower") || 
    text.includes("petals") || 
    text.includes("tropical plant"))
return ["Hibiscus","models/hibiscus_flower.glb"];


if (text.includes("blood cells") || 
    text.includes("rbc") || 
    text.includes("wbc") || 
    text.includes("platelets"))
return ["Blood Cells","models/blood_cells.glb"];

return ["Penguin","models/penguin.glb"];
}

function generate(){

const text=document.getElementById("prompt").value;
const result=detect(text);

currentTopic=result[0];
const modelPath=result[1];

viewer.removeAttribute("src");
setTimeout(()=>{

viewer.src = modelPath;
info.innerText = "Showing 3D model of " + currentTopic;

if(currentTopic==="Penguin"){
viewer.removeAttribute("auto-rotate");
viewer.setAttribute("autoplay","");
viewer.setAttribute("animation-name","*");
}
else{
viewer.removeAttribute("animation-name");
viewer.removeAttribute("autoplay");
viewer.setAttribute("auto-rotate","");
}

/* ✅ DIRECT SUMMARY + VOICE */
summary();

setTimeout(()=>{
speakText(learn.innerText);
},200);

},100);
}
/* -------- EXPLANATION -------- */
function generate(){

const text=document.getElementById("prompt").value.trim();

if(!text){
info.innerText="Please enter a topic";
return;
}

const result=detect(text);

currentTopic=result[0];
const modelPath=result[1];

viewer.removeAttribute("src");

setTimeout(()=>{

viewer.src = modelPath;
info.innerText = "Showing 3D model of " + currentTopic;

/* Model settings */
if(currentTopic==="Penguin"){
viewer.removeAttribute("auto-rotate");
viewer.setAttribute("autoplay","");
viewer.setAttribute("animation-name","*");
}
else{
viewer.removeAttribute("animation-name");
viewer.removeAttribute("autoplay");
viewer.setAttribute("auto-rotate","");
}

/* ✅ AUTO SUMMARY (NO BUTTON NEEDED) */
summary();

/* ✅ AUTO VOICE AFTER SUMMARY */
setTimeout(()=>{
speakText(learn.innerText.replace(/<br>/g," "));
},300);

},150);
}/* -------- SUMMARY -------- */

function summary(){

let text="";
if(currentTopic==="Heart")
text=`
• Pumps blood throughout body<br>
• 4 chambers: Right/Left atrium & ventricle<br>
• Right side → deoxygenated blood<br>
• Left side → oxygenated blood<br>
• Part of circulatory system<br>
• Beats ~72 times per minute (average adult)
`;

else if(currentTopic==="Brain")
text=`
• Control center of body<br>
• Cerebrum → thinking & memory<br>
• Cerebellum → balance & coordination<br>
• Brainstem → breathing & heartbeat<br>
• Part of nervous system<br>
• Sends signals via neurons
`;

else if(currentTopic==="Solar System")
text=`
• Sun at the center<br>
• 8 planets orbit due to gravity<br>
• Inner planets: Mercury Venus Earth Mars<br>
• Outer planets: Jupiter Saturn Uranus Neptune<br>
• Earth supports life<br>
• Asteroids & comets also present
`;

else if(currentTopic==="Benzene")
text=`
• Chemical formula: C6H6<br>
• 6 carbon atoms ring structure<br>
• Alternating double bonds (resonance)<br>
• Aromatic compound<br>
• Used in plastics, dyes & medicines<br>
• Important in organic chemistry
`;

else if(currentTopic==="Eye")
text=`
• Organ of vision<br>
• Cornea lets light enter<br>
• Pupil controls light amount<br>
• Lens focuses image<br>
• Retina converts light to nerve signals<br>
• Optic nerve sends signals to brain
`;

else if(currentTopic==="Skull")
text=`
• Protects the brain<br>
• Made of 22 bones<br>
• Forms structure of face<br>
• Supports teeth and jaw<br>
• Provides muscle attachment<br>
• Part of skeletal system
`;

else if(currentTopic==="Butterfly")
text=`
• Insect with colorful wings<br>
• Undergoes metamorphosis<br>
• Egg → Caterpillar → Chrysalis → Adult<br>
• Feeds on nectar<br>
• Helps in pollination<br>
• Has two pairs of wings
`;


else if(currentTopic==="Butterfly")
text=`
• Insect with colorful wings<br>
• Undergoes metamorphosis<br>
• Egg → Caterpillar → Chrysalis → Adult<br>
• Feeds on nectar<br>
• Helps in pollination<br>
• Has two pairs of wings
`;

else if(currentTopic==="Human Teeth")
text=`
• 32 teeth in adults<br>
• Types: Incisors, Canines, Premolars, Molars<br>
• Helps in chewing food<br>
• Aids in speech<br>
• Protect enamel layer<br>
• Part of digestive system
`;

else if(currentTopic==="Butterfly Life Cycle")
text=`
• 4 stages of metamorphosis<br>
• Egg stage<br>
• Larva (Caterpillar)<br>
• Pupa (Chrysalis)<br>
• Adult butterfly<br>
• Complete transformation
`;

else if(currentTopic==="Phoenix Bird")
text=`
• Mythical bird<br>
• Symbol of rebirth<br>
• Rises from ashes<br>
• Represents immortality<br>
• Found in legends<br>
• Associated with fire
`;

else if(currentTopic==="Earth Core")
text=`
• Innermost layer of Earth<br>
• Made of iron & nickel<br>
• Outer core is liquid<br>
• Inner core is solid<br>
• Very high temperature (~5000°C)<br>
• Creates Earth's magnetic field
`;

else if(currentTopic==="Space Station")
text=`
• Orbits Earth<br>
• Used for space research<br>
• Astronauts live onboard<br>
• Zero gravity environment<br>
• Example: ISS<br>
• Conducts scientific experiments
`;

else if(currentTopic==="Atom")
text=`
• Basic unit of matter<br>
• Contains nucleus<br>
• Protons (+ charge)<br>
• Neutrons (neutral)<br>
• Electrons (- charge)<br>
• Forms molecules & elements
`;

else if(currentTopic==="Moon")
text=`
• Earth's natural satellite<br>
• Reflects sunlight<br>
• Orbits Earth in ~27 days<br>
• Causes ocean tides<br>
• Has craters<br>
• No atmosphere
`;

else if(currentTopic==="Milky Way Galaxy")
text=`
• Spiral galaxy<br>
• Contains billions of stars<br>
• Includes our Solar System<br>
• Has spiral arms<br>
• Contains gas & dust<br>
• Extremely large structure
`;

else if(currentTopic==="Black Hole")
text=`
• Region in space with extremely strong gravity<br>
• Nothing, not even light, can escape<br>
• Formed after massive star collapse<br>
• Boundary called Event Horizon<br>
• Center contains a Singularity<br>
• Can bend light and affect nearby stars
`;

else if(currentTopic==="Human Skeleton")
text=`
• Internal framework of the body<br>
• Adult human has 206 bones<br>
• Protects brain, heart & lungs<br>
• Supports body structure<br>
• Works with muscles for movement<br>
• Includes skull, spine & rib cage
`;

else if (currentTopic === "Mitochondria") {
    text = `
    • Powerhouse of the cell<br>
    • Produces ATP (energy)<br>
    • Performs cellular respiration<br>
    • Found in most eukaryotic cells<br>
    • Has its own DNA<br>
    • Double membrane structure
    `;
}

else if (currentTopic === "Chloroplast") {
    text = `
    • Found in plant cells<br>
    • Contains chlorophyll<br>
    • Performs photosynthesis<br>
    • Converts sunlight into food<br>
    • Produces oxygen<br>
    • Green in color
    `;
}

else if (currentTopic === "Hibiscus") {
    text = `
    • Tropical flowering plant<br>
    • Large colorful petals<br>
    • Contains stamen & pistil<br>
    • Used for decoration<br>
    • Has medicinal properties<br>
    • Common in warm regions
    `;
}

else if (currentTopic === "Blood Cells") {
    text = `
    • Three types: RBC, WBC, Platelets<br>
    • RBC carry oxygen<br>
    • WBC fight infection<br>
    • Platelets help in clotting<br>
    • Part of circulatory system<br>
    • Produced in bone marrow
    `;
}

else if (currentTopic === "Brain") {
    text = `
    • Control center of body<br>
    • Cerebrum → thinking & memory<br>
    • Cerebellum → balance & coordination<br>
    • Brainstem → breathing & heartbeat<br>
    • Part of nervous system<br>
    • Sends signals via neurons
    `;
}

else text="Generate a model first";
learn.innerHTML="<h3 style='text-align:center'>Quick Summary</h3><b>"+text+"</b>";
}

/* -------- QUIZ -------- */
/* -------- QUIZ (ALL TOPICS FIXED) -------- */
function quiz() {
    if (!currentTopic) {
        learn.innerHTML = "<h3>Please generate a model first!</h3>";
        return;
    }

    // Initialize/Reset global variables
    questions = []; 
    qIndex = 0;

    if (currentTopic === "Heart") {
        questions = [
            ["What does heart pump?", ["Air", "Blood", "Water"], "Blood"],
            ["How many chambers?", ["2", "3", "4"], "4"],
            ["Heart made of?", ["Bone", "Muscle", "Skin"], "Muscle"],
            ["Right side carries?", ["Oxygen", "Deoxygen", "Food"], "Deoxygen"],
            ["Belongs to system?", ["Digestive", "Circulatory", "Nervous"], "Circulatory"]
        ];
    } 
    else if (currentTopic === "Brain") {
        questions = [
            ["Brain controls?", ["Thinking", "Hair", "Nails"], "Thinking"],
            ["Memory stored in?", ["Brain", "Hand", "Leg"], "Brain"],
            ["Largest part?", ["Cerebrum", "Heart", "Lungs"], "Cerebrum"],
            ["Balance by?", ["Cerebellum", "Kidney", "Liver"], "Cerebellum"],
            ["Part of?", ["Nervous", "Digestive", "Respiratory"], "Nervous"]
        ];
    } 
    else if (currentTopic === "Solar System") {
        questions = [
            ["Center of solar system?", ["Moon", "Sun", "Earth"], "Sun"],
            ["Closest planet?", ["Mercury", "Mars", "Venus"], "Mercury"],
            ["Earth is?", ["Star", "Planet", "Galaxy"], "Planet"],
            ["Total planets?", ["7", "8", "9"], "8"],
            ["We live on?", ["Mars", "Earth", "Jupiter"], "Earth"]
        ];
    } 
    else if (currentTopic === "Benzene") {
        questions = [
            ["Carbon atoms in C6H6?", ["4", "6", "8"], "6"],
            ["Shape?", ["Ring", "Chain", "Triangle"], "Ring"],
            ["Type?", ["Alkane", "Aromatic", "Alcohol"], "Aromatic"],
            ["Formula?", ["C2H6", "C6H6", "CH4"], "C6H6"],
            ["Used in?", ["Plastic", "Wood", "Stone"], "Plastic"]
        ];
    } 
    else if (currentTopic === "Eye") {
        questions = [
            ["Controls amount of light?", ["Pupil", "Nose", "Ear"], "Pupil"],
            ["Where is image formed?", ["Retina", "Tongue", "Skin"], "Retina"],
            ["Which part focuses light?", ["Lens", "Heart", "Bone"], "Lens"],
            ["Signal goes to?", ["Brain", "Lungs", "Stomach"], "Brain"],
            ["Front transparent layer?", ["Cornea", "Nail", "Muscle"], "Cornea"]
        ];
    } 
    else if (currentTopic === "Skull") {
        questions = [
            ["What does skull protect?", ["Heart", "Brain", "Lungs"], "Brain"],
            ["Bones in human skull?", ["22", "12", "30"], "22"],
            ["Front part forms?", ["Face", "Hand", "Leg"], "Face"],
            ["Lower movable bone?", ["Mandible", "Rib", "Femur"], "Mandible"],
            ["System?", ["Skeletal", "Digestive", "Respiratory"], "Skeletal"]
        ];
    } 
    else if (currentTopic === "Butterfly") {
        questions = [
            ["Butterfly is a?", ["Mammal", "Insect", "Bird"], "Insect"],
            ["First stage?", ["Egg", "Pupa", "Adult"], "Egg"],
            ["Caterpillar stage?", ["Larva", "Nymph", "Seed"], "Larva"],
            ["Main food?", ["Nectar", "Milk", "Water"], "Nectar"],
            ["Helps in?", ["Pollination", "Digestion", "Respiration"], "Pollination"]
        ];
    } 
    else if (currentTopic === "Human Teeth") {
        questions = [
            ["Adults have how many teeth?", ["28", "30", "32"], "32"],
            ["Front teeth called?", ["Incisors", "Molars", "Ribs"], "Incisors"],
            ["Sharp pointed teeth?", ["Canines", "Premolars", "Nails"], "Canines"],
            ["Largest teeth?", ["Molars", "Eye", "Ear"], "Molars"],
            ["Main function?", ["Chewing", "Flying", "Swimming"], "Chewing"]
        ];
    } 
    else if (currentTopic === "Butterfly Life Cycle") {
        questions = [
            ["First stage?", ["Egg", "Adult", "Pupa"], "Egg"],
            ["Caterpillar is?", ["Larva", "Seed", "Root"], "Larva"],
            ["Third stage?", ["Pupa", "Egg", "Adult"], "Pupa"],
            ["Final stage?", ["Adult", "Stone", "Leaf"], "Adult"],
            ["Process name?", ["Metamorphosis", "Digestion", "Respiration"], "Metamorphosis"]
        ];
    } 
    else if (currentTopic === "Phoenix Bird") {
        questions = [
            ["Phoenix is?", ["Mythical", "Real bird", "Fish"], "Mythical"],
            ["Reborn from?", ["Ashes", "Water", "Stone"], "Ashes"],
            ["Symbol of?", ["Rebirth", "Hunger", "Sleep"], "Rebirth"],
            ["Associated with?", ["Fire", "Ice", "Wind"], "Fire"],
            ["Represents?", ["Immortality", "Weakness", "Cold"], "Immortality"]
        ];
    } 
    else if (currentTopic === "Earth Core") {
        questions = [
            ["Mainly made of?", ["Iron", "Plastic", "Wood"], "Iron"],
            ["Outer core is?", ["Liquid", "Solid", "Gas"], "Liquid"],
            ["Inner core is?", ["Solid", "Liquid", "Water"], "Solid"],
            ["Generates?", ["Magnetic field", "Rain", "Wind"], "Magnetic field"],
            ["Temperature?", ["Very high", "Cold", "Freezing"], "Very high"]
        ];
    } 
    else if (currentTopic === "Space Station") {
        questions = [
            ["Orbits what?", ["Earth", "Moon", "Mars"], "Earth"],
            ["Famous example?", ["ISS", "Titanic", "Apollo"], "ISS"],
            ["Gravity inside?", ["Zero gravity", "Heavy", "Normal"], "Zero gravity"],
            ["Used for?", ["Research", "Cooking", "Driving"], "Research"],
            ["Who lives there?", ["Astronauts", "Animals", "Fish"], "Astronauts"]
        ];
    } 
    else if (currentTopic === "Atom") {
        questions = [
            ["Basic unit of?", ["Matter", "Water", "Air"], "Matter"],
            ["Center of atom?", ["Nucleus", "Heart", "Brain"], "Nucleus"],
            ["Negative particle?", ["Electron", "Proton", "Neutron"], "Electron"],
            ["Positive particle?", ["Proton", "Electron", "Water"], "Proton"],
            ["Neutral particle?", ["Neutron", "Fire", "Light"], "Neutron"]
        ];
    } 
    else if (currentTopic === "Moon") {
        questions = [
            ["Moon is Earth's?", ["Satellite", "Planet", "Star"], "Satellite"],
            ["Reflects what?", ["Sunlight", "Fire", "Water"], "Sunlight"],
            ["Causes what?", ["Tides", "Mountains", "Trees"], "Tides"],
            ["Orbits what?", ["Earth", "Mars", "Sun"], "Earth"],
            ["Surface has?", ["Craters", "Rivers", "Forests"], "Craters"]
        ];
    } 
    else if (currentTopic === "Milky Way Galaxy") {
        questions = [
            ["What is Milky Way?", ["Galaxy", "Planet", "Star"], "Galaxy"],
            ["Its shape?", ["Spiral", "Square", "Triangle"], "Spiral"],
            ["Solar system is?", ["Inside it", "Outside it", "On Moon"], "Inside it"],
            ["Contains billions of?", ["Stars", "Cars", "Oceans"], "Stars"],
            ["Sun is a?", ["Star", "Planet", "Comet"], "Star"]
        ];
    } 
    else if (currentTopic === "Black Hole") {
        questions = [
            ["What cannot escape?", ["Light", "Sound", "Air"], "Light"],
            ["Forms after?", ["Star collapse", "Rain", "Earthquake"], "Star collapse"],
            ["Its boundary?", ["Event Horizon", "Orbit", "Layer"], "Event Horizon"],
            ["Its center?", ["Singularity", "Core", "Crust"], "Singularity"],
            ["Has strong what?", ["Gravity", "Wind", "Magnet"], "Gravity"]
        ];
    } 
    else if (currentTopic === "Human Skeleton") {
        questions = [
            ["How many bones?", ["206", "150", "300"], "206"],
            ["Skull protects?", ["Brain", "Heart", "Lungs"], "Brain"],
            ["Rib cage protects?", ["Heart", "Hair", "Skin"], "Heart"],
            ["Works with?", ["Muscles", "Teeth", "Nails"], "Muscles"],
            ["Function?", ["Support", "Digestion", "Breathing"], "Support"]
        ];
    }

else if (currentTopic === "Mitochondria") {
    questions = [
        ["Known as?", ["Brain of cell", "Powerhouse", "Skin of cell"], "Powerhouse"],
        ["Produces?", ["ATP", "DNA", "Oxygen"], "ATP"],
        ["Process called?", ["Photosynthesis", "Respiration", "Digestion"], "Respiration"],
        ["Found in?", ["Plant only", "Animal only", "Most eukaryotic cells"], "Most eukaryotic cells"],
        ["Has its own?", ["Chlorophyll", "DNA", "Roots"], "DNA"]
    ];
}

else if (currentTopic === "Chloroplast") {
    questions = [
        ["Found in?", ["Animal cells", "Plant cells", "Bacteria"], "Plant cells"],
        ["Contains?", ["Hemoglobin", "Chlorophyll", "Keratin"], "Chlorophyll"],
        ["Main process?", ["Respiration", "Photosynthesis", "Digestion"], "Photosynthesis"],
        ["Uses?", ["Sunlight", "Electricity", "Sound"], "Sunlight"],
        ["Produces?", ["Carbon dioxide", "Oxygen", "Nitrogen"], "Oxygen"]
    ];
}

else if (currentTopic === "Hibiscus") {
    questions = [
        ["Hibiscus is a?", ["Animal", "Flowering plant", "Fungus"], "Flowering plant"],
        ["Common in?", ["Cold regions", "Tropical regions", "Arctic"], "Tropical regions"],
        ["Colorful part?", ["Root", "Petals", "Stem"], "Petals"],
        ["Male part?", ["Pistil", "Stamen", "Leaf"], "Stamen"],
        ["Used for?", ["Decoration", "Metal work", "Fuel"], "Decoration"]
    ];
}

else if (currentTopic === "Blood Cells") {
    questions = [
        ["RBC carry?", ["Oxygen", "Food", "Water"], "Oxygen"],
        ["WBC fight?", ["Heat", "Infection", "Light"], "Infection"],
        ["Platelets help in?", ["Breathing", "Clotting", "Digestion"], "Clotting"],
        ["Produced in?", ["Brain", "Bone marrow", "Skin"], "Bone marrow"],
        ["Part of which system?", ["Circulatory", "Digestive", "Endocrine"], "Circulatory"]
    ];
}
    else {
        // Default for Penguin or unrecognized topics
        questions = [["Is this a 3D learning platform?", ["Yes", "No", "Maybe"], "Yes"]];
    }

    showQuestion();
}
/* SHOW QUESTION */

function showQuestion(){

let q=questions[qIndex];
correctAns=q[2];

let html=`${q[0]}<br>
<span class='opt'>${q[1][0]}</span>
<span class='opt'>${q[1][1]}</span>
<span class='opt'>${q[1][2]}</span>
<br><button id="nextBtn" style="display:none;margin-top:15px;">Next</button>`;

learn.innerHTML="<h3>Quiz</h3><div class='q'>"+html+"</div>";

document.querySelectorAll(".opt").forEach(opt=>{
opt.onclick=()=>{

document.querySelectorAll(".opt").forEach(o=>o.style.pointerEvents="none");

if(opt.innerText===correctAns){
opt.classList.add("correct");
speakText("Correct answer");
}else{
opt.classList.add("wrong");
speakText("Wrong answer");

document.querySelectorAll(".opt").forEach(o=>{
if(o.innerText===correctAns) o.classList.add("correct");
});
}

document.getElementById("nextBtn").style.display="inline-block";
};
});

document.getElementById("nextBtn").onclick=()=>{

qIndex++;

if(qIndex>=questions.length){
learn.innerHTML="<h2>Quiz Completed 🎉</h2>";
return;
}

showQuestion();
};
}


/* -------- SPEECH -------- */

function speak(){
speakText(info.innerText);
}

function speakText(text){
speechSynthesis.cancel();
speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

/* -------- VOICE ASSISTANT -------- */

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang="en-US";
recognition.continuous=false;

function startListening(){

info.innerText="Listening...";
recognition.start();

recognition.onresult=(event)=>{

let text=event.results[0][0].transcript.toLowerCase();
document.getElementById("prompt").value=text;

/* COMMAND SYSTEM */
if(text.includes("explain")) explain();
else if(text.includes("quiz")) quiz();
else generate();

info.innerText="You said: "+text;
};

recognition.onerror=()=>{
info.innerText="Mic permission denied";
};
}


function toggleFullscreen(){

if(!document.fullscreenElement){
viewer.requestFullscreen().catch(err=>console.log(err));
}
else{
document.exitFullscreen();
}

}


/* ============================= */
/*        CHATBOT AI            */
/* ============================= */

const OPENROUTER_API_KEY="your_real_key";

function toggleChat(){
const chat=document.getElementById("chatContainer");
chat.style.display=chat.style.display==="flex"?"none":"flex";
}

async function sendMessage(){

const input=document.getElementById("chatInput");
const msg=input.value.trim();
if(!msg) return;

addUser(msg);
input.value="";

try{

const response=await fetch("https://openrouter.ai/api/v1/chat/completions",{
method:"POST",
headers:{
"Authorization":"Bearer "+OPENROUTER_API_KEY,
"Content-Type":"application/json"
},
body:JSON.stringify({
model:"openai/gpt-3.5-turbo",
messages:[
{role:"system",content:"You are an educational AI assistant inside a 3D AR learning website. Explain clearly."},
{role:"user",content:msg}
]
})
});

const data=await response.json();

if(data.choices && data.choices.length>0){
const reply=data.choices[0].message.content;
addBot(reply);
}else{
addBot("AI did not respond properly.");
}

}catch(error){
console.error(error);
addBot("Error connecting to AI.");
}

}

function addUser(text){
document.getElementById("chatMessages").innerHTML+=
`<div class="userMsg">${text}</div>`;
scrollChat();
}

function addBot(text){
document.getElementById("chatMessages").innerHTML+=
`<div class="botMsg">${text}</div>`;
scrollChat();
speakText(text);
}

function scrollChat(){
const box=document.getElementById("chatMessages");
box.scrollTop=box.scrollHeight;
}

document.getElementById("chatInput").addEventListener("keypress",e=>{
if(e.key==="Enter") sendMessage();
});



/* -------- IMPORT FILE & AUTO GENERATE (FIXED VERSION) -------- */

window.addEventListener("DOMContentLoaded", function(){

const imageInput = document.getElementById("imageInput");

if(!imageInput) return;

imageInput.addEventListener("change", function(event){

const file = event.target.files[0];
if(!file) return;

let fileName = file.name.toLowerCase();

console.log("Selected:", fileName);

const result = detect(fileName);

currentTopic = result[0];
const modelPath = result[1];

viewer.removeAttribute("src");

setTimeout(()=>{

viewer.src = modelPath;
info.innerText = "Showing 3D model of " + currentTopic;
viewer.onload = ()=>{
let text = getExplanation();
speakText(text);
};
},100);

});

});

function handleFile(event){

const file = event.target.files[0];
if(!file) return;

let fileName = file.name.toLowerCase();

const result = detect(fileName);

currentTopic = result[0];
const modelPath = result[1];

viewer.removeAttribute("src");

setTimeout(()=>{

viewer.src = modelPath;
info.innerText = "Showing 3D model of " + currentTopic;

/* 🔥 IMPORTANT LINE */
summary();

/* 🔊 Voice */
setTimeout(()=>{
speakText(learn.innerText.replace(/<br>/g," "));
},300);

},150);
}
