
var stLinkURLInput = document.getElementById('LinkURLInput');
var stSiteNameInput = document.getElementById('SiteNameInput');
var stDescriptionInput = document.getElementById('TextAreaDescription');

var stLinkURLOutput = document.getElementById('LinkURLOutput');
var stSiteNameOutput = document.getElementById('SiteNameOutput');
var stDescriptionOutput = document.getElementById('DescriptionOutput');

var stOutputContainer = document.getElementById('outputContainer');

var toast = document.querySelector('.myToast');
var stToastMessage = document.getElementById('toastMessage');

function readLink() {
   stSiteNameOutput.innerText = stSiteNameInput.value;
   stLinkURLOutput.innerText = stLinkURLInput.value;
   stLinkURLOutput.href = stLinkURLInput.value;
   //stLinkURLOutput.setAttribute("href", stSiteNameInput.value);
   stDescriptionOutput.innerText = stDescriptionInput.value;

   stSiteNameInput.value = '';
   stLinkURLInput.value = '';
   stDescriptionInput.value = '';

   if (stOutputContainer.classList.contains('d-none')) {
      stOutputContainer.classList.add('d-block');
      stOutputContainer.classList.remove('d-none');
   }
}

function deleteLink() {
   stSiteNameInput.value = '';
   stLinkURLInput.value = '';
   stDescriptionInput.value = '';
   stSiteNameOutput.value = '';
   stLinkURLOutput.value = '';
   stDescriptionOutput.value = '';

   if (stOutputContainer.classList.contains('d-block')) {
      stOutputContainer.classList.add('d-none');
      stOutputContainer.classList.remove('d-block');
   }
}


function editLink() {
   stSiteNameInput.value = stSiteNameOutput.innerText;
   stLinkURLInput.value = stLinkURLOutput.innerText;
   stDescriptionInput.value = stDescriptionOutput.innerText;

   if (stOutputContainer.classList.contains('d-block')) {
      stOutputContainer.classList.add('d-none');
      stOutputContainer.classList.remove('d-block');
   }
}


//---Link Validation
var settingForm = document.getElementById('SettingForm');
var regex = /^https:/g;

document.addEventListener('submit', function (e) {

   var urlTest = regex.test(stLinkURLInput.value);
   console.log( 'Value Test Result ==> ' ,urlTest, ' -- inputLink ==> ', stLinkURLInput.value);

   //stLinkURLInput.value === '' ||

   if (urlTest) {
      //Read Link
      readLink()

      ShowToast("Link created successfully", 'green', 'white')

      if (stLinkURLInput.classList.contains('border-danger')) {
         stLinkURLInput.classList.remove('border-danger');
      }

   } else {

      e.preventDefault();
      stLinkURLInput.classList.add('border-danger', 'border-3');

      ShowToast("Enter a valid URL begin with 'http://www.'", 'rgba(255, 251, 0, 0.993)', 'black')

      //return;
   }

});

function ShowToast(messageTxT, toastColor, fontColor) {
   stToastMessage.innerText = messageTxT;
   toast.style.background = toastColor;
   toast.style.color = fontColor
   toast.classList.add('adjecent-right');
   setTimeout(function () {
      toast.classList.remove('adjecent-right');
   }, 4000);
}



