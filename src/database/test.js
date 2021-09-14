const Database = require('./db')
const createProffy = require ('./createProffy')

Database.then( async (db) => {
     //Inserir dados

     proffyValue = {
        name:"Maik Brito",
        avatar: "https://avatars.githubusercontent.com/u/6643122?v=4", 
        whatsapp:"8998799090", 
        bio:"Entusiasta das melhores tecnologias de quimica avançada.<br><br>Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por ima das minhas explosões.",
     }

     classValue = {
        subject:1,
        cost:"20",
       // o proffy id virá pelo banco de dados
     }

     classScheduleValues = [
         //class_id virá pelo banco de dados, após cadastrarmos a class
         {
            weekday:1, 
            time_from:720, 
            time_to:1220
         },
         {
            weekday:0, 
            time_from:520, 
            time_to:1220
         }
     ]

     //await createProffy(db, {proffyValue, classValue, classScheduleValues})

     //Consultar os dados inseridos 

     //todos os proffys 
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys =  await db.all(`
          SELECT classes.*, proffys.*
          FROM proffys
          JOIN classes ON (classes.proffy_id = proffys.id)
          WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //o horario que a pessoa trabalha, por exemplo, é das 8h - 18h
    //o horário do time_from (8h) precisa ser menor ou igual ao horário solicitadp
    //o time_to precisa ser acima de 

    const selectClassesSchedules = await db.all(`
         SELECT class_schedule.*
         FROM class_schedule
         WHERE class_schedule.class_id = 1
         AND class_schedule.weekday = " 0 "
         AND class_schedule.time_from <=  "520"
         AND class_schedule.time_to > "520"
    `)
  // console.log(selectClassesSchedules)
})