# Notas mal hechas de cosas que no sé que son

## Índice

* [Índice](#índice "índice")
* [Terminal de Linux y Bash-Shell](#terminal-de-linux-y-bash-shell "Terminal y Bash Shell")
    * [Introducción](#introducción "introducción")
    * [Terminal](#terminal "Terminal")
        * [directorio /](#directorio)
        * [directorio ~](#directorio-1)
        * [comando pwd](#comando-pwd)
        * [comando whoami](#comando-whoami)
        * [Opciones de comandos](#opciones-de-comandos)
        * [comando help](#comando-help)
        * [comando clear](#comando-clear)
        * [comando ls](#comando-ls)
        * [comando which](#comando-which)
        * [comando history](#comando-history)
        * [comando alias](#comando-alias)
        * [comando unalias](#unalias)
        * [comando touch](#comando-touch)
        * [Operadores](#operadores)
        * [comando echo](#comando-echo)
        * [comando cat](#comando-cat)
        * [comando mkdir](#comando-mkdir)
        * [comando rmdir](#comando-rmdir)
        * [comando rm](#comando-rm)
        * [comando mv](#comando-mv)
        * [comando cp](#comando-cp)
        * [comando find](#comando-find)
        * [comando grep](#comando-grep)
        * [comando ps](#comando-ps)
        * [comando kill](#comando-kill)
        * [abrir editores de código](#abrir-editores-de-código)
        * [ejecutar varios comandos en una línea](#ejecutar-varios-comandos-en-una-línea)
        * [comando date](#comando-date)
        * [comando curl](#comando-curl)
        * [comando zip](#comando-zip)
        * [comando unzip](#comando-unzip)
        * [Permisos](#permisos)
        * [comando chmod](#comando-chmod)
        * [comando sudo](#comando-sudo)
    * [Bash Shell](#bash-shell)


## Terminal de Linux y Bash-Shell

### Introducción

A ver, es medio raro lo de Bash Shell y eso de las Shell (no entiendo bien qué es).  
Basicamente Bash Shell es (seguro no es correcto tecnicamente) como un lenguaje de programación no compilado, que es interpretado por la propia terminal.  
Digo que está raro porque es como que se ejecuta por defecto algún Shell en tu terminal (No tengo idea de si eso es correcto), pero también puedes escribir código en un archivo que tenga la extensión correspondiente a la Shell con la que trabajas (La extensión para Bash Shel es .sh).

Hay varias Shell, Bash Shell es la más popular y creo que es la de Linux, Power Shell es la de Windows, hay otras como Bourne Shell y C Shell. 

Para ejecutar un script bash (un código escrito en un archivo .sh) simplemente hay que abrir el archivo (obviamente desde la terminal).  
El script funciona como una "entidad independiente de la terminal", es decir si el script se dirige a alguna carpeta, la terminal no se moverá.

[Volver al índice](#índice "índice")

---

### Terminal

#### **directorio /**
/ (root) es el directorio raíz, de donde todos los demás directorios parten
#### **directorio ~**
~ (home) es la carpeta del usuario, al abrir la terminal por primera vez es donde normalmente aparecemos
#### **sintaxis especial para directorios**
\- representa al directorio anterior

Un / al final del directorio permite adentrarnos a la carpeta que representa el directorio.  
Al no usar un "/" al final, se está referenciando al directorio de manera abstracta, pero para adentrarnos en él se usa el "/" al final  
Se puede usar para ejecutar archivos dentro de un directorio

. representa el directorio actual

.. representa la carpeta padre del directorio actual  
Aunque realmente actúa como un operador que, dado un directorio (que por default es el directorio actual) nos devuelve el directorio padre de ese directorio

Ancestros.  
podemos ir 2 generaciones atrás con 3 puntos (...), o bien utilizar el operador anterior una segunda vez, para eso debemos entrar a la carpeta que representa al padre del directorio actual ("../"), y finalmente estando dentro, llamar al operador ".." ("../.."), y eso nos retornaría el padre del directorio ".."   
Para generaciones más ancestrales se agregan más puntos o se utiliza más veces el operador ..
#### **comando pwd**
pwd (print working directory) imprime el directorio actual
#### **comando whoami**
Muestra el nombre del usuario actual
#### **opciones de comandos**
Las banderas u opciones de comandos son atributos que le podemos pasar a los comandos para que muestren información de manera diferente  
Normalmente son representados con una sola letra  
Las banderas se ponen seguido del nombre del comando, y se debe de hacer una separación por cada bandera que se desea agregar, ésta separación debe ser un espacio.  
Para indicar que una parte encerrada por separaciones va a agregar una bandera, se debe poner un "-" inicial, seguido de la letra que representa a la bandera.  
Se puede agregar más de una bandera a la vez simplemente concatenando (juntando) las letras en una sola parte encerrada por separaciones, que contenga el "-" inicial que indica que se va a agregar una bandera

[Volver al índice](#índice "índice")
#### **comando help**
Hay 3 formas de pedir ayuda o documentación sobre un comando  
* help comando
* comando -h (esto es más como para node js)
* comando --help
#### **comando clear**
Limpia la terminal
#### **comando ls**
Recibe un parámetro, que hay que introducir después del nombre del comando, seguido de una separación que debe ser un espacio.  
El parámetro es el directorio al cual queremos listar sus carpetas y archivos  
El parámetro por default es el directorio actual, es decir, si no introducimos un parámetro, listará las carpetas y archivos del directorio actual  
Algunas banderas:
* l (ele)  
Muestra más información en un formato de lista
* a (viene de "all")  
Muestra archivos ocultos
* h  
Significa leíble para humanos, escribe la información del peso de los archivos en un formato más legible  

Directorios o archivos con espacios en blanco deben nombrarse entre comillas
#### **comando cd**
cd (change directory) recibe un parámetro, el cual es el directorio al que nos queremos dirigir, se debe introducir de la misma manera que al [comando ls](#comando-ls)  
El parámetro por default es el home (~)
#### **comando which**
Recibe un parámetro, el cual va a ser un comando, y devuelve la ubicación/directorio de ese comando
#### **comando history**
imprime comandos que has ejecutado recientemente
#### **comando alias**
alias [alias del comando]='[el comando]' te permite ponerle un alias o llamar a un comando por un nombre que decidas  
Si no le pasamos ningún argumento, imprime una lista de todos los alias que hemos creado  
Con saltos de línea antes de cerrar la ' puedes hacer que el alias ejecute varios comandos
#### **unalias**
Recibe como parámetro el alias o nombre que le hayas puesto a un comando, y elimina el alias
#### **comando touch**
Crea un archivo, recibe como parámetro la ubicación del archivo (el directorio del archivo padre, junto con el nombre del archivo, junto con la extensión), si la ubicación es el nombre del archivo, se tiene implícito que la dirección es ./[nombre del archivo]  
Directorios o archivos con espacios en blanco deben nombrarse entre comillas

[Volver al índice](#índice "índice")
#### **Operadores**
\>  
Es un operador binario, en la izquierda va un comando que se quiere ejecutar, en la derecha va la ubicación del archivo donde se va a ejecutar (funciona de la misma manera que en el [comando touch](#comando-touch))  
Si no existe el archivo, se crea automáticamente

\>>  
Es un operador binario, inserta el comando de la izquierda en el archivo que se encuentra en la ubicación dada por el parámetro de la derecha (la ubicación funciona igual que en el operador anterior)

|  
Es un operador binario, se llama pipe, es una composición de comandos, la salida del comando de la izquierda es utilizado para la entrada del comando de la derecha  
A veces la salida del comando de la izquierda es el archivo donde realizó algo
#### **comando echo**
Imprime un texto, recibe como parámetro el texto (textos con espacios en blanco deben nombrarse entre comillas)
#### **comando cat**
Recibe como parámetro la ubicación de un archivo (funciona de la misma manera que en el [comando touch](#comando-touch)) e imprime su contenido
#### **comando mkdir**
Crea un directorio, recibe como parámetro el directorio  
Directorios con espacios en blanco deben nombrarse entre comillas
#### **comando rmdir**
Elimina un directorio vacío, el directorio lo recibe como parámetro
#### **comando rm**
Recibe como parámetro la ubicación del archivo (funciona de la misma manera que en el [comando touch](#comando-touch)), y lo elimina  
Algunas banderas:
* r  (viene de recursive)
Le permite al comando eliminar archivos de manera recursiva dando como parámetro un directorio en vez de la ubicación de un archivo, y elimina de manera recursiva todos los archivos que se ubiquen dentro de ese directorio
* f  
Fuerza la eliminación de un archivo, es decir, si el archivo está ejecutando algún proceso, mata ese proceso y lo elimina

Directorios o archivos con espacios en blanco deben nombrarse entre comillas
#### **comando mv**
Recibe dos parámetros, el primero es el directorio o la ubicación del archivo que se quiere mover, el segundo parámetro es el directorio al cual se quiere mover  
Se puede usar para renombrar archivos
#### **comando cp**
Recibe dos parámetros, el primero es la ubicación del archivo que se quiere copiar (funciona de la misma manera que en el [comando touch](#comando-touch)), el segundo parámetro es el directorio donde se quiere pegar  
Algunas banderas:
* r  
Permite que el primer parámetro pueda ser un directorio, y el comando va a copiar de manera recursiva todos los archivos que se encuentren dentro de ese directorio

Directorios o archivos con espacios en blanco deben nombrarse entre comillas
#### **comando find**
Recibe un parámetro, puede ser el nombre del archivo, también puede ser [cadena de texto]*, que significa que va buscar todos los archivos que empiecen con esa cadena de texto, también puede ser *[cadena de texto], que significa lo mismo pero en vez de "empiecen", es terminen  
Busca todos los archivos que sean descendientes (no necesariamente directos) del directorio actual  
Al final imprime todas las ubicaciones de los archivos que encontró  
Hay más opciones que puedes buscar con el [comando help](#comando-help)
#### **comando grep**
grep (global regular expression print)
grep [parámetro 1] -e "[parámetro 2]", el parámetro 1 es la ubicación del archivo donde se quiere buscar (funciona de la misma manera que en el [comando touch](#comando-touch)), el parámetro 2 es la expresión que se quiere buscar  
Imprime todas las líneas de texto donde se encontró la expresión
Las banderas se ponen antes del parámetro 1  
Algunas banderas:
* i  
Encuentra la expresión sin importarle si las letras son mayúsculas o minúsculas
* n  
Enumera las líneas que encuentra que tengan esa expresión regular
* r
Permite recorrer recursivamente todos los archivos de un directorio

#### **comando ps**
Lista procesos que se estén ejecutando
#### **comando kill**
Recibe como parámetro la id de un proceso, lo que hace es matar dicho proceso
#### **abrir editores de código**
* nano  
Abre nano
* vim  
Abre vim
* atom  
Abre atom
* code  
Abre Visual Studio Code

Para abrir una carpeta o archivo, introduce como parámetro el directorio o la ubicación del archivo (funciona de la misma manera que en el [comando touch](#comando-touch))  
Directorios o archivos con espacios en blanco deben nombrarse entre comillas
#### **ejecutar varios comandos en una línea**
Sepáralos con ;
#### **comando date**
Imprime la fecha y hora
#### **comando curl**
No tengo idea xd :tf:

[Regresar al índice](#índice)
#### **comando zip**
Comprime archivos, puede tener varios parámetros, el primer parámetro es la ubicación del archivo .zip a donde se van a comprimir los archivos, los siguientes parámetros son las ubicaciones de los archivos que vamos a comprimir (las ubicaciones funcionan de la misma manera que en el [comando touch](#comando-touch)), pueden ser *[cadena de texto], que representa el conjunto de todos los archivos que terminan con esa cadena de texto  
Basicamente es como "enviar archivos a carpeta comprimida en zip"  
Esto de poner varios archivos y poner * que representa a todos los archivos, se puede hacer también con el [comando ls](#comando-ls) y el [comando rm](#comando-rm)
#### **comando unzip**
Recibe como parámetro la ubicación de un archivo .zip que tenga archivos comprimidos dentro, y descomprime esos archivos (Si ya existen, los sobreescribe)
Algunas banderas: 
* vl  
Imprime una lista de todos los archivos comprimidos en el archivo zip
#### **Permisos**
los permisos se dividen en 3 partes, permisos para el owner (dueño), permisos para group y permisos para anyone (quien sea), cada parte del permiso tiene 3 subpartes o tipos de permiso, los cuales son r (reading/lectura), w (writing/escritura) y x (execute/ejecución), cada uno de estos tipos tiene un valor booleano, true/verdadero (representado por 1) y false/falso (representado por 0). 

Existen 2 formatos para representar permisos, el "explícito" y el de números.

El explícito tiene 9 caracteres, que se dividen en las 3 partes de 3 caracteres, de manera respectiva siendo owner, group y anyone, dentro de las partes los 3 digitos representan r, w y x respectivamente, si su valor es false se representa con un -, si su valor es true se representa con la letra que le corresponde (r, w o x).

El de números simplemente convierte cada parte a número decimal (teniendo en cuenta que true=1 y false=0), como en 3 cifras el máximo número en binario es 7 (que es una cifra en decimal), las 3 partes se compactan a 1 cifra y así obtenemos un formato de únicamente 3 cifras (los correspondientes a owner, group y anyone).

#### **comando chmod**
Recibe dos parámetros, el primero es una cadena de texto que representa la información de los permisos que se le van a imponer al segundo parámetro (el archivo, con todo lo del [comando touch](#comando-touch)), en el formato de número (el de 3 cifras)  
chmod +x agrega permisos de ejecución  
Y así con los demás
#### **comando sudo**
Te permite ejecutar un comando como super usuario, recibe como argumento el comando

[Volver al índice](#índice "índice")

---

### Bash-Shell




