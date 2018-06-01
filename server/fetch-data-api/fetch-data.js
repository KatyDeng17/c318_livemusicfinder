const axios = require('axios');
const express = require('express');
const connection = require('../config/db-connection');

const getDataFromEventfullApi = ()=>{
          const BASE_URL = 'http://api.eventful.com/json/events/search';
          const API_KEY = '?app_key=Zb7jwSS8MQppFwhH';
          //*************formating the date to current date for the ******************//
          const now = new Date(); 
          const currentYear = now.getFullYear();
          const currentDate = now.getDate();
          const currentMonth = now.getMonth()+1;
          const current = currentYear+'0'+currentMonth+currentDate+'00';
          // console.log(current); print out the data


          //*************formating the date to current date for the end ******************//

          //************* getting all promises ******************//

          const genreArray = [ 'music_alternative','music_blues','music_country','music_dance','music_easy_listening','music_electronic','music_folk','music_jazz','music_newage','music_rb','music_vocal','music_rap_hiphop','music_metal','music_religious','music_rock','music_pop','music_world','music_opera','music_latin','music_reggae','music_childrens','music_classical'];

          let allPromises = [];  
          let allresults = [];
          var outputObj = {};
          genreArray.map((genre, index)=>{
            allPromises.push(axios.get(`${BASE_URL}${API_KEY}&location=birmingham&date=${current}-2019010100&sort_order=date&category=${genre}&image_sizes=blackborder250,block100&page_size=1000&include=popularity`))
            // allPromises.push(axios.get(`${BASE_URL}${API_KEY}&location=birmingham&date=2018052000-2019010100&sort_order=date&category=${genre}&image_sizes=blackborder250,block100&page_size=1000&include=popularity`))


          })
          
          //************* the getDataFromEventfullApi is return below: ******************//

          return axios.all(allPromises).then(response=>{
              response.map((resultByGenre, index)=>{
                // console.log(databyGenre.data.total_items )
                const total_events = resultByGenre.data.total_items
                // const arrayOfEventsByGenre = resultByGenre.data.events.event;


                    if(total_events > 0){
                      allresults.push(resultByGenre.data.events.event);
                   
                    }else{
                      allresults.push(total_events);
                    }

                    
              })
      //  console.log(allresults);
          allresults.map((genreArr,index) =>{
                outputObj[genreArray[index]] = genreArr
                //outputObj['music_blues'] = [{},{},{},{}]
              })

              return outputObj;

        }).catch(err=>{
          if(err) throw err;
        })

}

 module.exports = getDataFromEventfullApi;


 



































 
////////option 2 //// the fetch the data: don't needed at this point: 

  // let allResults  = {};
  //   genreArray.map((genre, index)=>{
  //     // const key = genre; 
  //     // const eventsByGenre = [];
  
  //       // const sql = `INSERT IGNORE INTO genres ( genre_name ) VALUES ('${genre}')`;

  //       // connection.query(sql, function(err, result){
  //       //   if(err) throw err;
  //       //   console.log(`${genre} inserted to the table`);
  //       // })

  //  axios.get(`${BASE_URL}${API_KEY}&location=birmingham&date=${current}-2019010100&sort_order=date&category=${genre}&image_sizes=blackborder250,block100&page_size=1000&include=popularity`)
  //         .then(resp=>{
    
  //           let total_event = resp.data.total_items;

  //           if(total_event > 0){
  //             // console.log('The '+ genre +' has events: ' +  total_event );;
  //             allResults[genre] = resp.data.events; 

  //           }else{
  //             // console.log('The '+ genre +' has events: ' +  total_event );;
  //             allResults[genre] = null; 
  //           }
  //           // console.log("*************results from ",JSON.stringify(allResults));
            
  //           console.log('*******************************************This is the all data get back from api',JSON.stringify(allResults));
  //           // return allPromises;

  //         }).catch(err=>{
  //           if(err) throw err; 
  //         })

  //         // console.log(allResults);

  // })

  
  
  



