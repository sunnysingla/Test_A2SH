// Register service worker to control making site work offline
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/Test_A2SH/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('appinstalled', (evt) => {

    //const maindv = document.getElementById('Main');
    //maindv.style.display = 'block';
});

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';
 
    addBtn.addEventListener('click', (e) => {
 

    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            //const maindv = document.getElementById('Main');
            //maindv.style.display = 'block';
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
    });
});
