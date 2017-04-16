const StrainEnum = {
  Indica: 0,
  Sativa: 1,
  Hybrid: 2
}

const ProductInfo = [
  {
    title: "Blue Dream",
    subtitle: "17% THC 5% CBD",
    type: StrainEnum.Hybrid,
    description: "Blue Dream, a sativa-dominant hybrid originating in California, has achieved legendary status among West Coast strains. Crossing a Blueberry indica with the sativa Haze, Blue Dream balances full-body relaxation with gentle cerebral invigoration. Novice and veteran consumers alike enjoy the level effects of Blue Dream, which ease you gently into a calm euphoria. Some Blue Dream phenotypes express a more indica-like look and feel, but the sativa-leaning variety remains most prevalent.",
    price: "$10/g",
    thumbnail: "bud1",
    category: "smoke"
  },
  {
    title: "Sour Diesel",
    subtitle: "19% THC 1% CBD",
    type: StrainEnum.Sativa,
    description: "Sour Diesel, sometimes called Sour D, is an invigorating sativa-dominant strain named after its pungent, diesel-like aroma. This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status. Stress, pain, and depression fade away in long-lasting relief that makes Sour Diesel a top choice among medical patients. This strain took root in the early 90's, and it is believed to have descended from Chemdawg 91 and Super Skunk.",
    price: "$10/g",
    thumbnail: "bud2",
    category: "smoke"
  },
  {
    title: "Granddaddy Purple",
    subtitle: "17% THC 10% CBD",
    type: StrainEnum.Indica,
    description: "Introduced in 2003 by Ken Estes, Granddaddy Purple (or GDP) is a famous indica cross between Purple Urkle and Big Bud. This California staple inherits a complex grape and berry aroma from its Purple Urkle parent, while Big Bud passes on its oversized, compact bud structure. GDP flowers bloom in shades of deep purple, a contrastive backdrop for its snow-like dusting of white crystal resin.",
    price: "$20/g",
    thumbnail: "bud3",
    category: "smoke"
  },
  {
    title: "Jack Herer",
    subtitle: "18% THC 0% CBD",
    type: StrainEnum.Sativa,
    description: "Jack Herer is a sativa-dominant cannabis strain that has gained as much renown as its namesake, the marijuana activist and author of The Emperor Wears No Clothes. Combining a Haze hybrid with a Northern Lights #5 and Shiva Skunk cross, Sensi Seeds created Jack Herer hoping to capture both the cerebral elevation associated with sativas and the heavy resin production of indicas. Its rich genetic background gives rise to several different variations of Jack Herer, each phenotype bearing its own unique features and effects. However, consumers typically describe this 55% sativa hybrid as blissful, clear-headed, and creative.",
    price: "$15/g",
    thumbnail: "bud4",
    category: "smoke"
  },
  {
    title: "Bubba Kush",
    subtitle: "14% THC 8% CBD",
    type: StrainEnum.Indica,
    description: "Bubba Kush is an indica strain that has gained notoriety in the U.S. and beyond for its heavy tranquilizing effects. Sweet hashish flavors with subtle notes of chocolate and coffee come through on the exhale, delighting the palate as powerful relaxation takes over. From head to toe, muscles ease with heaviness as dreamy euphoria blankets the mind, crushing stress while coercing happy moods. Bubba Kush exhibits a distinctive, bulky bud structure with hues that range from forest green to pale purple.",
    price: "$15/g",
    thumbnail: "bud5",
    category: "smoke"
  },
  {
    title: "Gorilla Glue",
    subtitle: "18% THC 3% CBD",
    type: StrainEnum.Hybrid,
    description: "Gorilla Glue, developed by GG Strains, is a potent hybrid strain that delivers heavy-handed euphoria and relaxation, leaving you feeling “glued” to the couch. Its chunky, resin-covered buds fill the room with pungent earthy and sour aromas inherited from its parent strains, Chem’s Sister, Sour Dubb, and Chocolate Diesel. Taking first place in both the Michigan and Los Angeles 2014 Cannabis Cups as well as the High Times Jamaican World Cup, this multiple award-winning hybrid's supremacy is no longer a secret, and consumers will search far and wide to get their hands sticky with Gorilla Glue.",
    price: "$15/g",
    thumbnail: "bud6",
    category: "smoke"
  },
  {
    title: "Edible One",
    subtitle: "250mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$20",
    thumbnail: "edibles1",
    category: "eat"
  },
  {
    title: "Edible Two",
    subtitle: "100mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$10",
    thumbnail: "edibles2",
    category: "eat"
  },
  {
    title: "Edible Three",
    subtitle: "250mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$20",
    thumbnail: "edibles3",
    category: "eat"
  },
  {
    title: "Edible Four",
    subtitle: "100mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$10",
    thumbnail: "edibles4",
    category: "eat"
  },
  {
    title: "Edible Fifth",
    subtitle: "250mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$20",
    thumbnail: "edibles5",
    category: "eat"
  },
  {
    title: "Edible Six",
    subtitle: "100mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$10",
    thumbnail: "edibles6",
    category: "eat"
  },
  {
    title: "Vape One",
    subtitle: "500mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$20",
    thumbnail: "puff1",
    category: "puff"
  },
  {
    title: "Vape Two",
    subtitle: "500mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$10",
    thumbnail: "puff2",
    category: "puff"
  },
  {
    title: "Vape Three",
    subtitle: "500mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$20",
    thumbnail: "puff3",
    category: "puff"
  },
  {
    title: "Vape Four",
    subtitle: "500mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$10",
    thumbnail: "puff4",
    category: "puff"
  },
  {
    title: "Vape Fifth",
    subtitle: "500mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$20",
    thumbnail: "puff5",
    category: "puff"
  },
  {
    title: "Vape Six",
    subtitle: "500mg",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$10",
    thumbnail: "puff6",
    category: "puff"
  },
  {
    title: "Accessory One",
    subtitle: "Subtitle",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$20",
    thumbnail: "other1",
    category: "other"
  },
  {
    title: "Accessory Two",
    subtitle: "Subtitle",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$10",
    thumbnail: "other2",
    category: "other"
  },
  {
    title: "Accessory Three",
    subtitle: "Subtitle",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$20",
    thumbnail: "other3",
    category: "other"
  },
  {
    title: "Accessory Four",
    subtitle: "Subtitle",
    description: "Lorem ipsum dolor sit amet, errem numquam sit ea. At delectus pericula partiendo quo, ne forensibus necessitatibus vim. Has an equidem ponderum delicatissimi, vide duis efficiendi quo eu. Quis diam vocibus pro at, usu te quem zril virtute.",
    price: "$10",
    thumbnail: "other4",
    category: "other"
  }
]

export {
  StrainEnum,
  ProductInfo
}
