
# Consignes

Tu vas devoir trouver les informations suivantes et les tester au fur et à mesure dans ton programme pour expérimenter et comprendre comment TypeScript pourra t'aider à écrire ton meilleur code !

## Level 1

- Quels sont les différents type primitives de données en TypeScript ? 
```
bigint => créée en ajoutant un n à la fin d'un entier
boolean
null
number
string
symbol => une donnée unique et immutable.
undefined
```

- Comment typer un tableau ? 

Exemple d'un tableau de nombres
let nombres: number[] = [1, 2, 3, 4, 5];
console.log(nombres );

Exemple d'un tableau de chaînes de caractères
let mots: string[] = ["Bonjour", "Monde"];
console.log(mots);

Exemple d'un tableau mixte de nombres et de chaînes de caractères
let mixte: (number | string)[] = [1, "deux", 3, "quatre"];
console.log(mixte);


- Quel est le type `any` ?

let variable: any;

variable = 10; variable peut contenir un nombre
console.log(variable);
variable = "Bonjour"; mais aussi une chaîne de caractères
console.log(variable);
variable = true; voir même une valeur booléenne... en gros c'est un fourre tout lol
console.log(variable);

Comment typer le retour d'une fonction ainsi que le type de ses paramètres ?

Typage du retour de la fonction :
function addition(a: number, b: number): number {
  return a + b;
}
console.log(addition(5,10));
Typage des paramèt+-+res de la fonction :
function afficherMessage(nom: string, age: number): void {
    la fonction afficherMessage prend deux paramètres : string et number. La fonction ne renvoie rien, d'où l'utilisation du type void.
  console.log(`Bonjour, je m'appelle ${nom} et j'ai ${age} ans.`);
}

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 2

- Qu'est ce qu'une classe ? 
Chaque objet doit être créé par une classe. Celle-ci peut être comparée à une notice de fabrication qui contient l’ensemble des informations nécessaires à la création d’un objet.
En réalité, les classes sont juste des fonctions spéciales. Ainsi, les classes sont définies de la même façon que les fonctions : par déclaration, ou par expression. 

- Qu'est ce qu'un constructeur de classe ? 
Le constructeur est une méthode spéciale de la classe, utilisée pour créer des objets et initialiser les valeurs des propriétés (field).
class Person {
    name: string;
    gender: string;
    country: string;

    constructor(n: string, g: string, c: string) {
        this.name = n;
        this.gender = g;
        this.country = c;
    }
    // A Method
    selfIntroduce(): void {
        console.log(`Hi, My name is ${this.name}, from ${this.country}`);
    }
}
- Qu'est ce qu'une instance de classe ?

Il s'agit d'un objet constituant un exemplaire de la classe, avec un comportement et un état, tous deux définis par la classe.

- Comment vérifier qu'une classe est d'une certaine instance ?

console.log(user instanceof(Person));

- Qu'est ce que `this` dans une classe ?

C'est un mot clef qui permet d'accéder aux attributs de l'instance actuelle de la classe.

- Qu'est ce qu'une méthode de classe ? 

C'est une fonction définie à l'intérieur d'une classe en programation orientée objet. Elle représente un comportement ou une action que la classe peut effectuer.

- Qu'est ce que la visibilité des propriétés ? 

La visibilité des propriétés d'une classe définit l'accès et la portée de ces propriétés depuis d'autres parties du code. En TypeScript, il existe trois types de visibilité pour les propriétés d'une classe : public, private et protected.  
-Public c'est le niveau de visibilité par défaut. Les propriétés sont accèssible à partir de n'importe quelle partie du code.
-private : Les propriétés marquées comme private ne sont accessibles qu'à l'intérieur de la classe où elles sont déclarées. Elles ne peuvent pas être accédées ou modifiées en dehors de la classe.  
-protected : Les propriétés marquées comme protected sont similaires aux propriétés private, mais elles sont également accessibles dans les classes dérivées (sous-classes). Elles ne peuvent pas être accédées en dehors de la classe ou des classes dérivées.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 3

- Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre) 

On peut declarer les classes dans differents fichiers ts. Et utiliser import et export pour les utiliser dans un fichier different de celui de sa declaration. 
export let tab : number[] = [ 1, 2, 3, 4];
import {tab} from "./main"
console.log("tab est de type, " ,typeof tab);

- Qu'est ce que l'héritage ? 

L'héritage est un aspect de la programmation orienté objet, qui permet à un programme de créer une nouvelle classe à partir d'une classe existante. C'est un mécanisme qui acquiert les propriétés et les comportements d'une classe à partir d'une autre classe. En TypeScript, une classe peut donc hériter d’une autre via le mot-clé extends.
Le mot clef "super" permet de rappeler les propriétés de la classe mère lors de la création d'une classe dérivée. -->

class Person {
    name: string;
    gender: string;
    country: string;

    constructor(n: string, g: string, c: string) {
        this.name = n;
        this.gender = g;
        this.country = c;
    }
    selfIntroduce(): void {
        console.log(`Hi, My name is ${this.name}, from ${this.country}`);        
    }    
}

class Joueur extends Person {
  console: string;
  constructor(n: string, g: string, c: string, d: string){
    super (n, g,c);
    this.console = d;
  }
}

const billy = new Joueur("billy", "male", "france", "nintendo")
console.log(billy.selfIntroduce());


- Comment appeler le constructeur d'une classe mère ? 

Avec super

- Comment appeler une méthode d'une classe mère ? 

Pour appeler le constructeur d'une classe parent (classe mère) à partir d'une classe enfant (classe dérivée), vous pouvez utiliser le mot-clé super() dans le constructeur de la classe enfant. Cela permet d'exécuter le constructeur de la classe parent avant d'initialiser les propriétés spécifiques à la classe enfant.


- Qu'est ce que le polymorphism ? 

Dans le polymorphisme dynamique, des objets de classes dérivées (enfants) peuvent être traités comme des objets de leur classe parent (ou d'une classe de base commune). Cela signifie que vous pouvez utiliser une référence de la classe parent pour accéder et manipuler des objets des classes dérivées, tout en utilisant les méthodes spécifiques à ces classes.
Ex : dans mon jeu de hero, je peut choisir entre 3 armes differentes (Axe,Sword,Spear). mon fichier hero est la classe parent et mes classes enfants inyterchangeable vont etre mes armes differentes.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Boss level 

Met en pratique le fruit de tes recherches à travers cet exercice en binôme !
### Partie 1 : Héros

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

    name : string
    power : number
    life : number

​Et les méthodes

    attack(opponent: Hero)
    isAlive()

​La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

​
*Exemple : Si Joan attaque Leon, cela sera représenté par :*

    joan.attack(leon)

​La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

**Contrainte à ajouter** : il faut maintenant faire en sorte que les propriétés `name`, `power`, `life` soient privées. Tu vas devoir créer des méthodes permettant d'accéder à leur valeur et de modifier leur valeur.

### Partie 2 : Armes
​
Crée une classe `Weapon` avec la propriété suivante :

    name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

- `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
- `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
- `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

​
Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.
​
### Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

---

***Bonus 1 : Les dégâts de l'arme***

*Ajoute une propriété `damage` à la classe `Weapon` et fait en sorte qu'elle soit initialisée par le constructeur.*

*Modifie la méthode `attack` de `Hero` afin que les dégâts soient calculés de la façon suivante : la puissance du héro `power` + les dégâts de l'arme `power`*

***Bonus 2 : Interface graphique***

*Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)*

