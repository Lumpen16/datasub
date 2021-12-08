



abstract class AClass {

    Numbers: Array<number>


    constructor (n: Number) {
        this.Numbers = []
        this.fill(n)
    }

    private fill(len: Number): void {
        if (len <= 0) {
            console.log("Len of array cannot be less than 1")
        }
        for (let i = 0; i < len; i++) {
            this.Numbers.push(Math.ceil(Math.random() * 100))
        }
    }

    factorial(): Array<number> {
        if (this.Numbers.length < 1) {
            throw new Error("Numbers array is empty")
        }
        const mx = Math.max(...this.Numbers)
        let factNum = 1
        let counter = 2
        const factNums: Array<number> = []

        while (factNum < mx) {
            if (this.Numbers.includes(factNum)) {
                factNums.push(factNum)
            }
            factNum *= counter
            counter++
        }
        return factNums
    }

    abstract sort(): void
}


class Class1 extends AClass {
    constructor(n: Number) {
        super(n);
    }
    sort() {
        const len: number = this.Numbers.length
        if (len < 1) {
            throw new Error("Numbers array is empty")
        }

        for (let i = 0; i < len - 2; i++) {
            for (let j = 0; j < len - i - 2; j++) {
                if (this.Numbers[j] > this.Numbers[j + 1]) {
                    [this.Numbers[j], this.Numbers[j + 1]] = [this.Numbers[j + 1], this.Numbers[j]]
                }
            }
        }
        return this.factorial()
    }


}


class Class2 extends AClass {
    constructor(n: Number) {
        super(n);
    }
    sort() {
        if (this.Numbers.length < 1) {
            throw new Error("Numbers array is empty")
        }
        function quickSort(arr: Array<number>): Array<number>{
            if (arr.length <= 1)
                return arr
            let less = []
            let equals = []
            let bigger = []
            const rootNum = arr[Math.ceil(arr.length / 2)]
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > rootNum)
                    bigger.push(arr[i])
                else if (arr[i] === rootNum)
                    equals.push(arr[i])
                else
                    less.push(arr[i])
            }
            return quickSort(less).concat(equals).concat(quickSort(bigger))
        }

        this.Numbers = quickSort(this.Numbers)

        return this.factorial()
    }
}


const a = new Class1(5)

const b = new Class2(7)


console.log(`a: ${a.Numbers}\nb: ${b.Numbers}`)


console.log(`a facts: ${a.sort()}\nb facts: ${b.sort()}`)

console.log(`a: ${a.Numbers}\nb: ${b.Numbers}`)
