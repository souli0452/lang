import { Pokemon } from './pokemon';
  
export const POKEMONS: Pokemon[] = [
      {
        id: 1,
        name: "SpringBoot",
        hp: 25,
        cp: 5,
        picture: "https://atomrace.com/blog/wp-content/uploads/2018/05/spring-boot-logo.png",
        types: ["Framework"],
        created: ["avril 2014"],

    },  
  
    {
        id: 2,
        name: "Java",
        hp: 28,
        cp: 6,
        picture: "data:image/png;base64,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",
        types: ["Langage"],
        created: ["1995"],
    },

    {
        id: 3,
        name: "CSS",
        hp: 21,
        cp: 4,
        picture: "https://i.pinimg.com/736x/e4/3e/4c/e43e4cd41ddffc21d2e6600dfca20306--logo-software-logotype.jpg",
        types: ["Langage","Framework"],
        created: ["1994"],
    },
    {
        id: 4,
        name: "WordPress",
        hp: 16,
        cp: 2,
        picture: "https://logo-marque.com/wp-content/uploads/2020/11/WordPress-Logo.png",
        types: ["CMS"],
        created: ["27 mai 2003"],
    },
    {
        id: 5,
        name: "Angular",
        hp: 30,
        cp: 7,
        picture: "data:image/png;base64,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",
        types: ["Framework"],
        created: ["14 septembre 2016"],

    },
     {
        id: 6,
        name: "ReactNative",
        hp: 18,
        cp: 6,
        picture: "https://miro.medium.com/max/1000/1*GkR93AAlILkmE_3QQf88Ug.png",
        types: ["Framework"],
        created: ["26 mars 2015"],

    }, 
     {
        id: 7,
        name: "NodeJS",
        hp: 14,
        cp: 5,
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png",
        types: ["Langage"],
        created: ["27 mai 2009"],

    }, 
    {
        id: 8,
        name: "JavaScript",
        hp: 16,
        cp: 4,
        picture: "https://eachscape.com/wp-content/uploads/2016/07/JScript.png",
        types: ["Langage"],
        created: ["1995"],

    },
    {
        id: 9,
        name: "HTML",
        hp: 21,
        cp: 7,
        picture: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
        types: ["Langage"],
        created: [" août 1991"],

    },
    {
        id: 10,
        name: "Bootstrap",
        hp: 19,
        cp: 3,
        picture: "https://seeklogo.com/images/B/bootstrap-logo-69A1CCC10B-seeklogo.com.png",
        types: ["Framework"],
        created: ["19 août 2011"],

    },
    {
        id: 11,
        name: "Git",
        hp: 25,
        cp: 5,
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png",
        types: ["Gestion_version"],
        created: ["07 - Avril - 2005"],

    },
     {
        id: 12,
        name: "GitHub",
        hp: 17,
        cp: 8,
        picture: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png",
        types: ["Dépôt"],
        created: ["2008"],

    },

     {
        id: 13,
        name: "Gitlab",
        hp: 20,
        cp: 30,
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/2560px-GitLab_logo.svg.png",
        types: ["Dépôt"],
        created: ["2011"],
        
    },

     {
        id: 13,
        name: "UML",
        hp: 20,
        cp: 30,
        picture: "https://upload.wikimedia.org/wikipedia/commons/d/d5/UML_logo.svg",
        types: ["Langage_Modélisation"],
        created: ["janvier 1997"],
        
    },

    {
        id: 13,
        name: "MERISEE",
        hp: 20,
        cp: 30,
        picture: "data:image/jpeg;base64,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",
        types: ["Langage_Modélisation"],
        created: ["1970"],
        
    },

    {
        id: 13,
        name: "MySQL",
        hp: 20,
        cp: 30,
        picture: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png",
        types: ["Bases_de_Données"],
        created: ["23 mai 1995"],
        
    },

    {
        id: 13,
        name: "PostgreSQL",
        hp: 20,
        cp: 30,
        picture: "https://logonoid.com/images/postgresql-logo.png",
        types: ["Bases_de_Données"],
        created: ["8 juillet 1996"],
        
    }  
];