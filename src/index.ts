class Hero {
  private _name: string;
  private _power: number;
  private _life: number;
  weapon!: Weapon;

  constructor(n: string, p: number, l: number) {
    this._name = n;
    this._power = p;
    this._life = l;
  }

  attack(opponent: Hero): void {
    if (this.weapon instanceof Weapon) {
      opponent.setlife(
        opponent.getLife() - this.getPower() - this.weapon.damage
      );
    } else {
      opponent.setlife(opponent.getLife() - this.getPower());
    }
  }

  isAlive(): boolean {
    if (this.getLife() > 0) {
      return true;
    } else {
      return false;
    }
  }
  getName(): string {
    return this._name;
  }
  getLife(): number {
    return this._life;
  }
  getPower(): number {
    return this._power;
  }
  setname(newName: string) {
    this._name = newName;
  }
  setpower(newPower: number) {
    this._power = newPower;
  }
  setlife(newLife: number) {
    this._life = newLife;
  }
}

class Weapon {
  name: string;
  damage: number;

  constructor(n: string, d: number) {
    this.name = n;
    this.damage = d;
  }
}

class HeroAxe extends Hero {
  constructor(n: string, p: number, l: number, w: Weapon) {
    super(n, p, l);
    this.weapon = w;
  }
  attack(opponent: Hero): void {
    if (opponent instanceof HeroSword) {
      opponent.setlife(
        opponent.getLife() - this.getPower() * 2 - this.weapon.damage
      );
    } else {
      super.attack(opponent);
    }
  }
}

class HeroSword extends Hero {
  constructor(n: string, p: number, l: number, w: Weapon) {
    super(n, p, l);
    this.weapon = w;
  }
  attack(opponent: Hero): void {
    if (opponent instanceof HeroSpear) {
      opponent.setlife(
        opponent.getLife() - this.getPower() * 2 - this.weapon.damage
      );
    } else {
      super.attack(opponent);
    }
  }
}

class HeroSpear extends Hero {
  constructor(n: string, p: number, l: number, w: Weapon) {
    super(n, p, l);
    this.weapon = w;
  }
  attack(opponent: Hero): void {
    if (opponent instanceof HeroAxe) {
      opponent.setlife(
        opponent.getLife() - this.getPower() * 2 - this.weapon.damage
      );
    } else {
      super.attack(opponent);
    }
  }
}

//**************************************************
// Weapons & Heros
// *************************************************
const sword = new Weapon("sword", 20);
const axe = new Weapon("axe", 15);
const spear = new Weapon("spear", 30);

const sangolu = new Hero("Sangolu", 500, 1500);
const cogema = new Hero("Cogema", 600, 1200);
const britneySpear = new HeroSpear("BritneySpear", 5, 100, spear);
const ajax = new HeroAxe("Ajax", 25, 100, axe);
const handSword = new HeroSword("handSword", 20, 100, sword);

//**************************************************** */

const panneauInfo = document.getElementById("panneauInfo");
const namePlayer1 = document.getElementById("nomJoueur1") as HTMLButtonElement;
const namePlayer2 = document.getElementById("nomJoueur2") as HTMLButtonElement;
const buttonFight = document.getElementById("button2") as HTMLButtonElement;

const choix1 = document.getElementById("choix1") as HTMLSelectElement;
const choix2 = document.getElementById("choix2") as HTMLSelectElement;
console.log(choix1.value);

function getHeroFromChoice(choice: string): Hero {
  switch (choice) {
    case "sangolu":
      console.log("sangolu");
      return sangolu;
    case "cogema":
      return cogema;
    case "britneySpear":
      return britneySpear;
    case "ajax":
      return ajax;
    case "handSword":
      return handSword;
    default:
      throw new Error("Héros non valide");
  }
}

function letsGetRadisToRumble(fighter1: Hero, fighter2: Hero) {
  
  let round: number = 1;
  
  if (namePlayer2) {
    namePlayer2.innerText = fighter2.getName();
  }
  if (namePlayer1) {
    namePlayer1.innerText = fighter1.getName();
  }

  
  if (panneauInfo)
    panneauInfo.innerHTML += `<div>round: ${round}, letsGetRadisToRumble</div>`;
  console.log(`round: ${round}, letsGetRadisToRumble`);
  while (fighter1.isAlive() && fighter2.isAlive()) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
    if (fighter1.getLife() <= 0 && fighter2.getLife() <= 0) {
      if (panneauInfo)
        panneauInfo.innerHTML += `C'est un match nul bande de cadavres !!`;
    } else if (!fighter1.isAlive()) {
      if (panneauInfo)
        if (fighter2.getName() == "Cogema") {          
          panneauInfo.innerHTML += `C'est la fin du monde libre, ${fighter2.getName()} wins`;
        } else if (fighter2.getName() == "Sangolu") {
          panneauInfo.innerHTML += `KAMEHAMEHAMEHAAAAAAA !!!!, ${fighter2.getName()} wins`;
        } else {
          console.log("test6");
          panneauInfo.innerHTML += `${fighter2.getName()} wins`;
        }
    } else if (!fighter2.isAlive()) {
      if (panneauInfo)
        if (fighter1.getName() == "Cogema") {
          panneauInfo.innerHTML += `C'est la fin du monde libre, ${fighter1.getName()} wins`;
        } else if (fighter1.getName() == "Sangolu") {
          panneauInfo.innerHTML += `KAMEHAMEHAMEHAAAAAAA !!!!, ${fighter1.getName()} wins`;
        } else {
          panneauInfo.innerHTML += `${fighter2.getName()} wins`;
        }
    } else {
      round++;
      if (panneauInfo)
        panneauInfo.innerHTML += `<div>round: ${round}, le combat continue</div>`;
      console.log(`round: ${round}, le combat continue`);
    }
  }
}

buttonFight.addEventListener("click", () => {
if (namePlayer1 && namePlayer2 && buttonFight ) {
  const fighter1 = getHeroFromChoice(choix1.value);
  const fighter2 = getHeroFromChoice(choix2.value);
  
    letsGetRadisToRumble(fighter1, fighter2);
  }});









// *****************************************************************
// Tentative infructueuse d'afficher le resultat du combat
// après avoir cliqué sur le lien de choix.html.
// *****************************************************************

// const button = document.getElementById("button") as HTMLAnchorElement;

// // Sauvegarder les informations des combattants dans le stockage local
// localStorage.setItem("fighter1", JSON.stringify(sangolu));
// localStorage.setItem("fighter2", JSON.stringify(cogema));

// if (button) {
//   button.addEventListener("click", function (event) {
//     console.log("test0");
//     event.preventDefault();
//     console.log("test1");

//     // Récupérer les informations sur les combattants depuis localStorage
//     const fighter1JSON = localStorage.getItem("fighter1");
//     const fighter2JSON = localStorage.getItem("fighter2");

//     // Vérifier si les valeurs récupérées ne sont pas nulles
//     if (fighter1JSON && fighter2JSON) {
//       const fighter1 = JSON.parse(fighter1JSON);
//       const fighter2 = JSON.parse(fighter2JSON);

//       // Exécuter la fonction letsGetRadisToRumble avec les combattants récupérés
//       console.log("test2");
//       letsGetRadisToRumble(sangolu, cogema);
//     }
//   });
// }
