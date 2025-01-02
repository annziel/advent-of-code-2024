let input = ''
const url = "https://adventofcode.com/2024/day/3/input";
try {
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
    }
    const text = await response.text();
    input = text
} catch (error) {
    console.error(error.message);
}


const mulRegex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g
    const doRegex = /do\(\)/
    const dontRegex = /don't\(\)/

    const expressions = input.match(mulRegex || doRegex || dontRegex)
    console.log({expressions})
    let sum = 0
    expressions.forEach((exp, index) => {
        if (exp.startsWith("mul")) {
            if (expressions)

        }
    }) 
        
        const startIndex = mul.indexOf("(")
        const middleIndex = mul.indexOf(",")
        const endIndex = mul.indexOf(")")
        // console.log(startIndex, middleIndex, endIndex)
        const firstInt = mul.slice(startIndex + 1 , middleIndex)
        const secondInt = mul.slice(middleIndex + 1, endIndex)
        // console.log({firstInt})
        // console.log({secondInt})
        // console.log(firstInt * secondInt)
        sum += firstInt * secondInt
    }
    console.log({sum})