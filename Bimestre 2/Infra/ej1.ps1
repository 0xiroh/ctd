foreach($nombre in $(Get-Content -Path .\lista_nombres.txt)) {	
	Write-Output "El nombre es $nombre"
	$gender = Invoke-RestMethod -Method Get -Uri https://api.genderize.io/?name=$nombre | Select-Object -ExpandProperty Gender
	$country = Invoke-RestMethod -Method Get -Uri https://api.nationalize.io/?name=$nombre | Select-Object -ExpandProperty Country | Select-Object -First 1 -Property country_id
	Write-Output "El género de $nombre es: $gender"
	Write-Output "El país de $nombre es: $($country.country_id)"
	if ($nombre -eq "Juan") {
		Write-Output "******* Encontre a $nombre *******"
	} else {
		$otrosNombres++
	}
}
Write-Output "Hay $otrosNombres diferentes a Juan"
