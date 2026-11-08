const colorCache = {};

const playlist = [
    {
    title: "Que Mi Fe No Falle", //0
    artist: "Evan Craft",
    src: "songs/SpotiDownloader.com - Que Mi Fe No Falle - Evan Craft.mp3",
    cover: "images/Más_Rico_Del_Mundo.png",
    video: "videos/EvanCraft2.mp4",
  },
    {
    title: "Si Mi Pueblo Se Humillare", //1
    artist: "Los Hermanos Reyes",
    src: "songs/pueblo.mp3",
    cover: "images/Hay un Dios.png",
    hex: "#0b2f43ff",
    barColor: "#025c8cff"
  },
    {
    title: "Increíble", //2
    artist: "Miel San Marcos, Evan Craft",
    src: "songs/SpotiDownloader.com - Increíble (feat. Evan Craft) - Miel San Marcos.mp3",
    cover: "images/Cover of No Hay Lugar Mas Alto (feat. Christine D Clario) by Miel San Marcos, Christine D'Clario.jpg",
  },
    {
    title: "El Amor Que Me Das", //3
    artist: "Anita Morán",
    src: "songs/El Amor Que Me Das - Anita Moran.mp3",
    cover: "images/Screenshot 2026-10-24 232609.png",
  },
    {
    title: "Te quiero Papá", //4
    artist: "Anita Morán",
    src: "songs/Te quiero Papa.mp3",
    cover: "images/Eres Libre Album.jpg",
  },
    {
    title: "DICHOSO EL HOMBRE QUE CONFÍA EN JEHOVÁ", //5
    artist: "Anita Morán",
    src: "songs/DICHOSO EL HOMBRE QUE CONFÍA EN JEHOVÁ - Video Oficial  Anita Morán - Anita Morán.mp3",
    cover: "images/Cover of Soy Peregrino by Anita Morán.jpg",
  },
    {
    title: "Ama a tu Hermano", //6
    artist: "Anita Morán",
    src: "songs/Anita Morán - Ama a tu Hermano (Video Oficial) - Anita Morán.mp3",
    cover: "images/Cover of Soy Peregrino by Anita Morán.jpg",
  },
    {
    title: "SIMPLICIDAD", //7
    artist: "Funky/Vaes",
    src: "songs/SpotiDownloader.com - SIMPLICIDAD - Funky.mp3",
    cover: "images/Cover of SIMPLICIDAD by Funky, Vaes.jpg",
    hex: "#7D9E9E",
    barColor: "#c7fcfc",
    video: "videos/Funky1.mp4"
  },
    {
    title: "Gracias Te Doy", //8
    artist: "Anita Morán",
    src: "songs/Gracias te doy.mp3",
    cover: "images/Tanto Amor Album.jpg",
  },
    {
    title: "Sol en día nublado", //9
    artist: "Majo y Dan, Vaes",
    src: "songs/SpotiDownloader.com - Sol en día nublado - Majo y Dan.mp3",
    cover: "images/Cover of Sol en día nublado by Majo y Dan, Vaes.jpg",
    video: "videos/majoYDan4.mp4",
    lrc: "LRC files/Sol en día nublado - Majo y Dan, Vaes.lrc",
  },
    {
    title: "Espiritu Santo", //10
    artist: "Zulmy Mejia",
    src: "songs/SpotiDownloader.com - Espiritu Santo - Zulmy Mejia.mp3",
    cover: "images/zulmy.jpg",
  },
    {
    title: "Alaba", //11
    artist: "Evan Craft, Intimidad Worship",
    src: "songs/Alaba_spotdown.mp3",
    cover: "images/Cover of La Bondad De Dios by Evan Craft, Elena Witt-Guerra.jpg",
  },
    {
    title: "Correré a Ti", //12
    artist: "Funky/Marcela Gandara",
    src: "songs/SpotiDownloader.com - Correré a Ti - Funky.mp3",
    cover: "images/Cover of Correré a Ti by Funky, Marcela Gandara.jpg",
    hex: "#9D0716",
    barColor: "#ff4a09",
  },
    {
    title: "Gracias/Tu Fidelidad", //13
    artist: "Marcos Witt, Un Corazón",
    src: "songs/SpotiDownloader.com - Gracias - Marcos Witt, Un Corazon.mp3",
    cover: "images/Cover of Gracias _ Tu Fidelidad by Marcos Witt, Un Corazón.jpg",
    video: "videos/MarcosWitt1.mp4",
  },
    {
    title: "Hay una Ciudad", //14
    artist: "Los Hermanos Reyes",
    src: "songs/Hay una ciudad.mp3",
    cover: "images/Hay una ciudad.png",
    hex: "#b09539ff",
    barColor: "#e0ac02ff"
  },
    {
    title: "Amado Mío", //15
    artist: "Anita Morán",
    src: "songs/Amado mio.mp3",
    cover: "images/Tanto Amor Album.jpg",
  },
    {
    title: "La Perdida Oveja", //16
    artist: "Los Voceros de Cristo/Leonel Tuchez",
    src: "songs/La perdida oveja.mp3",
    cover: "images/a5.png",
    hex: "#3A3436",
    barColor: "#726065ff"
  },
    {
    title: "Si el Mundo en Vez de Rosas", //17
    artist: "Los Voceros de Cristo",
    src: "songs/Si el Mundo en Vez de Rosas_spotdown.org.mp3",
    cover: "images/Cover of Si el Mundo en Vez de Rosas by Los Voceros de Cristo.jpg",
  },
    {
    title: "Todo el Mundo Busca", //18
    artist: "Wilson Camey",
    src: "songs/Todo el Mundo Busca - Wilson Camey.mp3",
    cover: "images/wc.png",
  },
    {
    title: "Jesús Mi Fiel Amigo (En Vivo)", //19
    artist: "Abel Zavala",
    src: "songs/SpotiDownloader.com - Jesús Mi Fiel Amigo (En Vivo) - Abel Zavala.mp3",
    cover: "images/Cover of Jesús Mi Fiel Amigo (En Vivo) by Abel Zavala.jpg",
  },
    {
    title: "Esto Es Confiar", //20
    artist: "Anita Morán",
    src: "songs/Esto Es Confiar - Anita Morán.mp3",
    cover: "images/Screenshot 2026-05-16 12.04.27 PM.png",
  },
    {
    title: "Precioso Regalo ft Voceros", //21
    artist: "Zulmy Mejia, Los Voceros de Cristo",
    src: "songs/Precioso Regalo_spotdown.org.mp3",
    cover: "images/Cover of Precioso Regalo by Zulmy Mejia, Los Voceros de Cristo.jpg",
  },
    {
    title: "La Biblia", //22
    artist: "Agustin Amador",
    src: "songs/La Biblia.mp3",
    cover: "images/Cover of Incontable Maravilla by Agustin Amador.jpg",
  },
    {
    title: "Madre Solo Una", //23
    artist: "Agustin Amador",
    src: "songs/SpotiDownloader.com - Madre Solo Una - Agustin Amador.mp3",
    cover: "images/Cover of Con Cristo Me Basta by Agustin Amador.jpg",
  },
    {
    title: "Lámpara Es, La Biblia", //24
    artist: "Manuel Bonilla",
    src: "songs/Manuel Bonilla - Lámpara Es, La Biblia (Álbum Un Cántico Nuevo).mp3",
    cover: "images/Cover of Lámpara Es _ La Biblia by Manuel Bonilla.jpg",
  },
    {
    title: "Escogido Fui de Dios (2024)", //25
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Escogido Fui de Dios - En Vivo Desde El Salvador - Los Voceros de Cristo.mp3",
    cover: "images/Cover of Loor A Ti Mi Dios - En Vivo Desde El Salvador by Los Voceros de Cristo.jpg",
    hex: "#609FB6",
    barColor: "#25b4e8ff"
  },
    {
    title: "Asi Es Tu Amor", //26
    artist: "Vaes",
    src: "songs/SpotiDownloader.com - Asi Es Tu Amor - Vaes.mp3",
    cover: "images/Cover of Asi Es Tu Amor by Vaes.jpg",
    hex: "#B05010",
    barColor: "#d18552",
    video: "videos/Vaes4.mp4",
  },
    {
    title: "Tren de la Vida", //27
    artist: "Katty Mazariegos",
    src: "songs/SpotiDownloader.com - Tren de la Vida - Katty Mazariegos.mp3",
    cover: "images/Cover of Tren de la Vida by Katty Mazariegos.jpg",
  },
    {
    title: "Los Frutos del Espíritu", //28
    artist: "Marilú Orantes",
    src: "songs/💖Los Frutos del Espíritu 🕊️ Música Cristiana Para Niños 🪴 Marilú Y Los Niños_320p.mp3",
    cover: "images/Cover of Los Frutos del Espíritu by Marilú Orantes.jpg",
    hex: "#1EA4C4",
    barColor: "#42ff61",
  },
    {
    title: "En Paz", //29
    artist: "Daniel Calveti",
    src: "songs/a1.mp3",
    cover: "images/a1.png",
    hex: "#616060ff",
    barColor: "#a3a3a3"
  },
    {
    title: "Debo Correr", //30
    artist: "Óscar Medina",
    src: "songs/Debo Correr.mp3",
    cover: "images/Cover of Debo Correr by Óscar Medina.jpg",
  },
    {
    title: "Nos Veremos en la Gloria", //31
    artist: "Anita Morán",
    src: "songs/NOS VEREMOS EN LA GLORIA - Anita Morán (VIDEO OFICIAL) - Anita Morán.mp3",
    cover: "images/Screenshot 2026-05-16 12.04.27 PM.png",
  },
    {
    title: "El Señor Es Mi Rey (feat. Tony Perez)", //32
    artist: "Miel San Marcos, Tony Pérez",
    src: "songs/El Señor Es Mi Rey (feat. Tony Perez)_spotdown.org.mp3",
    cover: "images/Cover of El Señor Es Mi Rey (feat. Tony Perez) by Miel San Marcos, Tony Pérez.jpg",
  },
    {
    title: "Dame Dame Dame", //33
    artist: "Marilú Orantes",
    src: "songs/Dame Dame Dame_320p.mp3",
    cover: "images/Screenshot 2026-03-18 2.22.39 PM.png",
    hex: "#D01038",
    barColor: "#ff89eb",
  },
    {
    title: "Apocalipsis 15:3", //34
    artist: "Los Voceros de Cristo/Armando Trujillo",
    src : "songs/SpotiDownloader.com - Apocalipsis 15_3 - Los Voceros de Cristo.mp3",
    cover: "images/su amor.jpg",
  },
    {
    title: "Hoy Soy Feliz", //35
    artist: "Francisco Orantes, Veronica Leal",
    src: "songs/Hoy Soy Feliz  Francisco Orantes.mp3",
    cover: "images/Screenshot 2026-08-28 11.39.46 PM.png",
  },
    {
    title: "Día Alegre", //36
    artist: "Anita Morán",
    src: "songs/Dia alegre.mp3",
    cover: "images/Tanto Amor Album.jpg",
  },
    {
    title: "Como Una Flor - (EN VIVO)", //37
    artist: "Wilson Camey/Los Hermanos Reyes",
    src: "songs/Como Una Flor - En vivo - Wilson Camey.mp3",
    cover: "images/wilson.png",
    hex: "#2F5F87",
    barColor: "#0057c0ff"
  },
    {
    title: "Soy Peregrino", //38
    artist: "Anita Morán",
    src: "songs/Soy Peregrino - Anita Morán (Video Oficial) - Anita Morán.mp3",
    cover: "images/Cover of Soy Peregrino by Anita Morán.jpg",
  },
    {
    title: "Que Sucederá", //39
    artist: "Anita Morán",
    src: "songs/06 Track 6.mp3",
    cover: "images/Screenshot 2026-10-24 232609.png",
  },
    {
    title: "La Bondad De Dios", //40
    artist: "Evan Craft, Elena Witt-Guerra",
    src: "songs/SpotiDownloader.com - La Bondad De Dios - Evan Craft.mp3",
    cover: "images/Cover of La Bondad De Dios by Evan Craft, Elena Witt-Guerra.jpg",
  },
    {
    title: "Ahora Soy Feliz", //41
    artist: "Los Hermanos Reyes",
    src: "songs/song1.mp3",
    cover: "images/song1.jpg",
  },
    {
    title: "Reborn", //42
    artist: "Evan Craft, Redimi2",
    src: "songs/SpotiDownloader.com - Reborn - Evan Craft.mp3",
    cover: "images/evan.png",
    lrc: "LRC files/Reborn - Evan Craft, Redimi2.lrc",
  },
    {
    title: "Jesús Mi Fiel Amigo - Sesión Orgánica", //43
    artist: "Abel Zavala",
    src: "songs/Jesús Mi Fiel Amigo - Sesión Orgánica_spotdown.org.mp3",
    cover: "images/Cover of Jesús Mi Fiel Amigo - Sesión Orgánica by Abel Zavala.jpg",
  },
    {
    title: "El Alfarero", //44
    artist: "Anita Morán",
    src: "songs/Anita Morán - El Alfarero (SPOTISAVER).mp3",
    cover: "images/Screenshot 2026-05-16 12.04.27 PM.png",
  },
    {
    title: "Edifiquemos", //45
    artist: "Zulmy Mejia",
    src: "songs/SpotiDownloader.com - Edifiquemos - Zulmy Mejia.mp3",
    cover: "images/zulmy.jpg",
  },
    {
    title: "Ven, Te Necesito", //46
    artist: "Lilly Goodman, Jesús Adrián Romero",
    src: "songs/Ven, Te Necesito_spotdown.org.mp3",
    cover: "images/Screenshot 2026-07-18 2.32.22 PM.png",
    video: "videos/Romero1.mp4"
  },
    {
    title: "Tu Palabra", //47
    artist: "Marcela Gandara",
    src: "songs/SpotiDownloader.com - Tu Palabra - Marcela Gandara.mp3",
    cover: "images/song7.png",
  },
    {
    title: "mi DIOS", //48
    artist: "Madiel Lara",
    src: "songs/SpotiDownloader.com - mi DIOS - Madiel Lara.mp3",
    cover: "images/Cover of mi DIOS by Madiel Lara.jpg",
    lrc: "LRC files/mi DIOS - Madiel Lara.lrc",
  },
    {
    title: "Herencia en el Cielo", //49
    artist: "Agustin Amador",
    src: "songs/SpotiDownloader.com - Herencia en el Cielo - Agustin Amador.mp3",
    cover: "images/Cover of Herencia en el Cielo by Agustin Amador.jpg",
    hex: "#3087D0",
    barColor: "#6ab7f7",
  },
    {
    title: "Nicodemo", //50
    artist: "Leonel Tuchez",
    src: "songs/Nicodemo.mp3",
    cover: "images/Esperando.jpg",
    hex: "#854b6fff",
    barColor: "#be408eff"
  },
    {
    title: "Cuando Se Pase Lista", //51
    artist: "Anita Morán",
    src: "songs/Cuando se pase lista.mp3",
    cover: "images/Tanto Amor Album.jpg",
  },
    {
    title: "Hay un Dios", //52
    artist: "Los Hermanos Reyes",
    src: "songs/Hay un Dios.mp3",
    cover: "images/Hay un Dios.png",
    hex: "#0b2f43ff",
    barColor: "#005f92ff"
  },
    {
    title: "Ama al Señor", //53
    artist: "Anita Morán",
    src: "songs/Ama al Senor.mp3",
    cover: "images/Tanto Amor Album.jpg",
  },
    {
    title: "Mi triunfo con Jesús", //54
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Mi triunfo con Jesús - Los Voceros de Cristo.mp3",
    cover: "images/a5.png",
    hex: "#3A3436",
    barColor: "#726065ff"
  },
    {
    title: "Venciendo con Jesús", //55
    artist: "Anita Morán",
    src: "songs/Venciendo con Jesus.mp3",
    cover: "images/Eres Libre Album.jpg",
  },
    {
    title: "Loor A Ti Mi Dios (2024)", //56
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Loor A Ti Mi Dios - En Vivo Desde El Salvador - Los Voceros de Cristo.mp3",
    cover: "images/Cover of Loor A Ti Mi Dios - En Vivo Desde El Salvador by Los Voceros de Cristo.jpg",
    hex: "#609FB6",
    barColor: "#31b6e7ff"
  },
    {
    title: "He peleado la batalla", //57
    artist: "Los Hermanos Reyes",
    src: "songs/He peleado la batalla.mp3",
    cover: "images/He peleado la batalla.png",
    hex: "#787053ff",
    barColor: "#967f2cff"
  },
    {
    title: "No Temeré", //58
    artist: "Anita Morán",
    src: "songs/Anita Morán - No Temeré (SPOTISAVER).mp3",
    cover: "images/Screenshot 2026-05-16 12.04.27 PM.png",
  },
    {
    title: "Recuerdo del Calvario", //59
    artist: "Anita Morán",
    src: "songs/Anita Morán - Recuerdo del Calvario (Video Letra) - Anita Morán.mp3",
    cover: "images/Cover of Soy Peregrino by Anita Morán.jpg",
  },
    {
    title: "Mi cántaro vacío", //60
    artist: "Los Voceros de Cristo",
    src: "songs/cántaro.mp3",
    cover: "images/a5.png",
    hex: "#3A3436",
    barColor: "#726065ff"
  },
    {
    title: "Ahora Cristiano Soy", //61
    artist: "Ezequiel Williams",
    src: "songs/SpotiDownloader.com - Ahora Cristiano Soy - Ezequiel Williams.mp3",
    cover: "images/Cover of Hoy Te Pido Señor by Ezequiel Williams.jpg",
  },
    {
    title: "A Tu Lado en el Cielo", //62
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - A Tu Lado en el Cielo - Los Voceros de Cristo.mp3",
    cover: "images/Alvaro.jpg",
    video: "videos/Voceros1.mp4"
  },
    {
    title: "Incontable Maravilla", //63
    artist: "Agustin Amador",
    src: "songs/SpotiDownloader.com - Incontable Maravilla - Agustin Amador.mp3",
    cover: "images/Cover of Incontable Maravilla by Agustin Amador.jpg",
    hex: "#1F678F",
    barColor: "#69b9e4",
  },
    {
    title: "Matrimonio Feliz", //64
    artist: "Anita Morán",
    src: "songs/Matrimonio Feliz - Anita Moran - PLAYLIST CRISTIANA.mp3",
    cover: "images/Cover of Soy Peregrino by Anita Morán.jpg",
  },
    {
    title: "La Biblia dice que el hombre", //65
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - La Biblia dice que el hombre - Los Voceros de Cristo.mp3",
    cover: "images/Cover of La Biblia dice que el hombre by Los Voceros de Cristo.jpg",
    hex: "#9D8627",
    barColor: "#c39c00ff"
  },
    {
    title: "Cuando Muera Yo Ft. Los Hermanos Reyes", //66
    artist: "Los Voceros de Cristo, Los Hermanos Reyes",
    src: "songs/Cuando Muera Yo.mp3",
    cover: "images/Cuando Muera Yo.png",
    video: "videos/Voceros2.mp4",
  },
    {
    title: "Tu Promesa", //67
    artist: "Anita Morán",
    src: "songs/Anita Morán - Tu Promesa (SPOTISAVER).mp3",
    cover: "images/Screenshot 2026-05-16 12.04.27 PM.png",
  },
    {
    title: "Yo Tengo Fe", //68
    artist: "Zulmy Mejia",
    src: "songs/SpotiDownloader.com - Yo Tengo Fe - Zulmy Mejia.mp3",
    cover: "images/Cover of Yo Tengo Fe by Zulmy Mejia.jpg",
  },
    {
    title: "Ama A Dios Y A Tu Vecino", //69
    artist: "Danny Gokey, Evan Craft, Redimi2",
    src: "songs/SpotiDownloader.com - Ama A Dios Y A Tu Vecino - Danny Gokey.mp3",
    cover: "images/Cover of Ama A Dios Y A Tu Vecino by Danny Gokey, Evan Craft, Redimi2.jpg",
    hex: "#403038",
    barColor: "#ffc863",
  },
    {
    title: "Perdón", //70
    artist: "Anita Morán",
    src: "songs/Anita Morán - Perdón (Video Oficial) - Anita Morán.mp3",
    cover: "images/Cover of Soy Peregrino by Anita Morán.jpg",
  },
    {
    title: "La Cumbia del Perdón", //71
    artist: "Vaes, Musiko",
    src: "songs/SpotiDownloader.com - La Cumbia del Perdón - Vaes.mp3",
    cover: "images/Cover of La Cumbia del Perdón by Vaes, Musiko.jpg",
    video: "videos/Vaes6.mp4"
  },
    {
    title: "Oh Alma Mía (2002)", //72
    artist: "Los Voceros de Cristo",
    src: "songs/a5.mp3",
    cover: "images/a5.png",
  },
    {
    title: "Sinónimo de Amar", //73
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Sinónimo de Amar - Los Voceros de Cristo.mp3",
    cover: "images/new3.png",
    hex: "#582820",
    barColor: "#941b06ff"
  },
    {
    title: "Bendeciré a Jehová", //74
    artist: "Anita Morán",
    src: "songs/Bendeciré a Jehová_spotdown.mp3",
    cover: "images/Screenshot 2026-05-16 12.04.27 PM.png",
  },
    {
    title: "La Biblia", //75
    artist: "Manuel Bonilla",
    src: "songs/song2.mp3",
    cover: "images/song2.jpg",
    hex: "#942409",
    barColor: "#df2d00ff"
  },
    {
    title: "NECESITO TU PRESENCIA", //76
    artist: "Anita Morán",
    src: "songs/NECESITO TU PRESENCIA- ANITA MORÁN (OFICIAL9 - Anita Morán.mp3",
    cover: "images/Cover of Soy Peregrino by Anita Morán.jpg",
  },
    {
    title: "Dulce Historia", //77
    artist: "Anita Morán",
    src: "songs/Dulce Historia.mp3",
    cover: "images/Eres Libre Album.jpg",
  },
    {
    title: "Espíritu De Dios", //78
    artist: "Leonel Tuchez",
    src: "songs/SpotiDownloader.com - Espíritu De Dios - Leonel Tuchez.mp3",
    cover: "images/Cover of Salmo 23 by Leonel Tuchez.jpg"
  },
    {
    title: "Su amor siempre es su amor", //79
    artist: "Los Voceros de Cristo/Ruth E. Gomez",
    src: "songs/su amor.mp3",
    cover: "images/su amor.jpg",
    hex: "#313831",
    barColor: "#527052ff"
  },
    {
    title: "Alto Precio - (EN VIVO)", //80
    artist: "Wilson Camey/Los Hermanos Reyes",
    src: "songs/Alto Precio - En vivo - Wilson Camey.mp3",
    cover: "images/wilson.png",
    hex: "#2F5F87",
    barColor: "#0057c0ff"
  },
    {
    title: "Tengo Un Dios - Julio Elías", //81
    artist: "Julio Elias",
    src: "songs/Tengo Un Dios - Julio Elías.mp3",
    cover: "images/cover1.jpg",
  },
    {
    title: "Quien me podrá separar", //82
    artist: "Los Hermanos Reyes",
    src: "songs/a3.mp3",
    cover: "images/a3.png",
    hex: "#17494eff",
    barColor: "#01747eff"
  },
    {
    title: "Hoy Te Pido Señor", //83
    artist: "Ezequiel Williams",
    src: "songs/SpotiDownloader.com - Hoy Te Pido Señor - Ezequiel Williams.mp3",
    cover: "images/Cover of Hoy Te Pido Señor by Ezequiel Williams.jpg",
  },
    {
    title: "Te Necesito Dios", //84
    artist: "Anita Morán",
    src: "songs/Te necesito Dios.mp3",
    cover: "images/Tanto Amor Album.jpg",
  },
    {
    title: "Solo a Dios", //85
    artist: "Agustin Amador",
    src: "songs/SpotiDownloader.com - Solo a Dios - Agustin Amador.mp3",
    cover: "images/Cover of Con Cristo Me Basta by Agustin Amador.jpg",
    hex: "#456426",
    barColor: "#a6dc71",
  },
    {
    title: "DIOS HA SIDO BUENO", //86
    artist: "Madiel Lara",
    src: "songs/SpotiDownloader.com - DIOS HA SIDO BUENO - Madiel Lara.mp3",
    cover: "images/Cover of DIOS HA SIDO BUENO by Madiel Lara.jpg",
    hex: "#602018",
    barColor: "#e88930dd",
    video: "videos/MadielLara3.mp4",
    lrc: "LRC files/DIOS HA SIDO BUENO - Madiel Lara.lrc",
  },
    {
    title: "Buscale", //87
    artist: "Óscar Medina",
    src: "songs/Buscale.mp3",
    cover: "images/Buscale.jpg",
    hex: "#836531",
    barColor: "#b56702ff"
  },
    {
    title: "Jesús Sé Mi Guía", //88
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Jesús Sé Mi Guía - Los Voceros de Cristo.mp3",
    cover: "images/Cover of La Biblia dice que el hombre by Los Voceros de Cristo.jpg",
  },
    {
    title: "Esa Roca", //89
    artist: "Anita Morán",
    src: "songs/Anita Morán Esa Roca - Briseida López.mp3",
    cover: "images/Cover of Esa Roca by Anita Morán.jpg",
  },
    {
    title: "No Vayas a Olvidar", //90
    artist: "Agustin Amador",
    src: "songs/SpotiDownloader.com - No Vayas a Olvidar - Agustin Amador.mp3",
    cover: "images/Cover of No Vayas a Olvidar by Agustin Amador.jpg",
    hex: "#989898",
    barColor: "#b8c0c6",
  },
    {
    title: "La Bonanza", //91
    artist: "Agustin Amador",
    src: "songs/SpotiDownloader.com - La Bonanza - Agustin Amador.mp3",
    cover: "images/Cover of Con Cristo Me Basta by Agustin Amador.jpg",
    hex: "#456426",
    barColor: "#a6dc71",
  },
    {
    title: "Siempre Me Encuentras (You Find Me)", //92
    artist: "Evan Craft",
    src: "songs/SpotiDownloader.com - Siempre Me Encuentras (You Find Me) - Evan Craft.mp3",
    cover: "images/evan.png",
    lrc: "LRC files/Siempre Me Encuentras (You Find Me) - Evan Craft.lrc"
  },
    {
    title: "Jesús es mi Refugio", //93
    artist: "Los Voceros de Cristo",
    src: "songs/Refugio.mp3",
    cover: "images/new3.png",
    hex: "#582820",
    barColor: "#941b06ff"
  },
    {
    title: "Contento Estoy", //94
    artist: "Los Hermanos Reyes",
    src: "songs/Contento Estoy.mp3",
    cover: "images/song27.png",
    hex: "#383838",
    barColor: "#676536ff"
  },
    {
    title: "Deuda", //95
    artist: "Katty Mazariegos",
    src: "songs/SpotiDownloader.com - Deuda - Katty Mazariegos.mp3",
    cover: "images/Cover of Deuda by Katty Mazariegos.jpg",
  },
    {
    title: "Jesús Es Mi Rey Soberano", //96
    artist: "Leonel Tuchez",
    src: "songs/Jesús Es Mi Rey Soberano.mp3",
    cover: "images/Esperando.jpg",
  },
    {
    title: "Feliz Cumpleaños", //97
    artist: "Biper Y Sus Amigos",
    src: "songs/SpotiDownloader.com - Feliz Cumple - Biper Y Sus Amigos.mp3",
    cover: "images/Cover of Feliz Cumple by Biper Y Sus Amigos.jpg",
  },
    {
    title: "Encontrarte", //98
    artist: "Majo y Dan, Madiel Lara",
    src: "songs/SpotiDownloader.com - Encontrarte - Majo y Dan.mp3",
    cover: "images/Cover of Encontrarte by Majo y Dan, Madiel Lara.jpg",
    video: "videos/majoYDan3.mp4",
    lrc: "LRC files/Encontrarte - Majo y Dan, Madiel Lara.lrc",
  },
    {
    title: "Enciende Una Luz", //99
    artist: "Marcos Witt, Un Corazón, Sarai Rivera, Elena Witt-Guerra, Krystal Guerra Witt, TAYA, Montesanto, Miel San Marcos, Waleska Morales, ECCOS, Indiomar",
    src: "songs/SpotiDownloader.com - Enciende Una Luz - Marcos Witt.mp3",
    cover: "images/Cover of Enciende Una Luz by Marcos Witt, Un Corazón, Sarai Rivera, Elena Witt-Guerra, Krystal Guerra Witt, TAYA, Montesanto, Miel San Marcos, Waleska Morales, ECCOS, Indiomar.jpg",
    video: "videos/MarcosWitt2.mp4"
  },
    {
    title: "Con Mis Manos Levantadas", //100
    artist: "Danilo Montero",
    src: "songs/SpotiDownloader.com - Con Mis Manos Levantadas - Danilo Montero.mp3",
    cover: "images/Cover of Con Mis Manos Levantadas by Danilo Montero.jpg",
  },
    {
    title: "Cruzando Por El Mundo", //101
    artist: "Anita Morán",
    src: "songs/05 Track 5.mp3",
    cover: "images/Screenshot 2026-10-24 232609.png",
  },
    {
    title: "Loor a ti mi Dios v2", //102
    artist: "Los Voceros de Cristo",
    src: "songs/Loor2.mp3",
    cover: "images/a5.png",
    hex: "#3A3436",
    barColor: "#726065ff"
  },
    {
    title: "Primero Dios, Vol. 5", //103
    artist: "Agustin Amador",
    src: "songs/Primero Dios, Vol. 5.mp3",
    cover: "images/cover3.jpg",
  },
    {
    title: "Resucitó", //104
    artist: "Anita Morán",
    src: "songs/Resucitó - Anita Morán.mp3",
    cover: "images/Screenshot 2026-05-16 12.04.27 PM.png",
  },
    {
    title: "Más Que Vencedor", //105
    artist: "Danilo Montero",
    src: "songs/SpotiDownloader.com - Más Que Vencedor - Danilo Montero.mp3",
    cover: "images/Cambiado.jpg",
  },
    {
    title: "Escucharte Hablar / Dios Ha Sido Bueno", //106
    artist: "Marcos Witt/Indiomar/Dariana",
    src: "songs/SpotiDownloader.com - Escucharte Hablar _ Dios Ha Sido Bueno - Marcos Witt.mp3",
    cover: "images/Cover of Escucharte Hablar _ Dios Ha Sido Bueno by Marcos Witt, Indiomar, Dariana (1).jpg",
  },
    {
    title: "Que Contento Estoy - (EN VIVO)", //107
    artist: "Wilson Camey/Los Hermanos Reyes",
    src: "songs/Que Contento Estoy - En vivo - Wilson Camey.mp3",
    cover: "images/wilson.png",
    hex: "#2F5F87",
    barColor: "#0057c0ff"
  },
    {
    title: "La Historia Del Violín", //108
    artist: "Leonel Tuchez",
    src: "songs/Leonel Tuchez - La Historia Del Violín (SPOTISAVER).mp3",
    cover: "images/Cover of Salmo 23 by Leonel Tuchez.jpg"
  },
    {
    title: "Dios De Imposibles", //109
    artist: "Un Corazón, Louie Abrego, Kim Richards",
    src: "songs/SpotiDownloader.com - Dios De Imposibles - Un Corazón.mp3",
    cover: "images/Cover of Pródigo by Un Corazón, Louie Abrego.jpg",
  },
    {
    title: "Que Bueno es El Señor", //110
    artist: "Los Hermanos Reyes",
    src: "songs/Que Bueno es El Señor.mp3",
    cover: "images/Que Bueno es El Señor.png",
    hex: "#6f2d5cff",
    barColor: "#950e71ff"
  },
    {
    title: "Hay una Ciudad", //111
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Hay una ciudad - Los Voceros de Cristo.mp3",
    cover: "images/new3.png",
    hex: "#582820",
    barColor: "#941b06ff"
  },
    {
    title: "Soy Feliz", //112
    artist: "Los Hermanos Reyes",
    src: "songs/Soy feliz.mp3",
    cover: "images/He peleado la batalla.png",
    hex: "#787053ff",
    barColor: "#ac943fff"
  },
    {
    title: "Estoy TRANQUILO", //113
    artist: "Madiel Lara",
    src: "songs/SpotiDownloader.com - Estoy TRANQUILO - Madiel Lara.mp3",
    cover: "images/Cover of Otra Vez by Madiel Lara.jpg",
    video: "videos/MadielLara8.mp4"
  },
    {
    title: "Tu Fidelidad", //114
    artist: "Marcos Witt/Alex Campos",
    src: "songs/a6.mp3",
    cover: "images/a6.png",
  },
    {
    title: "Tu el Alfarero", //115
    artist: "Ezequiel Williams",
    src: "songs/SpotiDownloader.com - Tu el Alfarero - Ezequiel Williams.mp3",
    cover: "images/Cover of Tu el Alfarero by Ezequiel Williams.jpg",
  },
    {
    title: "El Día Qué Llegaste", //116
    artist: "Anita Morán",
    src: "songs/Anita Morán - El Día Qué Llegaste (SPOTISAVER).mp3",
    cover: "images/Screenshot 2026-05-16 12.04.27 PM.png",
  },
    {
    title: "Sumérgeme", //117
    artist: "Jesús Adrián Romero",
    src: "songs/SpotiDownloader.com - Sumérgeme - Jesús Adrián Romero.mp3",
    cover: "images/Cover of Sumérgeme by Jesús Adrián Romero.jpg",
  },
    {
    title: "Cuando Te Conocí", //118
    artist: "Anita Morán",
    src: "songs/Cuando Te Conoci.mp3",
    cover: "images/Eres Libre Album.jpg",
  },
    {
    title: "Me Dicen Que Me Aman", //119
    artist: "Jesús Adrián Romero",
    src: "songs/a4.mp3",
    cover: "images/a4.png",
  },
    {
    title: "Precioso Regalo", //120
    artist: "Zulmy Mejia",
    src: "songs/SpotiDownloader.com - Precioso Regalo - Zulmy Mejia.mp3",
    cover: "images/zulmy.jpg",
  },
    {
    title: "Confía En El Señor Ft Francisco Orantes", //121
    artist: "Hermanos Osorio, Francisco Orantes",
    src: "songs/Confía en el Señor - Hermanos Osorio.mp3",
    cover: "images/orantes.png",
  },
    {
    title: "Escogido Fui de Dios (2025)", //122
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Escogido fui de Dios (Nuevos Horizontes) - Los Voceros de Cristo.mp3",
    cover: "images/Cover of Escogido fui de Dios (Nuevos Horizontes) by Los Voceros de Cristo.jpg",
    hex: "#8F2727",
    barColor: "#130069ff"
  },
    {
    title: "Eran 100 Ovejas (Visión Pastoral)", //123
    artist: "Francisco Orantes, Paulino Bernal",
    src: "songs/Eran 100 Ovejas (Visión Pastoral) Francisco Orantes ft Paulino Bernal.mp3",
    cover: "images/Screenshot 2026-08-28 11.39.46 PM.png",
  },
    {
    title: "En Mi Casa Vive Jesús", //124
    artist: "Francisco Orantes/Marilú Orantes",
    src: "songs/SpotiDownloader.com - En Mi Casa Vive Jesús - Francisco Orantes.mp3",
    cover: "images/Cover of En Mi Casa Vive Jesús by Francisco Orantes.jpg",
    hex: "#628ABF",
    barColor: "#3287f5ff"
  },
    {
    title: "Desde Que Te Conocí", //125
    artist: "Anita Morán",
    src: "songs/Desde que te conoci.mp3",
    cover: "images/Tanto Amor Album.jpg",
  },
    {
    title: "Limpia Mi Vida", //126
    artist: "Anita Morán",
    src: "songs/09 Track 9.mp3",
    cover: "images/Screenshot 2026-10-24 232609.png",
  },
    {
    title: "La Puerta es Cristo", //127
    artist: "Anita Morán",
    src: "songs/La puerta es Cristo.mp3",
    cover: "images/Eres Libre Album.jpg",
  },
    {
    title: "A donde Iré", //128
    artist: "Anita Morán",
    src: "songs/10 Track 10.mp3",
    cover: "images/Screenshot 2026-10-24 232609.png",
  },
    {
    title: "Renuévame", //129
    artist: "Marcos Witt",
    src: "songs/a2.mp3",
    cover: "images/a2.png",
    hex: "#0E434A",
    barColor: "#006c7bff"
  },
    {
    title: "Que lindo es mi Cristo", //130
    artist: "Wilson Camey, Los Hermanos Reyes",
    src: "songs/Que lindo es mi Cristo.mp3",
    cover: "images/Que lindo es mi Cristo.png",
  },
    {
    title: "Agradecimiento", //131
    artist: "Manuel Bonilla",
    src: "songs/Agradecimiento - Manuel Bonilla.mp3",
    cover: "images/manuel.png",
  },
    {
    title: "Levanto Mis Manos", //132
    artist: "Samuel Hernández",
    src: "songs/SpotiDownloader.com - Levanto Mis Manos - Samuel Hernández.mp3",
    cover: "images/Cover of Levanto Mis Manos by Samuel Hernández.jpg",
  },
    {
    title: "Como Una Flor Ft. Los Hermanos Reyes", //133
    artist: "Hermanos Osorio, Los Hermanos Reyes",
    src: "songs/Como Una Flor (Versión Los Hermanos Reyes).mp3",
    cover: "images/Como Una Flor (Versión Los Hermanos Reyes).png",
  },
    {
    title: "Triunfante hasta el final", //134
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Triunfante hasta el final - Los Voceros de Cristo.mp3",
    cover: "images/song11.png",
    hex: "#91190A",
    barColor: "#d11800ff"
  },
    {
    title: "Gracias", //135
    artist: "Marcos Witt",
    src: "songs/Gracias.mp3",
    cover: "images/a6.png",
  },
    {
    title: "Por Herencia", //136
    artist: "Francisco Orantes/Marilú Orantes",
    src: "songs/Por Herencia.mp3",
    cover: "images/Por Herencia.jpg",
    hex: "#5a240cff",
    barColor: "#992e00ff"
  },
    {
    title: "Roca Eterna", //137
    artist: "Anita Morán",
    src: "songs/Roca Eterna.mp3",
    cover: "images/Eres Libre Album.jpg",
  },
    {
    title: "Ese Hombre - Si Tienes un Amor - Si el Mundo en Vez de Rosas - En Vivo", //138
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Ese Hombre - Si Tienes un Amor - Si el Mundo en Vez de Rosas - En Vivo - Los Voceros de Cristo.mp3",
    cover: "images/su amor.jpg",
  },
    {
    title: "Cada mañana", //139
    artist: "Sarai Rivera",
    src: "songs/SpotiDownloader.com - Cada mañana - Sarai Rivera.mp3",
    cover: "images/Cover of Cada mañana by Sarai Rivera.jpg",
    hex: "#676664",
    barColor: "#255d26", 
  },
    {
    title: "Es El Amor", //140
    artist: "Duo Hermanos Devia",
    src: "songs/SpotiDownloader.com - Es El Amor - Duo Hermanos Devia.mp3",
    cover: "images/Cover of Es El Amor by Duo Hermanos Devia.jpg",
  },
    {
    title: "Jesús", //141
    artist: "Francisco Orantes",
    src: "songs/Jesús.mp3",
    cover: "images/Jesús.jpg",
    hex: "#08186C",
    barColor: "#001db0ff"
  },
    {
    title: "Para Ti Mamá", //142
    artist: "Anita Morán",
    src: "songs/Para Ti Mama.mp3",
    cover: "images/Eres Libre Album.jpg",
  },
    {
    title: "Como una Flor", //143
    artist: "Los Hermanos Reyes",
    src: "songs/song19.mp3",
    cover: "images/song19.png",
    hex: "#383838",
    barColor: "#676536ff"
  },
    {
    title: "No os Afanéis", //144
    artist: "Anita Morán",
    src: "songs/No os afaneis.mp3",
    cover: "images/Tanto Amor Album.jpg",
  },
    {
    title: "Lucharé", //145
    artist: "Anita Morán",
    src: "songs/Luchare.mp3",
    cover: "images/Tanto Amor Album.jpg",
  },
    {
    title: "Dulce Hogar", //146
    artist: "Katty Mazariegos",
    src: "songs/SpotiDownloader.com - Dulce Hogar - Katty Mazariegos.mp3",
    cover: "images/Cover of Tren de la Vida by Katty Mazariegos.jpg",
  },
    {
    title: "ABBA PADRE", //147
    artist: "Madiel Lara",
    src: "songs/SpotiDownloader.com - ABBA PADRE - Madiel Lara.mp3",
    cover: "images/Cover of INFINITO by Madiel Lara.jpg",
    video: "videos/MadielLara7.mp4",
  },
    {
    title: "Casa Nueva", //148
    artist: "Anita Morán",
    src: "songs/03 Track 3.mp3",
    cover: "images/Screenshot 2026-10-24 232609.png",
  },
    {
    title: "Herido Fue", //149
    artist: "Anita Morán",
    src: "songs/Herido Fue.mp3",
    cover: "images/Eres Libre Album.jpg",
  },
    {
    title: "Vivir Cantado", //150
    artist: "Julio Elias",
    src: "songs/Julio Elias.mp3",
    cover: "images/Julio Elias.png",
    hex: "#8c3d2fff",
    barColor: "#a11901ff"
  },
    {
    title: "Necesito De Ti", //151
    artist: "Francisco Orantes",
    src: "songs/Necesito De Ti.mp3",
    cover: "images/song10.png",
    hex: "#A16962",
    barColor: "#b84e40ff"
  },
    {
    title: "Te Necesito", //152
    artist: "Los Hermanos Reyes",
    src: "songs/Te necesito.mp3",
    cover: "images/Hay una ciudad.png",
    hex: "#bb9b31ff",
    barColor: "#d3a50cff"
  },
    {
    title: "Te Estoy Esperando", //153
    artist: "Leonel Tuchez",
    src: "songs/Esperando.mp3",
    cover: "images/Esperando.jpg",
    hex: "#854b6fff",
    barColor: "#a90b6dff"
  },
    {
    title: "Alto Precio", //154
    artist: "Los Hermanos Reyes",
    src: "songs/Alto Precio.mp3",
    cover: "images/song27.png",
    hex: "#383838",
    barColor: "#676536ff"
  },
    {
    title: "Pensaba En Ti", //155
    artist: "Leonel Tuchez",
    src: "songs/SpotiDownloader.com - Pensaba En Ti - Leonel Tuchez.mp3",
    cover: "images/Cover of Salmo 23 by Leonel Tuchez.jpg",
  },
    {
    title: "Cuando hablas tú", //156
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Cuando hablas tú - Los Voceros de Cristo.mp3",
    cover: "images/Loor.jpg",
    hex: "#783800",
    barColor: "#bf5900ff"
  },
    {
    title: "Casa Nueva", //157
    artist: "Leonel Tuchez",
    src: "songs/Leonel Tuchez - Casa Nueva (SPOTISAVER).mp3",
    cover: "images/Cover of Salmo 23 by Leonel Tuchez.jpg",
  },
    {
    title: "Razón de Vivir", //158
    artist: "Anita Morán",
    src: "songs/SpotiDownloader.com - Razón de Vivir - Anita Morán.mp3",
    cover: "images/Screenshot 2026-05-16 12.04.27 PM.png",
  },
    {
    title: "Serendipia", //159
    artist: "Vaes, Kike Pavón",
    src: "songs/SpotiDownloader.com - serendipia - Vaes.mp3",
    cover: "images/Cover of serendipia by Vaes, Kike Pavón.jpg",
    hex: "#BF4737",
    barColor: "#f38b7d",
    video: "videos/Vaes1.mp4",
  },
    {
    title: "No Hay Lugar Mas Alto (feat. Christine D Clario)", //160
    artist: "Miel San Marcos, Christine D'Clario",
    src: "songs/SpotiDownloader.com - No Hay Lugar Mas Alto (feat. Christine D Clario) - Miel San Marcos.mp3",
    cover: "images/Cover of No Hay Lugar Mas Alto (feat. Christine D Clario) by Miel San Marcos, Christine D'Clario.jpg",
  },
    {
    title: "Fuerzas Pa'", //161
    artist: "Vaes",
    src: "songs/SpotiDownloader.com - Fuerzas Pa' - Vaes.mp3",
    cover: "images/Cover of Fuerzas Pa' by Vaes.jpg",
    hex: "#EE5757",
    barColor: "#e68585",
    video: "videos/Vaes3.mp4",
  },
    {
    title: "Yo Te Esperare", //162
    artist: "Los Hermanos Reyes",
    src: "songs/Reyes.mp3",
    cover: "images/Hay una ciudad.png",
    hex: "#b09539ff",
    barColor: "#e4b20dff"
  },
    {
    title: "Otra Vez", //163
    artist: "Madiel Lara",
    src: "songs/SpotiDownloader.com - Otra Vez - Madiel Lara.mp3",
    cover: "images/Cover of Otra Vez by Madiel Lara.jpg",
    video: "videos/MadielLara5.mp4"
  },
    {
    title: "Eres Libre", //164
    artist: "Anita Morán",
    src: "songs/Eres Libre.mp3",
    cover: "images/Eres Libre Album.jpg",
  },
    {
    title: "Vencedor", //165
    artist: "Anita Morán",
    src: "songs/Vencedor - Anita Moran.mp3",
    cover: "images/Screenshot 2026-10-24 232609.png",
  },
    {
    title: "Primero Dios, Vol. 5", //166
    artist: "Agustin Amador",
    src: "songs/SpotiDownloader.com - Primero Dios, Vol. 5 - Agustin Amador.mp3",
    cover: "images/Cover of Primero Dios, Vol. 5 by Agustin Amador.jpg",
    hex: "#B99241",
    barColor: "#e2bd71",
  },
    {
    title: "Te Doy Gracias", //167
    artist: "Los Hermanos Reyes/Leonel Tuchez",
    src: "songs/song27.mp3",
    cover: "images/song27.png",
    hex: "#383838",
    barColor: "#6b5a3bff"
  },
    {
    title: "Pródigo", //168
    artist: "Un Corazón, Louie Abrego",
    src: "songs/Pródigo.mp3",
    cover: "images/Cover of Pródigo by Un Corazón, Louie Abrego.jpg",
    hex: "#62A2AB",
    barColor: "#9ec3c8",
    video: "videos/UnCorazon2.mp4",
  },
    {
    title: "Mi Piloto", //169
    artist: "Anita Morán",
    src: "songs/Mi Piloto - Anita Morán (Video Letra Oficial) - Anita Morán.mp3",
    cover: "images/Cover of Soy Peregrino by Anita Morán.jpg",
  },
    {
    title: "Tengo un Dios", //170
    artist: "Los Hermanos Reyes",
    src: "songs/Tengo un Dios.mp3",
    cover: "images/Tengo un Dios.png",
    hex: "#787053ff",
    barColor: "#907926ff"
  },
    {
    title: "Mi Pensamiento", //171
    artist: "Agustin Amador",
    src: "songs/SpotiDownloader.com - Mi Pensamiento - Agustin Amador.mp3",
    cover: "images/Cover of Mi Pensamiento by Agustin Amador.jpg",
    hex: "#7F000F",
    barColor: "#af1a2b",
  },
    {
    title: "Amartesolo a ti Señor", //172
    artist: "Los Hermanos Reyes",
    src: "songs/Amarte.mp3",
    cover: "images/Hay un Dios.png",
    hex: "#0b2f43ff",
    barColor: "#025988ff"
  },
    {
    title: "HAY UN DIOS - REMIX", //173
    artist: "Seeiji, Vaes",
    src: "songs/SpotiDownloader.com - HAY UN DIOS - REMIX - Seeiji.mp3",
    cover: "images/Cover of HAY UN DIOS - REMIX by Seeiji, Vaes.jpg",
    hex: "#F76800",
    barColor: "#ffaa6d",
    video: "videos/Seeji1.mp4",
  },
    {
    title: "Alla en los Olivos", //174
    artist: "Los Hermanos Reyes",
    src: "songs/Alla en los olivos.mp3",
    cover: "images/Hay una ciudad.png",
    hex: "#b19433ff",
    barColor: "#e5b003ff"
  },
    {
    title: "Todo Pasa", //175
    artist: "Agustin Amador",
    src: "songs/SpotiDownloader.com - Toda Pasa - Agustin Amador.mp3",
    cover: "images/Cover of Incontable Maravilla by Agustin Amador.jpg",
  },
    {
    title: "Dame Tus Ojos", //176
    artist: "Marcela Gandera, Jesús Adrián Romero",
    src: "songs/Dame Tus Ojos_spotdown.org.mp3",
    cover: "images/song7.png",
  },
    {
    title: "Agradecido", //177
    artist: "Oasis Ministry, Madiel Lara",
    src: "songs/SpotiDownloader.com - Agradecido - Oasis Ministry.mp3",
    cover: "images/Cover of Agradecido by Oasis Ministry, Madiel Lara.jpg",
    video: "videos/Oasis1.mp4",
    lrc: "LRC files/Agradecido - Oasis Ministry, Madiel Lara.lrc",
  },
    {
    title: "El volverá", //178
    artist: "Los Voceros de Cristo/Aníbal Marroquín",
    src: "songs/volverá.mp3",
    cover: "images/new4.png",
    hex: "#313831",
    barColor: "#527052ff"
  },
    {
    title: "Creo En Ti", //179
    artist: "Julio Melgar",
    src: "songs/SpotiDownloader.com - Creo En Ti - Julio Melgar.mp3",
    cover: "images/Cover of Creo En Ti by Julio Melgar.jpg",
  },
    {
    title: "Tanto Amor", //180
    artist: "Anita Morán",
    src: "songs/Tanto amor.mp3",
    cover: "images/Tanto Amor Album.jpg",
  },
    {
    title: "No Tardes", //181
    artist: "Anita Morán",
    src: "songs/No Tardes - Anita Moran.mp3",
    cover: "images/Screenshot 2026-10-24 232609.png",
  },
    {
    title: "Cantos de Júbilo", //182
    artist: "Anita Morán",
    src: "songs/Cantos de Jubilo.mp3",
    cover: "images/Eres Libre Album.jpg",
  },
    {
    title: "De Tal Manera", //183
    artist: "Jesús Adrián Romero",
    src: "songs/SpotiDownloader.com - De Tal Manera - Jesús Adrián Romero.mp3",
    cover: "images/Cover of De Tal Manera by Jesús Adrián Romero, Abel Zavala.jpg",
  },
    {
    title: "Aunque No Lo Crean", //184
    artist: "Agustin Amador",
    src: "songs/SpotiDownloader.com - Aunque No Lo Crean - Agustín Amador.mp3",
    cover: "images/Cover of Aunque No Lo Crean by Agustín Amador.jpg",
    hex: "#5857A7",
    barColor: "#aba9f7",
  },
    {
    title: "Un Grano de Arena", //185
    artist: "Manuel Bonilla",
    src: "songs/Un Grano De Arena.mp3",
    cover: "images/Un Grano De Arena.png",
  },
    {
    title: "Esa Oveja Era Yo", //186
    artist: "Leonel Tuchez",
    src: "songs/SpotiDownloader.com - Esa Oveja Era Yo - Leonel Tuchez.mp3",
    cover: "images/Esperando.jpg",
  },
    {
    title: "Con Cristo Me Basta", //187
    artist: "Agustin Amador",
    src: "songs/SpotiDownloader.com - Con Cristo Me Basta - Agustin Amador.mp3",
    cover: "images/Cover of Con Cristo Me Basta by Agustin Amador.jpg",
    hex: "#456426",
    barColor: "#a6dc71",
  },
    {
    title: "Los Trigales", //188
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Los Trigales - Los Voceros de Cristo.mp3",
    cover: "images/song11.png",
  },
    {
    title: "El Señor es mi pastor", //189
    artist: "Danilo Montero",
    src: "songs/SpotiDownloader.com - El Señor es mi pastor - Danilo Montero.mp3",
    cover: "images/Cover of El Señor es mi pastor by Danilo Montero.jpg",
    hex: "#E96A92",
    barColor: "#e398b0",
  },
    {
    title: "Cristo Es Necesario", //190
    artist: "Danny Gokey/Christine D'Clario",
    src: "songs/SpotiDownloader.com - Cristo Es Necesario - Danny Gokey.mp3",
    cover: "images/Cover of Cristo Es Necesario by Danny Gokey, Christine D'Clario.jpg",
    hex: "#864776",
    barColor: "#747374",
  },
    {
    title: "Solamente En Jesús", //191
    artist: "Anita Morán",
    src: "songs/Solamente En Jesús - Anita Morán.mp3",
    cover: "images/Cover of Soy Peregrino by Anita Morán.jpg",
  },
    {
    title: "El Espíritu de Dios", //192
    artist: "Anita Morán",
    src: "songs/Anita Morán - El Espíritu de Dios (Video Letra) - Anita Morán.mp3",
    cover: "images/Cover of Soy Peregrino by Anita Morán.jpg",
  },
    {
    title: "No Deves Llorar", //193
    artist: "Anita Morán",
    src: "songs/07 Track 7.mp3",
    cover: "images/Screenshot 2026-10-24 232609.png",
  },
    {
    title: "No Hay Nadie Como Cristo", //194
    artist: "Marilú Orantes",
    src: "songs/SpotiDownloader.com - No Hay Nadie Como Cristo - Marilú Orantes.mp3",
    cover: "images/Cover of No Hay Nadie Como Cristo by Marilú Orantes.jpg",
    hex: "#CA3DE9",
    barColor: "#ff2121",
  },
    {
    title: "Tú Estás Aquí (Live)", //195
    artist: "Marcela Gandara, Jesús Adrián Romero",
    src: "songs/Tú Estás Aquí (Live)_spotdown.org.mp3",
    cover: "images/Screenshot 2026-07-18 3.08.29 PM.png",
  },
    {
    title: "Exitos de Recuerdos Ft. Los Hermanos Reyes", //196
    artist: "Los Milagros de Cristo/Los Hermanos Reyes",
    src: "songs/Exitos.mp3",
    cover: "images/Cover of Exitos.jpg",
  },
    {
    title: "Cordero", //197
    artist: "Manuel Bonilla",
    src: "songs/Cordero.mp3",
    cover: "images/song5.jpg",
  },
    {
    title: "Que Sería De Mi", //198
    artist: "Jesús Adrián Romero",
    src: "songs/Que Sería De Mi_spotdown.org.mp3",
    cover: "images/Screenshot 2026-07-18 3.03.36 PM.png",
    video: "videos/Romero2.mp4",
  },
    {
    title: "Virtuosa", //199
    artist: "Samuel Adrián",
    src: "songs/SpotiDownloader.com - Virtuosa - Samuel Adrián.mp3",
    cover: "images/Cover of Virtuosa by Samuel Adrián.jpg",
  },
    {
    title: "The Devil Is A Liar", //200
    artist: "Evan Craft",
    src: "songs/SpotiDownloader.com - The Devil Is A Liar - Evan Craft.mp3",
    cover: "images/evan.png",
    lrc: "LRC files/The Devil Is A Liar - Evan Craft.lrc"
  },
    {
    title: "Tus Obras", //201
    artist: "Anita Morán",
    src: "songs/08 Track 8.mp3",
    cover: "images/Screenshot 2026-10-24 232609.png",
  },
    {
    title: "Clamaré", //202
    artist: "Francisco Orantes, Veronica Leal",
    src: "songs/SpotiDownloader.com - Clamaré - Francisco Orantes.mp3",
    cover: "images/Cover of Clamaré by Francisco Orantes, Veronica Leal.jpg",
  },
    {
    title: "Que Feliz Estoy", //203
    artist: "Francisco Orantes",
    src: "songs/SpotiDownloader.com - Que Feliz Estoy - Francisco Orantes.mp3",
    cover: "images/song10.png",
    hex: "#A16962",
    barColor: "#b84e40ff"
  },
    {
    title: "Adora Y Ora", //204
    artist: "Pedro Pablo Quintero",
    src: "songs/SpotiDownloader.com - Adora Y Ora - Pedro Pablo Quintero.mp3",
    cover: "images/Cover of Adora Y Ora by Pedro Pablo Quintero.jpg",
  },
/* 
  {
    title: "", //3##
    artist: "",
    src: "songs/",
    cover: "images/",
    video: "videos/",
    lrc: "LRC files/",
  },*/
];

