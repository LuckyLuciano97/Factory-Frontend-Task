$(document).ready(function(){
    $('#next').click(function(){
        //Making first image in the div dissapear
        var firstImage = $('#first-pics .images').first().css({"display":"none"})
        var firstImage2 = $('#second-pics .images').first().css({"display":"none"})
        //Putting the first image to the end of the div
        $('#first-pics').append(firstImage)
        $('#second-pics').append(firstImage2)
        //Displaying the image again using fadeIn method
        $('#first-pics .images').last().fadeIn('slow')
        $('#second-pics .images').last().fadeIn('slow')
    })

    $('#prev').click(function(){
        //Making last image in the div dissapear
        var lastImage = $('#first-pics .images').last().css({"display":"none"})
        var lastImage2 = $('#second-pics .images').last().css({"display":"none"})
        //Putting the last image to the front of the div
        $('#first-pics').prepend(lastImage)
        $('#second-pics').prepend(lastImage2)
        //Displaying the image again using fadeIn method
        $('#first-pics .images').first().fadeIn('slow')
        $('#second-pics .images').first().fadeIn('slow')
        })
    })

