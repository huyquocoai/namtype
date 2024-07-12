const myFamily = {
  father: 'John',
  mother: 'Jane',
  sister: 'Sally',
  son: 'Tom'
}

// const mother = myFamily.mother
// const father = myFamily.father

const { father, mother} = myFamily

console.log(mother, father)

const myHobbies = ['dichoi', "ngu", "xem phim", 'ngam hoang hon', 'vay tien ban']

const [ hoppy1, hoppy2] = myHobbies
console.log(hoppy1, hoppy2)

function useState(initialState) {
  let state = initialState
  function setState(newState) {
    state = newState
  }
  return [state, setState]
}
// const state = useState()[0]
// const setState = useState()[1]

const [state, setState] = useState(0)
setState(1)