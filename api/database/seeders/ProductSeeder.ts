import Product from 'App/Models/Product'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Ingredient from 'App/Models/Ingredient';

export default class extends BaseSeeder {
  public async run () {
    await Product.createMany([
      {
        name: 'Lipton Ice Tea',
        price: 199,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: '50cl',
        foodType: 'drink',
      },
      {
        name: 'Pulco Citron',
        price: 199,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/bd274f9fdaa83168a957039d33ca44fb/p_540x540/03124480167170-c1n1-s03.jpg',
        type: '50cl',
        foodType: 'drink',
      },
      {
        name: 'Pepsi Max',
        price: 199,
        quantity: 20,
        imageUrl: 'https://franprix.twic.pics/product-images/3502110000651_Z1N1_s87?twic=v1/contain=650x650',
        type: '50cl',
        foodType: 'drink',
      },
      {
        name: 'Orangina',
        price: 199,
        quantity: 20,
        imageUrl: 'https://www.cdiscount.com/pdt2/0/0/9/1/700x700/ora5410221008009/rw/orangina-50cl-pack-de-24.jpg',
        type: '50cl',
        foodType: 'drink',
      },
      {
        name: 'Oasis',
        price: 199,
        quantity: 20,
        imageUrl: 'https://grandmarcheistanbul.fr/wp-content/uploads/3124480167057.jpg',
        type: '50cl',
        foodType: 'drink',
      },
      {
        name: '7up free',
        price: 199,
        quantity: 20,
        imageUrl: 'https://franprix.twic.pics/product-images/3168930161738_Z1N1_s09?twic=v1/contain=650x650',
        type: '50cl',
        foodType: 'drink',
      },
      {
        name: 'Schweppes Agrum',
        price: 199,
        quantity: 20,
        imageUrl: 'https://fridg-front.s3.amazonaws.com/media/CACHE/images/products/schweppes-agrum-50-cl/e684055c9bd81deb8783281a30905601.jpg',
        type: '50cl',
        foodType: 'drink',
      },
      {
        name: 'Badoit',
        price: 199,
        quantity: 20,
        imageUrl: 'https://www.welcomeoffice.com/WO_Products_Images/xlarge/239474_JPG.jpg',
        type: '50cl',
        foodType: 'drink',
      },
      {
        name: 'Volvic',
        price: 199,
        quantity: 20,
        imageUrl: 'https://www.fiducial-office-solutions.fr/INTERSHOP/static/WFS/FOS-FR-Site/-/FOS/fr_FR/ZOOM/116184/116184.jpg',
        type: '50cl',
        foodType: 'drink',
      },
      {
        name: 'Pépites de Chocolat',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Brookie',
        foodType: 'dessert'
      },
      {
        name: 'Trio de mini beignets',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Beignets',
        foodType: 'dessert'
      },
      {
        name: 'Brownie',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Brownie & Donuts',
        foodType: 'dessert'
      },
      {
        name: 'Donut au chocolat',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Brownie & Donuts',
        foodType: 'dessert'
      },
      {
        name: 'Donut sucré',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Brownie & Donuts',
        foodType: 'dessert'
      },
      {
        name: 'Compote pomme nature',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Compotes',
        foodType: 'dessert'
      },
      {
        name: 'Compote pomme fraise',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Compotes',
        foodType: 'dessert'
      },
      {
        name: 'Yaourt vanille',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Yaourts',
        foodType: 'dessert'
      },
      {
        name: 'Yaourt framboise',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Yaourts',
        foodType: 'dessert'
      },
      {
        name: 'Glace Cookie Dough (100ml)',
        price: 250,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Glaces',
        foodType: 'dessert'
      },
      {
        name: 'Glace Cookie Dough (465ml)',
        price: 750,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Glaces',
        foodType: 'dessert'
      },
      {
        name: 'Choc Fudge Brownie (100ml)',
        price: 250,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Glaces',
        foodType: 'dessert'
      },
      {
        name: 'Choc Fudge Brownie (465ml)',
        price: 750,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Glaces',
        foodType: 'dessert'
      },
      {
        name: 'Vanilla Pecan Brittle (100ml)',
        price: 250,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Glaces',
        foodType: 'dessert'
      },
      {
        name: 'Pépites de Chocolat',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Cookie',
        foodType: 'dessert'
      },
      {
        name: 'Double Chocolat',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Cookie',
        foodType: 'dessert'
      },
      {
        name: 'Noix de Macadamia',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Cookie',
        foodType: 'dessert'
      },
      {
        name: 'Cheesecake & Framboise',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Cookie',
        foodType: 'dessert'
      },
      {
        name: 'Dragées Chocolatées (Rainbow Candy)',
        price: 99,
        quantity: 20,
        imageUrl: 'https://media.carrefour.fr/medias/9532529f82503c57bbc5d62c587d0022/p_540x540/03228886043714-h1n1-s52.jpg',
        type: 'Cookie',
        foodType: 'dessert'
      },
    ]);

    const mozzarella = await Ingredient.findByOrFail('name', 'Mozzarella')
    const cheddarRapes = await Ingredient.findByOrFail('name', 'Cheddar rapés')
    const steak = await Ingredient.findByOrFail('name', 'Steak haché')
    const tomate = await Ingredient.findByOrFail('name', 'Tomates')
    const saladeIceberg = await Ingredient.findByOrFail('name', 'Salade Iceberg')
    const oignonRouge = await Ingredient.findByOrFail('name', 'Oignons rouges')
    const sauceHickoryBBQ = await Ingredient.findByOrFail('name', 'Sauce Hickory BBQ')
    const cheddar = await Ingredient.findByOrFail('name', 'Cheddar')
    const pimentJalapeno = await Ingredient.findByOrFail('name', 'Piments Jalapeno')
    const sauceMoustardeEtMiel = await Ingredient.findByOrFail('name', 'Sauce Moutarde et Miel')
    const cornichons = await Ingredient.findByOrFail('name', 'Cornichons')
    const americain = await Ingredient.findByOrFail('name', 'Américain en tranches')
    const pouletTeriyaki = await Ingredient.findByOrFail('name', 'Poulet Teriyaki')
    const concombres = await Ingredient.findByOrFail('name', 'Concombres')
    const sauceOignonsDoux = await Ingredient.findByOrFail('name', 'Sauce Oignons Doux')
    // const pouletTikka = await Ingredient.findByOrFail('name', 'Poulet Tikka')
    // const sauceChipotleSouthwest = await Ingredient.findByOrFail('name', 'Sauce Chipotle Southwest')


    const steakhouseMeltSandwich = new Product()
    steakhouseMeltSandwich.name = 'Steakhouse Melt'
    steakhouseMeltSandwich.price = 799
    steakhouseMeltSandwich.foodType = 'sandwich'
    steakhouseMeltSandwich.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-steakhouse-melt.jpg'

    await steakhouseMeltSandwich.save()
    await steakhouseMeltSandwich.related('ingredients').attach({
      [mozzarella.id]: {
        quantity: 10
      },
      [cheddarRapes.id]: {
        quantity: 1
      },
      [steak.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [oignonRouge.id]: {
        quantity: 1
      },
      [sauceHickoryBBQ.id]: {
        quantity: 1
      }
    })

    const subwaySteakAndCheeseSandwich = new Product()
    subwaySteakAndCheeseSandwich.name = 'Subway Steak & Cheese®'
    subwaySteakAndCheeseSandwich.price = 799
    subwaySteakAndCheeseSandwich.foodType = 'sandwich'
    subwaySteakAndCheeseSandwich.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-steakncheese.jpg'

    await subwaySteakAndCheeseSandwich.save()
    await subwaySteakAndCheeseSandwich.related('ingredients').attach({
      [cheddar.id]: {
        quantity: 1
      },
      [steak.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [pimentJalapeno.id]: {
        quantity: 1
      },
      [sauceHickoryBBQ.id]: {
        quantity: 1
      }
    })

    const boeufPastramiSandwich = new Product()
    boeufPastramiSandwich.name = 'Boeuf Pastrami'
    boeufPastramiSandwich.price = 799
    boeufPastramiSandwich.foodType = 'sandwich'
    boeufPastramiSandwich.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-pastrami.jpg'

    await boeufPastramiSandwich.save()
    await boeufPastramiSandwich.related('ingredients').attach({
      [cheddar.id]: {
        quantity: 1
      },
      [steak.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [cornichons.id]: {
        quantity: 1
      },
      [pimentJalapeno.id]: {
        quantity: 1
      },
      [sauceMoustardeEtMiel.id]: {
        quantity: 1
      }
    })

    const veggieQuinoaKale = new Product()
    veggieQuinoaKale.name = 'Veggie Quinoa Kale'
    veggieQuinoaKale.price = 799
    veggieQuinoaKale.foodType = 'sandwich'
    veggieQuinoaKale.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-sub15_quinoa_234.jpg'

    await veggieQuinoaKale.save()
    await veggieQuinoaKale.related('ingredients').attach({
      [americain.id]: {
        quantity: 1
      },
      [pouletTeriyaki.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [concombres.id]: {
        quantity: 1
      },
      [sauceOignonsDoux.id]: {
        quantity: 1
      }
    })

    const pouletTeriyakiSandwich = new Product()
    pouletTeriyakiSandwich.name = 'Poulet Teriyaki'
    pouletTeriyakiSandwich.price = 799
    pouletTeriyakiSandwich.foodType = 'sandwich'
    pouletTeriyakiSandwich.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-teriyaki.jpg'

    await pouletTeriyakiSandwich.save()
    await pouletTeriyakiSandwich.related('ingredients').attach({
      [americain.id]: {
        quantity: 1
      },
      [pouletTeriyaki.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [concombres.id]: {
        quantity: 1
      },
      [sauceOignonsDoux.id]: {
        quantity: 1
      }
    })

    const italienBMT = new Product()
    italienBMT.name = ''
    italienBMT.price = 799
    italienBMT.foodType = 'Italien B.M.T®'
    italienBMT.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-italian-bmt.jpg'

    await italienBMT.save()
    await italienBMT.related('ingredients').attach({
      [americain.id]: {
        quantity: 1
      },
      [pouletTeriyaki.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [concombres.id]: {
        quantity: 1
      },
      [sauceOignonsDoux.id]: {
        quantity: 1
      }
    })

    const subwayMelt = new Product()
    subwayMelt.name = 'Poulet Teriyaki'
    subwayMelt.price = 799
    subwayMelt.foodType = 'sandwich'
    subwayMelt.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-melt.jpg'

    await subwayMelt.save()
    await subwayMelt.related('ingredients').attach({
      [americain.id]: {
        quantity: 1
      },
      [pouletTeriyaki.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [concombres.id]: {
        quantity: 1
      },
      [sauceOignonsDoux.id]: {
        quantity: 1
      }
    })

    const galetteDeLegumesVegan = new Product()
    galetteDeLegumesVegan.name = 'Poulet Teriyaki'
    galetteDeLegumesVegan.price = 799
    galetteDeLegumesVegan.foodType = 'sandwich'
    galetteDeLegumesVegan.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-veggie-patty.jpg'

    await galetteDeLegumesVegan.save()
    await galetteDeLegumesVegan.related('ingredients').attach({
      [americain.id]: {
        quantity: 1
      },
      [pouletTeriyaki.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [concombres.id]: {
        quantity: 1
      },
      [sauceOignonsDoux.id]: {
        quantity: 1
      }
    })

    const jambon = new Product()
    jambon.name = 'Jambon'
    jambon.price = 799
    jambon.foodType = 'sandwich'
    jambon.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-jambon.jpg'

    await jambon.save()
    await jambon.related('ingredients').attach({
      [americain.id]: {
        quantity: 1
      },
      [pouletTeriyaki.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [concombres.id]: {
        quantity: 1
      },
      [sauceOignonsDoux.id]: {
        quantity: 1
      }
    })

    const dindeSandwich = new Product()
    dindeSandwich.name = 'Dinde'
    dindeSandwich.price = 799
    dindeSandwich.foodType = 'sandwich'
    dindeSandwich.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-dinde-234x140.jpg'

    await dindeSandwich.save()
    await dindeSandwich.related('ingredients').attach({
      [americain.id]: {
        quantity: 1
      },
      [pouletTeriyaki.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [concombres.id]: {
        quantity: 1
      },
      [sauceOignonsDoux.id]: {
        quantity: 1
      }
    })

    const thonSandwich = new Product()
    thonSandwich.name = 'Poulet Teriyaki'
    thonSandwich.price = 799
    thonSandwich.foodType = 'sandwich'
    thonSandwich.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-thon.jpg'

    await thonSandwich.save()
    await thonSandwich.related('ingredients').attach({
      [americain.id]: {
        quantity: 1
      },
      [pouletTeriyaki.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [concombres.id]: {
        quantity: 1
      },
      [sauceOignonsDoux.id]: {
        quantity: 1
      }
    })

    const pouletSanwich = new Product()
    pouletSanwich.name = 'Poulet Teriyaki'
    pouletSanwich.price = 799
    pouletSanwich.foodType = 'sandwich'
    pouletSanwich.imageUrl = 'https://www.subway.com/ns/images/menu/FRA/FRE/menu-category-sandwich-poulet-nature.jpg'

    await pouletSanwich.save()
    await pouletSanwich.related('ingredients').attach({
      [americain.id]: {
        quantity: 1
      },
      [pouletTeriyaki.id]: {
        quantity: 1
      },
      [saladeIceberg.id]: {
        quantity: 1
      },
      [tomate.id]: {
        quantity: 1
      },
      [concombres.id]: {
        quantity: 1
      },
      [sauceOignonsDoux.id]: {
        quantity: 1
      }
    })

    const customSandwich = new Product()
    customSandwich.name = 'Sandwich personnalisé'
    customSandwich.price = 200
    customSandwich.isBase = true
    customSandwich.foodType = 'sandwich'
    customSandwich.imageUrl = 'https://cdn.discordapp.com/attachments/903590137458491413/1075058731403976784/Screenshot_2023-02-14_at_15.19.30.png'

    await customSandwich.save()
  }
}
