/**
 * @name description.js
 * @author The World Wolf 95
 * @description
 *      This file contains the description of project. This description will be displayed in API Doc
 */
module.exports = {
    swagger: "<h2>Useful links</h2>\
            <ul><li><b>Backend :</b> <a href='https://web.schoolv1.edigrp.com' target='_blank'>https://web.schoolv1.edigrp.com</a></li><br>\
            <li><b>API Doc (avec environnement de test) :</b> <a href='https://web.schoolv1.edigrp.com/apidoc' target='_blank'>https://web.schoolv1.edigrp.com/apidoc</a></li><br>\
            <li><b>Frontend :</b> <a href='https://schoolv1.edigrp.com' target='_blank'>https://schoolv1.edigrp.com</a></li><br>\
            <li><b>Repository :</b> <a href='https://github.com/nobodyiam95/Project_Javascript_Express_School_Management_V1' target='_blank'>https://github.com/nobodyiam95/Project_Javascript_Express_School_Management_V1</a></li><br></ul>\
            <h2>Project Description</h2>\
            The goal of this application is to create an application which uses the languages HTML, CSS and Javascript. <br>\
            This application must communicate with a server created with Express.js. <br><br>\
            This project is a educational project with goals are:\
            <ul><li>Training on the creation of HTML page</li>\
            <li>Training on the creation of style with bootstrap and css</li>\
            <li>Training on the creation of dynamic web page with JavaScript and jQuery</li>\
            <li>Training on the communication with web server in JavaScript</li>\
            <li>Training on the installation of packages with Node.js</li>\
            <li>Training on the creation of backend server with Express</li></ul>\
            This application consistes to response at the needs following :<br>\
            A school of name **My School** is contacting you as a developer and demandes you to create a web application.<br>\
            This application must permit to manage the profiles following : **the students**, **the teachers**, **the classrooms**, **the classes**.<br><br>\
            They give the informations following:\
            <ul><li>A **Student** is characterized by : a first name, a last name, a birthday and a level of education (Primary, College, High school, University)</li>\
            <li>A **Teacher** is characterized by : a first name, a last name, a birthday and a grade (Primary Teacher, College Teacher, High school Teacher, University Teacher)</li>\
            <li>A **Classroom** is characterized by : a name, a maximum number of students and the level which must be used it (Primary, College, High school, University)</li>\
            <li>A **Subject** is characterized by : a name and a teaching level (Primary, College, High school, University)</li></ul>\
            A person using this application can realize this actions below :\
            <ol><li>Add a student, a teacher, a classroom or a class</ul>\
            <li>Modify a student, a teacher, a classroom or a class</ul>\
            <li>Delete a student, a teacher, a classroom or a class</ul>\
            <li>Display the list of students, teachers, classrooms or classes</ul>\
            <li>Research the students, the teachers or the classes</ol>\
            <strong>This documentation presents the APIs of School Management Training Project.</strong><br><br>It explains how : \
            <ul><li>add/update/get/delete Student</li>\
            <li>add/update/get/delete Subject</li>\
            <li>add/update/get/delete Classroom</li>\
            <li>add/update/get/delete Teacher</li>\
            <li>get Level</li>\
            <li>get Object count</li></ul><br>\
            <strong>It is a training project not in production, you must use it only for training.</strong>",

    redoc: "<h2>Liens utiles</h2>\
            <ul><li><b>Backend :</b> <a href='https://web.schoolv1.edigrp.com' target='_blank'>https://web.schoolv1.edigrp.com</a></li><br>\
            <li><b>API Doc (avec environnement de test) :</b> <a href='https://web.schoolv1.edigrp.com/apidoc' target='_blank'>https://web.schoolv1.edigrp.com/apidoc</a></li><br>\
            <li><b>Frontend :</b> <a href='https://schoolv1.edigrp.com' target='_blank'>https://schoolv1.edigrp.com</a></li><br>\
            <li><b>Repository :</b> <a href='https://github.com/nobodyiam95/Project_Javascript_Express_School_Management_V1' target='_blank'>https://github.com/nobodyiam95/Project_Javascript_Express_School_Management_V1</a></li><br></ul>\
            <h2>Description du projet</h2>\
            Il s'agit de cr??er une application utilisant les langages de base du web ?? savoir le HTML, CSS et Javascript. <br>\
            Cette application devra communiquer avec un serveur web cr???? avec Express.js. <br><br>\
            Ce projet est ?? but ??ducatif avec pour objectifs :\
            <ul><li>Apprendre ?? cr??er une page HTML</li>\
            <li>Apprendre ?? cr??er du style avec bootstrap et css</li>\
            <li>Apprendre ?? rendre une page web dynamique avec Javascript et jQuery</li>\
            <li>Apprendre ?? communiquer avec un serveur web en Javascript</li>\
            <li>Apprendre ?? installer des packages avec Node.js</li>\
            <li>Apprendre ?? monter un serveur web avec le framework Express</li></ul>\
            Cette application a pour but de r??pondre aux besoins suivant :<br>\
            Une ??cole du nom de <b>My School</b>, vous contacte en tant que d??veloppeur et vous demande de leur fournir une application web.<br>\
            Cette application permettra de g??rer leur ??tablissement par la gestion des profils suivants : <b>les ??l??ves</b>, <b>les enseignants</b>, <b>les salles de classe</b> et <b>les mati??res</b>.<br><br>\
            Ils donnent comme informations:\
            <ul><li>Un <b>El??ve</b> est caract??ris?? par : un nom, un ou des pr??nom(s), une date de naissance et un niveau d'??tude (Primaire-Coll??ge-Lyc??e-Sup??rieur)</li>\
            <li>Un <b>Enseignant</b> est caract??ris?? par : un nom, un ou des pr??nom(s), une date de naissance et un niveau d'enseignement (Primaire-Coll??ge-Lyc??e-Sup??rieur)</li>\
            <li>Une <b>Salle de classe</b> est caract??ris??e par : un nom, un nombre max d'??l??ves qu'elle peut contenir et le niveau qui peut l'occuper (Primaire-Coll??ge-Lyc??e-Sup??rieur)</li>\
            <li>Une <b>Mati??re</b> est caract??ris??e par un nom et un niveau d'enseignement (Primaire-Coll??ge-Lyc??e-Sup??rieur)</li></ul>\
            Une personne utilisant l'application doit pouvoir r??aliser les actions suivantes :\
            <ol><li>Ajouter un ??l??ve, un enseignant, une salle de classe ou une mati??re</ul>\
            <li>Modifier un ??l??ve, un enseignant, une salle de classe ou une mati??re d??j?? enregistr??e</ul>\
            <li>Supprimer un ??l??ve, un enseignant, une salle de classe ou une mati??re</ul>\
            <li>Afficher la liste des ??l??ves, des enseignants, des salles de classe ou des mati??res</ul>\
            <li>Rechercher des ??l??ves, des enseignants, des salles de classe ou des mati??res </ol>\
            <strong>Cette documentation presente l'ensemble des APIs qui ont ??t?? d??velopp??es.</strong><br><br>Gr??ce ?? la documentation vous saurez comment : \
            <ul><li>ajouter/mettre ?? jour/obtenir/supprimer un ??l??ve</li>\
            <li>ajouter/mettre ?? jour/obtenir/supprimer une mati??re</li>\
            <li>ajouter/mettre ?? jour/obtenir/supprimer une salle de classe</li>\
            <li>ajouter/mettre ?? jour/obtenir/supprimer un enseignant</li>\
            <li>obtenir les niveaux d'??tude</li>\
            <li>obtenir le nombre d'??l??ves, enseignants, mati??res et salles de classe d??j?? cr????</li></ul><br>\
            <strong>Ce projet est juste un projet d'entrainement, ce n'est pas une application utilis??e dans un environnement r??el.</strong>",
}