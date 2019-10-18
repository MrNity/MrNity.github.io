$(document).ready(function() {
    let volume = 0.5
    let counter = 0
    let loops = 0
    let arr = []
    
    $('#volume').val(volume)
    $('#volumeText').html(`${(volume*100).toFixed(0)}%`)
    
    $('#volume').change(function() {
        volume = $(this).val()
        $('#volumeText').html(`${(volume*100).toFixed(0)}%`)
    })
    
    $("#plus").click(function(){
        count(++counter)
        play()
    })
    $("#loop").click(function(){
        loop(++loops)
        play()
    })

    $("#reset").click(function(){
        count(0)
        loop(0)
        arr = []
        $("#lastLoop").html(0)
        play()
    })

    
    function play() {
        let knock = new Howl({
            src: ['https://drive.google.com/file/d/1-Axpo0MskEu7ofy1_Jz4a7g8Y0VlEMab/view?usp=sharing'],
            volume,
            sprite: {
                knock: [0, 200]
            }
        })
        knock.play('knock')
    }
    function count(c){
        counter = c
        $("#counter").html(counter)
    }
    function loop(c){
        arr.push(counter)
        loops = c
        $("#loops").html(loops)
        $("#lastLoop").html(arr.join(', '))
        count(0)
    }
})
