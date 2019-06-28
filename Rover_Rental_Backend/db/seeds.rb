require "rest-client"
require "json"

response_string = RestClient.get("https://dog.ceo/api/breeds/image/random")
response_hash = JSON.parse(response_string)


































