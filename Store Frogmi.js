
var incidents = [
    { report: 'el pasillo esta suico', solution:'hay que barrerlo', open_date: '1/13/2022', status: 'open', solved_date:''},
    { report: '', solution:'', open_date: '2/1/2022', status: 'open', solved_date:''},
    { report: '', solution:'', open_date: '2/2/2022', status: 'solved', solved_date:'2/20/2022'},
    { report: '', solution:'', open_date: '2/12/2022', status: 'solved', solved_date:'3/23/2022'},
    { report: '', solution:'', open_date: '2/16/2022', status: 'solved', solved_date:'2/28/2022'},
    { report: '', solution:'', open_date: '3/10/2022', status: 'solved', solved_date:'3/30/2022'},
    { report: '', solution:'', open_date: '3/20/2022', status: 'open', solved_date:''},
    { report: '', solution:'', open_date: '3/26/2022', status: 'open', solved_date:''},
    { report: '', solution:'', open_date: '4/1/2022', status: 'open', solved_date:''},
];

const incident_status = (start_date, end_date) => {
    let open_cases = 0;
    let solved_cases = 0;
    let average_solution_time = 0;
    let max_solution_time = 0;
    incidents.forEach(incident =>
        {
            if (incident.open_date > start_date && incident.open_date < end_date) {
                if (incident.status=='open'){
                    open_cases = open_cases + 1;
                    if((Date.now() - new Date(incident.open_date).getTime()) > (new Date(max_solution_time).getTime())){
                        max_solution_time = (Date.now() - new Date(incident.open_date).getTime());
                    }
                }else{
                    solved_cases = solved_cases + 1;
                    average_solution_time = average_solution_time + (new Date(incident.solved_date).getTime() - new Date(incident.open_date).getTime())
                    if((new Date(incident.solved_date).getTime() - new Date(incident.open_date).getTime()) > (new Date(max_solution_time).getTime())){
                        max_solution_time = (new Date(incident.solved_date).getTime() - new Date(incident.open_date).getTime());
                    }
                }
            }
            
        })
    console.log('Casos resueltos: ' + solved_cases)
    console.log('Casos abiertos: ' + open_cases)
    console.log('Promedio de tiempo de solucion en dias: ' + Math.floor((average_solution_time/solved_cases)/(1000 * 3600 * 24)))
    console.log('Maximo tiempo de solucion en dias: ' + Math.floor(max_solution_time/(1000 * 3600 * 24)))
}

incident_status('1/12/2022','5/12/2022')