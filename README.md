## fizzBuzzaBackend
API's for Fizz Buzz programming challenge 

## Backend is running on 134.209.145.120 Digitalocean server.

## Routes
  ### GET
    # 134.209.145.120/ :  Health check route return  ```{status:200, msg: 'ok'}```
    # 134.209.145.120/fizzbuzz/type/1/count/:count: Return fizzbuzz from 1 to 100
  ### POST
    # 134.209.145.120/fizzbuzz/type/2 : it will take input from user e.g {3:Fizz, 5:Buzz} in request body, Now user can input own rules to get fizz buzz solution.
     Body:Raw
     Type JSON
     
      Request Paylod:
      {
        "rule":{
                "4":"FIZZ", 
                "5":"BUZZ"
                },
        "count":100
      } 
