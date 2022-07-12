import haskellLogo from '../assets/haskell.svg';
import jsLogo from '../assets/js.svg';
import reactLogo from '../assets/react.svg';
import pythonLogo from '../assets/python.svg';
import javaLogo from '../assets/java.svg';
import ocamlLogo from '../assets/ocaml.svg';
import cplusplusLogo from '../assets/c++.svg';
import mipsLogo from '../assets/mips.svg';

export const projects = [
    {
        id: 1,
        name: { 'fr': 'Street fighter', 'eng': 'Street fighter' },
        languages: ['Haskell'],
        source: "todo",
        info: { 
            'fr': 'Refonte d\'un jeu de combat de type Street Fighter dans un style fonctionnel réalisé dans \
            le cadre du master STL. Il est à noté que le jeu nécessite SDL 2 qui ne semble fonctionner que sous \
            certaines versions de linux. Un rapport plus complet est également disponible avec le code source.', 
            'eng': "Coding of a Street Fighter like game in a functionnal style. This project has been realised \
            during my first year of MSC. Please note that it uses SDL2 which seems to work only under some \
            specific versions of linux."  
        },
        icons: [haskellLogo]
    },

    {
        id: 2,
        name: { 'fr': 'Site personnel', 'eng': 'Personnal website' },
        languages: ['Javascript', 'React'],
        source: "todo",
        info: { 'fr': 'En construction', 'eng': "In progress" },
        icons: [jsLogo, reactLogo]
    },

    {
        id: 3,
        name: { 'fr': 'Gestionnaire de voeux', 'eng': 'Wishes manager' },
        languages: ['Python'],
        source: "todo",
        info: { 'fr': 'En construction', 'eng': "In progress" },
        icons: [pythonLogo]
    },

    {
        id: 4,
        name: { 'fr': 'Compilateur d\'un langage basique vers une mini-ZAM', 'eng': 'Basic Sequential language compiler to mini-ZAM' },
        languages: ['Java'],
        source: "todo",
        info: { 'fr': 'En construction', 'eng': "In progress" },
        icons: [javaLogo]
    },

    {
        id: 5,
        name: { 'fr': 'Représentation de polynômes', 'eng': 'Representations of Polynomials' },
        languages: ['OCaml'],
        source: "todo",
        info: { 'fr': 'En construction', 'eng': "In progress" },
        icons: [ocamlLogo]
    },

    {
        id: 6,
        name: { 'fr': 'Représentation de ROBDD', 'eng': 'Representations of ROBDD' },
        languages: ['Python'],
        source: "todo",
        info: { 'fr': 'En construction', 'eng': "In progress" },
        icons: [pythonLogo]
    },

    {
        id: 7,
        name: { 'fr': 'Optimisation de code MIPS', 'eng': 'MIPS code optimization' },
        languages: ['C++', "MIPS"],
        source: "todo",
        info: { 'fr': 'En construction', 'eng': "In progress" },
        icons: [cplusplusLogo, mipsLogo]
    },

    {
        id: 8,
        name: { 'fr': 'Modélisation d\'une ville intelligente à l\'aide de BCM4Java', 'eng': 'Modelling of a smart city with BCM4Java' },
        languages: ['Java'],
        source: "todo",
        info: { 'fr': 'En construction', 'eng': "In progress" },
        icons: [javaLogo]
    },

    {
        id: 9,
        name: { 'fr': 'Casse-Briques', 'eng': 'Brick Breaker' },
        languages: ['Java'],
        source: "todo",
        info: { 'fr': 'En construction', 'eng': "In progress" },
        icons: [javaLogo]
    },
    {
        id: 10,
        name: {
            'fr': 'Résolution du problème de cercle minimun à l\'aide de l’algorithme Welzl',
            'eng': 'Minimum circle computing with Welzl algorithm'
        },
        languages: ['Java'],
        source: "todo",
        info: { 'fr': 'En construction', 'eng': "In progress" },
        icons: [javaLogo]
    }
]

export const exitInfo = {
    "fr": "Retourner aux projets",
    "eng": "Go back to projects"
}

export const sourceCode = {
    "fr": "Code source",
    "eng": "Source code"
}

export const allRadio = {
    "fr": "Tous les langages",
    "eng": "All languages"
}

