# Dropdown 

Ce dropdown nécessite 2 paramètres : name et options  
```  
name = "string"  
options = ["string", "string", "string"]
```  
name représente la nomination des balises label et select.  
options représente le contenu des différents option dans le select.  
  
Le dropdown a un style par défaut, si vous voulez le modifier il faudra utiliser les nominations suivantes :  
  
containerStyle, labelStyle et selectStyle

## Installation 

Dans votre terminal veuillez écrire le code suivant :  
  
### Si npm :  
```
npm i @kisala/hrnet-dropdown
```
### Si yarn :  
```
yarn i @kisala/hrenet-dropdown
```
## Utilisation

Après avoir installer le package sur votre projet.  
Pour l'utiliser, voici un exemple :  
  ```
import { Dropdown } from '@kisala/hrnet-dropdown';  
<Dropdown
    name={'States'}
    options={states.States.map((state) => state.name)}
/>
```  
  
Dans cet exemple, les données dans options étaient dans un fichier JSON et étaient écrites comme ceci :  
  
```
{
  "States": [
    {
      "name": "Alabama",
      "abbreviation": "AL"
    },  
    ...]}  
```  
### Changer le style d'un élément
  
Voici un exemple pour changer le style :  
  ```  
const changeSelectStyle = {
  color: 'white',
  backgroundColor: 'black',
};  
  
<Dropdown
    name={'Department'}
    options={departments.Departments.map((department) => department.name)}
    selectStyle={changeSelectStyle}
/>
  ```
