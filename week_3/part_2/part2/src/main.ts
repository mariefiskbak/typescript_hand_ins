import './style.css'
import typescriptLogo from './typescript.svg'
import {setupCounter} from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

class Person {
    name: string
    age: number
    occupation: string
    private_salary: number

    constructor(name: string, age: number, occupation: string, salary: number = 0) {
        this.name = name
        this.age = age
        this.occupation = occupation
        this.private_salary = salary
    }

introduce() {
    return `Hello, my name is ${this.name} and I am a ${this.occupation}. I earn ${this.private_salary}.`
}

incrementAge() {
    this.age++
}

setSalary(salary: number) {
    this.private_salary = salary
}

getSalary(): number {
    return this.private_salary
}
}

const john = new Person("John Smith", 30, "software developer");
console.log(john.introduce()); // "Hello, my name is John Smith and I am a software developer. I earn 0$"
console.log(john.age); // 30
john.incrementAge();
console.log(john.age); // 31
john.setSalary(100000);
console.log(john.getSalary()); //100000
console.log(john.introduce());