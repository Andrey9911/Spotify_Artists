function compHome(id)//компонент "дом"
{
    for(i of document.querySelector(".content").children)
    {
        
        i.addEventListener("mouseenter", e => {
            giveInfo(e)
        })
    }

}
function compText(title_songs)//компонент "текст песни"
{
    let id_track
    const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '7f75cbbc5dmsh94f644ecb9832a1p10a2bajsn4e4e25b606fd',
                    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
                }
            };
            
            fetch(`https://genius-song-lyrics1.p.rapidapi.com/search/?q=${title_songs}&per_page=1&page=1`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response.hits[0].result.id)
                    id_track = response.hits[0].result.id
                    return id_track
                })
                .then(resolve => {
                    fetch(`https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${id_track}`, options)
                    .then(response => response.json())
                    .then(response => {
                        console.log(response);
                        document.body.querySelector(".song_title h2")
                        .textContent = response.lyrics.tracking_data.title
                        document.body.querySelector(".song_text-block")
                        .innerHTML = response.lyrics.lyrics.body.html

                        
                        for(a of text_comp.querySelector(".song_text-block").getElementsByTagName("a"))
                        {
                            a.classList.add("def")
                        }
                        
                        console.log();
                    })
                    .catch(err => console.error(err));
                })
                .catch(err => console.error(err));

            

    
}