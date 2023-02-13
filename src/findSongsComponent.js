function compHome(id)//компонент "дом"
{
    for(i of document.querySelector(".content").children)
    {
        
        i.addEventListener("mouseenter", e => {
            giveInfo(e)
        })
    }

}
function compText()//компонент "текст песни"
{
    let id_track
    let text_comp = document.querySelector(".texts_template")
    text_comp.querySelector(".but")
    .addEventListener("click", ev => {
        let title = text_comp.querySelector("#search_songs").value

        fetch(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc`)
        .then(rez => {
            return rez.json()
        })
        .then(rez => {console.log(rez);})
        .catch(err => {
            console.log(err);
            setTimeout(() => {
                document.querySelector(".error").classList.add("active-anim")
            },100)
            document.querySelector(".error p").textContent = `${err}`
            document.querySelector(".error").classList.add("active")
        })
    })

    
}