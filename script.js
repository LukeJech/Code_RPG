// game dialog
const story_text = ["Hey look! Time to fight your first battle already! You now stand before your opponent.", "Time to Fight!", ]
var story_place = 0
const fight_text = "Use the buttons below to attack, heal or use a spell. Honestly you should have been able to figure out that yourself. It's pretty self-explanatory."

// dialog and button ids 
const dialog = document.getElementById("dialog_words")
const continue_btn = document.getElementById("continue_button")
const fight_btn = document.getElementById("start_fight_button")
const player_action_btns = [document.getElementById("attack_button"),document.getElementById("heal_button"),document.getElementById("spell_button")]
const player_actions = document.getElementById("player_actions")
const coding_questions = document.getElementById("coding_questions")

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
        coding_questions.style.visibility ="visible"
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

//enemy generation

var enemy = {
    hp: 100,
    mana: 100
}


// dialog & fight functions

function new_dialog() {
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
    player_actions.style.visibility ="visible"

}