const playlistOrder = {
  NoTemeréVol10: [31, 74, 44, 67, 116, 58, 158, 20, 104],
  VencedorVol4: [165, 181, 148, 3, 101, 39, 193, 201, 126, 128],
  NecesitoTuPresenciaVol7: [38, 76, 59, 5, 6, 191, 192, 64, 169, 70],
  EresLibreVol9: [164, 77, 137, 149, 55, 182, 142, 118, 4, 127],
  TantoAmorVol9: [180, 15, 84, 125, 36, 53, 145, 8, 51, 144],
  //make a playlist for the mothers day songs
};

const playlistHex = {
  NoTemeréVol10: "#A74838",
  VencedorVol4: "#3b7125",
  NecesitoTuPresenciaVol7: "#AF2F67",
  EresLibreVol9: "#773838",
  TantoAmorVol9: "#3E3336",
};

const playlistEndHex = {
  NoTemeréVol10: "#650200",
  VencedorVol4: "#1e4a0c",
  NecesitoTuPresenciaVol7: "#630030",
  EresLibreVol9: "#5C2022",
  TantoAmorVol9: "#2F363E",
};

async function getSongColors(imageUrl) {
  if (colorCache[imageUrl]) return colorCache[imageUrl];

  try {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    const vibrant = new Vibrant(img);
    const palette = await vibrant.getPalette();

    // Helper function to check if a color is too dark (close to black)
    function isBlackOrBrown(hexColor) {
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

      // Black, near-black, or almost neutral dark colors
      const isBlack = brightness < 30;

      // Brown: dark, warm hue, with red generally exceeding blue
      const isBrown =
          brightness < 110 &&
          r > g &&
          g >= b &&
          (r - b) > 25 &&
          (max - min) > 20;

      return isBlack || isBrown;
    }

    function hexToHsl(hexColor) {
      const r = parseInt(hexColor.slice(1, 3), 16) / 255;
      const g = parseInt(hexColor.slice(3, 5), 16) / 255;
      const b = parseInt(hexColor.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const delta = max - min;

      let h = 0;
      let s = 0;
      let l = (max + min) / 2;

      if (delta !== 0) {
          s = delta / (1 - Math.abs(2 * l - 1));

          switch (max) {
              case r:
                  h = ((g - b) / delta) % 6;
                  break;
              case g:
                  h = (b - r) / delta + 2;
                  break;
              case b:
                  h = (r - g) / delta + 4;
                  break;
          }

          h *= 60;
          if (h < 0) h += 360;
      }

      return [h, s, l];
    }

    function hslToHex(h, s, l) {
      const k = n => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);

      const f = n =>
          Math.round(
              255 * (
                  l - a * Math.max(
                      -1,
                      Math.min(k(n) - 3, 9 - k(n), 1)
                  )
              )
          );

      return "#" + [f(0), f(8), f(4)]
          .map(v => v.toString(16).padStart(2, "0"))
          .join("");
    }

    function adjustLightness(hexColor, amount) {
      const [h, s, l] = hexToHsl(hexColor);

      const newLightness = Math.max(
          0,
          Math.min(1, l + amount)
      );

      return hslToHex(h, s, newLightness);
    }

    function isTooDark(hexColor) {
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);

      return (r * 0.299 + g * 0.587 + b * 0.114) < 50;
    }

    function isTooBright(hexColor) {
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);

      return (r * 0.299 + g * 0.587 + b * 0.114) > 170;
    }

    function harmonizeVibrantColor(vibrantColor, darkColor) {
      const [vH, vS, vL] = hexToHsl(vibrantColor);
      const [dH, dS, dL] = hexToHsl(darkColor);

      // Calculate the shortest distance between two hues (0–180 degrees)
      const hueDifference = Math.abs(vH - dH);
      const hueDistance = Math.min(hueDifference, 360 - hueDifference);

      // Allow different shades of related colors
      // Only correct colors from distinctly different hue families
      if (hueDistance > 0) {
          // Keep the dark color's hue, but make it subtly brighter
          const newLightness = Math.min(0.72, Math.max(dL + 0.12, 0.30));

          // Slightly increase saturation without making it overpowering
          const newSaturation = Math.min(
              0.75,
              Math.max(dS * 0.85, 0.35)
          );

          return hslToHex(dH, newSaturation, newLightness);
      }

      // The colors are already harmonious
      return vibrantColor;
    }
    
    // Get the colors from palette
    const trueVibrantColor = palette.Vibrant?.getHex() || "#121212";

    const originalDarkColor = palette.DarkVibrant?.getHex() || "#121212";

    const useVibrantInstead = isBlackOrBrown(originalDarkColor);

    let darkColor = useVibrantInstead
      ? trueVibrantColor
      : originalDarkColor;

    let vibrantColor = trueVibrantColor;

    const lightColor = palette.LightVibrant?.getHex() || "#121212";

    const muted = palette.Muted?.getHex() || "#121212";

    const lightMuted = palette.LightMuted?.getHex() || "#121212";

    const darkMuted = palette.DarkMuted?.getHex() || "#121212";
    
      
  // Adjust Vibrant color
    if (isTooBright(vibrantColor)) {
      const [h, s, l] = hexToHsl(vibrantColor);

      // Yellow and gold hues: preserve more of their brightness
      const isYellow = h >= 30 && h <= 70;

      const adjustment = isYellow
          ? -0.05
          : useVibrantInstead ? -0.30 : -0.20;

      vibrantColor = adjustLightness(vibrantColor, adjustment);
    }

    if (isTooDark(vibrantColor)) {
      vibrantColor = adjustLightness(vibrantColor, 0.20);
    }

    // Adjust the dark background color
    if (isTooDark(darkColor)) {
      darkColor = adjustLightness(darkColor, 0.20);
    }

    if (isTooBright(darkColor)) {
      const [h, s, l] = hexToHsl(darkColor);

      // Preserve brightness for yellow and gold hues
      const isYellow = h >= 40 && h <= 70;

      const adjustment = isYellow
          ? -0.12
          : useVibrantInstead ? -0.30 : -0.20;

      darkColor = adjustLightness(darkColor, adjustment);
    }

    // Ensure vibrantColor harmonizes with darkColor
    vibrantColor = harmonizeVibrantColor(
      vibrantColor,
      darkColor
    );

    const colors = {
      main: darkColor,
      dark: darkColor,
      light: lightColor,
      vibrant: vibrantColor
    };

    colorCache[imageUrl] = colors;
    return colors;

  } catch (err) {
    console.error('Error extracting colors:', err);
    return {
      main: "#121212",
      dark: "#121212",
      light: "#ffffff"
    };
  }
}

