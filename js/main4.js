// Local Storage
let information = []

if (localStorage.getItem('info4') != null) {
  information = JSON.parse(localStorage.getItem('info4'))
  displayData()
}

let userNameInput = document.getElementById('userName')
let passorNumInput = document.getElementById('passorNum')
let expireStartInput = document.getElementById('expireStart')
let expireEndInput = document.getElementById('expireEnd')
let phoneNumberInput = document.getElementById('phoneNumber')
let addressInput = document.getElementById('address')
let vaccineInput = document.getElementById('vaccine')
let documentsInput = document.getElementById('documents')

let btnAdd = document.getElementById('btnAdd')
let btnUpdate = document.getElementById('btnUpdate')

// Add New User
btnAdd.addEventListener('click', () => {
  var add = {
    userName: userNameInput.value,
    passporNum: passorNumInput.value,
    phoneNumber: phoneNumberInput.value,
    expireStart: expireStartInput.value,
    expireEnd: expireEndInput.value,
    addressInput: addressInput.value,
    vaccine: vaccineInput.value,
    documents: documentsInput.value,
  }

  clearForm()
  information.push(add)
  localStorage.setItem('info4', JSON.stringify(information))
  displayData()
})

// update Data

//Reset Form
function clearForm() {
  userNameInput.value = ''
  passorNumInput.value = ''
  expireStartInput.value = ''
  expireEndInput.value = ''
  phoneNumberInput.value = ''
  addressInput.value = ''
  vaccineInput.value = ''
  documentsInput.value = ''
}

//dispaly Data
function displayData() {
  var cartona = ''

  for (let i = 0; i < information.length; i++) {
    cartona += `<tr>
                         <td>${i}</td>
                         <td>${information[i].userName}</td>
                         <td>${information[i].passporNum}</td>
                         <td>${information[i].phoneNumber}</td>
                         <td>${information[i].expireStart}</td>
                         <td>${information[i].expireEnd}</td>
                         <td>${information[i].addressInput}</td>
                         <td>${information[i].vaccine}</td>
                         <td>${information[i].documents}</td>
                         <td><button onclick="updateProduct(${i})" type="button" class="btn btn-outline-primary checks">تعديل</button></td>
                         <td><button onclick="deleteData(${i})" type="button" class="btn btn-outline-danger">حذف</button></td>
                        
                         
 
                    <tr>
                    
        `
  }
  document.getElementById('tableBody').innerHTML = cartona
}

// Delete Data

function deleteData(index) {
  information.splice(index, 1)
  localStorage.setItem('info4', JSON.stringify(information))
  displayData()
}

// search Data

function searchData(term) {
  var cartona = ``

  for (var i = 0; i < information.length; i++) {
    if (
      information[i].userName.toLowerCase().includes(term.toLowerCase()) == true
    ) {
      cartona += `<tr>
      <td>${i}</td>
      <td>${information[i].userName}</td>
      <td>${information[i].passporNum}</td>
      <td>${information[i].phoneNumber}</td>
      <td>${information[i].expireStart}</td>
      <td>${information[i].expireEnd}</td>
      <td>${information[i].addressInput}</td>
      <td>${information[i].vaccine}</td>
      <td>${information[i].documents}</td>
      <td><button  onclick="updateProduct($this)" type="button" class="btn btn-outline-warning " >تعديل</button></td>
      <td><button  onclick="deleteData($this)" type="button" class="btn btn-outline-danger">حذف</button></td> 
                  <tr>`
    }
    document.getElementById('tableBody').innerHTML = cartona
  }
}

function updateProduct(index) {
  userNameInput.value = information[index].userName
  passorNumInput.value = information[index].passporNum
  phoneNumberInput.value = information[index].phoneNumber
  expireStartInput.value = information[index].expireStart
  expireEndInput.value = information[index].expireEnd
  addressInput.value = information[index].addressInput
  vaccineInput.value = information[index].vaccine
  documentsInput.value = information[index].documents

  btnUpdate.addEventListener('click', () => {
    information[index].userName = userNameInput.value
    information[index].passporNum = passorNumInput.value
    information[index].phoneNumber = phoneNumberInput.value
    information[index].expireStart = expireStartInput.value
    information[index].expireEnd = expireEndInput.value
    information[index].addressInput = addressInput.value
    information[index].vaccine = vaccineInput.value
    information[index].documents = documentsInput.value
    clearForm()

    console.log(information[index].userName)
    localStorage.setItem('info4', JSON.stringify(information))
    displayData()
    location.reload(true)
  })

  console.log(index)
}
