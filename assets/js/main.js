import { getAllSuppliers,postSong } from "./requests/supliers_requests.js";
import BASE_URL from "./base_url.js";

const closeBtn = document.getElementById('closeBtn')
const addBtn = document.getElementById('addBtn')
const companyName = document.getElementById('companyName')
const contactName = document.getElementById('contactName')
const contactTitle = document.getElementById('contactTitle')
addBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log(contactName.value);

    
     postSong(BASE_URL, {
        companyName:companyName.value ,
        contactName: contactName.value,
              contactTitle: contactTitle.value,
          });
})


getAllSuppliers(BASE_URL)





// putSongByID(BASE_URL,5,{
//     companyName:"Laman" ,
//     contactName:  "Laman MMC",
//           contactTitle: "BabySitter",
//       })


const uptdateModal = document.getElementById('uptdateModal')

closeBtn.addEventListener('click',(e)=>{
    e.stopPropagation()
    uptdateModal.classList.replace("d-block","d-none")
})