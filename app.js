// init github & UI
const github = new Github;
const ui = new UI;



// Search input 

const searchUser = document.getElementById('searchUser');

// Search Input Event listener 

searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  if(userText !== ''){
    //  make http call
    github.getUser(userText)
     .then(data => {
      if(data.profile.message === 'Not Found'){
        //  Show alert
        ui.showAlert('User not found', 'alert alert-primary');
      }else {
        //  Show profile 
        ui.showProfile(data.profile);
      }
     })
  }else {
    // clear profile/input
    ui.clearProfile();
  }
});