// dialog and button ids 
const dialog = document.getElementById("dialog_words")
const continue_btn = document.getElementById("continue_button")
const fight_btn = document.getElementById("start_fight_button")
const player_action_btns = [document.getElementById("attack_button"),document.getElementById("heal_button"),document.getElementById("spell_button")]
const player_actions = document.getElementById("player_actions")
const coding_questions = document.getElementById("coding_questions")


//player and NPC ids
const player_img_id = document.getElementById("player_image")
const npc_img_id = document.getElementById("npc")

//Player stats and answer to question
var player = {
    name: "Kelvin",
    hp: 100,
    mana: 100,
    gold: 0,
    level: 1,
    xp: 0,
    attack() {
        question_text.innerText = `Which array position [${rand_array_position}] will do the most damage?`
        coding_questions.style.display = "inline-block"
        answer_a.innerText = "a: [" + arrays[0] + "]"
        answer_b.innerText = "b: [" + arrays[1] + "]"
        answer_c.innerText = "c: [" + arrays[2] + "]"
        
    },
    current_answer: 0,
    answer(element) {
        this.current_answer = element.innerText
        if (this.current_answer == "a") {
            enemy.hp -= arrays[0][rand_array_position]
            enemy_hp.innerText = enemy.hp
        } else if (this.current_answer == "b") {
            enemy.hp -= arrays[1][rand_array_position]
            enemy_hp.innerText = enemy.hp
        } else {
            enemy.hp -= arrays[2][rand_array_position]
            enemy_hp.innerText = enemy.hp
        }
    }
}

//character creation
function character_info() {
    continue_btn.style.visibility = "visible"
    character_info_popup.style.visibility = "hidden"
    npc_img_id.style.visibility = "visible"
    $('#anvil').show()

    player_race = player_race_id.value
    player_gender = player_gender_id.value
    player_name = player_name_id.value

    if (player_race == "goblin") {
        player_img_id.src = "characters/Goblins/Goblin_" + player_gender + "_idle1.png"
    } else if (player_race == "minotaur") {
        player_img_id.src = "characters/Minotaurs/Minotaur_" + player_gender + "_idle1.png"
    } else if (player_race == "elf") {
        player_img_id.src = "characters/Elves/Elf_" + player_gender + "_idle1.png"
    } else {
        player_img_id.src = "characters/Humans/Human_" + player_gender + "_idle1.png"
    }

    player_img_id.style.visibility = "visible"
}

const character_info_popup = document.getElementById("character_info")
const player_name_id = document.getElementById("player_name")
const player_race_id = document.getElementById("player_race")
const player_gender_id = document.getElementById("player_gender")
var player_name
var player_race 
var player_gender 


// game dialog

var story_place = 0
const fight_text = "Use the buttons below to attack, heal or use a spell. Honestly you should have been able to figure out that yourself. It's pretty self-explanatory."


// player and enemy stat ids
const enemy_hp = document.getElementById("enemy_hp")

// question / answer ids
const question_text = document.getElementById("question")
const answer_a = document.getElementById("option_a")
const answer_b = document.getElementById("option_b")
const answer_c = document.getElementById("option_c")



// random arrays

class Random_Array {
    array = [];
    generate() {
        for (let i = 0; i<8; i++) {
            this.array.push(Math.floor(Math.random()*10))
            
        }
    }
}

const arrays = []

for (let i = 0; i < 3; i++) {
    let ran_array = new Random_Array()
    ran_array.generate()
    arrays.push(ran_array.array)
    
}

rand_array_position = Math.floor(Math.random()*8)




//enemy generation

var enemy = {
    hp: 100,
    mana: 100
}


// dialog & fight functions

function new_dialog() {
    var story_text = ["Hrogar: Yes you my...", `Hrogar: my ${player_race} child named ${player_name}...`,`Hrogar: ${player_name} we have 5 more orders from the village for hammers.`,"Hrogar: I have to take care of an emergency and need you to make them.","Hrogar: I know I've only shown you a few times so if you forget what to do, please look over the instructions I've written down.","Time to Fight!", ]

    if (story_place == 0) {
        character_info_popup.style.visibility = "visible"
        continue_btn.style.visibility = "hidden"
        npc_img_id.style.visibility = "hidden"
        $('#anvil').hide()
    }

    if (dialog.innerText != "Time to Fight!" ) {
        dialog.innerText = story_text[story_place]
        story_place++
    } else {
        continue_btn.style.display = "none"
        fight_btn.style.display = "inline-block"
        dialog.innerText = ""
    }
}

function start_fight() {
    fight_btn.style.display = "none"
    dialog.innerText = fight_text
    player_actions.style.display = "inline-block"

}
