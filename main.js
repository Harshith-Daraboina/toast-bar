let toastbox = document.getElementById('toastbox');

let sucessmsg='<i class="fa-solid fa-circle-check"></i> Successfully saved!'
let warningmsg='<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again!'
let errormsg='<i class="fa-solid fa-circle-xmark"></i>'+'   Error while saving!'

function showtoast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastbox.appendChild(toast);
    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    


    setTimeout(() => {
        toastbox.removeChild(toast);
    }, 3000);
    // remove the toast after 3 seconds
}