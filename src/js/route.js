const home_template = `
        <div class="popul_relz">
            <div class="dop-info_block">
                <p class="date">дата выпуска: <span>2022-12-1</span></p>
                <p class="countTrack">количество треков в альбоме: <span>12</span></p>
            </div>
            <div class="popular_track popular">
                <div class="title">Популярные песни</div>
                <ol class="content">
                </ol>
            </div>
            <div class="popular_album popular">
                <div class="title">Популярные альбомы</div>
                <ol class="content"></ol>
            </div>
        </div>
        `
const texts_template = `
<div class="texts_template">
<div class="search_block">
    <input type="text" class="search" id="search_songs">
    <div class="but">Найти</div>
</div>
<div class="song_text-block"></div>

</div>
`

let path;

function render(content)
{
    document.querySelector("main").innerHTML = content
}

for(el of document.querySelector(".side_mini-content").children)
{
    

    el.addEventListener("click", ev => {
        let target = ev.currentTarget
        let defaultUrl = window.location.href
        // let nUrl = new URL(`/index.html/${target.href}`, window.location.href)
        
        console.log( target.dataset.index);
        switch(parseInt(target.dataset.index))
        {
            case 1:
                render(home_template)
                compHome(id_artist)
            break;
            case 2:
                render(texts_template) 
                compText()
            break;
            case 3:
                render(texts_template) 
            break;
        }
        
        
        
    })
}