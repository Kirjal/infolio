<template>
    <header>
        <h1>{{this.title}}</h1>
        <h2>{{this.name}}</h2>
        <p>{{this.catchphrase}}</p>
        <ul class="contact">
            <li><a :href="this.linkedin">LinkedIn</a></li>
            <li>{{this.tel}}</li>
            <li><a :href="`mailto:${this.mail}`">{{this.mail}}</a></li>
        </ul>
    </header>
    <main>
        <section class="goche">
            <h3>Compétences</h3>
            <ul>
                <li v-for="s in this.skills" :key="s.id"><p><b>{{s}}</b></p></li>
            </ul>
            <h3>Expériences</h3>
            <ul>
                <li v-for="e in this.experiences" :key="e.id">
                    <p><b>{{e.title}}</b></p>
                    <p>{{e.description}}</p>
                    <p>{{e.date}}</p>
                </li>
            </ul>
            <h3>Formations</h3>
            <ul>
                <li v-for="t in this.training" :key="t.id">
                    <p><b>{{t.title}}</b></p>
                    <p>{{t.description}}</p>
                    <p>{{t.date}}</p>
                </li>
            </ul>
        </section>
        
        <section class="droate">
            <h4>Atouts</h4>
            <ul>
                <li v-for="s in this.soft_skills" :key="s.id">
                    <p><b>{{s.title}}</b></p>
                    <p>{{s.description}}</p>
                </li>
            </ul>
            <h4>Langues</h4>
            <ul>
                <li v-for="l in this.languages" :key="l.id">
                    <p><b>{{l.title}}</b> - {{l.level}}</p>
                </li>
            </ul>
            <h4>Loisirs</h4>
            <ul>
                <li v-for="h in this.hobbies" :key="h.id">
                    <p><b>{{h.title}}</b></p>
                    <p>{{h.description}}</p>
                </li>
            </ul>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'CvComponent',
        data:()=>({
            title: "Développeur front-end",
            name: "Alexandre Demontier : CV",
            catchphrase: "À la recherche de défis, je souhaite mettre mes compétences à l'épreuve",
            tel: "06 03 59 93 46",
            mail: "Alexandre_Demontier@hotmail.fr",
            linkedin: "https://www.linkedin.com/in/alexandre-demontier-778468167/",
            skills: [
                "Code front-end en HTML, CSS, JS, et via Angular, VueJS, ReactJS",
                "Design, intégration responsive et accessible",
                "Maquettage, mise en page, dessin avec la suite Adobe : InDesign, Photoshop, Illustrator, XD, After Effects, Animate"
            ],
            experiences: [
                {
                    title: "Conception d'un site pour un job dating",
                    description: "C'est le site sur lequel vous naviguez actuellement",
                    date: "2022, 2 semaines"
                },
                {
                    title: "Organisation d'un job-dating - Clockwork Lille",
                    description: "Conception de logo, design graphique dans le cadre de Ré-actifs",
                    date: "2022, 2 mois"
                },
                {
                    title: "Stage en Webdesign - Association Building Seniors",
                    description: "Refonte visuelle d'un site internet avec Symfony et Bootstrap : charte graphique, maquettage, corrections de bugs, travail du responsive, intégration des maquettes",
                    date: "2021, 2 mois"
                }
            ],
            training: [
                {
                    title: "POEC Développement front-end - Dawan Lille",
                    description: "Travail intensif des technologies du web front, projet de groupe",
                    date: "2022"
                },
                {
                    title: "Programme Ré-actifs - Clockwork Lille",
                    description: "Développement du réseau professionnel, organisation de job-dating",
                    date: "2022"
                },
                {
                    title: "Titre professionnel niveau Bac+2 en Webdesign - AFPA Roubaix",
                    description: "Formation intensive à l'intégration web, design web, et graphisme",
                    date: "2021"
                },
                {
                    title: "Arts et Design - ESAD Valenciennes",
                    description: "Créativité, méthodes de création et de design",
                    date: "2016 - 2017"
                },
                {
                    title: "Mise à Niveau en Arts Appliqués - ESAAT Roubaix",
                    description: "Méthodes de création et de design, organisation d'un défilé de mode, voyage en Angleterre en famille d'accueil",
                    date: "2015 - 2016"
                },
                {
                    title: "Cours d'arts plastiques & BD - CAPV Lille",
                    description: "Multiples projets d'art, participation à un fanzine, travail de la créativité",
                    date: "2011 - 2015"
                },
                {
                    title: "Bac S section euro - Lycée international Montebello Lille",
                    description: "",
                    date: "2015"
                }
            ],
            soft_skills: [
                {
                    title: "Créativité",
                    description: "Idées originales et goût esthétique travaillé"
                },
                {
                    title: "Sens du contact",
                    description: "Bonne humeur et bonne entente, empathie"
                },
                {
                    title: "Curiosité",
                    description: "Recherche de méthodes et idées, veille métier"
                },
                {
                    title: "Travail d'équipe",
                    description: "Communication, répartition des tâches, prise de recul"
                },
                {
                    title: "Adaptabilité",
                    description: "Dépasser les contraintes pour trouver des solutions"
                }
            ],
            languages: [
                {
                    title: "Anglais",
                    level: "confirmé"
                },
                {
                    title: "Allemand",
                    level: "intermédiaire"
                }
            ],
            hobbies: [
                {
                    title: "Jeux vidéo",
                    description: "Épreuvres en groupe de 12, analyse de données"
                },
                {
                    title: "Dessin, peinture",
                    description: "Dessin de personnages ou environnements imaginaires, modèle vivant"
                },
                {
                    title: "Roller",
                    description: "Sorties avec des amis, ou déplacement au travail"
                }
            ]
        })
    }