function updatePlaylistGradient(main, dark) {
  const darkColor = dark || "#121212";
  playlistSheet.style.background = `${main}`;
  openPlaylistBtn.style.backgroundColor = main;
}

// --- element refs ---
const libraryPlaylistCover = document.getElementById('libraryPlaylistCover');
const player = document.querySelector('.player-content');

const audio = document.getElementById('audio');
const seekBar = document.getElementById('seek-bar');
const bottomBar = document.getElementById('bottom-seek-bar');
const realBottomBar = document.querySelector('.bottom-bar');
const titleWrapper = document.querySelector('.title-wrapper');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const videoCover = document.getElementById('video-cover');
const playlistEl = document.getElementById('playlist');
const video = document.getElementById('bg-video');

const playBtn = document.getElementById('play');
const playIcon = document.getElementById('play-icon');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');

const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('total-duration');
const searchBar = document.getElementById('search-bar');

const playlistWrapper = document.querySelector('.playlist-wrapper');
const coverWrapper = document.querySelector('.cover-wrapper');
const openPlaylistBtn = document.getElementById("open-playlist");
const togglePlaylistBtn = document.getElementById('toggle-playlist');

const miniPlayer = document.getElementById('mini-player');
const miniCover = document.getElementById('mini-cover');
const miniTitle = document.getElementById('mini-title');
const miniArtist = document.getElementById('mini-artist');
const miniPlay = document.getElementById('mini-play');
const miniPause = document.getElementById('mini-pause');

