$(document).ready(function() {
    let volume = 1
    let counter = 0
    let loops = 0
    let arr = []
    let mute = false
    
    $('#volume').val(volume)
    $('#volumeText').html(`${(volume*100).toFixed(0)}%`)
    
    $('#volume').change(function() {
        volume = $(this).val()
        $('#volumeText').html(`${(volume*100).toFixed(0)}%`)
    })
    
    $("#plus").click(function(){
        count(++counter)
        !mute ? play() : 0
    })
    $("#loop").click(function(){
        loop(++loops)
        !mute ? play() : 0
    })

    $("#reset").click(function(){
        count(0)
        loop(0)
        arr = []
        $("#lastLoop").html(0)
        !mute ? play() : 0
    })
    $('#mute').change(function() {
        mute = $(this).is(':checked') ? true : false
        $('.icon-mute').toggleClass('d-none')
    })
    
    function play() {
        let knock = new Howl({
            src: ['http://d.zaix.ru/favP.mp3'],
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
