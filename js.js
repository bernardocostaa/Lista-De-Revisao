const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let itemSelecionado = 0

const img = document.getElementById('person-img')
const nome = document.querySelector('.name')
const job = document.querySelector('.job')
const info = document.querySelector('.info')

const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const btnRamdom = document.querySelector('.aleatorio')


window.addEventListener('DOMContentLoaded',(e)=>{
  console.log(reviews[itemSelecionado]);

  img.src = reviews[itemSelecionado].img
  nome.textContent = reviews[itemSelecionado].name
  job.textContent = reviews[itemSelecionado].job
  info.textContent = reviews[itemSelecionado].text
})

function cadaPessoa(index){
  const item = reviews[index]
  img.src = item.img
  nome.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}


btnNext.addEventListener('click',()=>{
  itemSelecionado++
  if(itemSelecionado > reviews.length - 1){
    itemSelecionado = 0
  }
  cadaPessoa(itemSelecionado)
})

btnPrev.addEventListener('click',()=>{
  itemSelecionado--
  if(itemSelecionado < 0){
    itemSelecionado = reviews.length - 1
  }
  cadaPessoa(itemSelecionado)
})

btnRamdom.addEventListener('click',()=>{
 const numeroAle =  Math.floor(Math.random() * reviews.length)
  cadaPessoa(numeroAle)
})