const playlistSheet = document.getElementById("playlist-sheet");

const visualizer = document.querySelector('.visualizer');
const bar = document.querySelector('.bar');

const libraryPlaylistEl = document.getElementById('libraryPlaylist');
const libraryTitle = document.getElementById('libraryTitle');

const songRequest = document.getElementById("songRequest");
const closeRequest = document.getElementById("closeRequest");

const lyricsSection = document.querySelector('.lyrics-section');
const lyricsContent = document.getElementById('lyrics-content');
const openLyricsBtn = document.getElementById('open-lyrics');

const lyricsScreen = document.getElementById('lyrics-screen');
const closeLyricsBtn = document.getElementById('close-lyrics');
const fullLyrics = document.getElementById('full-lyrics');
const lyricsSongTitle = document.getElementById('lyrics-song-title');

let lyricsRequestId = 0;

let currentLyrics = [];
let activeLyricIndex = -1;

let miniPlayerActivated = false;
let currentPlaylist = "all songs";
let playbackSource = "All Songs";  // what actually triggered playback


const playlistLabel = document.getElementById("currentPlaylistLabel");

function updateTitleScroll() {
  // Stop any existing animation first
  title.classList.remove('title-scrolling');
  title.classList.remove('title-scrolling-video');
  title.style.setProperty('--scroll-distance', '0px');

  // Wait for the browser to measure the newly updated title
  requestAnimationFrame(() => {
    const overflowAmount = title.scrollWidth - title.parentElement.clientWidth;

    // Only animate if the title actually overflows
    if (overflowAmount > 1) {
      title.style.setProperty(
        '--scroll-distance',
        `${overflowAmount}px`
      );

      // Force animation to restart cleanly
      void title.offsetWidth;

      title.classList.add('title-scrolling');
    }
  });
}

