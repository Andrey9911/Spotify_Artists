// import name from "defindPopulr"
let name_artist = "";
let id_artist = undefined;
let option = undefined;



window.onload = () => {
    option = 'ARTIST_NIK';
    sessionStorage.clear();
    document.querySelector(".hint").classList.add("hint_active");
    setTimeout(() => {document.querySelector(".hint").classList.remove("hint_active")},5000)

    render(home_template)
    if(name_artist.length == 0)
    {
        name_artist = "search, please :/"
    } 
    document.querySelector(".artist_name").textContent = name_artist;
}

document.querySelector(".aside").addEventListener("click",(event) => {
    
    if(event.currentTarget != null) document.querySelector("aside").classList.add("active")
    
})

console.log(document.getElementsByClassName("opt"));
for(el of document.getElementsByClassName("opt"))
{
    el.addEventListener('click', e => {
        e.srcElement.classList.toggle('opt_active');
        option = e.srcElement.dataset.type;
        console.log(option);
    })

};

document.querySelector(".but.close_block").addEventListener("click",(e)=>{
    e.target.parentElement.classList.remove("active")
    e.target.parentElement.classList.remove("active-anim")

})
document.querySelector(".search-block__button").addEventListener("click", (e)=>{
    if(e.target.parentElement.querySelector("#search").value == null || e.target.parentElement.querySelector("#search").value === sessionStorage.getItem('nik')){
        console.log('Вы ниче не ввели или такой уже нашелся ;)');
        return
     }
       
    if(document.querySelector(".start-modal-block").classList.contains('start-modal-block_show'))
        {document.querySelector(".start-modal-block").classList.toggle('start-modal-block_show')}
    
    if(option == 'ARTIST_NIK') {
        sessionStorage.setItem('nik',e.target.parentElement.querySelector("#search").value)
        console.log(e.target.parentElement.querySelector("#search").value);
        render(home_template);
        searchFind(e.target.parentElement.querySelector("#search").value)
    }
    else if(option == 'SONGS')
        {
            render(texts_template) 
            compText(e.target.parentElement.querySelector("#search").value)
        }
    

})
document.addEventListener("keydown", (e)=>{
    if(e.code == "Enter") {
        render(home_template);
        searchFind(document.querySelector("#search").value)
    }
    
    
    
})


async function searchFind(event)//найти инфу про артиста
{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7f75cbbc5dmsh94f644ecb9832a1p10a2bajsn4e4e25b606fd',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    fetch(`https://spotify23.p.rapidapi.com/search/?q=${event}&type=multi%20&offset=0&limit=1&numberOfTopResults=1`, options)
        .then(response => response.json())
        .then(response => {
            let artist = response.artists.items[0].data
            console.log(response)
            name_artist = artist.profile.name;
            document.querySelector(".artist_name").textContent = name_artist;
            document.querySelector(".img_artist-block>img").src = artist.visuals.avatarImage.sources[0].url;

             id_artist = artist.uri.split("").splice(artist.uri.indexOf(":"),artist.uri.length - 1)
            .splice(1, artist.uri.length - 1)
            .splice(artist.uri.indexOf(":"), artist.uri.length - 1)
            .join("")//id артиста

            return id_artist
        })
        .then(id_artist => {
            console.log(id_artist);
            f(id_artist)
        })
        .then(()=>{
            setTimeout(() => {
                console.log(2);
                
                for(i of document.querySelectorAll(".content li"))
                {
                i.addEventListener("mousemove", e => {
                    giveInfo(e)
                })
                i.addEventListener("mouseleave", e => {
                    document.querySelector(".dop-info_block").classList.remove("active")
                })
                }
            },3000)
            
        })
        .catch(err => {
            console.log(err);
            setTimeout(() => {
                document.querySelector(".error").classList.add("active-anim")
            },100)
            document.querySelector(".error").classList.add("active")
        }
        );
}

