1. For POST : https://rest-api-ninja.herokuapp.com/api/ninjas


    Use below json in Body raw as application/json. Name is required .
<br/>

<pre> <code>
{
 "name":"Piash",
 "rank":"black belt",
 "available": true ,
 "geometry": { "coordinates":[-85.245,25.991], "type": "point"
 }
}
</pre> </code> 
<br/>
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

3. For PUT or Update :<br/>
https://rest-api-ninja.herokuapp.com/api/ninjas/{id}  
Example with {id} : <br/>
https://rest-api-ninja.herokuapp.com/api/ninjas/59feae8379acec6ada110468
<br/><br/>
Use below json in Body raw as application/json. Name is required .<br/>
``
{
	"name":"PT Sarker",
	"rank":"black belt",
	"available": true
}
``
<br/><br/>
4. For DELETE request :<br/>
https://rest-api-ninja.herokuapp.com/api/ninjas/{id}  <br/>
Example with {id} :<br/>
https://rest-api-ninja.herokuapp.com/api/ninjas/59feae8379acec6ada110468
