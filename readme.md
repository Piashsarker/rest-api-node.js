1. For POST : https://rest-api-ninja.herokuapp.com/api/ninjas


Use below json in Body raw as application/json. Name is required .

``
{
 "name":"Piash",
 "rank":"black belt",
 "available": true ,
 "geometry": { "coordinates":[-85.245,25.991], "type": "point"
 }
}
``
or
<br/> 

``
{
	"name":"Piash",
	"rank":"black belt",
	"available": true

}
``

2. For GET : https://rest-api-ninja.herokuapp.com/api/ninjas

3. For PUT or Update :
https://rest-api-ninja.herokuapp.com/api/ninjas/{id}  
Example with {id} :
https://rest-api-ninja.herokuapp.com/api/ninjas/59feae8379acec6ada110468

Use below json in Body raw as application/json. Name is required .
``
{
	"name":"PT Sarker",
	"rank":"black belt",
	"available": true
}
``
4. For DELETE request :
https://rest-api-ninja.herokuapp.com/api/ninjas/{id}  
Example with {id} :
https://rest-api-ninja.herokuapp.com/api/ninjas/59feae8379acec6ada110468
