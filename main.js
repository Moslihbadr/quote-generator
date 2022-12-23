let paragraph = document.getElementById('paragraph');
let name = document.getElementById('name');
let btn = document.getElementById('btn');

const quotes = [
    {
    quote:'“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',
    person:"badr moslih"
    },
    {
    quote:'“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”',
    person:"ilyass hatim"},
    {
    quote:'“First, solve the problem. Then, write the code.”',
    person:"youssef foukahi"
    },
    {
    quote:'“Make it work, make it right, make it fast.”',
    person:"yassine guarrah"
    },
    {
    quote:'“Before software can be reusable it first has to be usable.”',
    person:"ahmed tiguini"
    },
    {
    quote:'“Experience is the name everyone gives to their mistakes.”',
    person:"jamal aitjack"
    }
];

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random()*quotes.length);
    paragraph.innerHTML = quotes[random].quote
    name.innerHTML = quotes[random].person
})