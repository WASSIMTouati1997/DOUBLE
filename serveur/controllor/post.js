const{connnect}=require("../config/config")
module.exports={
  getDose:((req,res)=>{
const getget = `SELECT * FROM Dose`
connnect.query(getget,(error,result)=>{
    error? res.status(500).send(error)
    :res.status(200).send(result)
  })
  }
  ),
 postDose:((req,res)=>{
    const postpost =`INSERT INTO Dose(name,mail,number,country)VALUES  ("${req.body.name}","${req.body.mail}","${req.body.number}","${req.body.country}")`
    connnect.query=(postpost, (error,result)=>{
        error? res.status(500).send(error)
        :res.status(200).send("mrigel")
    })
 }) ,
 updateDose:((req,res)=>{
    const updateupdate=`UPDATE Dose SET name="${req.body.name}",mail="${req.body.mail}" ,number="${req.body.number}",country="${req.body.country}", WHERE id=${req.params.id} `
    connnect.query(updateupdate,(error,result)=>{
        error? res.status(500).send(error)
        :res.status(200).send("update success")
})
}),
deleteDose:((req,res)=>{
    const deletedelete=`DELETE FROM Dose WHERE id=${req.params.id}`
    connnect.query(deletedelete,(error,result)=>{
        error? res.status(500).send(error)
        :res.status(200).send("delete success")
})
})
}