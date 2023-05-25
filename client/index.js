const userCards = document.getElementById("users");

async function fetchUsers () {
	try {
		const response = await fetch(`http://localhost:3333/users`);
        const users = await response.json();
        users.forEach((user) => { 
           const card = document.createElement('div');
           card.className ='card bg-white rounded-Ig mb-4';

           image.className = 'w-full h-32 sm:h-48 object-cover rounded-t-lg';
            image.src = user.image;
            image.alt = "User Image";

           const cardBody = document.createElement("div");
        cardBody.className = 'p-4';

        const name = document.createElement('h2');
            name.className = "text-lg font-semibold";
            name.innerText = `${user.firstName} ${user.lastName}`
            cardbody-appendChild(name);
            
            const gender = document.createElement('p');
            gender.className = 'text-sm mt-2';
            gender.innerHTML = `<span class="font-semibold">Gender:</span>${user.gender}`
        cardBody.appendChild(gender);

        //generate DOM untuk email
        const email = document.createElement
        ('p');
        email.className = 'text-sm mt-2';
        email.innerHTML = `Email:</span>
        user.email`;
        cardBody.appendChild (email);
        //generate DOM untu phone 
        const phone = document.createElement
        ('p')
        phone.className = 'text-sm mt-1';
        phone.innerHTML = `<span
        class="font-semibold">Phone:</span>${user.phone}`
cardbody.appendChild(phone);
        
        card.appendChild(image);
        userCards.appenChild(card);

	}catch (error) { 
		console.error (error);
	} 


}
fetchUsers(); 