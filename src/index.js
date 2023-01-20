// import name from "defindPopulr"
let name_artist = "";
let id_artist = undefined;


window.onload = () => {
    if(name_artist.length == 0)
    {
        name_artist = "search, please :/"
    } 
    document.querySelector(".artist_name").textContent = name_artist;
}

for(i of document.querySelectorAll(".content li"))
{

        i.addEventListener("mouseenter", e => {
            giveInfo(e)
        })
}

document.querySelector(".but.close_block").addEventListener("click",(e)=>{
    e.target.parentElement.classList.remove("active")
    e.target.parentElement.classList.remove("active-anim")

})
document.querySelector(".search_but").addEventListener("click", (e)=>{
    searchFind(e.target.parentElement.querySelector("#search").value)
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
        .catch(err => {
            setTimeout(() => {
                document.querySelector(".error").classList.add("active-anim")
            },100)
            document.querySelector(".error").classList.add("active")
        }
        );
}

