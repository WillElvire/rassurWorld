export const typeTiers = [
  {
   name : "Tiers Simple",
   active : true,
   index : 1,
   guaranty :  [
     {
       name : "La responsabilité civile",
       description : `
       Elle ne couvre que les dommages matériels et corporels causés aux tiers, en cas
       d’accident dont vous êtes responsable. Elle ne couvre pas ceux que vous-même et votre véhicule subissez.
       `,
       active : false,
     },
     {
       name : "Defense et retour",
       description : `
       Cette garantie impose à votre assureur au titre de la défense, à pourvoir, à ses frais, à
       votre défense devant les juridictions compétentes si vous êtes poursuivi à la suite d’un sinistre couvert.
       Le recours oblige votre assureur à réclamer à la partie adverse la réparation des préjudices subis à l’occasion d’un
       accident dont vous êtes victime.
       `,
       active : false,
     }
   ]
  },
  {
    name : "Tiers Complet",
    active : false,
    index : 2,
    guaranty : [
      {
        name : "Bris de glaces",
        description : `
        Elle couvre généralement le pare-brise, les vitres latérales et la lunette arrière.
        `,
        active : false,
      },
      {
        name : "Incendie",
        description : `
        Cette garantie couvre les dommages causés à votre véhicule à la suite d’un incendie.
        `,
        active : false,
      },
      {
        name : "Vol et vol agression",
        description : `
        Elle couvre les dommages résultant de la disparition ou de la détérioration du véhicule
        assuré à la suite d’un vol ou tentative de vol de celui-ci.
        `,
        active : false,
      },
      {
        name : "Vol des accessoires",
        description : `
        Elle couvre les équipements électroniques, pneumatiques et pièces de rechange.
        `,
        active : false,
      }
    ]
  },
  {
    name : "Tous risques",
    active : false,
    index : 3,
    guaranty : [
      {
        name : "Tous risques",
        description : `
        Cette formule d’assurance automobile est accordée aux véhicules dont l’âge est inférieur ou égal à 3 ans. Le véhicule
        assuré bénéficie non seulement des formules tiers simple et tiers complet mais aussi d'une garantie contre les
        dommages résultant.
        `,
        active : false,
      }
    ]

  }
]
