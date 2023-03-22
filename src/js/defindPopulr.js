let library = []
async function f(id)
{
    for(i of document.querySelectorAll(".popular .content")){i.innerHTML = ""}
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7f75cbbc5dmsh94f644ecb9832a1p10a2bajsn4e4e25b606fd',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
        
    };
    function Info(name,countTrack,isAlbum,date)
                {
                    this.name = name
                    this.countTrack = countTrack,
                    this.isAlbum = isAlbum,
                    this.date = date
                }


    fetch(`https://spotify23.p.rapidapi.com/artist_overview/?id=${id}`, options)
        .then(response => response.json())
        .then(response => {
            let popul_reliese = response.data.artist.discography.popularReleases.items
            let singles_array = popul_reliese.filter(item => item.releases.items[0].type == "SINGLE");
            let album_array = popul_reliese.filter(item => item.releases.items[0].type == "ALBUM");

            return {
                singles_array,
                album_array
            }
        })
        .then(obj => {
            console.log(obj);

            for(i of obj.album_array){
                let items = i.releases.items[0]

                let material = new Info(items.name,items.tracks.totalCount,true,items.date)
                library.push(material)

                let li = document.createElement("li")
                li.innerHTML = 
                            '<div class="mini-img"><img src="'+items.coverArt.sources[1].url+'" alt=""></div>'+
                                '<span>'+items.name+'</span>'
                            
                                                    
                document.querySelector(".popular_album .content").append(li)
            }
            for(i of obj.singles_array){
                let items = i.releases.items[0]

                let material = new Info(items.name,items.tracks.totalCount,false,items.date)
                library.push(material)

                let li = document.createElement("li")
                li.innerHTML = 
                            '<div class="mini-img"><img src="'+items.coverArt.sources[1].url+'" alt=""></div>'+
                                '<span>'+items.name+'</span>'
                            
                                                    
                document.querySelector(".popular_track .content").append(li)
            }
            // console.log((library));
            


        })
        .catch(err => console.error(err));
}