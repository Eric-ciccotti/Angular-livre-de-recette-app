import { Recette } from "../recettes/recettes.model";
import { Ingredient } from "./ingredient.model";

const RECETTES_BACKUP: Recette[] = [
  new Recette(
    'saucisson de loup', 'delicieuse cuisse de loup', 'https://lafaimdeloupca.files.wordpress.com/2018/01/linguines-crecc81meuses-au-citron-brocoli-et-saucisson.jpg',
    [
      new Ingredient('cuisse de loup', 2),
    ]),
  new Recette('poulet coco', 'délicieux poulet coco avec riz et sauce noix de coco', 'https://www.ptitchef.com/imgupl/recipe/poulet-au-lait-de-coco-et-curry--md-34612p42584.jpg',
    [
      new Ingredient('boite de lait de coco', 1),
      new Ingredient('filet de poulet', 2),
      new Ingredient('sac de riz basmati', 1)
    ]),
  new Recette('merguez au champagne', 'spécialité à base de merguez et de champagne luxueux', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Merguez_grilled.jpg',
    [
      new Ingredient('merguez de qualité dosée', 5),
      new Ingredient('bouteille de champagne bien mousseux', 1)
    ]),
];

export default RECETTES_BACKUP;
