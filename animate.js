
$('#player_image, #npc').hover(charRotate, charNormal)

function charRotate() {
    $(this).animate({
        deg: 10
    }, {
        duration: 200,
        step: function(now) {
            $(this).css('transform', 'rotate(' + now + 'deg)');
        }
    })

    $(this).animate({
        deg: -10
    }, {
        duration: 150,
        step: function(now) {
            $(this).css('transform', 'rotate(' + now + 'deg)');
        }
    })

    $(this).animate({
        deg: 5
    }, {
        duration: 100,
        step: function(now) {
            $(this).css('transform', 'rotate(' + now + 'deg)');
        }
    })

}


function charNormal() {
    $(this).animate({
        deg: 0
    }, {
        duration: 500,
        step: function(now) {
            $(this).css('transform', 'rotate(' + now + 'deg)');
        }
    })
}

$("#anvil").hover(itemGlow, itemNormal)

function itemGlow() {
    console.log("yo")
    $(this).css({
        'transform': 'scale(1.2)',
        'transition': 'transform 0.2s ease-in-out',
        'border-radius': '50%',
        'box-shadow': "0 0 20px -10px #fff, inset 0 0 20px -10px #fff"
      });

    $(this).animate({
    }, 500);
}

function itemNormal() {
    $(this).css({
        'transform': 'scale(1)',
        'transition': 'transform 0.2s ease-in-out',
        'border-radius': '0',
        'box-shadow': "0 0 0px 0px #fff"
      });
}