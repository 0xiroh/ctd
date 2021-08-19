#!/bin/bash
num=1
for word in $(cat lista_nombres)
do
	if [ $word == "juan" ]; then
		echo "Encontre a $word"
		echo "Se buscaron $num nombres antes de encontrar a $word"
		break
		
	else
		num=$(( $num + 1 ))
		echo "El nombre es $word"
	fi
done