</script>

<style scoped>

    header{
        display: flex;
        gap: 10px;
        flex-flow: column wrap;
        box-shadow: 0 15px 10px -10px #0008;
        margin-bottom: 10px;
        padding-bottom: 20px;
    }

    section{
        display: flex;
        gap: 5px;
        flex-flow: column wrap;
    }

    main{
        display: flex;
        flex-flow: column wrap;
        padding-bottom: 100px;
    }

    h1{
        text-align: center;
        margin: auto;
        order: 2;
        font-size: 2.5rem;
    }

    h2{
        order: 1;
        font-weight: normal;
        color: var(--title-color);
        background-color: var(--title-bg);
        margin-bottom: 10px;
        padding: 3px 0 5px 7px;
    }

    h3{
        font-size: 1.8rem;
        width: 250px;
        margin: 15px auto 0 0;
        padding: 3px 20px 5px;
        border-radius: 0 50px 50px 0;
        color: var(--title-color);
        background-color: var(--title-bg);
    }

    .goche ul b{
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 5px 30px;
        display: inline-block;
        box-shadow: 0 15px 10px -10px #0008;
    }

    h4{
        font-size: 1.6rem;
        width: 250px;
        margin: 15px 0 0 auto;
        padding: 3px 20px 5px;
        border-radius: 50px 0 0 50px;
        text-align: right;
        color: var(--title-color);
        background-color: var(--title-bg);
    }

    .droate ul{
        margin-right: 20px;
    }

    b{
        font-size: 1.1rem;
    }

    header p{
        order: 3;
        text-align: left;
        font-style: italic;
        padding: 20px 10px 0 10px;
        width: 300px;
    }

    .contact{
        order: 4;
        text-align: right;
        font-size: 0.95rem;
        padding: 0 10px 10px 0;
    }

    .contact a{
        color: var(--main-text-color);
        background-color: transparent;
        font-weight: normal;
        padding:0;
        text-decoration: underline;
    }

    main li{
        display: flex;
        flex-flow: column wrap;
        gap: 5px;
    }

    .goche li p:not(:first-child){
        margin-left: 20px;
    }
    
    main ul{
        display: flex;
        flex-flow: column;
        gap: 10px;
        padding: 10px 0
    }

    .droate ul{
        text-align: right;
    }

    @media (max-width: 450px){
        h1{
            width: 280px;
        }
    }

    @media (min-width: 600px){
        header{
            flex-flow: row wrap;
            gap: 0;
            justify-content: space-between;
        }
        header p{
            padding: 0 0 0 20px;
            align-self: center;
            max-width: 50%;
            width: auto;
        }
        .contact{
            padding: 0 20px 0 0;
            align-self: center;
        }
        h1{
            width: 100%;
            margin: 10px auto 20px;
        }
        h2{
            width: 100%;
        }
    }

    @media (min-width: 830px){
        h1{
            margin: 10px auto 20px 30px;
            text-align: left;
        }
    }

    @media (min-width: 1024px){
        main{
            flex-flow: row;
            justify-content: space-between;
        }
        .goche h3, .goche ul{
            max-width: 55vw;
        }
        .droate h4, .droate ul{
            max-width: 40vw;
        }
    }
</style>