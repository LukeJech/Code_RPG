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

console.log(arrays[0])