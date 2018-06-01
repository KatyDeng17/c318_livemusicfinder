
var mysql = require('mysql');
var schedule = require ('node-schedule');

schedule.scheduleJob('* * * * * *', () => {
    // ================== inserting data fetched back from eventfull api ==================//
    async function test(){
              const connection = require('./server/config/db-connection');
              const getDataFromEventfullApi = require('./server/fetch-data-api/fetch-data');
            try{
              
              var today = new Date();
              var dd = today.getDate();
              var mm = today.getMonth()+1; //January is 0!
              var yyyy = today.getFullYear();
        
              if(dd<10) {
                  dd = '0'+dd
              }
              if(mm<10) {
                  mm = '0'+mm
              }
              today =   yyyy + '-' + mm + '-' + dd;
        
              var sql = "DELETE FROM `events` WHERE event_date < '"+today+"'";
              connection.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("Number of records deleted: " + result.affectedRows);
              });
        
        
              const outputObj = await getDataFromEventfullApi();
              //  outputObj is below: 
              //  outputObj = {
              //     genre1 : [{},{},{}],
              //     genre2 : [{},{},{}],
              //     genre3 : [{},{},{}]
              // }
           
              const genresHasEvents =[];
              for(let key in outputObj){
        //******looping the outputObj with key as genres and value as array of events associate to the key genre  ******//        
                   const eventArrayBasedOnGenre = outputObj[key];
                   //if NO EVENTS under particular GENRE; 
        
                  // console.log(`${key}  -------> ${eventArrayBasedOnGenre.length}`);
        
        
                   if(Number(eventArrayBasedOnGenre) !== 0 ){
        
        
                          // =========== FORMAT DATA and INSERT TO genres TABL============//
        
                        //preparing statement: 
                        const genre = key.replace(/("|music|[_ *)&@^#`~|+=%-<>{}[\](:'])/gi,'');
                        const sql_genre = "INSERT IGNORE INTO genres ( genre_name ) VALUES (?)";
                        const query = connection.query(sql_genre, genre, (err, result)=>{
                              if(err) throw err;
                              // console.log(`${genre} id:  ${result.insertId}`);                       
                          });                             
        
                        //******************** start of eventArrayBasedOnGenre.map *******************//      
                          // eventArrayBasedOnGenre = [{},{},{},{}];
                          //item = {};
                          eventArrayBasedOnGenre.map((item, index)=>{
                                
                                  // ----------- FORMAT DATA and INSERT TO zipCode TABLE -------------//
                     
                                   let zip_code_value;
                                   if(item.postal_code !== null){
                                    zip_code_value = item.postal_code.replace(/("|[a-zA-Z@#$%^&*()!_+=-])/gi,''); 
                                   }else{
                                    zip_code_value = 'null'; //right;
                                   }
                                  // ----------- INSERT TO zipCode TABLE -------------//
                                    const sql_zip = "INSERT IGNORE INTO zipCode ( zip_code ) VALUES (?)";
                                    const query_zip = connection.query(sql_zip, zip_code_value, (err, result)=>{
                                      if(err) throw err;
                                    })
                                
                                 // ---------------  FORMAT DATA for venues TABLE --------------------//    
        
                                   const venue_name_value = item.venue_name.replace(/(["|\\]|postal code \d+, united states|postal code \d+, us|birmingham, Alabama, United States)/gi, 'No Venue Info Listed'); 
                                      
                                   let venue_address_value = item.venue_address; 
                                        if(venue_address_value === null){
                                          venue_address_value = 'No Address Listed';
                                        }else{
                                          venue_address_value = venue_address_value.replace(/(country=\w+%\d+\w+|&\w+)/gi, '');
                                          venue_address_value = venue_address_value.replace(/(birmingham, \w+, \w+ \w+)/gi, 'No Address Listed'); 
                                        }
        
                                  const venue_city_value  = item.city_name.replace(/(['"@\\=+\-_!#$%^&*()~.,`])/gi, '');
                                  const venue_state_value = item.region_name.replace(/(['"@\\=+\-_!#$%^&*()~`.,])/gi, '');
                                  const county_value = item.country_abbr.replace(/(['"@\\=+\-_!#$%^&*()~`.,])/gi, '');
                                  const longitude_value = item.longitude.replace(/(['"@\\=+_!#$%^&*()~,`])/gi, '');
                                  const latitude_value = item.latitude.replace(/(['"@\\=+_!#$%^&*()~,`])/gi, '');; 
        
                        //  //preparing statement: 
                               
                                // --------------- INSERT TO venues TABLE --------------------//     
        
                                  // working
                                        const sql_venue = `INSERT IGNORE INTO venues (venue_name, venue_address,city,state, county, zipcode_id, longitude, latitude ) VALUES (?,?,?,?,?,(SELECT zip_id FROM zipCode WHERE zip_code = ?), ?, ?)`;
                                        const sql_venue_value = [venue_name_value,venue_address_value,venue_city_value,venue_state_value,county_value,zip_code_value,longitude_value,latitude_value]
                                        const query_venue  = connection.query(sql_venue ,sql_venue_value, (err, result)=>{
                                          if(err) throw err;
                                          // console.log("venue id:  "+ result.insertId +" ------> " + "name:  " + venue_name_value);   
        
                                        }) 
         
        
        
        
                               // ----------------------  FORMAT DATA  For events  Table ----------------------//
        
                                        let event_title_value = item.title; 
                                        event_title_value = event_title_value.replace(/[`~@#%^*()|+\='"<>\{\}\[\]\\\/]/gi, ''); 
                                        const time = item.start_time.split(" ");
                                        const event_date_value = time[0];
             //---------------------    console.log(event_date_value ---------------- 
                                        const event_start_time_value = time[1];
                                        const popularity_value = item.popularity;
                                        let event_details_value;
                                     
                                        if(item.description !== null){
                                          event_details_value = item.description;
                                          // event_details_value = event_details_value.replace(/[`!@#^*()|+\="<>\{\}\[\]\\]/gi, '') 
                                          event_details_value = event_details_value.replace(/<[^>]+>|&emp|["']/gi, '');
                                          event_details_value = event_details_value.replace(/'re/gi, ' are'); 
                                              if(event_details_value.length === 2){
                                                event_details_value = 'No data';
                                                console.log("-------------->" +  event_title_value + "------> " + event_details_value.length + "------->" +  event_details_value );
                                              }
                                        }else{
                                          event_details_value = 'No data';
        
                                        }
        
                                        let image_status_value = item.image;
                                        let image_url_value;
                                        let image_size_value;
                                        let image_detail_value;
                                        if(image_status_value !== null){
                                          image_url_value =item.image.blackborder250.url;
                                          image_size_value ="blackborder250";
                                        }else{
                                          image_url_value = 'No Image';
                                          image_size_value = null;
        
                                        }
        
                                     
                                //preparing statement: 
                               
                                // --------------- INSERT TO events TABLE --------------------//     
                                      // console.log(event_title_value);
        
                      
                                      const sql_events = `INSERT IGNORE INTO events (genre_id, event_title, event_date, event_start_time,venue_id,popularity,event_details,event_image) VALUES ((SELECT genre_id FROM genres WHERE genre_name = ?),?, ?, ?,(SELECT venue_id FROM venues WHERE venue_name = ?), ?, ?, ?)`;
        
                                      const sql_events_value = [ genre, event_title_value, event_date_value,event_start_time_value,venue_name_value, popularity_value, event_details_value, image_url_value];
        
                                      const query_event = connection.query(sql_events, sql_events_value, (err, result)=>{
                                            
                                            if(err) throw err;
                                            // console.log(`${result.insertId} --->event title: ${event_title_value} ----> ${genre}`);
        
                                      })
        
                    //// ********************* FORMAT DATA FOR performers TABLE*************************///
                                    let performer_name_value = null;
                                    let performer_bio_value = null;
                                    let performer_image_value = null;
                                    let performer_url_value = null;
                                    let performerId = index; 
                                    
                                    if(item.performers !== null && item.performers.performer.name !== undefined){
                                     
                                          performer_name_value = item.performers.performer.name; 
                                          performer_bio_value = item.performers.performer.short_bio;
                                          
                                          let sql_performers = 'INSERT IGNORE INTO performers (performer_name, performer_bio, performer_image,performer_url) VALUES (?,?,?,?)';
                                          
                                          let sql_performers_value = [performer_name_value, performer_bio_value, performer_image_value, performer_url_value];
        
                                          const query_performer = connection.query(sql_performers , sql_performers_value, (err, result)=>{
                                          
                                                      if(err) throw err;
                                                      // console.log("performers id "+ result.insertId + "name: " + performer_name_value);   
                                                      // console.log(query_performer.sql);
        
                                          })   
        
                                          //*********INSERT DATA TO  performers_events Table *************////; 
                                          const sql_performers_events  = `INSERT IGNORE INTO performers_events (performer_id,event_id) VALUES ((SELECT performer_id FROM performers WHERE performer_name = ?), (SELECT event_id FROM events WHERE event_title = ?))`;
        
                                          const sql_performers_events_value =[performer_name_value, event_title_value]
                                          const query_performers_events =  connection.query(sql_performers_events , sql_performers_events_value, (err, result)=>{
                                              if(err) throw err;
                                              // console.log(query_performers_events.sql);
                                          })  
                                    
        
                                    }else if(item.performers !== null && item.performers.performer.name === undefined){
                                          const arrayOfPerformer = item.performers.performer
                                          arrayOfPerformer.map((performer_obj, index)=>{
        
                                              performer_name_value = performer_obj.name;
                                              performer_bio_value = performer_obj.short_bio;
              
                                              let sql_performers = 'INSERT IGNORE INTO performers (performer_name, performer_bio, performer_image,performer_url) VALUES (?,?,?,?)';
                                              
                                              let sql_performers_value = [performer_name_value, performer_bio_value, performer_image_value, performer_url_value];
        
                                              const query_performer = connection.query(sql_performers , sql_performers_value, (err, result)=>{
                                               
                                                          if(err) throw err;
                                                          // console.log("performers id "+ result.insertId + "name: " + performer_name_value);   
                                                          // console.log(query_performer.sql);
        
                                              })   
        
                                              //*********INSERT DATA TO  performers_events Table *************////; 
                                              const sql_performers_events  = `INSERT IGNORE INTO performers_events (performer_id,event_id) VALUES ((SELECT performer_id FROM performers WHERE performer_name = ?), (SELECT event_id FROM events WHERE event_title = ?))`;
        
                                              const sql_performers_events_value =[performer_name_value, event_title_value]
                                              const query_performers_events =  connection.query(sql_performers_events , sql_performers_events_value, (err, result)=>{
                                                  if(err) throw err;
                                                  // console.log(query_performers_events.sql);
                                               })   
        
                                      })
        
                                    }else{
                                          performer_name_value  = 'No performer info';
        
                                          let sql_performers = 'INSERT IGNORE INTO performers (performer_name, performer_bio, performer_image,performer_url) VALUES (?,?,?,?)';
                                                  
                                          let sql_performers_value = [performer_name_value, performer_bio_value, performer_image_value, performer_url_value];
                                          const query_performer = connection.query(sql_performers , sql_performers_value, (err, result)=>{
                                                  
                                                if(err) throw err;
                                                // console.log("performers id "+ result.insertId + "name: " + performer_name_value);
                                                // console.log(query_performer.sql);
        
                                          }) 
                                          //*********INSERT DATA TO  performers_events Table *************////; 
                                          const sql_performers_events  = `INSERT IGNORE INTO performers_events (performer_id,event_id) VALUES ((SELECT performer_id FROM performers WHERE performer_name = ?), (SELECT event_id FROM events WHERE event_title = ?))`;
        
                                          const sql_performers_events_value =[performer_name_value, event_title_value]
                                          const query_performers_events =  connection.query(sql_performers_events , sql_performers_events_value, (err, result)=>{
                                              if(err) throw err;
                                              // console.log(query_performers_events.sql);
                                            })    
        
                                    }
                                   
                      //*************** end of eventArrayBasedOnKey.map  ****************//                   
                        })
                        // const nextBench = Date.now();
                   }else{
                    //  console.log(`${key} doesn't have events`);
                   }          
        //*************** end of looping the outputObj  ****************//  
              }
        
          } catch (err){
            console.log (`------->something is wrong here ${err}<--------`);
          }
        // ******************** end of test() ******************************//
        }
    test();
    // ==================================  END inserting data fetched back from eventfull api ===========================//

})