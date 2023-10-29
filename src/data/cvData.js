//Functions
function getAge(date) {
  const diff = Date.now() - date.getTime();
  const age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
}

//Img
export const alt = {
  fr: "Ma photo de profil",
  eng: "My profil's picture",
};

// Birth section
export const birthTitle = { fr: "Date de naissance", eng: "Date of birth" };
export const birthContent = {
  fr: "30/11/1999 (" + getAge(new Date(1999, 11, 30)) + " ans)",
  eng: "30/11/1999 (" + getAge(new Date(1999, 11, 30)) + " years old)",
};

//Education section
export const educationTitle = { fr: "Formation", eng: "Education" };
export const education_22_23 = {
  fr: "M2 Informatique - Parcours STL",
  eng: "MSC - Computer Science",
};
export const education_21_22 = {
  fr: "M1 Informatique - Parcours STL",
  eng: "MSC - Computer Science",
};
export const education_18_21 = {
  fr: "Licence - Informatique",
  eng: "BSC - Computer Science",
};
export const education_17_18 = {
  fr: "CPGE - PCSI",
  eng: 'Preparatory class for the "grandes écoles"',
};

//Degrees section
export const degreesTitle = { fr: "Diplômes", eng: "Degrees" };
export const aLevels = {
  fr: {
    degree: "Baccalauréat Série S (spécialité physique)",
    honours: "Mention TB",
  },
  eng: { degree: "A levels", honours: "With highest honours" },
};
export const bsc = {
  fr: { degree: "Licence d'informatique", honours: "Mention AB" },
  eng: { degree: "BSC in computer science", honours: "With honours" },
};

//Job section
export const jobTitle = {
  fr: "Expérience professionnelle",
  eng: "Work Experience",
};
export const dgccrf = {
  fr: {
    date: "Juillet 2019",
    job: "Contractuel",
    task: "Mission d’archivage au bureau 4A (Valorisation nutritionnelle et information sur les denrées \
alimentaires)",
  },
  eng: {
    date: "July 2019",
    job: "Summer job",
    task: "Archivist at the office for the evaluation and information of foodstuffs",
  },
};

export const clearsyInternship = {
  fr: {
    date: "Février - Août 2023",
    job: "Ingénieur logiciel - Stagiaire",
    task: <ul className="list">
      <li>
        Réalisation en c++ d'un composant de traduction du format ibxml vers le format nf dans le cadre de la qualification T2 de l'Atelier B.
      </li>
      <li>
        Réalisation en c++ d'un composant d'inférence de types sur des composants B et des fichiers de preuve de l'Atelier B.
      </li>
    </ul>
  },
  eng: {
    date: "February - August 2023",
    job: "Software engineer - Stagiaire",
    task: <ul className="list">
      <li>
        Creation of a c++ translation component from ibxml format to nf format as part of Atelier B's T2 qualification.
      </li>
      <li>
        Creation of a type inference kit in c++ based on B components and Atelier B proof files.
      </li>
    </ul>
  }
}

export const clearsy = {
  fr: {
    date: "Septembre 2023 - aujourd'hui",
    job: "Ingénieur logiciel",
    task: <ul className="list">
      <li>
        Développement en c++ et Qt sur un éditeur de plan de voies.
      </li>
      <li>
        Tests squish sur un éditeur de plan de voies.
      </li>
    </ul>
  },
  eng: {
    date: "September 2023 - today",
    job: "Software engineer",
    task: <ul className="list">
      <li>
        Development in c++ and Qt on a track plan editor tool.
      </li>
      <li>
        Squish tests on a track plan editor tool.
      </li>
    </ul>
  }
}

//Skills section
export const skillsTitle = { fr: "Compétences", eng: "Skills" };
export const languagesTitle = { fr: "Langues parlées", eng: "Languages" };
export const english = {
  fr: { field: "Anglais", level: "Niveau C1" },
  eng: { field: "English", level: "Level C1" },
};
export const french = {
  fr: { field: "Français", level: "Niveau C2" },
  eng: { field: "French", level: "Level C2" },
};
export const programmingTitle = {
  fr: "Langages de programmation",
  eng: "Programming languages",
};
export const programmingLevels = {
  fr: {
    advanced: "Niveau avancé",
    intermediate: "Niveau intermédiaire",
    beginner: "Notions",
  },
  eng: {
    advanced: "Advanced level",
    intermediate: "Intermediate level",
    beginner: "Beginner level",
  },
};

//Hobbies
export const hobbiesTitle = {
  fr: "Centres d'intérêts",
  eng: "Hobbies",
};

export const crossbow = {
  fr: {
    name: "Pratique du tir à l’arbalète",
    content:
      " (1 ère Compagnie d Arbalétriers de Romainville), médaillé \
  aux championnats de France et Champion IDF (de 2013 à 2016 et de 2018 à 2019)",
  },
  eng: {
    name: "Crossbow",
    content:
      " (1 ère Compagnie d Arbalétriers de Romainville), 3rd at the France championships (in 2013) \
  and 1st at the Ile de France championships (from 2013 to 2016 and 2018 to 2019)",
  },
};

export const trips = {
  fr: {
    name: "Séjours à l’étranger :",
    content:
      " Royaume Uni, Irlande, États Unis, Italie, Allemagne, Pays du \
        Golfe ...",
  },
  eng: {
    name: "Trips abroad :",
    content:
      " United Kingdom, Ireland, United States of America, Italy, Germany, \
      Middle-East countries ...",
  },
};
