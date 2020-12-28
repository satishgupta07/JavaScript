$(document).ready(()=> {

    // console.log($('#mydiv'))

    let x = $('#mydiv')
    x.css('background-color','green').css('font-size','50px')
    x.append('World')

    console.log($('#mydiv').attr('id','myDiv'))
    console.log($('#inp').prop('checked'))
    
    $('#btn').click((ev)=> {
        x.css('background-color','orange')
        console.log(ev.target)
    })
})