import BASE_URL from "../base_url.js";
const endpoint = "/supliers";
const tBody = document.getElementById("tbody")
//get All Songs - void
export async function getAllSuppliers(url) {
  let suplier = null;
  let error = null;
  await axios
    .get(url + endpoint)
    .then((result) => {
        renderData(result.data)
        suplier = result.data;
    })
    .catch((err) => {
      error = err;
    });
  return {
    suplier: suplier,
    error: error,
  };
}

 function deleteSupliersByID(url, id) {

     axios.delete(url + endpoint + `/${id}`).then((res) => {
    getAllSuppliers(BASE_URL)
    
    });  
  }

  export async function postSong(url, newSupliers) {

    await axios.post(url + endpoint, newSupliers).then((res) => {

      getAllSuppliers(BASE_URL)
    });

  }


  export async function putSongByID(url, id, updatedSong) {

    await axios.put(url + endpoint + `/${id}`, updatedSong).then(() => {
        getAllSuppliers(BASE_URL)
      });
  

  }
  



function renderData(supliers) {
    tBody.innerHTML = ''
    supliers.map((e)=>{
        tBody.innerHTML += `
        <tr>
        <th >${e.id}</th>
        <td>${e.companyName}</td>
        <td>${e.contactName}</td>
        <td>${e.contactTitle}</td>
        <td><button data-id='${e.id}' class="btn btn-primary ">Detail</button></td>
        <td><button data-id='${e.id}' class="btn btn-secondary  upBtn">Update</button></td>
        <td><button data-id='${e.id}' class="btn btn-danger delBtn">Delete</button></td>
      </tr>
        `
    })
    deleteSupliers()
    uptdateSupliers()
} 

const uptdateModal = document.getElementById('uptdateModal')
function uptdateSupliers() {
    const upBtns = document.querySelectorAll('.upBtn')
        upBtns.forEach((upBtn)=>{
            upBtn.addEventListener('click',function () {
                const btnId = this.getAttribute("data-id")
                console.log(btnId);
                uptdateModal.classList.replace("d-none","d-block")
                const uptdateBtn = document.getElementById('addBtn')
                const uptdatecompanyName = document.getElementById('companyName')
                const uptdatecontactName = document.getElementById('contactName')
                const uptdatecontactTitle = document.getElementById('contactTitle')
          console.log(uptdatecompanyName.value);
                uptdateBtn.addEventListener('click',(e)=>{
                    e.preventDefault()
            putSongByID(BASE_URL,btnId,{
                companyName:uptdatecompanyName.value ,
                contactName: uptdatecontactName.value,
                      contactTitle: uptdatecontactTitle.value,
                  })
                  getAllSuppliers(BASE_URL)
          })
            })
        })
}

function deleteSupliers() {
    const delBtns = document.querySelectorAll('.delBtn')
    delBtns.forEach((delBtn)=>{
        delBtn.addEventListener('click',function () {
            deleteSupliersByID(BASE_URL,this.getAttribute('data-id'))
        })
    })
}