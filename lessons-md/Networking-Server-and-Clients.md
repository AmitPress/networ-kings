#### Networking and Packets
Any networked computer is host.
Any host can be server.
Any host can be client.

#### Protocols and Ports
There are many protocols
Ports can be from 1 to 65535

From 1 to 1023 port numbers are reserved
```
amit@DESKTOP-FJJO7RL:~/networ-kings$ nc -lp 1023
nc: Permission denied
```
#### Servers and Clients
In peer to peer network there isnt any server-client thing.

#### Netcat
Netcat can be used to play with basic server client system locally.

Making a server:
```
nc -lp 5000
```
Making a client:
```
nc localhost 5000
```
Then from the client terminal you can write and enter `hi i am client`
Same you can do with server terminal `hello i am server`

#### Http and Http headers
GET
POST
PUT
PATCH
DELETE

GET is like downloading some stuff
POST is like uploading some stuff
PUT/PATCH is like updating
DELETE is to delete

In CRUD manner: CREATE READ UPDATE DELETE is POST GET PUT DELETE

With `nc google.com 80` you are connected with google.com over a tcp connection.
Now if you send some meaningful text the server will reply with meaningful outputs.

Like, for example,
```
nc google.com 80
GET /favicon.ico HTTP/1.1
HOST: google.com
```
It may reply with a status 200

#### Excercise 1
Here I have written a simple http server with http node module.
Which just responds `helloworld` and then close the server.
```
node excercise-one.js
```
Now make a request with netcat
```
nc localhost 8080
GET / HTTP/1.0
Host: localhost
```
It responds with
200 ok
