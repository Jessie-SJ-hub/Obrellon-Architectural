document.getElementById('year').textContent=new Date().getFullYear();
function sendInquiry(e){
 e.preventDefault();
 const f=new FormData(e.target);
 const subject=encodeURIComponent('Project Inquiry - '+f.get('service'));
 const body=encodeURIComponent('Name: '+f.get('name')+'\\nPhone: '+f.get('phone')+'\\nEmail: '+f.get('email')+'\\nService: '+f.get('service')+'\\n\\nProject details:\\n'+f.get('message'));
 // Replace the placeholder below with the business email before publishing.
 window.location.href='mailto:YOUR_EMAIL@example.com?subject='+subject+'&body='+body;
}
