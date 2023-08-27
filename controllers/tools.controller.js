module.exports.getTools = async (req, res,next) => {
    const tool = {
        name:'sahadat arefin',
        roll:20,
        age:22
    }
    res.json(tool)
  }
  

  module.exports.saveATool = (req,res,next)=>{
 res.send('hello')

  } 