function updateTitleScrollVideo() {
  // Stop any existing animation first
  title.classList.remove('title-scrolling');
  title.classList.remove('title-scrolling-video');
  title.style.setProperty('--scroll-distance', '0px');

  // Wait for the browser to measure the newly updated title
  requestAnimationFrame(() => {
    const overflowAmount = title.scrollWidth - title.parentElement.clientWidth + 85;

    // Only animate if the title actually overflows
    if (overflowAmount > 1) {
      title.style.setProperty(
        '--scroll-distance',
        `${overflowAmount}px`
      );

      // Force animation to restart cleanly
      void title.offsetWidth;

      title.classList.add('title-scrolling-video');
    }
  });
}

/* =========================================================
   LRC LYRICS PREVIEW
   ========================================================= */

function resetLyricsPreview() {
  lyricsContent.textContent = "This song has no lyrics...";
  lyricsSection.classList.remove("lyrics-overflow", "has-lyrics");

  if (openLyricsBtn) {
    openLyricsBtn.disabled = true;
    openLyricsBtn.style.opacity = "0.45";
  }

  currentLyrics = [];
  activeLyricIndex = -1;

  fullLyrics.innerHTML = "";
}


function parseLRC(lrcText) {
  const entries = [];
  const lines = lrcText.split(/\r?\n/);

  for (const line of lines) {

    const timestamps = [
      ...line.matchAll(
        /\[(\d{1,3}):(\d{2})(?:\.(\d{1,3}))?\]/g
      )
    ];

    if (!timestamps.length) continue;

    const lyricText = line
      .replace(
        /\[(\d{1,3}):(\d{2})(?:\.(\d{1,3}))?\]/g,
        ""
      )
      .trim();

    if (!lyricText) continue;

    for (const match of timestamps) {

      const minutes = Number(match[1]);
      const seconds = Number(match[2]);

      const fraction = match[3] || "";

      const milliseconds = fraction
        ? Number(fraction.padEnd(3, "0"))
        : 0;

      entries.push({
        time:
          minutes * 60 +
          seconds +
          milliseconds / 1000,

        text: lyricText
      });
    }
  }

  return entries.sort((a, b) => a.time - b.time);
}


async function loadLyricsPreview(song) {

  // Every new request gets a unique ID.
  // This prevents an old song's LRC from replacing
  // the lyrics of the new song if the user switches quickly.
  const requestId = ++lyricsRequestId;

  resetLyricsPreview();

  // Song doesn't have an LRC property
  if (!song || !song.lrc) {
    return;
  }

  try {

    const response = await fetch(song.lrc, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(
        `Could not load LRC file: ${response.status}`
      );
    }

    const lrcText = await response.text();

    const lyrics = parseLRC(lrcText);

    // Only use the first few actual lyric lines
    const previewLines = lyrics.slice(0, 10);

    // Make sure this is still the current song
    if (requestId !== lyricsRequestId) {
      return;
    }

    if (!previewLines.length) {
      return;
    }

    // Put the lyrics into the preview
    lyricsContent.textContent =
  previewLines.map(line => line.text).join("\n");

renderFullLyrics(lyrics);

    lyricsSection.classList.add("has-lyrics");

    if (openLyricsBtn) {
      openLyricsBtn.disabled = false;
      openLyricsBtn.style.opacity = "1";
    }

    // Wait until the browser has rendered the text
    // before checking whether it actually overflows.
    requestAnimationFrame(() => {

      if (requestId !== lyricsRequestId) {
        return;
      }

      const isOverflowing =
        lyricsContent.scrollHeight >
        lyricsContent.clientHeight + 1;

      lyricsSection.classList.toggle(
        "lyrics-overflow",
        isOverflowing
      );
    });

  } catch (error) {

    if (requestId !== lyricsRequestId) {
      return;
    }

    console.warn(
      `Lyrics unavailable for "${song.title}":`,
      error
    );

    resetLyricsPreview();
  }
}

function renderFullLyrics(lyrics) {
  //fullLyrics.classlist.add("full-lyrics-overflow");

  currentLyrics = lyrics;
  activeLyricIndex = -1;

  fullLyrics.innerHTML = "";

  lyrics.forEach((line, index) => {

    const lyricLine = document.createElement("div");

    lyricLine.className = "lyrics-line";
    lyricLine.dataset.index = index;

    lyricLine.textContent = line.text;

    fullLyrics.appendChild(lyricLine);
  });
}

/* =========================================================
   FULL LYRICS SCREEN
   ========================================================= */

function openLyricsScreen() {

  if (!currentLyrics.length) return;

  const song = playlist[currentSong];

  lyricsSongTitle.textContent = song
    ? `${song.title} • ${song.artist}`
    : "Lyrics";

  lyricsScreen.classList.add("lyrics-screen-open");

  // Start at the currently active lyric if possible
  requestAnimationFrame(() => {

    if (activeLyricIndex >= 0) {
      scrollToActiveLyric(false);
    }

  });
}


function closeLyricsScreen() {
  lyricsScreen.classList.remove("lyrics-screen-open");
}


openLyricsBtn.addEventListener("click", openLyricsScreen);

closeLyricsBtn.addEventListener("click", closeLyricsScreen);

function updateActiveLyric() {

  if (!currentLyrics.length) return;

  const currentTime = audio.currentTime;

  let newIndex = -1;

  for (let i = 0; i < currentLyrics.length; i++) {

    if (currentTime >= currentLyrics[i].time) {
      newIndex = i;
    } else {
      break;
    }
  }

  if (newIndex === activeLyricIndex) {
    return;
  }

  activeLyricIndex = newIndex;

  document
    .querySelectorAll(".lyrics-line.active")
    .forEach(line => {
      line.classList.remove("active");
    });

  if (activeLyricIndex >= 0) {

    const activeLine = fullLyrics.querySelector(
      `.lyrics-line[data-index="${activeLyricIndex}"]`
    );

    if (activeLine) {

      activeLine.classList.add("active");

      // Only automatically scroll when the active lyric changes.
      // This means the user can still manually scroll around.
      if (lyricsScreen.classList.contains("lyrics-screen-open")) {
        scrollToActiveLyric(true);
      }
    }
  }
}


function scrollToActiveLyric(smooth = true) {

  if (activeLyricIndex < 0) return;

  const activeLine = fullLyrics.querySelector(
    `.lyrics-line[data-index="${activeLyricIndex}"]`
  );

  if (!activeLine) return;

  const containerHeight = fullLyrics.clientHeight;

  const lineTop = activeLine.offsetTop;

  const lineHeight = activeLine.offsetHeight;

  const targetScroll =
    lineTop -
    containerHeight / 2 +
    lineHeight / 2;

  fullLyrics.scrollTo({
    top: Math.max(0, targetScroll),
    behavior: smooth ? "smooth" : "auto"
  });
}

audio.addEventListener("timeupdate", updateActiveLyric);

function updatePlaylistLabel() {
  playlistLabel.textContent = currentPlaylist;
}

function openSongRequest() {
  songRequest.classList.add("active");
}

function closeSongRequest() {
  songRequest.classList.remove("active");
}

closeRequest.addEventListener("click", closeSongRequest);

requestSongOption.addEventListener("click", () => {
  openSongRequest();
});

const optionsBtnMain = document.getElementById("optionsbtn");

optionsBtnMain.addEventListener("click", (e) => {
  e.stopPropagation();
  openMainOptionsPopup(optionsBtnMain);
});

let currentMainOptionsPopup = null;

function openMainOptionsPopup(button) {

  if (currentMainOptionsPopup) {
    currentMainOptionsPopup.remove();
    currentMainOptionsPopup = null;
  }

  const popup = document.createElement("div");
  popup.className = "song-options-popup";

  popup.innerHTML = `
    <div class="option-item" id="requestSongBtn">Request New Song</div>
  `;

  document.body.appendChild(popup);

  const rect = button.getBoundingClientRect();
  popup.style.top = rect.bottom + window.scrollY + "px";
  popup.style.left = rect.left - 140 + "px";

  currentMainOptionsPopup = popup;

  // attach request action
  popup.querySelector("#requestSongBtn").addEventListener("click", () => {
    closeMainOptionsPopup();
    openSongRequest();
  });

  setTimeout(() => {
    document.addEventListener("click", closeMainOptionsPopup, { once: true });
  }, 0);
}

function closeMainOptionsPopup() {
  if (currentMainOptionsPopup) {
    currentMainOptionsPopup.remove();
    currentMainOptionsPopup = null;
  }
}

let currentLibraryQueue = [];
let libraryQueueIndex = 0;
let usingLibraryQueue = false;

const libraryPlaylistScreen = document.getElementById("libraryPlaylistScreen");
const libraryButtons = document.querySelectorAll(".library-btn");


document.querySelectorAll('.library-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.library;
    const hex = playlistHex[key];
    const endHex = playlistEndHex[key];

    if (hex) {
      libraryPlaylistScreen.style.background =
        `linear-gradient(to bottom, ${hex}, ${endHex}, #121212 57%)`;
    }

    // Cover animation
    const img = btn.querySelector('img').src;
    libraryPlaylistCover.classList.add('pop');
    libraryPlaylistCover.src = img;

    setTimeout(() => {
      libraryPlaylistCover.classList.remove('pop');
    }, 300);

    //Open playlist
    openLibraryPlaylist(key);
  });
});



// music timer 
const timerBtn = document.getElementById('timer');
const timerScreen = document.getElementById('timerScreen');
const timerMinutesInput = document.getElementById('timerMinutes');
const startTimerBtn = document.getElementById('startTimer');
const cancelTimerBtn = document.getElementById('cancelTimer');


