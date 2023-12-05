const API_URL ="http://localhost:3000";
fetch(`${API_URL}/destinations`)
    .then(response => response.json())
    .then(data => {
        const img1 = document.querySelector('.destination__img1');
        const title1 = document.querySelector('.destination__title1');
        const kota1 = document.querySelector('.kota1');

        const img2 = document.querySelector('.destination__img2');
        const title2 = document.querySelector('.destination__title2');
        const kota2 = document.querySelector('.kota2');

        const img3 = document.querySelector('.destination__img3');
        const title3 = document.querySelector('.destination__title3');
        const kota3 = document.querySelector('.kota3');

        const img4 = document.querySelector('.destination__img4');
        const title4 = document.querySelector('.destination__title4');
        const kota4 = document.querySelector('.kota4');

        const img5 = document.querySelector('.destination__img5');
        const title5 = document.querySelector('.destination__title5');
        const kota5 = document.querySelector('.kota5');

        const img6 = document.querySelector('.destination__img6');
        const title6 = document.querySelector('.destination__title6');
        const kota6 = document.querySelector('.kota6');


        img1.src = data[0].imageUrl;
        title1.textContent = data[0].negara;
        kota1.textContent = data[0].kota;

        img2.src = data[1].imageUrl;
        title2.textContent = data[1].negara;
        kota2.textContent = data[1].kota;

        img3.src = data[2].imageUrl;
        title3.textContent = data[2].negara;
        kota3.textContent = data[2].kota;

        img4.src = data[3].imageUrl;
        title4.textContent = data[3].negara;
        kota4.textContent = data[3].kota;

        img5.src = data[4].imageUrl;
        title5.textContent = data[4].negara;
        kota5.textContent = data[4].kota;

        img6.src = data[5].imageUrl;
        title6.textContent = data[5].negara;
        kota6.textContent = data[5].kota;
    })
    .catch(error => console.error('Error:', error));