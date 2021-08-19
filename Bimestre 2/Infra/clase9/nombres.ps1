$req = Invoke-WebRequest -Method Get -Uri https://raw.githubusercontent.com/olea/lemarios/master/nombres-propios-es.txt
$nombresConA = $req.Content.split("`n") | Where-Object { $_ -like "A*" }
1..5 | ForEach-Object {
	$random = Get-Random -Minimum 0 -Maximum $($nombresConA.count-1)
	$nombre = $nombresConA[$random]
	$gender = Invoke-RestMethod -Method Get -Uri https://api.genderize.io/?name=$nombre | Select-Object -ExpandProperty Gender
        $country = Invoke-RestMethod -Method Get -Uri https://api.nationalize.io/?name=$nombre | Select-Object -ExpandProperty Country | Select-Object -First 1 -Property country_id
        Write-Output "El género de $nombre es: $gender"
        Write-Output "El país de $nombre es: $($country.country_id)"
}
$nombresConL = $req.Content.split("`n") | Where-Object { $_ -like "L*" }
1..5 | ForEach-Object {
        $random = Get-Random -Minimum 0 -Maximum $($nombresConL.count-1)
        $nombre = $nombresConL[$random]
        $gender = Invoke-RestMethod -Method Get -Uri https://api.genderize.io/?name=$nombre | Select-Object -ExpandProperty Gender
        $country = Invoke-RestMethod -Method Get -Uri https://api.nationalize.io/?name=$nombre | Select-Object -ExpandProperty Country | Select-Object -First 1 -Property country_id
        Write-Output "El género de $nombre es: $gender"
        Write-Output "El país de $nombre es: $($country.country_id)"
}
$nombresSin = $req.Content.split("`n") | Where-Object { $_ -notlike "L*" -and $_ -notlike "A*" }
1..5 | ForEach-Object {
        $random = Get-Random -Minimum 0 -Maximum $($nombresSin.count-1)
        $nombre = $nombresSin[$random]
        $gender = Invoke-RestMethod -Method Get -Uri https://api.genderize.io/?name=$nombre | Select-Object -ExpandProperty Gender
        $country = Invoke-RestMethod -Method Get -Uri https://api.nationalize.io/?name=$nombre | Select-Object -ExpandProperty Country | Select-Object -First 1 -Property country_id
        Write-Output "El género de $nombre es: $gender"
        Write-Output "El país de $nombre es: $($country.country_id)"
}
