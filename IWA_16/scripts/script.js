const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {

    // Extract Athlete by ID. Can also use object destructuring here.
    let extractAthlete = data.response.data[athlete];
  
    //Create html fragment
    const fragment = document.createDocumentFragment();

    //Create athlete title using id  
    const title = document.createElement('h2');
    const titleText = document.createTextNode(extractAthlete.id);
    title.appendChild(titleText);
    fragment.appendChild(title);
  
    
    //Create dl list
    const list = document.createElement('dl');
    fragment.appendChild(list);
  
    extractAthlete.races.reverse();
    
    //Info on most recent (last) race
    const extractdate = new Date(extractAthlete.races[0].date);
    const day = extractdate.getUTCDate();
    const month = extractdate.getMonth();
    const year = extractdate.getFullYear();

    let timeAsArray = extractAthlete.races[0].time;
    let total = 0;
    for (let i = 0; i <= timeAsArray.length - 1; i++)
    {
        total = total + timeAsArray[i];
    };
    const hours = total / 60;
    const minutes = total / hours / 60;
  
    list.innerHTML = `
      <dt>Athlete</dt>
      <dd>${extractAthlete.firstName} ${extractAthlete.surname}</dd>

      <dt>Total Races</dt>
      <dd>${extractAthlete.races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours}.${minutes}</dd>
    `;

    fragment.appendChild(list);
  }

let {NM372, SV782} = data.response.data;
document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
//   document.querySelector(SV782).appendChild(createHtml(SV782));