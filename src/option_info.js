function giveInfo(event)
{
    let block = document.querySelector(".dop-info_block")
    block.classList.add("active")
    
    
    let nameTrack = event.currentTarget.querySelector('span').textContent;
    let finding = library.find(i => nameTrack == i.name)
    let x = event.clientX
    let y = event.clientY

    block.querySelector(".date span")
    .innerHTML = `${finding.date.year}-${finding.date.month}-${finding.date.day}`;
    
    if(finding.isAlbum) 
    {
        block.querySelector(".countTrack span")
        .innerHTML = `${finding.countTrack}`;
    }
    else block.querySelector(".countTrack span").textContent = "не альюом"
    
    
    block.style.top = (y/2) + "px"
    block.style.left = (x/2) + "px"
    


    
}

