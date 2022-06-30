//State Dropdown
let dropdown = document.getElementById('states');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose a State';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://simple-state-api.herokuapp.com/';

fetch(url)
.then (
    function(res) {
        if (res.status !== 200) {
            console.warn('Error')
            return;
        }
        res.json().then(function(data) {
            console.log(data)
           
        //    let option;

        //     for (let i = 0; i < data.length; i++) {
        //         option = document.createElement('option');
        //         option.text = data;
        //         dropdown.add(option)
        //     }
        // });
    }
)
.catch(function(err) {
    console.error(`There is an error: ${err}`)
})