// Queue refs 
const queueBtn = document.getElementById('queue'); 
const queueScreen = document.getElementById('queueScreen');
const queueList = document.getElementById('queueList');
const closeQueueBtn = document.querySelector('.close-queue');

// Replace the DOMContentLoaded section with this:
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.screen-track');

  const navAll = document.getElementById('nav-all');
  const navLibrary = document.getElementById('nav-library');
  const navPlaylists = document.getElementById('nav-playlist');

  function goToScreen(index) {
    track.style.transform = `translateX(-${index * 100}vw)`;

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if (index === 0) navAll.classList.add('active');
    if (index === 1) navLibrary.classList.add('active');
    if (index === 2) navPlaylists.classList.add('active');
  }

  navAll.addEventListener('click', () => goToScreen(0));
  navLibrary.addEventListener('click', () => goToScreen(1));
  navPlaylists.addEventListener('click', () => goToScreen(2));

  // Ensure correct initial state
  goToScreen(1);

  // Add back button functionality
  const libraryBackBtn = document.getElementById('libraryBackBtn');
  if (libraryBackBtn) {
    libraryBackBtn.addEventListener('click', () => goToScreen(1));
  }

  function buildLibraryPlaylist(libKey) {
    libraryPlaylistEl.innerHTML = '';

    const order = playlistOrder[libKey];
    
    if (!order || !Array.isArray(order)) {
      console.error('Invalid playlist order for key:', libKey);
      return;
    }

    currentLibraryQueue = [...order]; // save play order

    order.forEach(songIndex => {
      // Check if songIndex exists in playlist
      if (songIndex < 0 || songIndex >= playlist.length) {
        console.warn(`Song index ${songIndex} not found in playlist for ${libKey}`);
        return;
      }
      
      const song = playlist[songIndex];

      const li = document.createElement('li');
      li.className = 'library-playlist-item';

      li.innerHTML = `
  <img src="${song.cover}" class="libraryPlaylist-cover" loading="lazy">

  <div class="libraryPlaylist-text">
    <div class="libraryPlaylist-title">${song.title}</div>
    <div class="libraryPlaylist-artist">${song.artist}</div>
  </div>

  <button class="options-btn">
    <svg viewBox="0 0 16 16" fill="#ffffff">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg>
  </button>
`;

const optionsBtn = li.querySelector('.options-btn');

optionsBtn.addEventListener('click', (e) => {
  e.stopPropagation();   // DO NOT play the song
  openSongOptionsPopup(optionsBtn, songIndex);

  
});


      li.addEventListener('click', () => {
        openPlaylistBtn.style.opacity = 1;
        bottomBar.style.opacity = 1;
   updatePlaylistLabel();
        usingLibraryQueue = true;
        
        playbackSource = libKey;

        // Find the index of this song in the current library queue
        const songPos = currentLibraryQueue.indexOf(songIndex);
        if (songPos !== -1) {
          libraryQueueIndex = songPos;
        } else {
          libraryQueueIndex = 0;
        }
        
        // Reset shuffle since we're using library order
        if (shuffle) {
          createLibraryShuffleQueue(libraryQueueIndex)
        }
        
        changeSong(songIndex);
      });

      libraryPlaylistEl.appendChild(li);
    });

    goToScreen(2); // Go to library playlist screen
  }

  // Function to open library playlist
  function openLibraryPlaylist(key) {
    buildLibraryPlaylist(key);
}

  document.querySelectorAll('.library-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.library;

    // get the image from the library tile
    const img = btn.querySelector('img').src;

    // animate + swap
    libraryPlaylistCover.classList.add('pop');
    libraryPlaylistCover.src = img;

    setTimeout(() => {
      libraryPlaylistCover.classList.remove('pop');
    }, 300);

    openLibraryPlaylist(key);
  });
});

});




// Check if device is desktop
let IS_DESKTOP = window.innerWidth >= window.innerHeight; 
const ASPECT_RATIO = window.innerWidth / window.innerHeight;
//old version of checking window.innerWidth >= 550 && window.innerWidth <= 1450 && window.innerHeight <= 800;


//change the app depending on wide screen or not
function updateCoverSize() {
  IS_DESKTOP = window.innerWidth >= window.innerHeight; 
  const nowPlayingImg = document.getElementById('cover');
  const playerContainer = document.querySelector('.player');
  const libraryPlaylist = document.querySelector('#libraryPlaylist');
  
  if (IS_DESKTOP) { //look...i dont even know what happened....
    nowPlayingImg.style.maxWidth = '315px';
    nowPlayingImg.style.marginBottom = '1.3rem';
    playerContainer.style.marginTop = '0px';
    libraryPlaylist.style.maxHeight = 'calc(100% - 58.5%)';
    coverWrapper.style.marginBottom = '4vh';
    realBottomBar.style.width = '99.3%';
    player.style.transform = 'translateX(11%)';
    player.style.width = '88%';
  } else if (ASPECT_RATIO > 2.1 && IS_DESKTOP) { //yeah why did i make these two else if??
    nowPlayingImg.style.maxWidth = '380px';
    nowPlayingImg.style.marginBottom = '1.5rem';
    playerContainer.style.marginTop = '20px';
    libraryPlaylist.style.maxHeight = 'calc(100% - 51.5%)';
    coverWrapper.style.marginBottom = '4vh';
    realBottomBar.style.width = '99.3%';
    player.style.transform = 'translateX(10%)';
    player.style.width = '90%';
  } else if (ASPECT_RATIO > 2.1 && !IS_DESKTOP) {
    nowPlayingImg.style.maxWidth = '400px';
    nowPlayingImg.style.marginBottom = '1.5rem';
    playerContainer.style.marginTop = '20px';
    libraryPlaylist.style.maxHeight = 'calc(100% - 51.5%)';
    coverWrapper.style.marginBottom = '4vh';
    player.style.transform = 'translateX(0%)';
    player.style.width = '100%';
  } else {
    nowPlayingImg.style.maxWidth = '400px';
    nowPlayingImg.style.marginBottom = '1.5rem';
    playerContainer.style.marginTop = '20px';
    libraryPlaylist.style.maxHeight = 'calc(100% - 51.5%)';
    coverWrapper.style.marginBottom = '4vh';
    player.style.transform = 'translateX(0%)';
    player.style.width = '100%';
  }
}

// Initial call
updateCoverSize();

// Update on window resize
window.addEventListener('resize', () => {
  const wasDesktop = IS_DESKTOP;
  IS_DESKTOP = window.innerWidth >= window.innerHeight;
  
  // Only update if the state changed
  if (wasDesktop !== IS_DESKTOP) {
    updateCoverSize();
  }
});

// Open queue screen
queueBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  queueScreen.classList.add('open');
  renderQueueUI();
});

// Close queue screen
closeQueueBtn.addEventListener('click', () => {
  queueScreen.classList.remove('open');
});

// Close queue screen when clicking outside
document.addEventListener('click', (e) => {
  if (queueScreen.classList.contains('open') && 
      !queueScreen.contains(e.target) && 
      !queueBtn.contains(e.target)) {
    queueScreen.classList.remove('open');
  }
});

// Render queue UI function
function renderQueueUI() {
  queueList.innerHTML = '';
  
  // Show current song first
  const currentItem = document.createElement('div');
  currentItem.className = 'queue-item active-queue-song';
  currentItem.innerHTML = `
    <img src="${playlist[currentSong].cover}" class="queue-cover">
    <div class="queue-text">
      <div>${playlist[currentSong].title} (Now Playing)</div>
      <div>${playlist[currentSong].artist}</div>
    </div>
  `;
  queueList.appendChild(currentItem);
  
  // Show queue items
  queue.forEach((songIndex, i) => {
    const song = playlist[songIndex];
    
    const item = document.createElement('div');
    item.className = 'queue-item';
    item.innerHTML = `
      <img src="${song.cover}" class="queue-cover">
      <div class="queue-text">
        <div>${song.title}</div>
        <div>${song.artist}</div>
      </div>
    `;
    
    item.addEventListener('click', () => {
      // Play this song from queue
      queueIndex = i;
      changeSong(songIndex);
      renderQueueUI(); // Refresh to update active state
    });
    
    queueList.appendChild(item);
  });
  
  // If queue is empty, show message
  if (queue.length === 0) {
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'queue-empty';
    emptyMsg.textContent = 'Queue is empty. Add songs from the playlist.';
    emptyMsg.style.textAlign = 'center';
    emptyMsg.style.opacity = '0.6';
    emptyMsg.style.padding = '40px 20px';
    queueList.appendChild(emptyMsg);
  }
}

// Update the queue when songs change
audio.addEventListener('play', renderQueueUI);




// queue
let queue = [];
let queueIndex = 0; // position inside queue

// music popup
let currentOptionsPopup = null;

function openSongOptionsPopup(button, songIndex) {
  // Remove old popup if it exists
  if (currentOptionsPopup) {
    currentOptionsPopup.remove();
    currentOptionsPopup = null;
  }

  const popup = document.createElement('div');
  popup.className = 'song-options-popup';
  popup.innerHTML = `
    <div class="option-item" onclick="addToQueue(${songIndex})">Add to Queue</div>
  `;

  document.body.appendChild(popup);

  // Position next to the button
  const rect = button.getBoundingClientRect();
  popup.style.top = rect.top + window.scrollY + "px";
  popup.style.left = rect.left - 150 + "px";

  currentOptionsPopup = popup;

  // Close when clicking elsewhere
  setTimeout(() => {
    document.addEventListener('click', closeOptionsPopup, { once: true });
  }, 0);
}

function closeOptionsPopup() {
  if (currentOptionsPopup) {
    currentOptionsPopup.remove();
    currentOptionsPopup = null;
  }
}


// ================= VISUALIZER (NO AUDIOCONTEXT) =================

let visualizerBars = [];
let visualizerRunning = false;
let currentBarColor = "#ffffff";
let visualizerRAF = null;

// cache bars once
function initVisualizer() {
  if (visualizerBars.length) return;

  visualizerBars = Array.from(document.querySelectorAll(".visualizer .bar"));
}

// fake “energy” generator (smooth + musical)
function getEnergy(time, index) {
  const base =
    Math.sin(time * 2 + index) * 0.5 +
    Math.sin(time * 0.9 + index * 2) * 0.3 +
    Math.random() * 0.1;

  return Math.max(0, base);
}

function animateVisualizer() {
  if (!visualizerRunning) return;

  const time = audio.currentTime;

  visualizerBars.forEach((bar, i) => {
    const energy = getEnergy(time, i);
    const height = 5 + energy * 40;

    bar.style.height = `${height}%`;

    const boost = energy * 55;
    const dark  = shadeHex(currentBarColor, -30 + boost * 0.2);
    const mid   = shadeHex(currentBarColor,   0 + boost * 0.3);
    const light = shadeHex(currentBarColor,  40 + boost * 0.4);

    bar.style.background =
      `linear-gradient(to top, ${dark}, ${mid}, ${light})`;
  });

  visualizerRAF = requestAnimationFrame(animateVisualizer);
}

function startVisualizer() {

  initVisualizer();
  if (visualizerRunning) return;

  visualizerRunning = true;
  visualizer.classList.add("active");

  visualizerBars.forEach(bar => {
    bar.style.height = "5%";
  });

  animateVisualizer();
}

function stopVisualizer() {

  visualizerRunning = false;
  visualizer.classList.remove("active");

  if (visualizerRAF) {
    cancelAnimationFrame(visualizerRAF);
    visualizerRAF = null;
  }

  visualizerBars.forEach(bar => {
    bar.style.height = "5%";
    bar.style.background = "";
  });
}





// umm
audio.addEventListener('play', () => {
  miniPlayer.classList.add('visible');
  openPlaylistBtn.style.opacity = 1;
  bottomBar.style.opacity = 1;
   updatePlaylistLabel();
});

miniPlay.addEventListener('click', e => {
  e.stopPropagation();
  audio.play();
});

miniPause.addEventListener('click', e => {
  e.stopPropagation();
  audio.pause();
});

audio.addEventListener('play', () => {
  miniPlayer.classList.add('visible');
  miniPlay.style.display = 'none';
  miniPause.style.display = 'block';
  openPlaylistBtn.style.opacity = 1;
  bottomBar.style.opacity = 1;
   updatePlaylistLabel();
});

audio.addEventListener('pause', () => {
  miniPlay.style.display = 'block';
  miniPause.style.display = 'none';
});

queue.forEach((songIndex, i) => {
  const song = playlist[songIndex];

  const item = document.createElement('div');
  item.className = 'queue-item';

  if (i === queueIndex) {
    item.classList.add('active-queue-song');
  }

  item.innerHTML = `
    <img src="${song.cover}" class="queue-cover">
    <div class="queue-text">
      <div>${song.title}</div>
      <div>${song.artist}</div>
    </div>
  `;

  item.addEventListener('click', () => {
    queueIndex = i;
    changeSong(songIndex);
    renderQueueUI();
  });

  queueContent.appendChild(item);
});




// --- state ---
let currentSong = 0;
let isPlaying = false;
let repeat = false;
let shuffle = false;
let playlistVisible = true;
let autoScrollEnabled = true;


// shuffle queue + position
let shuffleQueue = [];
let shuffleIndex = -1;
let libraryShuffleQueue = [];
let libraryShuffleIndex = -1;


// --- shuffle helpers ---
function createShuffleQueue(startIndex = currentSong) {
  shuffleQueue = Array.from({ length: playlist.length }, (_, i) => i);

  // Fisher–Yates shuffle
  for (let i = shuffleQueue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleQueue[i], shuffleQueue[j]] = [shuffleQueue[j], shuffleQueue[i]];
  }

  // make sure currentSong is at the front, then start after it
  const pos = shuffleQueue.indexOf(startIndex);
  if (pos > -1) {
    [shuffleQueue[0], shuffleQueue[pos]] = [shuffleQueue[pos], shuffleQueue[0]];
  }
  shuffleIndex = 0;
}

function getNextShuffleSong() {
  if (shuffleIndex + 1 >= shuffleQueue.length) {
    createShuffleQueue(currentSong); // reshuffle when done
  }
  shuffleIndex++;
  return shuffleQueue[shuffleIndex];
}

function getPrevShuffleSong() {
  if (shuffleIndex > 0) {
    shuffleIndex--;
    return shuffleQueue[shuffleIndex];
  }
  return currentSong; // stay if no prev
}

function createLibraryShuffleQueue(startIndexInLibrary) {
  libraryShuffleQueue = [...currentLibraryQueue];

  // Fisher–Yates
  for (let i = libraryShuffleQueue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [libraryShuffleQueue[i], libraryShuffleQueue[j]] =
      [libraryShuffleQueue[j], libraryShuffleQueue[i]];
  }

  // Put current song first
  const currentSongIndex = currentLibraryQueue[startIndexInLibrary];
  const pos = libraryShuffleQueue.indexOf(currentSongIndex);

  if (pos > -1) {
    [libraryShuffleQueue[0], libraryShuffleQueue[pos]] =
      [libraryShuffleQueue[pos], libraryShuffleQueue[0]];
  }

  libraryShuffleIndex = 0;
}

