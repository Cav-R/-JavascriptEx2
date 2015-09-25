<%-- 
    Document   : index
    Created on : 23-09-2015, 13:07:10
    Author     : Sindt
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <form id="list" method="post">
            <label>First name</label>
            <input type="text" name="fname" value="abe">
            <label>Last name</label>
            <input type="text" name="lname" value="hest">
            <label>Phone</label>
            <input type="text" name="phone" value="12312311">
            <label>Email:</label>
            <input type="text" name="email" value="mail@mail.dk">
            <input type="button" name="myFunktion" value="Submit" onclick="myFunction()">
        </form>

        <div id="a">Test</div>
        <div id="b">A</div>
        <div id="c">B</div>
        <div id="d">C</div>

        <div class="divClass">
            <div id="divText">Events</div>    
        </div>

         <script src="script.js"></script> 

    </body>
</html>
