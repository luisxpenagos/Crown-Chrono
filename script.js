let database = [
  {
    reloj: "rolex submariner",
    marca: "rolex",
    "tipo de movimiento": "mecánico",
    complicaciones: "fecha",
    material: "acero inoxidable",
    "tipo de cristal": "zafiro",
    estilo: "dive watch",
    "correa/brazalete": "metal",
    diametro: "41mm",
    "resistencia al agua": "300m",
    precio: "$10,000",
    img_url:
      "https://www.wixonjewelers.com/wp-content/uploads/2022/05/450456-1_Rolex_Submariner_Meters_First.jpg",
  },
  {
    reloj: "omega speedmaster",
    marca: "omega",
    "tipo de movimiento": "mecánico",
    complicaciones: "cronógrafo",
    material: "acero inoxidable",
    "tipo de cristal": "hazelita",
    estilo: "sports watch",
    "correa/brazalete": "metal",
    diametro: "42mm",
    "resistencia al agua": "50m",
    precio: "$7,000",
    img_url:
      "https://www.quera.es/media/catalog/product/cache/5daf542baadf58b9746fc06ac4bf60aa/o/3/o31030425001002-1ok.jpg",
  },
  {
    reloj: "seiko prospex turtle",
    marca: "seiko",
    "tipo de movimiento": "mecánico",
    complicaciones: "fecha",
    material: "acero inoxidable",
    "tipo de cristal": "hardlex",
    estilo: "dive watch",
    "correa/brazalete": "goma",
    diametro: "44mm",
    "resistencia al agua": "200m",
    precio: "$500",
    img_url:
      "https://cdn11.bigcommerce.com/s-yz53l0s5q4/images/stencil/1280x1280/products/2558/6470/SPB333J1__54045.1671633740.jpg?c=2",
  },
  {
    reloj: "casio g-shock dw5600",
    marca: "casio",
    "tipo de movimiento": "cuarzo",
    complicaciones: "alarma",
    material: "plástico",
    "tipo de cristal": "mineral",
    estilo: "sports watch",
    "correa/brazalete": "goma",
    diametro: "43mm",
    "resistencia al agua": "200m",
    precio: "$100",
    img_url:
      "https://down-co.img.susercontent.com/file/sg-11134201-22110-jxmieu769jjv82",
  },
  {
    reloj: "tissot prx powermatic 80",
    marca: "tissot",
    "tipo de movimiento": "mecánico",
    complicaciones: "fecha",
    material: "acero inoxidable",
    "tipo de cristal": "zafiro",
    estilo: "sports watch",
    "correa/brazalete": "metal",
    diametro: "40mm",
    "resistencia al agua": "100m",
    precio: "$650",
    img_url:
      "https://timesquare.vteximg.com.br/arquivos/ids/213784/T137.207.11.351.00.jpg?v=638318824359170000",
  },
  {
    reloj: "citizen promaster diver",
    marca: "citizen",
    "tipo de movimiento": "cuarzo",
    complicaciones: "fecha",
    material: "acero inoxidable",
    "tipo de cristal": "mineral",
    estilo: "dive watch",
    "correa/brazalete": "goma",
    diametro: "44mm",
    "resistencia al agua": "200m",
    precio: "$300",
    img_url:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/73093317_1/w=1500,h=1500,fit=pad",
  },
  {
    reloj: "tag heuer carrera",
    marca: "tag heuer",
    "tipo de movimiento": "mecánico",
    complicaciones: "cronógrafo",
    material: "acero inoxidable",
    "tipo de cristal": "zafiro",
    estilo: "sports watch",
    "correa/brazalete": "cuero",
    diametro: "42mm",
    "resistencia al agua": "100m",
    precio: "$5,000",
    img_url:
      "https://joyeriainter.com/wp-content/uploads/2023/06/reloj-tag-heuer-carrera-DACBS2210FC6534-01-800x800.webp",
  },
  {
    reloj: "hamilton khaki field",
    marca: "hamilton",
    "tipo de movimiento": "mecánico",
    complicaciones: "ninguna",
    material: "acero inoxidable",
    "tipo de cristal": "zafiro",
    estilo: "field watch",
    "correa/brazalete": "cuero",
    diametro: "38mm",
    "resistencia al agua": "50m",
    precio: "$500",
    img_url: "https://m.media-amazon.com/images/I/81lG5c2zTKL._AC_SX679_.jpg",
  },
  {
    reloj: "breitling superocean",
    marca: "breitling",
    "tipo de movimiento": "mecánico",
    complicaciones: "fecha",
    material: "acero inoxidable",
    "tipo de cristal": "zafiro",
    estilo: "dive watch",
    "correa/brazalete": "metal",
    diametro: "42mm",
    "resistencia al agua": "300m",
    precio: "$4,000",
    img_url:
      "https://www.vanhoutteghem.com/Cached/3011/canvas/1200x1200/1441_0.jpg",
  },
  {
    reloj: "patek philippe aquanaut",
    marca: "patek philippe",
    "tipo de movimiento": "mecánico",
    complicaciones: "fecha",
    material: "oro",
    "tipo de cristal": "zafiro",
    estilo: "sports watch",
    "correa/brazalete": "goma",
    diametro: "42mm",
    "resistencia al agua": "120m",
    precio: "$40,000",
    img_url:
      "https://down-co.img.susercontent.com/file/sg-11134201-7rep7-m1xwpb25kke7d7.webp",
  },
  {
    reloj: "tudor black bay 54",
    marca: "tudor",
    "tipo de movimiento": "mecánico",
    complicaciones: "ninguna",
    material: "acero inoxidable",
    "tipo de cristal": "zafiro",
    estilo: "dive watch",
    "correa/brazalete": "metal",
    diametro: "39mm",
    "resistencia al agua": "200m",
    precio: "$3,700",
    img_url:
      "https://www.mjewelry.com/cdn/shop/files/446496_115112.webp?v=1732946591",
  },
  {
    reloj: "panerai luminor marina",
    marca: "panerai",
    "tipo de movimiento": "mecánico",
    complicaciones: "fecha",
    material: "acero inoxidable",
    "tipo de cristal": "zafiro",
    estilo: "dive watch",
    "correa/brazalete": "cuero",
    diametro: "44mm",
    "resistencia al agua": "300m",
    precio: "$8,000",
    img_url:
      "https://down-co.img.susercontent.com/file/sg-11134201-7rcf2-lthtmxxf6unibf.webp",
  },
  {
    reloj: "iwc pilot's watch mk xviii",
    marca: "iwc",
    "tipo de movimiento": "mecánico",
    complicaciones: "fecha",
    material: "acero inoxidable",
    "tipo de cristal": "zafiro",
    estilo: "aviator watch",
    "correa/brazalete": "cuero",
    diametro: "40mm",
    "resistencia al agua": "60m",
    precio: "$4,200",
    img_url:
      "https://www.cooperjewelers.com/cdn/shop/files/pilots-watch-mark-xviii-iw327009-watches-iwc-schaffhausen-cooper-jewelers-114_2400x.jpg?v=1715162362",
  },
  {
    reloj: "cartier tank must",
    marca: "cartier",
    "tipo de movimiento": "cuarzo",
    complicaciones: "ninguna",
    material: "acero inoxidable",
    "tipo de cristal": "zafiro",
    estilo: "dress watch",
    "correa/brazalete": "cuero",
    diametro: "33mm",
    "resistencia al agua": "30m",
    precio: "$2,750",
    img_url:
      "https://www.kennedy.com.au/app/uploads/2021/09/Cartier-Tank-TankMust-WSTA0042-Carousel-1.jpg",
  },
  {
    reloj: "jaeger-le coultre reverso",
    marca: "jaeger-le coultre",
    "tipo de movimiento": "mecánico",
    complicaciones: "ninguna",
    material: "oro",
    "tipo de cristal": "zafiro",
    estilo: "dress watch",
    "correa/brazalete": "cuero",
    diametro: "40mm",
    "resistencia al agua": "30m",
    precio: "$7,500",
    img_url:
      "https://cdn-images.farfetch-contents.com/22/55/77/16/22557716_52670608_1000.jpg",
  },
  {
    reloj: "bvlgari octo finissimo",
    marca: "bvlgari",
    "tipo de movimiento": "mecánico",
    complicaciones: "fecha",
    material: "titanio",
    "tipo de cristal": "zafiro",
    estilo: "sports watch",
    "correa/brazalete": "metal",
    diametro: "40mm",
    "resistencia al agua": "100m",
    precio: "$12,000",
    img_url:
      "https://joyeriainter.com/wp-content/uploads/2023/05/reloj-bulgari-DA103297-01.webp",
  },
  {
    reloj: "bell & ross br 03-92",
    marca: "bell & ross",
    "tipo de movimiento": "mecánico",
    complicaciones: "ninguna",
    material: "cerámica",
    "tipo de cristal": "zafiro",
    estilo: "field watch",
    "correa/brazalete": "goma",
    diametro: "42mm",
    "resistencia al agua": "100m",
    precio: "$3,800",
    img_url: "https://bauer.com.co/wp-content/uploads/2021/10/RELBEL00261.jpg",
  },
  {
    reloj: "nomos tangente",
    marca: "nomos glashütte",
    "tipo de movimiento": "mecánico",
    complicaciones: "fecha",
    material: "acero inoxidable",
    "tipo de cristal": "zafiro",
    estilo: "dress watch",
    "correa/brazalete": "cuero",
    diametro: "38mm",
    "resistencia al agua": "30m",
    precio: "$2,000",
    img_url:
      "https://miguelmunozjoyeros.com/wp-content/uploads/2021/01/180.jpg",
  },
  {
    reloj: "rado captain cook",
    marca: "rado",
    "tipo de movimiento": "mecánico",
    complicaciones: "fecha",
    material: "cerámica",
    "tipo de cristal": "zafiro",
    estilo: "dive watch",
    "correa/brazalete": "metal",
    diametro: "42mm",
    "resistencia al agua": "200m",
    precio: "$2,400",
    img_url:
      "https://glauser.vteximg.com.br/arquivos/ids/183177/R32.500.15.3.jpg?v=638515727675730000",
  },
  {
    reloj: "zenith el primero",
    marca: "zenith",
    "tipo de movimiento": "mecánico",
    complicaciones: "cronógrafo",
    material: "acero inoxidable",
    "tipo de cristal": "zafiro",
    estilo: "sports watch",
    "correa/brazalete": "metal",
    diametro: "42mm",
    "resistencia al agua": "100m",
    precio: "$6,500",
    img_url:
      "https://content.thewosgroup.com/productimage/17640795/17640795_1.jpg?impolicy=zoom",
  },
];

