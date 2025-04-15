function showToast(type, message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    
    toastContainer.appendChild(toast);
    
   
    setTimeout(() => {
        toast.classList.add('show');
    }, 20);
    
  
    setTimeout(() => {
        toast.classList.remove('show');
        
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300); 
    }, 1000);
}