<b> 1. For POST : https://rest-api-ninja.herokuapp.com/api/ninjas </b>


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
 </code> </pre>
<br/>
or

<br/>

<pre> <code>
{
	"name":"Piash",
	"rank":"black belt",
	"available": true
}
</code> </pre>

<b> 2. For GET : https://rest-api-ninja.herokuapp.com/api/ninjas</br>

<br> 3. For PUT or Update :</b> <br/>
https://rest-api-ninja.herokuapp.com/api/ninjas/{id}  
Example with {id} : <br/>
https://rest-api-ninja.herokuapp.com/api/ninjas/59feae8379acec6ada110468
<br/><br/>
Use below json in Body raw as application/json. Name is required .<br/>
<pre> <code>
{
	"name":"PT Sarker",
	"rank":"black belt",
	"available": true
}
</pre> </code>
<br/><br/>
<b> 4. For DELETE request :</b>  <br/>
https://rest-api-ninja.herokuapp.com/api/ninjas/{id}  <br/>
Example with {id} :<br/>
https://rest-api-ninja.herokuapp.com/api/ninjas/59feae8379acec6ada110468