// Función para crear las tarjetas
function generarTarjetas() {
  const container = document.getElementById("container");

  // Recorre la base de datos y genera una tarjeta para cada reloj
  database.forEach((reloj) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <div class="watch-image">
                <img src="${reloj.img_url}" alt="Reloj ${reloj.reloj}">
            </div>
            <div class="watch-info">
                <div class="watch-name">
                    <div class="watch-brand">${reloj.marca}</div>
                    <div class="watch-model">${reloj.reloj}</div>
                </div>
                <p><strong>Marca:</strong> ${reloj.marca}</p>
                <p><strong>Movimiento:</strong> ${reloj["tipo de movimiento"]}</p>
                <p><strong>Complicaciones:</strong> ${reloj.complicaciones}</p>
                <p><strong>Material:</strong> ${reloj.material}</p>
                <p><strong>Cristal:</strong> ${reloj["tipo de cristal"]}</p>
                <p><strong>Estilo:</strong> ${reloj.estilo}</p>
                <p><strong>Correa/Brazalete:</strong> ${reloj["correa/brazalete"]}</p>
                <p><strong>Diámetro:</strong> ${reloj.diametro}</p>
                <p><strong>Resistencia al agua:</strong> ${reloj["resistencia al agua"]}</p>
                <p><strong>Precio:</strong> ${reloj.precio}</p>
            </div>
        `;

    // Agregar la tarjeta al contenedor
    container.appendChild(card);
  });
}

// Llamar a la función para generar las tarjetas al cargar la página
window.onload = generarTarjetas;