function getNextLibraryShuffleSong() {
  if (libraryShuffleIndex + 1 >= libraryShuffleQueue.length) {
    createLibraryShuffleQueue(libraryQueueIndex);
  }
  libraryShuffleIndex++;
  return libraryShuffleQueue[libraryShuffleIndex];
}

function getPrevLibraryShuffleSong() {
  if (libraryShuffleIndex > 0) {
    libraryShuffleIndex--;
    return libraryShuffleQueue[libraryShuffleIndex];
  }
  return currentSong;
}

const libraryBigPlay = document.getElementById('libraryBigPlay');
const libraryBigShuffle = document.getElementById('libraryBigShuffle');
let bigShuffle = false;

libraryBigPlay.addEventListener('click', () => {
  currentPlaylist = playbackSource;
  if (bigShuffle) {
      if (!currentLibraryQueue.length) return;
  openPlaylistBtn.style.opacity = 1;
  bottomBar.style.opacity = 1;

  currentPlaylist = playbackSource;
  updatePlaylistLabel();

  usingLibraryQueue = true;
  shuffle = true;
  setToggleButtonState(shuffleBtn, true);

  // --- create a true random order of the library ---
  libraryShuffleQueue = [...currentLibraryQueue];

  for (let i = libraryShuffleQueue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [libraryShuffleQueue[i], libraryShuffleQueue[j]] =
      [libraryShuffleQueue[j], libraryShuffleQueue[i]];
  }

  // Start at the first random song
  libraryShuffleIndex = 0;

  const firstRandomSong = libraryShuffleQueue[0];

  // Sync libraryQueueIndex to the random song
  libraryQueueIndex = currentLibraryQueue.indexOf(firstRandomSong);

  changeSong(firstRandomSong);
  } else {
    currentPlaylist = playbackSource;
  if (!currentLibraryQueue.length) return;
  currentPlaylist = playbackSource;
  openPlaylistBtn.style.opacity = 1;
  bottomBar.style.opacity = 1;
  updatePlaylistLabel();

  usingLibraryQueue = true;
  shuffle = false;
  setToggleButtonState(shuffleBtn, false);

  libraryQueueIndex = 0;
  const firstSongIndex = currentLibraryQueue[0];

  changeSong(firstSongIndex);
  };
});


libraryBigShuffle.addEventListener('click', () => {
  if(!bigShuffle) {
    bigShuffle = true;
    libraryBigShuffle.style.color = "#49f566";
  } else {
    bigShuffle = false;
    libraryBigShuffle.style.color = "white";
  };
});








// --- load & play ---
function loadSong(index) {
  const song = playlist[index];
  
const bgVideo = document.getElementById('bg-video');
const videoOverlay = document.getElementById('video-overlay');
const bgOverlay = document.getElementById('background-overlay');
const nowPlayingCover = document.getElementById('cover');

updateCoverSize();

if (song.video && !IS_DESKTOP) {
  // show video
  bgVideo.src = song.video;
  bgVideo.muted = true;   // allow autoplay
  bgVideo.loop = true;    // optional
  bgVideo.style.display = 'block';
  videoOverlay.style.background = 'linear-gradient(to bottom, #00000026, #000000a5 80%, #121212)'; 
  bgOverlay.style.background = 'linear-gradient(to bottom, #121212, #121212 20%)';

  bgVideo.onloadedmetadata = () => {
    const videoWidth = bgVideo.videoWidth;
    const videoHeight = bgVideo.videoHeight;

    if (videoWidth && videoHeight) {
        const ratio = videoWidth / videoHeight;

        if (videoWidth < window.innerWidth) {
            bgVideo.style.width = window.innerWidth + 'px';
            bgVideo.style.height = (window.innerWidth / ratio) + 'px';
        } else {
            bgVideo.style.width = "100%";
            bgVideo.style.height = "100%";
        }
    }
};

  bgVideo.load();
  bgVideo.play().catch(() => {});

  visualizer.style.opacity = visualizerVisible ? '0' : '0';

  requestAnimationFrame(() => bgVideo.classList.add('show'));

  seekBar.style.opacity = 1;

  // fade out cover
  //nowPlayingCover.style.transition = 'opacity 0.5s ease';
  nowPlayingCover.style.opacity = '0';

  videoCover.style.opacity = '1';
  titleWrapper.classList.add('move-left');
  artist.classList.add('move-left');
  updateTitleScrollVideo();

  // stop visualizer
  visualizer.classList.remove('active');
  stopVisualizer();
} else {
  updateTitleScroll();
  videoCover.style.opacity = '0';
  titleWrapper.classList.remove('move-left');
  artist.classList.remove('move-left');
  // hide video
  bgVideo.classList.remove('show');
  setTimeout(() => bgVideo.style.display = 'none', 500);
  videoOverlay.style.background = 'linear-gradient(to bottom,#6e6e6e4a, #0000007a 80%)';
  bgOverlay.style.background = 'linear-gradient(to bottom, #0000007a, #121212 32%)';

  seekBar.style.opacity = 1;

  visualizer.style.opacity = visualizerVisible ? '0.15' : '0';

  // fade cover back in
  setTimeout(() => nowPlayingCover.style.opacity = '1', 600);

  // start visualizer
}

  loadLyricsPreview(song);

  audio.src = song.src;

  audio.load();

  
  title.textContent = song.title;
  artist.textContent = song.artist;
  openPlaylistBtn.style.opacity = 1;
  bottomBar.style.opacity = 1;
   updatePlaylistLabel();

  // Update cover immediately
  cover.src = song.cover;
  videoCover.src = song.cover;
  
  // Mini player
  miniCover.src = song.cover;
  miniTitle.textContent = song.title;
  miniArtist.textContent = song.artist;
  updateActiveSong();

  getSongColors(song.cover).then(colors => {
  if(IS_DESKTOP){
    updatePlaylistGradient(colors.dark);
    currentBarColor = colors.light;
    lyricsSection.style.background = colors.vibrant;
    lyricsScreen.style.background = colors.vibrant
    openLyricsBtn.style.color = colors.vibrant;
  } else {
    updatePlaylistGradient(colors.dark);
    currentBarColor = colors.light;
    lyricsSection.style.background = colors.vibrant;
    lyricsScreen.style.background = colors.vibrant;
    openLyricsBtn.style.color = colors.vibrant;
  };
});

if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: song.title,
    artist: song.artist,
    artwork: [
      { src: song.cover, sizes: '96x96', type: 'image/jpeg' },
      { src: song.cover, sizes: '128x128', type: 'image/jpeg' },
      { src: song.cover, sizes: '192x192', type: 'image/jpeg' },
      { src: song.cover, sizes: '256x256', type: 'image/jpeg' },
      { src: song.cover, sizes: '384x384', type: 'image/jpeg' },
      { src: song.cover, sizes: '512x512', type: 'image/jpeg' }
    ]
  });

  // Enable playback controls on lock screen
  navigator.mediaSession.setActionHandler('play', () => audio.play());
  navigator.mediaSession.setActionHandler('pause', () => audio.pause());
  navigator.mediaSession.setActionHandler('previoustrack', () => prevBtn.click());
  navigator.mediaSession.setActionHandler('nexttrack', () => nextBtn.click());
}
}


function shadeHex(hex, amount) {
  hex = hex.replace("#", "");

  const hasAlpha = hex.length === 8;

  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);
  let a = hasAlpha ? parseInt(hex.slice(6, 8), 16) / 255 : 1;

  r = Math.min(255, Math.max(0, r + amount));
  g = Math.min(255, Math.max(0, g + amount));
  b = Math.min(255, Math.max(0, b + amount));

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}


function changeSong(index, { animate = true, direction = "next", autoPlay = true } = {}) {
  // Rebuild queue from this song onward (INDEXES)
//queue = [];
//for (let i = index + 1; i < playlist.length; i++) {
  //queue.push(i);
//}
//queueIndex = -1;

currentPlaylist = playbackSource;
  updatePlaylistLabel();
if (usingLibraryQueue && currentLibraryQueue.length) {
    // keep currentPlaylist as-is (library name already set)
  } else {
    currentPlaylist = "All Songs";
    updatePlaylistLabel();
  }

// If we're in library mode but clicked a song not in the library queue, exit library mode
  if (usingLibraryQueue && currentLibraryQueue.length > 0) {
    if (!currentLibraryQueue.includes(index)) {
      usingLibraryQueue = false;
      libraryQueueIndex = 0;
    }
  }  


  currentSong = index;
  
  // --- keep library queue in sync with the real song ---
if (usingLibraryQueue && currentLibraryQueue.length) {
  const pos = currentLibraryQueue.indexOf(index);

  if (pos !== -1) {
    libraryQueueIndex = pos;
  } else {
    // user escaped library by picking a song not in it
    usingLibraryQueue = false;
  }
}


  const song = playlist[index];

  loadLyricsPreview(song);

  // IMMEDIATE UI UPDATE (NO DELAYS)
  title.textContent = song.title;
  artist.textContent = song.artist;
  miniTitle.textContent = song.title;
  miniArtist.textContent = song.artist;
  //updateTitleScroll();

  miniCover.src = song.cover;
  videoCover.src = song.cover;
  updateActiveSong();

  getSongColors(song.cover).then(colors => {
  if(IS_DESKTOP){
    updatePlaylistGradient(colors.dark);
    currentBarColor = colors.light;
    lyricsSection.style.background = colors.vibrant;
    lyricsScreen.style.background = colors.vibrant
    openLyricsBtn.style.color = colors.vibrant;
  } else {
    updatePlaylistGradient(colors.dark);
    currentBarColor = colors.light;
    lyricsSection.style.background = colors.vibrant;
    lyricsScreen.style.background = colors.vibrant
    openLyricsBtn.style.color = colors.vibrant;
  };
});

  // === AUDIO SETUP ===
  audio.src = song.src;
  audio.load();
  
const bgVideo = document.getElementById('bg-video');
const videoOverlay = document.getElementById('video-overlay');
const bgOverlay = document.getElementById('background-overlay');
const nowPlayingCover = document.getElementById('cover');

updateCoverSize();

if (song.video && !IS_DESKTOP) {
  // show video
  bgVideo.src = song.video;
  bgVideo.muted = true;   // allow autoplay
  bgVideo.loop = true;    // optional
  bgVideo.style.display = 'block';
  videoOverlay.style.background = 'linear-gradient(to bottom, #00000026, #000000a5 80%, #121212)'; 
  bgOverlay.style.background = 'linear-gradient(to bottom, #121212, #121212 20%)';

  bgVideo.onloadedmetadata = () => {
    const videoWidth = bgVideo.videoWidth;
    const videoHeight = bgVideo.videoHeight;

    if (videoWidth && videoHeight) {
        const ratio = videoWidth / videoHeight;

        if (videoWidth < window.innerWidth) {
            bgVideo.style.width = window.innerWidth + 'px';
            bgVideo.style.height = (window.innerWidth / ratio) + 'px';
        } else {
            bgVideo.style.width = "100%";
            bgVideo.style.height = "100%";
        }
    }
};

  bgVideo.load();
  bgVideo.play().catch(() => {});

  visualizer.style.opacity = visualizerVisible ? '0' : '0';

  requestAnimationFrame(() => bgVideo.classList.add('show'));

  seekBar.style.opacity = 1;

  // fade out cover
  //nowPlayingCover.style.transition = 'opacity 0.5s ease';
  nowPlayingCover.style.opacity = '0';

  videoCover.style.opacity = '1';
  titleWrapper.classList.add('move-left');
  artist.classList.add('move-left');
  updateTitleScrollVideo();

  // stop visualizer
  visualizer.classList.remove('active');
  stopVisualizer();
} else {
  updateTitleScroll();
  videoCover.style.opacity = '0';
  titleWrapper.classList.remove('move-left');
  artist.classList.remove('move-left');
  // hide video
  bgVideo.classList.remove('show');
  setTimeout(() => bgVideo.style.display = 'none', 500);
  videoOverlay.style.background = 'linear-gradient(to bottom,#6e6e6e4a, #0000007a 80%)';
  bgOverlay.style.background = 'linear-gradient(to bottom, #0000007a, #121212 32%)';

  seekBar.style.opacity = 1;

  visualizer.style.opacity = visualizerVisible ? '0.15' : '0';

  // fade cover back in
  setTimeout(() => nowPlayingCover.style.opacity = '1', 600);

  // animate cover if needed
  if (animate) animateCoverChange(song.cover, direction);
  else cover.src = song.cover;

  // start visualizer
  startVisualizer();
}


  // Set up audio to play when ready (only if autoPlay is true)
    if (autoPlay) {
    audio.play().catch(() => {});
  }

    if (animate) {
    animateCoverChange(song.cover, direction);
  } else {
    cover.src = song.cover;
  }

if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: song.title,
    artist: song.artist,
    artwork: [
      { src: song.cover, sizes: '96x96', type: 'image/jpeg' },
      { src: song.cover, sizes: '128x128', type: 'image/jpeg' },
      { src: song.cover, sizes: '192x192', type: 'image/jpeg' },
      { src: song.cover, sizes: '256x256', type: 'image/jpeg' },
      { src: song.cover, sizes: '384x384', type: 'image/jpeg' },
      { src: song.cover, sizes: '512x512', type: 'image/jpeg' }
    ]
  });

  // Enable playback controls on lock screen
  navigator.mediaSession.setActionHandler('play', () => audio.play());
  navigator.mediaSession.setActionHandler('pause', () => audio.pause());
  navigator.mediaSession.setActionHandler('previoustrack', () => prevBtn.click());
  navigator.mediaSession.setActionHandler('nexttrack', () => nextBtn.click());
}

updateActiveSong();

// Build queue from this point forward
//old code, whatever you do...DO NOT UNCOMMENT THESE LINES
  //queue = playlist.slice(index);
  //queueIndex = 0;

  //loadSong(queue[queueIndex]);
  //audio.play();

}

function playSong(index) {
  currentSong = index;
  loadSong(index);
  
  const playPromise = audio.play();
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
}

// --- build playlist UI/searchbar ---
function buildPlaylistUI(filterText = "") {
  playlistEl.innerHTML = "";
  const lowerFilter = filterText.toLowerCase();

  playlist.forEach((song, index) => {
    if (song.title.toLowerCase().includes(lowerFilter) || 
        song.artist.toLowerCase().includes(lowerFilter)) 
      {
      const li = document.createElement('li');
       li.classList.add('playlist-item');

      li.innerHTML = `
      <img src="${song.cover}" class="playlist-cover" loading="lazy">
  
      <div class="playlist-text">
      <div class="playlist-title">${song.title}</div> 
      <div class="playlist-artist">${song.artist}</div>
      </div>

      <button class="options-btn">
      <svg viewBox="0 0 16 16" fill="#ffffff">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
      </button>
      `;

      const optionsBtn = li.querySelector('.options-btn');

      optionsBtn.addEventListener('click', (e) => {  
        e.stopPropagation();          // PREVENT song from playing
        openSongOptionsPopup(optionsBtn, index);
      });



      li.addEventListener('click', () => {
        openPlaylistBtn.style.opacity = 1;
        bottomBar.style.opacity = 1;
   updatePlaylistLabel();
  usingLibraryQueue = false;

  playbackSource = "All Songs";

  changeSong(index);
  if (shuffle) createShuffleQueue(index);
});

      playlistEl.appendChild(li);
    }
  });

  updateActiveSong();
}

