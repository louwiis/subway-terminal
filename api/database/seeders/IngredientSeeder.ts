import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Ingredient from 'App/Models/Ingredient'

export default class extends BaseSeeder {
  public async run () {
    await Ingredient.createMany([
      {
        name: 'Mozzarella',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-mozzarella.jpg',
        quantity: 100,
        price: 50,
        type: 'cheese',
      },
      {
        name: 'Cheddar rapés',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-cheddar.jpg',
        quantity: 100,
        price: 50,
        type: 'cheese',
      },
      {
        name: 'Steak haché',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-steak-hache.jpg',
        quantity: 100,
        price: 50,
        type: 'meat',
      },
      {
        name: 'Tomates',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-tomates.jpg',
        quantity: 100,
        price: 50,
        type: 'vegetable',
      },
      {
        name: 'Salade Iceberg',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-salade-iceberg.jpg',
        quantity: 100,
        price: 50,
        type: 'vegetable',
      },
      {
        name: 'Oignons rouges',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-oignons-rouges.jpg',
        quantity: 100,
        price: 50,
        type: 'vegetable',
      },
      {
        name: 'Sauce Hickory BBQ',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-sauce-hickory-bbq.jpg',
        quantity: 100,
        price: 50,
        type: 'sauce',
      },
      {
        name: 'Cheddar',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-cheddar.jpg',
        quantity: 100,
        price: 50,
        type: 'cheese',
      },
      {
        name: 'Piments Jalapeno',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-piments-jalapeno.jpg',
        quantity: 100,
        price: 50,
        type: 'vegetable',
      },
      {
        name: 'Sauce Moutarde et Miel',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-sauce-moutarde-et-miel.jpg',
        quantity: 100,
        price: 50,
        type: 'sauce',
      },
      {
        name: 'Cornichons',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-cornichons.jpg',
        quantity: 100,
        price: 50,
        type: 'vegetable',
      },
      {
        name: 'Américain en tranches',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-americain-en-tranches.jpg',
        quantity: 100,
        price: 50,
        type: 'cheese',
      },
      {
        name: 'Poulet Teriyaki',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-poulet-teriyaki.jpg',
        quantity: 100,
        price: 50,
        type: 'meat',
      },
      {
        name: 'Concombres',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-concombre.jpg',
        quantity: 100,
        price: 50,
        type: 'vegetable',
      },
      {
        name: 'Sauce Oignons Doux',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-sauce-ranch.jpg',
        quantity: 100,
        price: 50,
        type: 'sauce',
      },
      {
        name: 'Poulet Tikka',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-poulet-tikka.jpg',
        quantity: 100,
        price: 50,
        type: 'meat',
      },
      {
        name: 'Sauce Chipotle Southwest',
        imageUrl: 'https://www.subway.com/ns/images/menu/FRA/FRE/ingredients/ingredient-sauce-chipotle-southwest.jpg',
        quantity: 100,
        price: 50,
        type: 'sauce',
      }
    ]);
  }
}
