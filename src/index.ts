class Hero {
  
  private _name: string;
  private _power: number;
  private _life: number;
  weapon!: Weapon;

constructor(n: string, p: number, l: number){
  this._name = n;
  this._power = p;
  this._life = l;
}

  attack(opponent: Hero): void{
    if(this.weapon instanceof Weapon){
    opponent.setlife(opponent.getLife() - this.getPower()  - this.weapon.damage) ;
    }else{
      opponent.setlife(opponent.getLife() - this.getPower())
    }
  }

  isAlive(): boolean{
    if(this.getLife()>0){      
      return true;
    }else{     
      return false;
    }
  }
  getName(): string{
    return this._name;
  }
  getLife(): number{
    return this._life;
  }
  getPower(): number{
    return this._power;
  }
  setname(newName: string){
    this._name = newName;
  }
  setpower(newPower: number){
    this._power = newPower;
  }
  setlife(newLife: number){
    this._life = newLife;
  }
}

class Weapon{
  name: string;
  damage: number;

  constructor(n: string, d: number){
    this.name = n
    this.damage =d
  }
}

class HeroAxe extends Hero{
  constructor(n: string, p: number, l: number, w: Weapon){
    super(n, p, l)
    this.weapon = w;
  }  
  attack(opponent: Hero): void {
    if(opponent instanceof HeroSword){ 
    
    opponent.setlife(opponent.getLife()-this.getPower()*2 - this.weapon.damage);
  }else{
    super.attack(opponent)
  }
}}

class HeroSword extends Hero{
  constructor(n: string, p: number, l: number, w: Weapon){
    super(n, p, l)
    this.weapon = w;
  }
  attack(opponent: Hero): void {
    if(opponent instanceof HeroSpear){ 
    
    opponent.setlife(opponent.getLife() - this.getPower()*2 - this.weapon.damage);
  }else{
    super.attack(opponent)
  }
}}

class HeroSpear extends Hero{
  constructor(n: string, p: number, l: number, w: Weapon){
    super(n, p, l)
    this.weapon = w;
  }
  attack(opponent: Hero): void {
    if(opponent instanceof HeroAxe){ 
    
    opponent.setlife(opponent.getLife()-this.getPower()*2 - this.weapon.damage);
  }else{
    super.attack(opponent)
  }
}}


//**************************************************
// Heros & Weapons
// *************************************************
const sword = new Weapon("sword", 20);
const axe = new Weapon("axe", 15);
const spear = new Weapon("spear", 30);

const sangolu = new Hero("Sangolu", 250, 1000);
const cogema = new Hero("Cogema", 250, 1000);
const britneySpear = new HeroSpear("BritneySpear",5,100,spear);
const appHache = new HeroAxe("AppHache", 25,100,axe);
const jonSword = new HeroSword("jonSword", 20,100,sword);



function letsGetRadisToRumble(fighter1: Hero, fighter2: Hero){
  let round:number = 1
  console.log(`round: ${round}, letsGetRadisToRumble`);
while(fighter1.isAlive()&&fighter2.isAlive()){
  fighter1.attack(fighter2);
  fighter2.attack(fighter1);
      if(fighter1.getLife()<=0 && fighter2.getLife()<=0){
      console.log(`C'est un match nul bande de cadavres !!`);
    }
    else if(!fighter1.isAlive()){
      console.log(`C'est la fin du monde libre, ${fighter2.getName()} wins`);
    }
    else if(!fighter2.isAlive()){
      console.log(`KAMEHAMEHAMEHAAAAAAA !!!!, ${fighter1.getName()} wins`);
    }else{
      round++
      console.log(`round: ${round}, le combat continue`);
    }
    
}}

letsGetRadisToRumble(jonSword,cogema)

