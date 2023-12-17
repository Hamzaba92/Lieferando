let dishes = [
  {
    pizza_name: 'Margherita',
    description:
      'Genießen Sie den authentischen Geschmack Italiens mit unserer Pizza Margherita. Diese zeitlose Kreation vereint die Frische von sonnenverwöhnten Tomaten, zartem Mozzarella-Käse und frischem Basilikum auf einem knusprigen, handgemachten Pizzateig. Mit einem Hauch von hochwertigem Olivenöl vollendet, bietet unsere Pizza Margherita ein Geschmackserlebnis, das die Tradition der italienischen Küche zelebriert. Einfach, köstlich und immer ein Genuss!',
    price: 5.99,
    amount: 0,
  },
  {
    pizza_name: 'Tonno',
    description:
      'Genießen Sie einen kulinarischen Ausflug zum Mittelmeer mit unserer Pizza Tonno e Cipolla. Ein knuspriger Pizzaboden, großzügig belegt mit zartem Thunfisch, perfekt ausgewogener Tomatensauce, fein geschnittenen roten Zwiebeln und mildem Mozzarella. Der Thunfisch bringt einen Hauch von Meeresfrische, während die roten Zwiebeln einen delikaten Crunch und süß-scharfen Geschmack hinzufügen.',
    price: 9.99,
    amount: 0,
  },
  {
    pizza_name: 'Funghi',
    description:
      'Tauchen Sie ein in den Wald der Aromen mit unserer Pizza Funghi Supreme. Der knusprige Pizzaboden bildet die perfekte Grundlage für eine reichhaltige Mischung aus saftigen Champignons, aromatischen Shiitake-Pilzen und erdigem Portobello.',
    price: 7.99,
    amount: 0,
  },
  {
    pizza_name: 'Mexicano',
    description:
      'Erleben Sie eine fiesta der Aromen mit unserer Pizza Mexicano Picante. Ein knuspriger Pizzaboden dient als Leinwand für eine lebhafte Komposition aus herzhafter Tomatensauce, würzigem Rinderhackfleisch, frischen Paprika in den Farben des Sommers und saftigen Tomatenwürfeln. Der cremige Mozzarella bildet die perfekte Harmonie zu den intensiven Aromen. Die pikante Note kommt von sorgfältig ausgewählten Jalapeño-Scheiben, während Koriander und Limettenzesten dem Ganzen eine erfrischende, mexikanische Note verleihen.',
    price: 6.99,
    amount: 0,
  },
  {
    pizza_name: 'Quadro Formaggi',
    description:
      'Tauchen Sie ein in die Welt der Käsevielfalt mit unserer Pizza Quadro Formaggi. Ein knuspriger Pizzaboden dient als Bühne für eine harmonische Komposition aus vier exquisiten Käsesorten. Der reichhaltige, geschmolzene Mozzarella sorgt für eine cremige Basis, während der milde Gouda eine angenehme Süße beisteuert. Der kräftige Gorgonzola verleiht der Pizza einen würzigen Kick, während der Parmesan mit seinem nussigen Aroma das Geschmackserlebnis abrundet.',
    price: 8.99,
    amount: 0,
  },
  {
    pizza_name: 'Shaku-Maku',
    description:
      'Entdecken Sie die faszinierende Fusion von Aromen mit unserer Pizza Arabesque. Der knusprige Pizzaboden bildet die Basis für eine verführerische Mischung aus traditionellen arabischen Zutaten. Eine großzügige Schicht würziger Harissa-Tomatensauce verleiht der Pizza eine feurige Note, während zart mariniertes Hähnchenfleisch für eine saftige und herzhafte Komponente sorgt. Auf der Pizza finden sich außerdem goldbraun geröstete Falafel-Bällchen, die einen knusprigen Kontrast und reiche Proteine bieten.',
    price: 11.99,
    amount: 0,
  },
  {
    pizza_name: 'Chicago-Style',
    description:
      'Erleben Sie den Geschmack von Chicago mit unserer einzigartigen Chicago Deep Dish Pizza. Diese tiefgefüllte Köstlichkeit beginnt mit einem robusten, butterigen Teig, der am Rand knusprig und in der Mitte zart ist. Der Teig bildet eine solide Grundlage für die Fülle von Aromen, die diese Pizza auszeichnen. Die Pizza wird mit sorgfältig geschichteten Zutaten gefüllt. Frische, würzige italienische Wurst, herzhafte Pepperoni-Scheiben und aromatische, handgehackte Tomaten bilden die unterste Schicht.',
    price: 10.99,
    amount: 0,
  },
  {
    pizza_name: 'New York Style-Pizza',
    description:
      'Genießen Sie den einzigartigen Geschmack von New York mit unserer klassischen New York Style Pizza. Diese Pizza verkörpert die Essenz der Stadt, bekannt für ihre großzügigen Scheiben und den unverwechselbaren dünnen, aber dennoch stabilen Teig. Eine Scheibe dieser New York Style Pizza ist nicht nur ein kulinarisches Erlebnis, sondern auch eine Hommage an die lebendige Energie und den kulturellen Reichtum der Stadt, die niemals schläft. Greifen Sie zu und erleben Sie den authentischen Geschmack von New York!',
    price: 11.99,
    amount: 0,
  },
  {
    pizza_name: 'Tex-Mex Fusion Pizza',
    description:
      'Tauchen Sie ein in die aufregende Fusion von Texas und Mexiko mit unserer einzigartigen Tex-Mex Pizza. Diese kühne Kreation vereint die robusten Aromen des Südwestens mit der köstlichen Vielfalt der mexikanischen Küche auf einem knusprigen Pizzaboden.',
    price: 10.59,
    amount: 0,
  },
  {
    pizza_name: 'Family-Pizza-Mix (L)',
    description:
      'Die Familienpizza Grandioso in der Größe L ist nicht nur eine Mahlzeit, sondern ein Festmahl, das Ihre Familie um den Esstisch versammelt. Genießen Sie gemeinsame Momente und den unverwechselbaren Geschmack unserer großzügigen Familienpizza! Buon Appetito!',
    price: 13.99,
    amount: 0,
  },
  {
    pizza_name: 'Family-Pizza Magica (XL)',
    description:
      'Willkommen zu einem Fest des Geschmacks mit unserer Familienpizza Magica in der beeindruckenden Größe XL! Diese Pizza ist eine majestätische Kreation, die darauf abzielt, den Hunger Ihrer Familie mit einer Fülle von unwiderstehlichen Aromen zu stillen.',
    price: 19.99,
    amount: 0,
  },
  {
    pizza_name: 'Family-Pizza Gigante (XXL)',
    description:
      'Die Familienpizza Gigante XXL ist nicht nur eine Mahlzeit, sondern ein episches Festmahl, das eine festliche Atmosphäre an Ihren Esstisch bringt. Jeder Bissen in diese Pizza ist eine Reise durch Geschmack und Textur, ein Erlebnis, das die Bedeutung von Gemeinschaft und Genuss zelebriert. Gönnen Sie Ihrer Familie dieses XXL-Vergnügen! Buon Appetito!',
    price: 32.99,
    amount: 0,
  },
];

let shoppingCart = [];
const DELIVERY_COSTS = 5.90;
