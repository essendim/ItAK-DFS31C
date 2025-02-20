#!/bin/bash

# 1. Filtrer et compter des lignes
echo "Nombre de fichiers contenant 'log' :"
ls | grep -i "log" | wc -l

# 2. Rechercher un motif
echo "Recherche des lignes contenant '500' dans les fichiers .txt"
grep -r "500" /mnt/c/Users/mehdi/*.txt > resultat.log
echo "Résultats sauvegardés dans resultat.log"

# 3. Déplacer des fichiers
echo "Déplacement des fichiers .jpg dans le dossier images"
mkdir -p OneDrive/Bureau/images  # Assure que le dossier existe
find OneDrive/Bureau/ -type f -name "*.jpg" -exec mv {} OneDrive/Bureau/images/ \;
echo "Déplacement terminé"
