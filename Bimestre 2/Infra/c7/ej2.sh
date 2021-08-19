#!/bin/bash
nombre="Susana"
curl -s https://api.genderize.io/?name=$nombre | jq '.gender' |
{ read -r gender; echo "Gender of $nombre is: $gender"; }
curl -s https://api.nationalize.io/?name=$nombre | jq '.country[0].country_id' | { read -r cn; echo "Country of $nombre is: $cn"; }
