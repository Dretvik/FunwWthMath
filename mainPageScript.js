        //Model


        // const link = document.createElement('link');
        // link.rel = 'stylesheet';
        // link.type = 'text/css';
        // link.href = 'styleMultiplicationPage.css';
        // document.head.appendChild(link);




        //View
        updateView();
        function updateView() {
            document.getElementById('app').innerHTML = /*HTML*/`
            <h2>Welcome to my Math-App</h2>
            <button onclick="updateViewMultiplicationTable()">Open Multiplication Table</button>
            `;            
        }

        //Controller
        

