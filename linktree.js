const shareButton = document.querySelectorAll('.float-share-button')
console.log(shareButton)


shareButton.forEach(shareButton =>
    shareButton.addEventListener('click', copyText));



async function copyText(e) {
   
    e.preventDefault();  //prevent button going to the site
    const val = this.getAttribute('link');
    console.log(val);
    try {
        await navigator.clipboard.writeText(val)
        alert("Copied:  " + val);
    } catch (err) {
        console.error(err);
    }
}    