// build on load
buildPlaylistUI();

// hook up search
searchBar.addEventListener('input', () => {
  buildPlaylistUI(searchBar.value);
});

timerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  timerScreen.classList.add('open');
});

function hardPauseMusic() {
  audio.pause();           // stop playback
  isPlaying = false;      // sync your state
}

// ================= SLEEP TIMER (COMPLETELY ISOLATED) =================

let sleepTimerId = null;
let sleepTimerEnd = null;

function startSleepTimer(minutes) {
  const ms = minutes * 60 * 1000;

  sleepTimerEnd = Date.now() + ms;

  sleepTimerId = setTimeout(() => {
    hardPauseMusic();            // ONLY thing it does
    timerBtn.classList.remove('active');

    sleepTimerId = null;
    sleepTimerEnd = null;
  }, ms);

  timerBtn.classList.add('active');
}

function cancelSleepTimer() {
  if (!sleepTimerId) return;

  clearTimeout(sleepTimerId);
  sleepTimerId = null;
  sleepTimerEnd = null;

  timerBtn.classList.remove('active');
}

startTimerBtn.addEventListener('click', () => {
  const minutes = parseInt(timerMinutesInput.value, 10);
  if (isNaN(minutes) || minutes < 1) return;

  cancelSleepTimer();      // clear any old one
  startSleepTimer(minutes);

  timerScreen.classList.remove('open');
});

cancelTimerBtn.addEventListener('click', () => {
  cancelSleepTimer();
  timerScreen.classList.remove('open');
});



document.addEventListener('click', (e) => {
  if (!timerScreen.contains(e.target) && !timerBtn.contains(e.target)) {
    timerScreen.classList.remove('open');
  }
});


// --- update active playlist row ---
function updateActiveSong() {

  // -------- MAIN PLAYLIST --------
  const mainItems = document.querySelectorAll('#playlist li');
  mainItems.forEach((item, i) => {
    item.classList.toggle('active', i === currentSong);

    if (i === currentSong && autoScrollEnabled) {
      const offset = 320;
      playlistEl.scrollTo({
        top: item.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });


  // -------- LIBRARY PLAYLIST --------
  const libraryItems = document.querySelectorAll('#libraryPlaylist li');

  libraryItems.forEach((item, i) => {
    const songIndex = currentLibraryQueue[i];

    item.classList.toggle('active', songIndex === currentSong);

    if (songIndex === currentSong && autoScrollEnabled) {
      const offset = 420;
      libraryPlaylistEl.scrollTo({
        top: item.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });

}


// --- time formatting ---
function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
}

// --- audio events ---
togglePlaylistBtn.addEventListener('click', () => {
  playlistVisible = !playlistVisible;
  autoScrollEnabled = playlistVisible;

  playlistWrapper.classList.toggle('playlist-hidden', !playlistVisible);
  togglePlaylistBtn.classList.toggle('mode-active', !playlistVisible);
});


audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  
  const progress = (audio.currentTime / audio.duration) * 100 || 0;

  seekBar.value = progress;
  bottomBar.value = progress;

  seekBar.style.background = `linear-gradient(
    to right,
    white 0%,
    white ${progress}%,
    #8181818d ${progress}%,
    #8181818d 100%
  )`;

  bottomBar.style.background = `linear-gradient(to right,
    white 0%,
    white ${progress}%,
    #87878794 ${progress}%,
    #87878794 100%
  )`;

  seekBar.value = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  bottomBar.value = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = `- ${formatTime(audio.duration || 0)}`;
});

seekBar.addEventListener("input", () => {
  const seekTo = (seekBar.value / 100) * audio.duration;
  audio.currentTime = seekTo;
});

bottomBar.addEventListener("input", () => {
  const seekTo = (bottomBar.value / 100) * audio.duration;
  audio.currentTime = seekTo;
});

audio.addEventListener("play", () => {
  isPlaying = true;
  setPlayIcon(true);
  startVisualizer();
  video.play();
  miniPlayer.classList.add('visible');
});


seekBar.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
  }
});

bottomBar.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (seekBar.value / 100) * audio.duration; //SHOULD I MATCH TO SEEKBAR VALUE OR BOTTOMBAR VALUE
  }
})


audio.addEventListener("pause", () => {
  isPlaying = false;
  setPlayIcon(false);
  stopVisualizer();
  //video.pause(); so turns out spotify never pauses canvas video, so yeah :I
});


audio.addEventListener("ended", () => {
  stopVisualizer();

  if (repeat) {
    audio.currentTime = 0;
    audio.play();
    return;
  }

  // Simulate next button click to use the same logic
  nextBtn.click();
});
/*  stopVisualizer();

  if (repeat) {
    audio.currentTime = 0;
    audio.play();
    return;
  }

  const next = shuffle
    ? getNextShuffleSong()
    : (currentSong + 1) % playlist.length;

  changeSong(next);
});*/

// --- controls ---
playBtn.addEventListener('click', togglePlay);

nextBtn.addEventListener('click', () => {
  // 1) Queue always has highest priority
  if (queueIndex + 1 < queue.length) {
    queueIndex++;
    changeSong(queue[queueIndex]);
    return;
  }

  queue = [];
  queueIndex = -1;

  // 2) Library playlist has second priority
if (usingLibraryQueue && currentLibraryQueue.length > 0) {

  // LIBRARY SHUFFLE TAKES PRIORITY
  if (shuffle) {
    const nextIndex = getNextLibraryShuffleSong();
    changeSong(nextIndex);
    return;
  }

  // Normal library order
  libraryQueueIndex++;

  if (libraryQueueIndex >= currentLibraryQueue.length) {
    if (repeat) {
      libraryQueueIndex = 0;
    } else {
      usingLibraryQueue = false;
      const nextIndex = shuffle
        ? getNextShuffleSong()
        : (currentSong + 1) % playlist.length;
      changeSong(nextIndex);
      return;
    }
  }

  const nextIndex = currentLibraryQueue[libraryQueueIndex];
  changeSong(nextIndex);
  return;
}


  // 3) Normal behavior (all songs)
  const nextIndex = shuffle
    ? getNextShuffleSong()
    : (currentSong + 1) % playlist.length;

  changeSong(nextIndex);
});


prevBtn.addEventListener('click', () => {
  // 1) Check if we're in library queue mode
  // 1) Library queue
if (usingLibraryQueue && currentLibraryQueue.length > 0) {

  if (shuffle) {
    const prevIndex = getPrevLibraryShuffleSong();
    changeSong(prevIndex, { direction: "prev" });
    return;
  }

  if (libraryQueueIndex > 0) {
    libraryQueueIndex--;
    const prevIndex = currentLibraryQueue[libraryQueueIndex];
    changeSong(prevIndex, { direction: "prev" });
    return;
  } else if (repeat) {
    libraryQueueIndex = currentLibraryQueue.length - 1;
    const prevIndex = currentLibraryQueue[libraryQueueIndex];
    changeSong(prevIndex, { direction: "prev" });
    return;
  } else {
    usingLibraryQueue = false;
  }
}

  
  // 2) Normal behavior (all songs)
  let prevIndex;
  if (shuffle) {
    prevIndex = getPrevShuffleSong();
  } else {
    prevIndex = (currentSong - 1 + playlist.length) % playlist.length;
  }
  changeSong(prevIndex, { animate: true, direction: "prev" });
});

function addToQueue(songIndex) {
  queue.push(songIndex);
  renderQueueUI();
  if (!queue.includes(songIndex)) {
    queue.push(songIndex);
    renderQueueUI();
  }
}



// --- repeat & shuffle toggles ---
function setToggleButtonState(button, enabled) {
  if (enabled) {
    button.classList.add('mode-active');
    button.setAttribute('aria-pressed', 'true');
  } else {
    button.classList.remove('mode-active');
    button.setAttribute('aria-pressed', 'false');
  }
}

shuffleBtn.addEventListener('click', () => {
  shuffle = !shuffle;
  if (shuffle) {
    createShuffleQueue(currentSong);
  }
  setToggleButtonState(shuffleBtn, shuffle);
});

repeatBtn.addEventListener('click', () => {
  repeat = !repeat;
  setToggleButtonState(repeatBtn, repeat);
});

// --- play/pause icon ---
function setPlayIcon(isNowPlaying) {
  playBtn.innerHTML = isNowPlaying
    ? `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.07612 8.61732C8 8.80109 8 9.03406 8 9.5V14.5C8 14.9659 8 15.1989 8.07612 15.3827C8.17761 15.6277 8.37229 15.8224 8.61732 15.9239C8.80109 16 9.03406 16 9.5 16C9.96594 16 10.1989 16 10.3827 15.9239C10.6277 15.8224 10.8224 15.6277 10.9239 15.3827C11 15.1989 11 14.9659 11 14.5V9.5C11 9.03406 11 8.80109 10.9239 8.61732C10.8224 8.37229 10.6277 8.17761 10.3827 8.07612C10.1989 8 9.96594 8 9.5 8C9.03406 8 8.80109 8 8.61732 8.07612C8.37229 8.17761 8.17761 8.37229 8.07612 8.61732ZM13.0761 8.61732C13 8.80109 13 9.03406 13 9.5V14.5C13 14.9659 13 15.1989 13.0761 15.3827C13.1776 15.6277 13.3723 15.8224 13.6173 15.9239C13.8011 16 14.0341 16 14.5 16C14.9659 16 15.1989 16 15.3827 15.9239C15.6277 15.8224 15.8224 15.6277 15.9239 15.3827C16 15.1989 16 14.9659 16 14.5V9.5C16 9.03406 16 8.80109 15.9239 8.61732C15.8224 8.37229 15.6277 8.17761 15.3827 8.07612C15.1989 8 14.9659 8 14.5 8C14.0341 8 13.8011 8 13.6173 8.07612C13.3723 8.17761 13.1776 8.37229 13.0761 8.61732Z" fill="#ffffff"></path> </g></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#ffffff"></path> </g></svg>`;

      // Update mini-player icons
  if (isNowPlaying) {
    miniPlay.style.display = 'none';
    miniPause.style.display = 'block';
  } else {
    miniPlay.style.display = 'block';
    miniPause.style.display = 'none';
  }
}

openPlaylistBtn.addEventListener("click", () => {
  // force browser to register closed state before opening
  if (!playlistSheet.classList.contains("open")) {
    playlistSheet.getBoundingClientRect();
  }

  playlistSheet.classList.toggle("open");
});

/* close playlist when menu button is pressed */
togglePlaylistBtn.addEventListener("click", () => {
  playlistSheet.classList.remove("open");
});

// CHANGE SONG COVER ANIMATION THINGYMABOB
function animateCoverChange(newCoverSrc, direction = "next", callback) {
  const cover = document.getElementById("cover");
  const slideOutClass = direction === "next" ? "slide-out-left" : "slide-out-right";
  const slideInClass = direction === "next" ? "slide-in-right" : "slide-in-left";

  // 1. Slide OLD cover out
  cover.classList.add(slideOutClass);

  setTimeout(() => {
    // 2. Freeze transitions and move off-screen opposite side
    cover.classList.add("no-transition");
    cover.classList.remove(slideOutClass);

    // 3. Change the image while off-screen
    cover.src = newCoverSrc;
    videoCover.src = newCoverSrc;

    // 4. Position new image off-screen on the opposite side
    cover.classList.add(slideInClass);

    // Force browser to commit layout
    cover.getBoundingClientRect();

    // 5. Re-enable transition and slide in
    requestAnimationFrame(() => {
      cover.classList.remove("no-transition");
      cover.classList.remove(slideInClass);

      // 6. Call callback after slide-in finishes
      if (callback) callback();
    });

  }, 550); // match CSS slide-out duration
}

let visualizerVisible = true;

visualizer.addEventListener('click', () => {
  visualizerVisible = !visualizerVisible;

  if (visualizerVisible) {
    visualizer.classList.remove('hidden');
  } else {
    visualizer.classList.add('hidden');
  }
});


//HORIZONTAL SWIPING BUT KINDA ACTS WEIRD SO WE'LL IGNORE THIS FOR NOW
/*const viewport = document.querySelector('.screen-viewport');
const track = document.querySelector('.screen-track');

let currentIndex = 1; // start on All Songs Screen
let startX = 0;
let currentX = 0;
let isDragging = false;
let isHorizontalSwipe = false;

const totalScreens = document.querySelectorAll('.screen').length;

function setTranslate(x, animate = false) {
  track.style.transition = animate ? 'transform 0.45s cubic-bezier(.25,.8,.25,1)' : 'none';
  track.style.transform = `translateX(${x}px)`;
}

function goToScreen(index) {
  currentIndex = Math.max(0, Math.min(index, totalScreens - 1));
  const offset = -currentIndex * window.innerWidth;
  setTranslate(offset, true);

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (currentIndex === 0) navPlaylists.classList.add('active');
  if (currentIndex === 1) navAll.classList.add('active');
}

/* ---------- TOUCH EVENTS ---------- */

/*viewport.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  currentX = startX;
  isDragging = true;
  isHorizontalSwipe = false;
  track.style.transition = 'none';
}, { passive: true });

viewport.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const touchX = e.touches[0].clientX;
  const deltaX = touchX - startX;
  const deltaY = e.touches[0].clientY - (e.touches[0].clientY);

  // Detect horizontal intent
  if (!isHorizontalSwipe) {
    if (Math.abs(deltaX) > 10) {
      isHorizontalSwipe = true;
    } else {
      return;
    }
  }

  const baseOffset = -currentIndex * window.innerWidth;
  setTranslate(baseOffset + deltaX);
}, { passive: true });

viewport.addEventListener('touchend', (e) => {
  if (!isDragging) return;

  const deltaX = e.changedTouches[0].clientX - startX;
  const threshold = window.innerWidth * 0.2;

  if (deltaX > threshold) {
    goToScreen(currentIndex - 1);
  } else if (deltaX < -threshold) {
    goToScreen(currentIndex + 1);
  } else {
    goToScreen(currentIndex);
  }

  isDragging = false;
});*/



// --- init ---
queueIndex = -1;

currentSong = Math.floor(Math.random() * playlist.length);

// Pull player screen up FIRST
if (playlistVisible) {
  togglePlaylistBtn.click();
}

// Now load the song
loadSong(currentSong);

// Enable shuffle
shuffleBtn.click();

// Open playlist sheet
playlistSheet.classList.add("open");

// Finish UI
updateActiveSong();
setPlayIcon(false);

playbackSource = "All Songs";
currentPlaylist = "Worship Songs";
updatePlaylistLabel();

getSongColors(song.cover).then(colors => {
  if(IS_DESKTOP){
    updatePlaylistGradient(colors.dark);
    currentBarColor = colors.light;
    lyricsSection.style.background = colors.vibrant;
    lyricsScreen.style.background = colors.vibrant;
    openLyricsBtn.style.color = colors.vibrant;
  } else {
    updatePlaylistGradient(colors.dark);
    currentBarColor = colors.light;
    lyricsSection.style.background = colors.vibrant;
    lyricsScreen.style.background = colors.vibrant
    openLyricsBtn.style.color = colors.vibrant;
  };
});

window.addEventListener('resize', updateTitleScroll);
