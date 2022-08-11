const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let year = document.querySelector('#ergastyear');
    let round = document.querySelector('#round');
    console.log(year.value, round.value);
    doAPICall(document.querySelector('#ergastyear').value, document.querySelector('#round').value)

    
})

async function doAPICall(year, round){
    let response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`);
    console.log(response)
    
    response = response.data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings']
    let tbody=document.querySelector('tbody');
    for(const racer of response){
        

        let tr=document.createElement('tr');
        tbody.appendChild(tr);

        th=document.createElement('th');
        th.scope="row";
        th.innerHTML=racer['position'];
        tr.appendChild(th);

        td=document.createElement('td');
        td.innerText=racer['Driver']['givenName'];
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer['Driver']['familyName'];
        tr.appendChild(td);
    
        td=document.createElement('td');
        td.innerText=racer['Driver']['dateOfBirth'];
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer['wins'];
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer['Driver']['nationality'];
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer['Constructors'][0]['name'];
        tr.appendChild(td);
    }
}

// {% for racer in racers %}
// <tr>
//     <th scope="row">{{racer['first_name']}}</th>
//     <td>{{racer.last_name}}</td>
//     <td>{{racer.position}}</td>
//     <td>{{racer.wins}}</td>
//     <td>{{racer.DOB}}</td>
//     <td>{{racer.nationality}}</td>
//     <td>{{racer.constructor}}</td>
// </tr>
// {% endfor %}