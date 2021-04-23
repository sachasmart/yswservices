
    function userAction(){
        let searchString = document.getElementById("myInput").value;
        let txt = "";
        console.log(searchString);
        
        //----------------- MODIFY WEBHOOK_URL BELOW ------------------------

        let webhook_url = "https://webhooks.mongodb-realm.com/api/client/v2.0/app/ysw_services_search-gnngl/service/ysw_services_web_search/incoming_webhook/getTOPIC";
    
        let url = webhook_url + "?arg=" + searchString;

        fetch(url)
            .then(function (response) {
                if(!response.ok){
                    console.log(response);
                    txt += `<br><br><br><b>Sadly you have an error. Status: ${response.status}`;
                    if (response.json.length === 0)
                        txt+=`<br><br>Make sure to search for some type of services. Don't leave your search box empty.</b>`;
                    document.getElementById("results").innerHTML = txt;
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function (movieJSON) {
                if (movieJSON["$undefined"] === true) {
                    console.log('NO FETCH RESULT');
                    txt += `<br><br><br><b>No Fetch</b>`;
                } else {
                    console.log("FETCHED RESULT... "  );
                    if (movieJSON.length !== 0) {
                        console.log("Fetched array has " + movieJSON.length + " entries");
                        txt = buildMovieList(movieJSON);
                    } else {
                        console.log("Fetched array has " + movieJSON.length + " entries");
                        txt += `<br><br><br><b>Sadly you have no search results. Try checking your spelling or contacting our <a href="mailto:ahmed.hussen@parl.gc.ca">office </a>to add this service to our database</b>`;
                    }
                }  // end of ELSE

            document.getElementById("results").innerHTML = txt;
        }).catch(function(error){
            console.log('Whoopsie! - error', error);
        });
    }

    function buildMovieList(services){
        // HELPER FUNCTION FOR USER ACTION
        
        let i = 0;      // for number of movie documents returned
        let j = 0;      // for number of highlight entries
        let k = 0;      // for highlight.texts type entries - either "hit" or "text"
        let highlight_length = 0;
        let txt = "";
        
        for (i; i < services.length; i++) {

            txt += `<b>${services[i].AGENCY_NAM } </b><br>`;
            txt += `Address: ${services[i].ORGANIZATI} <br>`;
            txt += `Phone: ${services[i].OFFICE_PHO} <br>`;
            txt += `Email: ${services[i].EMAIL} <br>`;
            txt += `Website: ${services[i].WEBSITE} <br>`;
            txt += `Languages: ${services[i].LANGUAGES} <br>`;
            txt += `Hours: ${services[i].HOURS} <br>`;
            txt += `Sacha's Search Score (beta):  ${services[i].score["$numberDouble"]} <br>`;

            // BUILD OUT HIGHLIGHTS FROM FULLPLOT FIELD
            for (j = 0; j < highlight_length; j++) {
                for (k = 0; k < services[i].highlight[j].texts.length; k++) {
                    if (services[i].highlight[j].texts[k].type === "hit") {
                        txt += `<b><span style="background-color: #FFFF00"> ${services[i].highlight[j].texts[k].value} </span></b>`;
                    } else {
                        txt += services[i].highlight[j].texts[k].value;
                    }
                } // end of k
            }  // end of j

            txt += "<hr>";
        }
        return txt;
    }
