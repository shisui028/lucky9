function lucky9generator(){
    //for 4 types of cards
    var randcard = Math.floor(Math.random()*4)+1
    var getimage
    //for card 1
    var image1
    var randnum1 = Math.floor(Math.random()*13)+1
    var value1
    //condition for 4 types of cards
    if(randcard == 1){
        getimage = "hearts"
    }
    else if(randcard == 2){
        getimage = "clubs"
    }
    else if(randcard == 3){
        getimage = "spades"
    }
    else if(randcard == 4){
        getimage = "diamonds"
    }
    //condition for card 1
    if(randnum1 == 1){
        value1 = 1
        image1 = "ace_of_" + getimage + ".png"
    }
    else if(randnum1 == 2){
        value1 = 2
        image1 = "2_of_" + getimage + ".png"
    }
    else if(randnum1 == 3){
        value1 = 3
        image1 = "3_of_" + getimage + ".png"
    }
    else if(randnum1 == 4){
        value1 = 4
        image1 = "4_of_" + getimage + ".png"
    }
    else if(randnum1 == 5){
        value1 = 5
        image1 = "5_of_" + getimage + ".png"
    }
    else if(randnum1 == 6){
        value1 = 6
        image1 = "6_of_" + getimage + ".png"
    }
    else if(randnum1 == 7){
        value1 = 7
        image1 = "7_of_" + getimage + ".png"
    }
    else if(randnum1 == 8){
        value1 = 8
        image1 = "8_of_" + getimage + ".png"
    }
    else if(randnum1 == 9){
        value1 = 9
        image1 = "9_of_" + getimage + ".png"
    }
    else if(randnum1 == 10){
        value1 = 10
        image1 = "10_of_" + getimage + ".png"
    }
    else if(randnum1 == 11){
        value1 = 11
        image1 = "jack_of_" + getimage + ".png"
    }
    else if(randnum1 == 12){
        value1 = 12
        image1 = "queen_of_" + getimage + ".png"
    }
    else if(randnum1 == 13){
        value1 = 13
        image1 = "king_of_" + getimage + ".png" 
    }
    //for card 2
    var image2
    var randnum2 = Math.floor(Math.random()*13)+1
    var value2
    //condition for card 2
    if(randnum2 == 1){
        value2 = 1
        image2 = "ace_of_" + getimage + ".png"
    }
    else if(randnum2 == 2){
        value2 = 2
        image2 = "2_of_" + getimage + ".png"
    }
    else if(randnum2 == 3){
        value2 = 3
        image2 = "3_of_" + getimage + ".png"
    }
    else if(randnum2 == 4){
        value2 = 4
        image2 = "4_of_" + getimage + ".png"
    }
    else if(randnum2 == 5){
        value2 = 5
        image2 = "5_of_" + getimage + ".png"
    }
    else if(randnum2 == 6){
        value2 = 6
        image2 = "6_of_" + getimage + ".png"
    }
    else if(randnum2 == 7){
        value2 = 7
        image2 = "7_of_" + getimage + ".png"
    }
    else if(randnum2 == 8){
        value2 = 8
        image2 = "8_of_" + getimage + ".png"
    }
    else if(randnum2 == 9){
        value2 = 9
        image2 = "9_of_" + getimage + ".png"
    }
    else if(randnum2 == 10){
        value2 = 10
        image2 = "10_of_" + getimage + ".png"
    }
    else if(randnum2 == 11){
        value2 = 11
        image2 = "jack_of_" + getimage + ".png"
    }
    else if(randnum2 == 12){
        value2 = 12
        image2 = "queen_of_" + getimage + ".png"
    }
    else if(randnum2 == 13){
        value2 = 13
        image2 = "king_of_" + getimage + ".png" 
    }
    //getting the images
    document.getElementById("cardimage1").src = "./assets/" + image1
    document.getElementById("cardimage2").src = "./assets/" + image2
    //total of value of card 1 and card 2
    var total = value1 + value2
    //condition if win or not
    if(total == 9){
        window.alert("You Won")
    }
}