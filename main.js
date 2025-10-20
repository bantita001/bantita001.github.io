colors = ['#E88D67',
          '#D4DF9E',
          '#8EB1C7',
          '#415D43',
          '#02020B'
]

function hover(element, i) {
  document.body.style.background = colors [i]
  document.body.classList.add('hovering')
  
}

function leave (element ){
  document.body.style.background = "#02020B"
  document.body.classList.remove('hovering')
}