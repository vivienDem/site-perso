import haskellLogo from "../assets/haskell.svg";
import jsLogo from "../assets/js.svg";
import reactLogo from "../assets/react.svg";
import pythonLogo from "../assets/python.svg";
import javaLogo from "../assets/java.svg";
import ocamlLogo from "../assets/ocaml.svg";
import cplusplusLogo from "../assets/c++.svg";
import mipsLogo from "../assets/mips.svg";

export const projects = [
  {
    id: 1,
    name: { fr: "Street fighter", eng: "Street fighter" },
    languages: ["Haskell"],
    source: "https://github.com/vivienDem/street-fighter",
    info: {
      fr: "Refonte d'un jeu de combat de type Street Fighter dans un style fonctionnel réalisé dans \
            le cadre du master STL. Il est à noté que le jeu nécessite SDL 2 qui ne semble fonctionner que sous \
            certaines versions de linux. Un rapport plus complet est également disponible avec le code source.",
      eng: "Coding of a Street Fighter like game in a functionnal style. This project has been realised \
            during my first year of MSC. Please note that it uses SDL2 which seems to work only under some \
            specific versions of linux.",
    },
    icons: [haskellLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 2,
    name: {
      fr: "Site personnel",
      eng: "Personnal website",
    },
    languages: ["Javascript", "React"],
    source: "https://github.com/vivienDem/site-perso",
    info: {
      fr: "Il s'agit du site web sur lequel vous vous trouvez. Il contient mon CV ainsi q'une liste \
            de mes projets.",
      eng: "The website that you are currently visiting. You can find my CV and some of my projects.",
    },
    icons: [jsLogo, reactLogo],
    authors: ["Vivien Demeulenaere"]
  },

  {
    id: 3,
    name: { fr: "Gestionnaire de voeux", eng: "Wishes manager" },
    languages: ["Python"],
    source: "https://github.com/vivienDem/gestionnaire-de-voeux",
    info: {
      fr: "Ce projet a été réalisé dans le cadre du master STL. Il s'agit \
      d\'un gestionnaire de voeux permettant d'affecter des unités d'enseignement aux étudiants du master en respectant diverses contraintes \
      notamment celles liées aux emploi du temps. Nous avons utilisé le solveur de contraintes Gurobi pour mener ce projet.\
      Plus de détails sont disponibles dans le rapport accompagnant le code source",
      eng: "This project has been realized during my first year of MSC. It is a whishes manger conceived \
      to assign modules to the students by taking into account their whishes and temporal constraints. Gurobi was used to solve \
      our mathematic model. A more complete description is availaible (in French) whith the source code."
    },
    icons: [pythonLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 4,
    name: {
      fr: "Compilateur d'un langage basique vers une mini-ZAM",
      eng: "Basic Sequential language compiler to mini-ZAM",
    },
    languages: ["Java"],
    source: "https://github.com/vivienDem/compilateur-vers-Mini-ZAM",
    info: {
      fr: "Le but de ce projet réalisé en première année du Master STL était de coder un \
      compilateur prenant en entrée un programme source écrit dans un langage séquentiel assez simple. L'idée \
      était ensuite de transformer ce programme en instructions interprétables par une mini-ZAM fournie pour l'occasion",
      eng: "This first year MSC project aimed at coding a compiler taking as input \
      a source programm written in a basic sequential language. Then our compiler has to transform the input into instructions \
      interpretable by a mini-ZAM provided for the occasion."
    },
    icons: [javaLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 5,
    name: {
      fr: "Représentation de polynômes",
      eng: "Representations of Polynomials",
    },
    languages: ["OCaml"],
    source: "https://github.com/vivienDem/Representation-de-polynomes",
    info: {
      fr: "Le but du problème consiste à manipuler deux modèles de structure de données : l’une sous forme \
      linéaire et l’autre arborescente. Des expérimentations sur ces structures ont ensuite été menées par \
      Adan Bougherara et moi même. Nos conclusions sont disponibles dans le rapport accompagnant le code source.",
      eng: "The goal of the project is to manipulate two models of data structure : one in linear form and the other in tree form. \
      Experiments on these structures were then conducted by Adan Bougherara and myself. \
      Our conclusions are available in the report (in French) accompanying the source code."
    },
    icons: [ocamlLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 6,
    name: { fr: "Représentation de ROBDD", eng: "Representations of ROBDD" },
    languages: ["Python"],
    source: "https://github.com/vivienDem/ROBDD",
    info: {
      fr: "Lors de notre premier semestre de Master, il nous a été demandé de représenter des diagrammes de décision binaire \
      (ou BDD pour Binary Decision Diagram en anglais) ainsi que leur version compressée (ROBDD). Vous trouverez ainsi des \
      algorithmes de compression et de fusion. Plus de détails sont fournis dans le rapport se trouvant avec le code source.",
      eng: "During our first semester of MSC, we were asked to represent binary decision diagrams (BDD) and their reduced \
      version (ROBDD). You will thus find compression and merging algorithms. \
      More details are provided in the report (in French) next to the source code."
    },
    icons: [pythonLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 7,
    name: { fr: "Optimisation de code MIPS", eng: "MIPS code optimization" },
    languages: ["C++", "MIPS"],
    source: "https://github.com/vivienDem/optimisation-de-code-mips",
    info: {
      fr: "Durant ma première année de Master, nous avons du réaliser un programme permettant d'optimiser \
      du code MIPS à partir de bouts de code déjà existants. Il nous a donc fallu implanter divers algorithmes \
      permettant entre autres de définir des blocs de base ou encore de renommer des variables selon leur vivacité.",
      eng: "During my first year of Master, we had to complete some code to realize a program in order to optimize \
      MIPS code. We thus had to implement various algorithms allowing, among other things, to define basic blocks \
      or to rename variables according to their liveliness."
    },
    icons: [cplusplusLogo, mipsLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 8,
    name: {
      fr: "Modélisation d'une ville intelligente à l'aide de BCM4Java",
      eng: "Modelling of a smart city with BCM4Java",
    },
    languages: ["Java"],
    source: "https://github.com/vivienDem/smart-city",
    info: {
      fr: "L’objectif de ce projet était d’implanter un prototype simplifié de système de gestion d’événements complexe \
      pour une ville intelligente. Il a été réalisé avec l'outil BCM4Java, ayant une approche orientée composants et \
      permettant entre autres une gestion du parallélisme et la mise en place d'un système réparti en masquant au \
      développeur les appels RMI de Java.",
      eng: "The goal of this project was to implement a simplified prototype of a complex event management system \
      for a smart city. It was realized with BCM4Java, a component approach tool allowing, among other things, a management of parallelism \
      and the implementation of a distributed system by hiding the RMI calls of Java."
    },
    icons: [javaLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 9,
    name: { fr: "Casse-Briques", eng: "Brick Breaker" },
    languages: ["Java"],
    source: "https://github.com/vivienDem/casse-briques",
    info: {
      fr: <p>Projet de refonte du fameux jeu-vidéo <em>Casse-briques</em> réalisé dans le cadre
        de ma première année de Master à l'aide de la bibliothèque <em>JavaFX</em>. Un rapport est
        disponible avec le code source du projet</p>,
      eng: <p>Coding of a <em>Brick-Breaker</em> during my MSC first year.
        The graphic renderer uses <em>JavaFX</em>. See the report (in French) for more details.</p>
    },
    icons: [javaLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },
  {
    id: 10,
    name: {
      fr: "Résolution du problème de cercle minimun à l'aide de l’algorithme Welzl",
      eng: "Minimum circle computing with Welzl algorithm",
    },
    languages: ["Java"],
    source: "https://github.com/vivienDem/welzl",
    info: {
      fr: "Mise en place de l'algorithme de Welzl dans le but de résoudre un problème de\
      cercle minimum. Deux versions de l'algorithme sont disponibles : l'une récursive et \
      l'autre itérative. Ces deux versions ont fait l'objet de comparaisons avec un \
      algorithme naïf. Ce projet fut réalisé lors de ma première année de Master.",
      eng: "Implementation of Welzl's algorithm in order to solve a problem of \
      minimum circle. Two versions of the algorithm are available : one recursive and \
      the other iterative. These two versions have been compared with a naive one. \
      This project was realized during my first year of MSC."
    },
    icons: [javaLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },
  {
    id: 11,
    name: {
      fr: "Arbre de Steiner dans un graphe avec et sans restriction",
      eng: "Steiner tree problem with and without budget",
    },
    languages: ["Java"],
    source: "https://github.com/vivienDem/steiner",
    info: {
      fr: "Etant donné un graphe G = (V, E) et un sous ensemble S ⊆ V \
      de sommets, le probleme de l’arbre de Steiner couvrant S consiste a calculer un sous graphe de G qui est un arbre et qui \
      passe par tous les points de S, tel que la longueur totale des arêtes de l’arbre est la plus petite possible. La version \
      avec budget consiste à fixer une limite au poids total des arêtes. Il faudra alors passer par le plus de sommets possible \
      tout en respectant cette limite. Ce projet fut réalisé lors de ma première année de Master.",
      eng: "Given a graph G = (V, E) and a subset S ⊆ V \
      of vertices, the problem of the Steiner tree covering S consists in computing a subgraph of G which is a tree and which \
      passes through all the points of S, such that the total length of the edges of the tree is as small as possible. \
      The budget version consists in setting a limit to the total weight of the edges. The goal will then be \
      to pass through as many vertices as possible while respecting this limit. \
      This project was realized during my first year of Master."
    },
    icons: [javaLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },
];

export const exitInfo = {
  fr: "Retourner aux projets",
  eng: "Go back to projects",
};

export const sourceCode = {
  fr: "Code source",
  eng: "Source code",
};

export const allRadio = {
  fr: "Tous les langages",
  eng: "All languages",
};

export const authorsText = {
  fr: {
    singular: "Auteur",
    plural: "Auteurs"
  },
  eng: {
    singular: "Author",
    plural: "Authors"
  }
}
