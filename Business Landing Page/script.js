const services=[
    {ser_name : "Creative Idea" , description : "We work on this for best"},
    {ser_name : "Web Design" , description : "We work on this for best"},
    {ser_name : "24/7 Support" , description : "We work on this for best"},
    {ser_name : "Respnsive Layout" , description : "We work on this for best"},
    {ser_name : "Color Options" , description : "We work on this for best"},
    {ser_name : "Web Development" , description : "We work on this for best"}
]
let parent = document.querySelector("#service-card")
for(let i =0 ; i<services.length; i++){
    let card = document.createElement("div");
    card.className = 'card';
    card.style.backgroundColor = 'white'
    card.style.width="100%"
    card.style.height="250px"
    card.style.display='flex'
    card.style.flexDirection='column'
    card.style.justifyContent='center'
    card.style.alignItems='center'
    card.style.borderRadius ="8px"
    card.innerHTML = `
    <h3 class="font-bold text-xl">${services[i].ser_name}</h3>
    <p class="font-medium text-sm">${services[i].description}</p>
    `
    parent.appendChild(card)
}